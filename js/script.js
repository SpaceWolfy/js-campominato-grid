//Creo una funzione che andrò a richiamare nelle funzioni sottostanti,
//questa funzione mi permette di definire le caratteristiche dei quadrati prima di andarli a creare
function defineSquare(elementBox, num, boxcontainer){
    elementBox.innerHTML = num;
    boxcontainer.append(elementBox);
    colorSquare(elementBox);
};

//questa funzione mi permette di colorare il quadrato premuto (this) di azzurro (codice css)
function colorSquare(element) {
    element.addEventListener('click', function() {
        console.log(this); 
        this.classList.add('azure'); 
    });
}

//le tre funzioni sottostanti racchiudono quelle soprastanti,
//queste tre funzioni si occupano di definire come i quadrati verranno stampati
function createNewSquareNoob(container, number) {
    const square = document.createElement('div');
    square.className = 'pezzo-di-campo';
    defineSquare(square, number, container);
};

function createNewSquarePro(container, number) {
    const square = document.createElement('div');
    square.className = 'pezzo-di-campo-pro';
    defineSquare(square, number, container);
};

function createNewSquareHacker(container, number) {
    const square = document.createElement('div');
    square.className = 'pezzo-di-campo-hacker';
    defineSquare(square, number, container);
};
/* -------------------------------------------- */

let outputHtml = document.querySelector('.campominato-container');

let btnNoob = document.querySelector('.diff-lvl-1');
let btnPro = document.querySelector('.diff-lvl-2');
let btnHacker = document.querySelector('.diff-lvl-3');

//gli addEventListener si occupano di stampare i quadrati definiti nelle tre funzioni superiori.
//ogni addEventListener è collegato ad un pulsante del DOM.
/* 
al click di ogni pulsante verrà aggiunta la classe display-flex accanto 
a campionato-container, rendendolo visibile.
 */
btnNoob.addEventListener('click', function(){
    outputHtml.classList.add('display-flex');
    outputHtml.innerHTML = '' //serve a resettare la griglia quando si passa da un pulsante all'altro
    for(let i = 0; i < 100; i++) { 
        //permette di stampare i quadrati e dei numeri rappresentativi della casella al loro interno
        createNewSquareNoob(outputHtml, i+1);
    };
});

btnPro.addEventListener('click', function(){
    outputHtml.innerHTML = ''
    outputHtml.classList.add('display-flex');
    for(let i = 0; i < 81; i++) {
        createNewSquarePro(outputHtml, i+1);
    };
});

btnHacker.addEventListener('click', function(){
    outputHtml.innerHTML = ''
    outputHtml.classList.add('display-flex');
    for(let i = 0; i < 49; i++) {
        createNewSquareHacker(outputHtml, i+1);
    };
});