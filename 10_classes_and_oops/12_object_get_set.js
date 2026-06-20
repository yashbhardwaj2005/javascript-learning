const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)  // factory function 
console.log(tea.email);


// file no. 11 and 12 both are diff ways of writing getter and setter. 
// In file 11 we are using Object.defineProperty and in file 12 we are using get and set keywords.
// best is file no. 10 ie class based getter and setter.