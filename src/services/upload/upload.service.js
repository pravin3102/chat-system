
// Initializes the `upload` service on path `/upload`. (Can be re-generated.)
const createService = require('./upload.customService');
const createModel = require('../../models/upload.model');
const hooks = require('./upload.hooks');
// !code: imports // !end
// !code: init // !end

let moduleExports = function (app) {
  let Model = createModel(app);
  let paginate = app.get('paginate');
  // !code: func_init // !end

  let options = {
    Model,
    paginate,
    // !code: options_more // !end
  };
  // !code: options_change // !end

  // Initialize our service with any options it requires
  // !<DEFAULT> code: extend
  app.use('/upload', createService(options));
  // !end

  // Get our initialized service so that we can register hooks
  const service = app.service('upload');

  service.hooks(hooks);
  // !code: func_return // !end
};

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
