const path = require('path');
exports.pathMain = path.dirname(require.main.filename);
exports.pathRoutes = path.join(this.pathMain, 'src', 'Routes');
exports.pathControllers = path.join(this.pathMain, 'src', 'Controllers');
exports.pathModels = path.join(this.pathMain, 'src', 'Models');
exports.pathTemplates = path.join(this.pathMain, 'src', 'Templates');
exports.pathViews = path.join(this.pathMain, 'src', 'Views');
exports.pathData = path.join(this.pathMain, 'Database');