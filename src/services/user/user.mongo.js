
/* eslint quotes: 0 */
// Defines the MongoDB $jsonSchema for service `user`. (Can be re-generated.)
const merge = require('lodash.merge');
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    bsonType: "object",
    additionalProperties: false,
    properties: {
      _id: {
        bsonType: "objectId"
      },
      name: {
        example: "pravin",
        minLength: 3,
        maxLength: 15,
        bsonType: "string"
      },
      phone: {
        pattern: "^[0-9]{10}$",
        minLength: 10,
        bsonType: "number"
      }
    }
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
