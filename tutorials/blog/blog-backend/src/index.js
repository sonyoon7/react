//이 파일에서만 no-global-assign ESLint 옵션을 비활성 합니다.

require = require("esm")(module);
module.exports = require("./main.js");
