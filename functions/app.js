// typing effect

const content = [' WEB DEVELOPER', ' SOFTWARE ENGINEER'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function typing(){

    if(count === content.length){
        count = 0;
    }
    currentText = content[count];
    letter = currentText.slice(0, ++index);
    document.querySelector('.typing').textContent = letter;

    if(currentText.length === letter.length){
        count++;
        index = 0;
    }

    setTimeout(typing, 200);

}());
