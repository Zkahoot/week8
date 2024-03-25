const userInputBox = document.querySelector('#userInput');
const numberOfPrints = document.querySelector('#numberOfPrints');
const btnPrint = document.querySelector('button');
const resultList = document.querySelector('#resultPrints');

btnPrint.addEventListener('click', () => {
    resultList.innerHTML = ''
    const userInputText = userInputBox.value;
    const n = numberOfPrints.value;

    for(let i = 0; i<n; i++ ){
        let newLi = document.createElement('li');
        newLi.innerText = userInputText;
        resultList.appendChild(newLi);
    }
});