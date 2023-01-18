const employee = require("./Employee");

class engineer extends employee {
  info(name, card, phone, email, username) {
    all(name, card, phone, email);
    this.username = username;
  }

  pullPosition() {
    return "Engineer";
  }

  pullUser() {
    return this.username;
  }
    
}

module.exports = engineer;
