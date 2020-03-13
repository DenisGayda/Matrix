const path = require("path");

module.exports = {
  "*.ts": absolutePaths => {
    const cwd = process.cwd();
    const relativePaths = absolutePaths.map(file => path.relative(cwd, file));
    return [
      `tslint -p tsconfig.json ${relativePaths.join(" ")}`
    ];
  },
  "*.less": "stylelint --fix"
};
