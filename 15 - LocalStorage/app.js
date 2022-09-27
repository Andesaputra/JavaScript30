const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || []; // this will either return the items as it was stored in the localstorage or just fallback showing an empty array

function addItem(e) {
  e.preventDefault(); // will stop the page from reloading. By defaulh the page will reload and send the data to the external source general to server side
  const text = this.querySelector("[name=item").value; // this will narrow down the search scope to the queryselector rather than global scope
  const item = {
    // object that is needed
    text: text,
    done: false,
  };
  items.push(item); // this will push item to the items arrray
  populateList(items, itemsList);
  // to store it to the local storage, we need to set  these items array to local storage
  localStorage.setItem("items", JSON.stringify(items)); // this will show key & value in the local storage
  // JSON.stringify is needed so the local storage can handle the data and doenst just show it as 'object'
  this.reset(); // this will reset the input box
}

// this function below is creating entire list everytime we add an item
function populateList(plates = [], platesList) {
  console.log(plates);
  console.log(platesList);
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" 
            ${plate.done ? "checked" : ""} />
            <label for='item${i}'>${plate.text}</label>
        </li>`;
    })
    .join("");
}

// this function below will keep the done checked even though we refresh the page
function toggleDone(e) {
  if (!e.target.matches("input")) return; // skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

populateList(items, itemsList);
