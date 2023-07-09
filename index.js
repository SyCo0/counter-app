let count = 0;
const countSpan = document.getElementById("count");
const savedCountsList = document.getElementById("saved-counts");
let savedCounts = [];

function increment() {
  count++;
  countSpan.textContent = count;
}

function decrement() {
  count--;
  countSpan.textContent = count;
}

function save() {
  savedCounts.push(count);
  const listItem = document.createElement("li");
  listItem.textContent = count;
  savedCountsList.appendChild(listItem);
}

function reset() {
  count = 0;
  countSpan.textContent = count;
  savedCounts = [];
  savedCountsList.innerHTML = "";
}
