const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
})

function submitData() {
    const firstName = document.querySelector('input[name=firstName]');
    const lastName = document.querySelector('input[name=lastName]');
    const age = document.querySelector('input[name=age]');

    const gender = document.querySelector('input[name=gender]:checked');
    const interestDom = document.querySelectorAll('input[name=interest]:checked');

    let interest = '';

    const button = document.querySelector("button");

    for (let i = 0; i < interestDom.length; i++) {
        interest += interestDom[i].value;
        if (i != interestDom.length - 1) {
            interest += ','
        }
    }

    let userData = {
        Firstname: firstName.value,
        Lastname: lastName.value,
        Age: age.value,
        Gender: gender.value,
        Interest: interest,
    }


    console.log("submit data", userData);
}