export default class Validator {
  constructor(username) {
    this.name = username;
  }

  validateUsername() {
    const orderOne = /^[\w-]*$/i.test(this.name);
    const orderTwo = /^[^-_\d]/.test(this.name);
    const orderTree = /[^-_\d]$/.test(this.name);
    const orderFour = !/\d{4,}/.test(this.name);

    return (orderOne && orderTwo && orderTree && orderFour);
  }
}
