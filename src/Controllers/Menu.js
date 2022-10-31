const path = require("path");
const PathFolder = require("../Utils/Path");

exports.getLobby = (req, res, next) => {
  res.render(path.join(PathFolder.pathViews, "Menu.pug"));
};
