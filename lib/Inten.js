const employee = require("./Employee");

// So this will pretty much follow what I did for the engineers, I just have one 
// piece of info that will be different.

class intern extends employee {
  info(name, card, email, school) {
    all(name, card, email);
    this.school = school;
  }

  pullPosition() {
    return "Intern";
  }

  pullSchool() {
    return this.school;
  }
    
}

module.exports = intern;
