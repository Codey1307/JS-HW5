function createNewUser() {
  newUser = {
    firstName: prompt("Введіть своє ім'я"),
    lastName: prompt("Введіть своє прізвище"),
    getLogin: function getLogin() {
      return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
    },
  };
  return newUser;
}

console.log(createNewUser().getLogin());
