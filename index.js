let inpEl = document.getElementById('quoteInput');
let timerEl = document.getElementById('timer');
let quoteEl = document.getElementById('quoteDisplay');
let submitEl = document.getElementById('submitBtn');
let resetEl = document.getElementById('resetBtn');
let testEl = document.getElementById('speedTypingTest');
let resultEl = document.getElementById('result');

let quote = [];
let inetervalId;

function clearIntr() {
    clearInterval(inetervalId);
}

function getQuote() {
    inpEl.value = '';
    resultEl.textContent = '';
    clearIntr();
    let counter = 1;
    let counterTimer = function () {
        timerEl.textContent = counter;
        counter = counter + 1;
    };
    let spnr = document.getElementById('spinner');
    spnr.classList.remove('d-none');
    testEl.classList.add('d-none');

    fetch('https://apis.ccbp.in/random-quote').then(function (response) {
        return response.json();
    })
        .then((json) => {
            quote.pop();
            quote[0] = json.content;
            console.log(quote);
            inetervalId = setInterval(counterTimer, 1000);
            quoteEl.textContent = json.content;
            spnr.classList.add('d-none');
            testEl.classList.remove('d-none');
        });
}
submitBtn.addEventListener('click', function (a) {

    if (inpEl.value === quote[0]) {
        clearIntr();
        let a = timerEl.textContent;
        resultEl.textContent = 'You typed in ' + a + ' Seconds';
    } else {
        resultEl.textContent = ' You typed incorrect sentance';
    }
});
resetBtn.addEventListener('click', getQuote);

getQuote();
console.log(quote);