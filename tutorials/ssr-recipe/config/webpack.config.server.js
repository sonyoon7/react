const paths = require('./paths')

//css 혹은 이미지 파일에 대한 경로를 필요로 하거나 className 참조해야 할 때 
// 해당 파일을 로더ㅗ에서 별도로 설정하여 처리하지만 따로 결과물에 포함되지 않도록 구현
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const cssRegex =/\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass).$/;
const sassModuleRegex = /\.module\.(scss|sass).$/;


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
    module:{
        rules:[
            {
                oneOf:[
                    {
                        test:/\.(js|mjs|jsx|ts|tsx)$/,
                        include:paths.appSrc,
                        loader:require.resolve('babel-loader'),
                        option: {
                            customize: require.resolve(
                                'babel-preset-react-app/webpack-overrides'
                            ),
                            plugins:[
                                [
                                    require.resolve('bable-plugin-named-asset-import'),
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
                            cacheComponent: false,
                            compact: false
                        }
                    },
    
                    //CSS 위한처리
                    {
    
                    },
                    //CSS MODULE을 위한 처리
                    {
    
                    },
                    //SASS를 위한 처리
                    {
    
                    },
                    //SASS +CSS Module을 위한 처리
                    {
    
                    },
                    //url-loader를 위한 설정 
                    {
    
                    },
                    //위에서 설정된 확장자를 제외한 파일들은
                    //file-loader를 사용
                    {
    
                    }
                ]
            }
        ]
    }
};




