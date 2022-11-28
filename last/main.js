const main = document.querySelector('main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('.msg');

while(true) {
    let n = prompt("Enter your name Aira");

    if(n == null) {
        main.style.display = "none"
        cancel.style.display = "flex"
        msg.innerHTML = "Thank You!!!"
    }

   if (n.length > 0) {
        alert("Labas ka");
        alert('libre mo ko ice cream');
        alert('wala na bawian yan ah! AHHAHAHAHAHAHA wala ka choice');
        alert('thank you Epangot ' + n);
        main.style.display = 'block';
        break;
    }

}