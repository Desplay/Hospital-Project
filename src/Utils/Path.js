const path = require("path");
const pathMain = path.dirname(require.main.filename);

exports.pathRoutes = path.join(pathMain, "src", "Routes");
exports.pathControllers = path.join(pathMain, "src", "Controllers");
exports.pathModels = path.join(pathMain, "src", "Models");
exports.pathViews = path.join(pathMain, "src", "Views");
exports.pathData = path.join(pathMain, "Database");
