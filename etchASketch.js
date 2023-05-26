var mainBox = document.getElementById('main');
var boxes = [];
var resetUserInput = document.createElement('button');
resetUserInput.innerText = 'RESET';
document.body.appendChild(resetUserInput);
resetUserInput.addEventListener('click', () => {
    resetUserInput = prompt('Enter number of squares per side for the new grid (max 100 per side): ')
    resetUserInput = resetUserInput ** 2;
    if (resetUserInput > 10000) {
        alert('Please enter a number less than 100!');
    } else {
        clearMainBox();
        pushBoxes();
        appendChildren(mainBox, boxes);
    };
});

function createDiv () {
    var div = document.createElement('div');
    div.className = 'box';
    //div.style.display = 'flex';
    //div.style.justifyContent = 'center';
    //div.style.alignItems = 'center';
    div.style.flex = '1 0 4%';
    div.style.width = `${400/100}px`;
    //div.style.boxSizing = 'border-box';
    // if (60 < resetUserInput <= 100) {
    //     div.style.flex = '1 0 1%';
    //     div.style.width = '1vh';
    // } else if (0 < resetUserInput <= 60) {
    //     div.style.flex = '1 0 3%';
    // };
    //div.style.height = `${400/25}px`;
    //div.style.border = 'thin solid black';
    div.addEventListener('mouseout', () => {
        div.style.backgroundColor = 'black'; 
    });
    return div;
};

function pushBoxes () {
    for (let i=0; i < resetUserInput; i++) {
        boxes.push(createDiv());
    };
};

function pushBoxesDefault () {
    for (let i=0; i < 625; i++) {
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
pushBoxesDefault();
appendChildren(mainBox, boxes);
