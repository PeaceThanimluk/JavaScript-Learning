const thisLinkDom = document.querySelector("#thisLink");
const thisButton = document.querySelector("#thisButton");

console.log(thisLinkDom.getAttribute(`href`));
console.log(thisLinkDom.getAttribute(`target`));

thisLinkDom.setAttribute('href', "https://yahoo.com");

const submitData = () => {
    thisButton.setAttribute('disabled', 'true');
}