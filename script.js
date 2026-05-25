let lists = document.getElementById("infi-list");

let count = 1;

// Function to add items
function addItems(num) {
    for (let i = 0; i < num; i++) {
        let item = document.createElement("li");
        item.innerText = "Item " + count;
        lists.appendChild(item);
        count++;
    }
}

// Add initial 10 items
addItems(10);

// Detect scrolling to bottom
lists.addEventListener("scroll", function () {
    if (
        lists.scrollTop + lists.clientHeight >=
        lists.scrollHeight
    ) {
        addItems(2);
    }
});