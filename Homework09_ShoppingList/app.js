/// ARATA BINE SI RESPONSIVE

// variabile
let newInput = document.querySelector("#input1");
// console.log(input1);
let button = document.querySelector('button[type="button"]');
// console.log(button);

////event la enter

newInput.addEventListener("keypress",insertRowsOnEnter );
function insertRowsOnEnter(e){
  console.log(e.key);
  if (e.key == "Enter" && newInput.length > 1 ) {
    insertNewRows();
  }
}

//// VARIANTA 1- event la click pe butonul "ADD" , in aceasta varianta merge si sortarea
button.addEventListener('click' , insertNewRows);

function insertNewRows() {
  if (newInput.value !== "") {
    let tableBody = document.getElementById('myTable');
    let input = newInput.value;
    tableBody.innerHTML += `
        <tr class="row">
            <td>${input}</td>
            <td><button class="action">Mark as buyed</button></td>
        </tr>
    `;
    newInput.value = '';
  }
}

//// event la mark as buyed pentru varianta 1
const list = document.getElementById("myTable");
// console.log(list);
list.addEventListener("click", markAsBuyed);

function markAsBuyed(e) {
  // console.log(e.target);
  if(e.target.classList.contains("action") ) {
  console.log(e.target.previousSibling);
  let listInput = e.target.parentNode.previousElementSibling;
  listInput.classList.toggle('lineThrough');
  listInput.style.color = "orangered";
  listInput.style.textDecoration = "line-through";
  }
}

// // /// sort ascending la click pe buton sortAsc
const sortAscBtn=document.getElementById("sortAsc");
// console.log(sortAscBtn);
sortAscBtn.addEventListener("click", sortAscending );

function sortAscending() {
  let rows = document.querySelectorAll('.row');
  console.log(rows);
  let arrayRows = Array.from(rows);
  console.log(arrayRows); 

  arrayRows.forEach((el) => console.log(el.cells[0].innerHTML));
  function tableElementsSort(tr1,tr2) {
    if (tr1.cells[0].innerHTML < tr2.cells[0].innerHTML) {
      return -1;
    } 
    else if (tr1.cells[0].innerHTML > tr2.cells[0].innerHTML) {
      return 1;
    } 
    else  {
      return 0;
    }
  };
  console.log(list);
  list.innerHTML = "";
  
  let sortedRows = arrayRows.sort(tableElementsSort);
  sortedRows.forEach((el) => {
  list.innerHTML += `
        <tr class="row">${el.innerHTML}</tr>
        `;
    });
}


///VARIANTA 2--- aici sunt adaugate noile randuri in tabel cu DOM MANIPULATION, 
/// merge perfect adaugarea noilor randuri in tabel, si line-through la butonul mark as buyed
/// in varianta asta nu imi iese sortarea 
////daca vrei sa verifici, te rog sa comentezi tu doar functiile de mai sus( NU si variabilele declarate in exteriorul functiilor) si sa le decomentezi pe acestea de mai jos

///EVENT LA CLICK ADD TO LIST

// function insertNewRows() {
//   if (newInput.value !== ""){
//     let table = document.getElementById("myTable");
//     // console.log(table);
//     let tr = document.createElement('tr');
//     let newItemTr = table.appendChild(tr);
//     newItemTr.classList.add("row");
//     let td = document.createElement('td');
//     let newItemTd = table.appendChild(td);
//     newItemTd.textContent = newInput.value;
//     newItemTd.style ="font-style :italic"
//     // console.log(td.innerHTML);
//     let markItem =document.createElement('button');
//     let newItemButton = table.appendChild(markItem);
//     newItemButton.classList.add("action");
//     newItemButton.textContent = "Mark as buyed";
//     newItemButton.style.background ="snow";
//     newItemButton.style = "border-radius : 5px";
//     newItemButton.style.color = "gray";
//     for (let i = 0 ; i > table.length ; i++  ) {
//              newInput.value = ""; 
//     }
// } 
// }

// ///// aceasta functie merge cu insertRows varianta 2- DOM Manipulation
// function markAsBuyed(e) {
//   // console.log(e.target);
//   if(e.target.classList.contains("action") ) {
//    console.log(e.target.previousSibling);
//    let list =e.target.previousSibling ;
//    list.style.textDecoration = "line-through";
//    list.style.color = "orangered";
//   }
// }

