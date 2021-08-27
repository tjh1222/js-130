let Account = (function() {

  let email;
  let password;
  let firstName;
  let lastName;
  function anonymize() {
    let chars = 'abcdefghijklmnopqrstuvwxyz123456789'.split("");
    let str = "";
    for (let idx = 0; idx < 16; idx += 1) {
      let randIndex = Math.floor(Math.random() * chars.length);
      str += chars[randIndex];
    }

    return str;
  }

  return {
    init(emailAdd, pass, first, last) {
      email = emailAdd;
      password = pass;
      firstName = first;
      lastName = last;
      this.displayName = anonymize();
      return this;
    },

    firstName(pass) {
      if (this._validatePassword(pass)) {
        return firstName;
      }
      
      return "Invalid Passoword";
      
    },
  
    email(pass) {
      if (this._validatePassword(pass)) {
        return email;
      }
  
      return "Invalid Password";
  
    },
  
    _validatePassword(pass) {
      return pass === password;
    },
  
    resetPassword(pass, newPassword) {
      if (this._validatePassword(pass)) {
        password = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    reanonymize(pass) {
      if (this._validatePassword(pass)) {
        displayName = anonymize();
        return true;
      } else {
        return "Invalid Password";
      }
    }
  }
  
})();
 
let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(bazQux.firstName('123456'));              // logs 'Invalid Password'
console.log(fooBar.email('123456'));                  // logs 'Invalid Password'
