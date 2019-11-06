// Create the service.
class Service {
  constructor (options) {
    this.Model = options.Model;
  }

  create (data, params) {
    const model = this.Model;
    const reader = require('xlsx');
    const workBook = reader.readFile('/home/ubuntu/Desktop/chat-system/users.xlsx');
    const userList = workBook.SheetNames;
    const file = (reader.utils.sheet_to_json(workBook.Sheets[userList[0]]));
    return model.create(file)
  }
}  

module.exports = function init (options) {
    return new Service(options);
  };
  
  module.exports.Service = Service;
