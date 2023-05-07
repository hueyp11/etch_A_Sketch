function createDiv () {
    var div = document.createElement('div');
    div.className = 'box';
    div.style.width = "20px";
    div.style.height = "20px";
    return div;
};

function appendChildren (parent, children) {
    children.forEach(function (child) {
        parent.appendChild(child);
    });
};

var mainBox = document.getElementById('main');
var boxes = [];

for (let i=0; i < 256; i++) {
    boxes.push(createDiv());
}

appendChildren(mainBox, boxes);