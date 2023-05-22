var mainBox = document.getElementById('main');
var boxes = [];

function createDiv () {
    var div = document.createElement('div');
    div.className = 'box';
    div.style.width = "20px";
    div.style.height = "20px";
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'black'; 
    });
    return div;
};

for (let i=0; i < 256; i++) {
    boxes.push(createDiv());
}

function appendChildren (parent, children) {
    children.forEach(function (child) {
        parent.appendChild(child);
    });
};

appendChildren(mainBox, boxes);

