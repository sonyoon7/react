import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import path from 'path';
import fs from 'fs';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './modules'
// import createSagaMiddleware from 'redux-saga';
// import rootReducer, { rootSaga } from './modules';
import PreloadContext from './lib/PreloaderContext';
// import { END } from 'redux-saga';
// import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';

// const html = ReactDOMServer.renderToString(
//   <div>Hello Server Side Rendering!</div>
// );

// console.log(html)

// asset-manifest.json 에서 파일 경로들을 조회합니다.
const manifest =JSON.parse(
  fs.readFileSync(path.resolve('./build/asset-manifest.json'),'utf-8')
  );
// console.log(manifest)

const chunks = Object.keys(manifest.files)
                .filter(key=> /chunk\.js$/.exec(key))//chunk.js 로 끝나는 키 찾기
                .map(key=> `<script src="${manifest.files[key]}"></script>`)//스크립트 태그로 변환하고 
                .join(''); //합침

// 스크립트로 스토어 초기 상태 주입하기 (stateScript)
function createPage(root, stateScript) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />
    <title>React App</title>
    <link href="${manifest.files['main.css']}" rel="stylesheet"/>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
      ${root}
    </div>
    ${stateScript}
    <script src="${manifest.files['runtime~main.js']}"></script>
    ${chunks}
    <script src="${manifest.files['main.js']}"></script>
  </body>
  </html>
    `;
}
const app = express();

// // 서버사이드 렌더링을 처리 할 핸들러 함수입니다.
const serverRender = async (req, res, next) => {
//   // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버사이드 렌더링을 해줍니다.

const context = {};
//   const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(rootReducer, applyMiddleware(thunk))
);

//   const sagaPromise = sagaMiddleware.run(rootSaga).toPromise();

//프로미스들을 수집하고 기다렸다가 다시 렌더 하기 
  const preloadContext = {
    done: false,
    promises: []
  };

//   // 필요한 파일 추출하기 위한 ChunkExtractor
//   const extractor = new ChunkExtractor({ statsFile });

  const jsx = (
    // 서버 사이드 렌더링 용도로 사용되는 라우터 : props로 넣어주는 location값에 따라 라우팅 됨  
    // 스토어를 한 번만 만드는것이 아니라 요청이 들어올 때 마다 store를 만듬
    <PreloadContext.Provider value={preloadContext}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </PreloadContext.Provider>
    //<ChunkExtractorManager extractor={extractor}>
    //   <PreloadContext.Provider value={preloadContext}>
    //     <Provider store={store}>
    //       <StaticRouter location={req.url} context={context}>
    //         <App />
    //       </StaticRouter>
    //     </Provider>
    //   </PreloadContext.Provider>
    // </ChunkExtractorManager>
  );

  ReactDOMServer.renderToStaticMarkup(jsx); // renderToStaticMarkup 으로 한번 렌더링합니다.
  // store.dispatch(END); // redux-saga 의 END 액션을 발생시키면 액션을 모니터링하는 saga 들이 모두 종료됩니다.
  try {
    // await sagaPromise; // 기존에 진행중이던 saga 들이 모두 끝날때까지 기다립니다.
    await Promise.all(preloadContext.promises); // 모든 프로미스를 기다립니다.
  } catch (e) {
    return res.status(500);
  }
  preloadContext.done = true;


  const root = ReactDOMServer.renderToString(jsx); // 렌더링을 합니다.
//   // JSON 을 문자열로 변환하고 악성스크립트가 실행되는것을 방지하기 위해서 < 를 치환처리
//   // https://redux.js.org/recipes/server-rendering#security-considerations
console.log(JSON.stringify(store.getState()))
  const stateString = JSON.stringify(store.getState()).replace(/</g, '\\u003c');
  console.log('---------------------------------------------------------------')

  const stateScript = `<script>__PRELOADED_STATE__ = ${stateString}</script>`; // 리덕스 초기 상태를 스크립트로 주입합니다.
console.log(stateScript)
//   // 미리 불러와야 하는 스타일 / 스크립트를 추출하고
//   const tags = {
//     scripts: stateScript + extractor.getScriptTags(), // 스크립트 앞부분에 리덕스 상태 넣기
//     links: extractor.getLinkTags(),
//     styles: extractor.getStyleTags()
  // };

  // res.send(createPage(root, tags)); // 결과물을 응답합니다.
  res.send(createPage(root, stateScript)); // 결과물을 응답합니다.
};

const serve = express.static(path.resolve('./build'), {
  index: false // "/" 경로에서 index.html 을 보여주지 않도록 설정
});

app.use(serve); // 순서가 중요합니다. serverRender 전에 위치해야 합니다.
app.use(serverRender);

// // 5000 포트로 서버를 가동합니다.
app.listen(5000, () => {
  console.log('Running on http://localhost:5000');
});