function createNewSquareNoob(container) {
    const square = document.createElement('div');
    square.className = 'pezzo-di-campo';
    container.append(square);

    square.addEventListener('click', function() {
        console.log(this); 
        this.classList.add('azure'); 
    });
};

function createNewSquarePro(container) {
    const square = document.createElement('div');
    square.className = 'pezzo-di-campo-pro';
    container.append(square);

    square.addEventListener('click', function() {
        console.log(this); 
        this.classList.add('azure'); 
    });
};

function createNewSquareHacker(container) {
    const square = document.createElement('div');
    square.className = 'pezzo-di-campo-hacker';
    container.append(square);

    square.addEventListener('click', function() {
        console.log(this); 
        this.classList.add('azure'); 
    });
};

let outputHtml = document.querySelector('.campominato-container');

let btnNoob = document.querySelector('.diff-lvl-1');
let btnPro = document.querySelector('.diff-lvl-2');
let btnHacker = document.querySelector('.diff-lvl-3');


btnNoob.addEventListener('click', function(){
    outputHtml.classList.toggle('display-flex');
    for(let i = 0; i < 100; i++) {
        createNewSquareNoob(outputHtml);
    };
});

btnPro.addEventListener('click', function(){
    outputHtml.classList.toggle('display-flex');
    for(let i = 0; i < 81; i++) {
        createNewSquarePro(outputHtml);
    };
});

btnHacker.addEventListener('click', function(){
    outputHtml.classList.toggle('display-flex');
    for(let i = 0; i < 49; i++) {
        createNewSquareHacker(outputHtml);
    };
});
