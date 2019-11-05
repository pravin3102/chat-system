
/* eslint quotes: 0 */
// Defines Mongoose model for service `group`. (Can be re-generated.)
const merge = require('lodash.merge');
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    name: {
      type: String,
      match: "^[a-zA-Z ]+$",
      minLength: 3,
      maxLength: 15
    },
    members: [
      String
    ],
    userId: String
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
