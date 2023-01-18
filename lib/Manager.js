const employee = require("./Employee");

class manager extends employee {

  info(name, card, phone, email, office) {
    super(name, card, phone, email);
    this.office = office;
  }

  pullPosition() {
    return "Manager";
  }

  pullOffice() {
    return this.office;
  }

}

module.exports = manager;
