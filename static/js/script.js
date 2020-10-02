// Minigame 1

function numberOfDays(){
    let birthYear = prompt("What Year Where You Born?");
    let ageInDays = (2020 - birthYear) * 365;
    let h1 = document.createElement('h1');
    let answer = document.createTextNode('You Are ' + ageInDays + ' Days Old.');
    h1.setAttribute('id', 'numberOfDays');
    h1.appendChild(answer);
    document.getElementById('flex-box-result').appendChild(h1);    
}

function reset() {
    document.getElementById('numberOfDays').remove();
}