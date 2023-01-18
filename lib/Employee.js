// I want to be able to show the name of the employee, their id #, phone #, and email

class employees {
    
    info(name, card, phone, email) {
      this.name = name;
      this.card = card;
      this.phone = phone;
      this.email = email}
  
    pullName() {
      return this.name;
    }
  
    pullCard() {
      return this.card;
    }
  
    pullPhone() {
      return this.phone;
    }

    pullEmail(){
        return this.email;
    }
  
    pullPosition() {
      return "Employee";
    }
  
  }
  
  module.exports = employees;
  