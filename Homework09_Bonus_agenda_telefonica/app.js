// variabile
let newNameContact = document.querySelector("#input1");
let newTelContact = document.querySelector("#input2");
// console.log(input2);
let button = document.querySelector('button[type="button"]');
// console.log(button);

//// event la click
button.addEventListener('click' , insertNewContact);

function insertNewContact() {
  let table = document.getElementById("myTable");
  // console.log(table);
  //new row on table
  let tr = document.createElement('tr');
  let newContactTr = table.appendChild(tr);
  newContactTr.classList.add("row");
  // console.log(tr);
  let td = document.createElement('td');
  let newNameTd = table.appendChild(td);
  newNameTd.textContent = newNameContact.value;
  newNameTd.style.color ="#0a043c";
  newNameTd.style ="font-style :italic"
  // console.log(td);
  let td2 = document.createElement('td');
  let newTelTd = table.appendChild(td2);
  newTelTd.textContent = newTelContact.value;
  newTelTd.style.color ="#0a043c";
  newTelTd.style ="font-style :italic";
  // console.log(td2);
  let editBtn =document.createElement('button');
  let newButton1 = table.appendChild(editBtn);
  newButton1.classList.add("action-edit");
  newButton1.textContent = "Editeaza";
  newButton1.style.background ="snow";
  newButton1.style = "border-radius : 5px";
  newButton1.style.color = "gray";
  // console.log(editBtn);
  let deleteBtn =document.createElement('button');
  let newButton2 = table.appendChild(deleteBtn);
  newButton2.classList.add("action-delete");
  newButton2.textContent = "Sterge";
  newButton2.style = "border-radius : 5px";
  newButton2.style.color = "red";
  // console.log(deleteBtn);
for (let i = 0 ; i < newNameTd.length ; i++  ) {
    newNameContact.value = ""
    newTelContact.value = ""; 
}  
}

//// event la button editeaza
let listContacts = document.getElementById("myTable");
listContacts.addEventListener("click", EditeazaContact);

function EditeazaContact(e) {
  // console.log(e.target);
  if(e.target.classList.contains("action-edit") ) {
  //  console.log(e.target.previousSibling);
   let contactsTel =e.target.previousSibling ;
   console.log(contactsTel);
  }
  contactsTel = newTelContact.value ;
  // contactsName =newNameContact.value ;
}

///event la button sterge

listContacts.addEventListener('click', StergeContact);

function StergeContact(e) {
  if(e.target.classList.contains("action-delete") ) {
    //  console.log(e.target.previousSibling);
    let listContacts = document.getElementById("myTable");
    // console.log(listContacts);
    var listRows = document.querySelectorAll('.row');
    // console.log(listRows);
	for (var i = 0; i < listRows.length; i++) {
		listContacts.removeChild(listRows[i]);
		console.log('S a sters elementul: ' + i);
  }
	StergeContact(e);
	}
}

////event la enter

// newNameContact.addEventListener("keypress",insertContactOnEnter );
// function insertContactOnEnter(e){
//   console.log(e.key);
//   if (e.key == "Enter" && newNameContact.length > 1 ) {
//     insertNewContact();
//   }
// }


