const paths = require('./paths')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const getClientEnvironment = require('./env')

//css 혹은 이미지 파일에 대한 경로를 필요로 하거나 className 참조해야 할 때 
// 해당 파일을 로더ㅗ에서 별도로 설정하여 처리하지만 따로 결과물에 포함되지 않도록 구현
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const cssRegex =/\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const publicUrl = paths.servedPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);


module.exports ={
    mode: 'production', //프로덕션 모드로 설정하여 최적화 옵션 활성화
    entry: paths.ssrIndexJs, //엔트리 경로
    target: 'node', //node 환경에서 실행될 것이라는 점 명시
    output:{
        path: paths.ssrBuild, //빌드 경로
        filename: 'server.js', //파일이름
        chunkFilename: 'js/[name].chunk.js', //청크파일 이름
        publicPath: paths.servedPath //정적 파일이 제공될 경로
    },
// test : loader를 적용할 조건
// exclude: loader 적용을 제외할 조건
// include: 가져온 파일이 로더에 의해 변환될 경로 또는 파일의 배열
// loader: !문자열의 분리형 로더
// loaders : 문자열 로더의 배열
    module:{
        rules:[
            {
                oneOf:[
                    {
                        test:/\.(js|mjs|jsx|ts|tsx)$/,
                        include:paths.appSrc,
                        loader:require.resolve('babel-loader'),
                        options: {
                            customize: require.resolve(
                                'babel-preset-react-app/webpack-overrides'
                            ),
                            plugins:[
                                [
                                    require.resolve('babel-plugin-named-asset-import'),
                                    {
                                        loaderMap:{
                                            svg:{
                                                ReactComponent: '@svgr/webpack?-svgo![path]'
                                            }
                                        }
                                    }
                                ]
                            ],
    
                            cacheDirectory: true,
                            cacheCompression: false,
                            compact: false
                        }
                    },
    
                    //CSS 위한처리
                    {
                        test: cssRegex,
                        exclude: cssModuleRegex,
                        loader: require.resolve('css-loader'),
                        options:{
                            // 서버 사이드에서 사용할 때는 options로 exportOnlyLocals를 붙여주면 됩니다
                            //서버는 css를 지원하지 않기 때문에 다르게 사용해야 합니다. 여기서 에러가 많이 나는데 절대로 style-loader를 넣어서는 안 됩니다
                            onlyLocals: true,
                        }
    
                    },
                    //CSS MODULE을 위한 처리
                    {
                        test: cssModuleRegex,
                        loader:require.resolve('css-loader'),
                        options:{
                            modules: true,
                            onlyLocals: true,
                            getLocalIdent: getCSSModuleLocalIdent
                            
                        }
                    },
                    //SASS를 위한 처리
                    {
                        test: sassRegex,
                        exclude: sassModuleRegex,
                        use: [// 여러 개의 로더를 동시에 사용할 때는 use를 사용합니다.
                            {
                                loader:require.resolve('css-loader'),
                                options:{
                                    onlyLocals: true,
                                }
                            },
                            require.resolve('sass-loader'),
                        ]
                        
                    },
                    //SASS +CSS Module을 위한 처리
                    {
                        test: sassRegex,
                        exclude: sassModuleRegex,
                        use:[
                            {
                                loader:require.resolve('css-loader'),
                                options:{
                                    modules: true,
                                    onlyLocals: true,
                                    getLocalIdent: getCSSModuleLocalIdent
                                }
                            },
                            require.resolve('sass-loader'),
                        ]
                        
                    },
                    //url-loader를 위한 설정 
                    //url-loader가 좀 특이합니다. 설정한 사이즈보다 작은 이미지나 폰트 파일을 인라인화 합니다. base64로 인코딩하면 됩니다.
                    //작은 파일은 따로 http 요청을 하느니 그냥 문자열로 인코딩해서 불러오겠다는 고육지책입니다. 
                    //원래라면 이미지 주소를 써야할 곳에 data:image/타입;base64, 이렇게 한 후 인코딩한 문자열들을 넣어주면 브라우저가 이미지로 인식합니다.
                    {
                        test: [/\.bms$/,/\.gif$/,/\.jpe?g$/,/\.png$/],
                        loader:require.resolve('url-loader'),
                        options:{
                            emitFile: false, // 파일을 따로 저장하지 않는 옵션
                            limit:1000, //원래는 9.76kb가 넘어가면 파일로 저장하는데 
                                        // emitFile 값이 false일 때는 경로만 준비하고 파일은 저장하지 않습니다. 
                            name: 'static/media/[name].[hash:8],[ext]'
                            
                        }
                    },
                    //위에서 설정된 확장자를 제외한 파일들은
                    //file-loader를 사용
                    {

                        loader:require.resolve('file-loader'),
                        exclude: [/\.(js|mjs|jsx|ts|tsx)$/,/\.html$/,/\.json$/],
                        options:{
                            emitFile: false,
                            name: 'static/media/[name].[hash:8],[ext]'
                        }
                    }
                ]
            }
        ]
    },
    //resolve :웹팩이 알아서 경로나 확장자를 처리할 수 있게 도와주는 옵션입니다
    resolve:{
        // react, react-dom/server 같은 라이브러리를 import 구문으로 불러오면 node_modules에서 찾아 사용합니다. 
        //서버를 위해 번들링 할 때는 node_modules에서 불러오는 것을 제외하고 번들링을 하는 것이 좋음. 
        // 이를 위해 webpack-node-externals라는 라이브러리를 사용
        //modules에 node_modules를 넣으셔야 디렉토리의 node_modules를 인식할 수 있습니다.
        modules: ['node_modules']
    },
    externals: [nodeExternals()],
    plugins:[
        //환경변수를 주입하면 프로젝트 내에서 process.env.NODE_ENV값을 참조하여 현재 개발 환경인지 아닌지 알수 있음
        new webpack.DefinePlugin(env.stringified)//환경 변수 주입
        
    ]
};




