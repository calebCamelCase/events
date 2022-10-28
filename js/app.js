/** 
 * 
 * ES6
 * 
 * var
 * 
 * let
 * const
 * 
 * 
 * functions
 * 
 * Declarative function
 * function funcName() {
 *  do stuff
 * }
 * 
 * Arrow function
 * const funcName =(args)=> {
 *  do stuff
 * }
 * 
 * 
 * ternaries
 * 
 * if(condition) {
 *  do stuff
 * } else {
 *  do something else
 * }
 * 
 * 
 * condition ? do stuff : do something else
 */

const submitBtn = document.getElementById('submitBtn');

let data = {};

// data.foo = 'hello';

console.log(data);

const subscribeUser =()=> {
    const fName = document.getElementById('fName').value;
    const lName = document.getElementById('lName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const year = dob.slice(0, 4);
    //yyyy-mm-dd
    const month = dob.slice(5, 7);
    const date = dob.slice(8);
    // console.log(date);
    // const year = document
    //             .getElementById('dob')
    //             .value
    //             .slice(0, 4);
    const planType = document.querySelector('input[name=planType]:checked').value;
    // console.log(planType);

    data.firstName = fName;
    data.lastName = lName;
    data.email = email;
    data.month = month;
    data.year = year;
    data.date = date;
    data.planType = planType;

    console.log(data);

}

const alertUser =()=> alert('Please agree to terms and conditions')

// console.log(submitBtn)
submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();

    const terms = document.getElementById('terms');

    terms.checked ? subscribeUser() : alertUser();  
})