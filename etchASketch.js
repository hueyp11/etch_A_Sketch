var mainBox = document.getElementById('main');
mainBox.style.display = 'grid';
var boxes = [];
var resetUserInput = document.createElement('button');
resetUserInput.innerText = 'RESET';
document.body.appendChild(resetUserInput);
resetUserInput.addEventListener('click', () => {
    resetUserInput = prompt('Enter number of squares per side for the new grid (max 100 per side): ')
    if (resetUserInput > 100) {
        alert('Please enter a number less than 100!');
    } else {
        clearMainBox();
        pushBoxes(resetUserInput);
        appendChildren(mainBox, boxes);
    };
});

function createDiv () {
    var div = document.createElement('div');
    div.className = 'box';
    div.addEventListener('pointerleave', () => {
        div.style.backgroundColor = 'black'; 
    });
    return div;
};

function pushBoxes (input) {
    for (let i=0; i < resetUserInput**2; i++) {
        mainBox.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
        mainBox.style.gridTemplateRows = `repeat(${input}, 1fr)`;
        boxes.push(createDiv());
    };
};

function pushBoxesDefault (size) {
    for (let i=0; i < 256; i++) {
        mainBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        mainBox.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        boxes.push(createDiv());
    };
};

function appendChildren (parent, children) {
    children.forEach(function (child) {
        parent.appendChild(child);
    });
};

function clearMainBox () {
    for (i=0; i < boxes.length; i++) {
        boxes[i].style.display = 'none';
    };
};

createDiv();
pushBoxesDefault(16);
appendChildren(mainBox, boxes);
