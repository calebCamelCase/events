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
 * 
 * 
 * spread operator
 * 
 * arr = [...item]
 * 
 * 
 * string template literal
 * 
 * var age = 42
 * 
 * var message = 'I am ${age} years old' => I am 43 years old 
 */

const submitBtn = document.getElementById('submitBtn');
const memberCards = document.getElementById('memberCards');
let members = []

// let coders = ['james', 'john', 'caleb'];
// console.log(coders);

// coders = [...coders, 'shy'];
// console.log(coders);


// data.foo = 'hello';

// console.log(data);

const subscribeUser =()=> {
    let data = {};
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

    members = [...members, data];
    return members
    addUser(data);
}

const addUser =(obj)=> {
    // let members = []
    members = [...members, obj];
    buildCard(members);
}

console.log(members);

const buildCard =(arr)=> {
    let card;
    arr.forEach(item => {
        card = `
        <div class="col-md-3">
                    <div class="card member-card">
                        <img src="https://via.placeholder.com/50x50" alt="placeholder" class="img-fluid placeholder-image" />
                        <div class="card-body">
                            <p id="lastName">${item.lastName}</p>
                            <p id="firstName">${item.firstName}</p>
                            <p id="plan">Plan: ${item.planType}</p>
                        </div>
                    </div>
                </div>
        `
    });
        memberCards.innerHTML+= card
}

const alertUser =()=> alert('Please agree to terms and conditions')

// console.log(submitBtn)
submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    
    const terms = document.getElementById('terms');
    
    terms.checked ? subscribeUser() : alertUser();  
    
    console.log(members);
})