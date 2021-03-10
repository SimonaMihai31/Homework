// 3. JS :

// - Create 2 classes with corespondent constructors(class Book and class UI)

// - Book class( used for creating book objects)

// - UI class( methods only here: for add the book to the list, delete the book, validate the input show confirmation message boxes)

// get elements
const bookElem = document.getElementById('book');
console.log(bookElem);
const titleElem = document.getElementById('book-title');
// console.log(titleElem);
const authorElem = document.getElementById('author-name');
// console.log(authorElem);
const isbnElem = document.getElementById('isbn');
// console.log(isbnElem);

///first class - UI : for validate the input show confirmation message boxes, succes message for add the book to the list

class UI {
	constructor() {
		this.allInputsAreValid = true;
		this.submitNumbers = 0;
	}
	showError(elem, message) {
		elem.parentElement.classList.add('error');
		const smallElem = elem.parentElement.querySelector('small');
		// console.log(smallElem);
		smallElem.innerHTML = message;
	}
	showSuccess(elem) {
		elem.parentElement.classList.remove('error');
		elem.parentElement.classList.add('success');
	}
	
	showSubmitSuccessMessage() {
		if (this.allInputsAreValid && this.submitNumbers == 0) {
			let successMessage = document.createElement('p');
			successMessage.classList.add('success');
			successMessage.innerHTML =
				'Book Added! ';
			let divFirstInput = document.getElementById('first-input');
			bookElem.insertBefore(successMessage, divFirstInput);

			setTimeout(() => {
				successMessage.remove();
			}, 3000);
			this.submitNumbers++;
		}
	}
	  clearFields() {
		titleElem.value= "";
		titleElem.parentElement.classList.remove('success');
		authorElem.value= "";
		authorElem.parentElement.classList.remove('success');
		isbnElem.value="";
		isbnElem.parentElement.classList.remove('success');
	}
}
///event listner la click pe submit & check inputs field, show error message for empty field

bookElem.addEventListener('submit', (e) => {
	e.preventDefault();
	let ui = new UI();
	console.log(ui.allInputsAreValid);

	if (titleElem.value === '') {
		ui.showError(titleElem, 'Title required');
		ui.allInputsAreValid = false;
	} else {
		ui.showSuccess(titleElem);
	}

	if (authorElem.value === '') {
		ui.showError(authorElem, 'Author required');
		ui.allInputsAreValid = false;
	} else {
		ui.showSuccess(authorElem);
	}

	if (isbnElem.value === '') {
		ui.showError(isbnElem, 'ISBN required');
		ui.allInputsAreValid = false;
	} else {
		ui.showSuccess(isbnElem);
	}
  book.insertNewBookInTable();
	ui.showSubmitSuccessMessage();
	ui.clearFields();
});

///class BOOK for add the book to the list, in the table

class BOOK {
	insertNewBookInTable() {
	  if (titleElem.value!== "" && authorElem.value !== "" && isbnElem.value !=="") {
		    let tableBody = document.getElementById('myTable');
				let inputTitle = titleElem.value;
				let inputAuthor = authorElem.value;
				let inputIsbn = isbnElem.value
				tableBody.innerHTML += `
					                <tr class="row">
				    								<td>${inputTitle}</td>
					  								<td>${inputAuthor}</td>
					  								<td>${inputIsbn}</td>
								            <td><a href="#" class="delete-item" id="DeleteButton">
								            <i class="fas fa-window-close"></i></td>
						              </tr>`
			}				
}
};
let book= new BOOK();

// event la click pe simbolul delete "x"

let bookList = document.getElementById('myTable');
// console.log(bookList);
let bookListItems = document.querySelectorAll('td');
console.log(bookListItems);
bookList.addEventListener("click", deleteBook);

function deleteBook(e) {
  console.log(e.target.parentNode);
  if(e.target.parentNode.className === 'delete-item') {
		console.log(e.target.parentNode.parentNode.parentNode);
		let bookToRemove = e.target.parentNode.parentNode.parentNode;
		bookToRemove.remove();
  }
	showRemovedSuccessMessage();
}
/// success message for book removed 
function showRemovedSuccessMessage() {
		let successMessageR = document.createElement('p');
		successMessageR.classList.add('success');
		successMessageR.innerHTML =
			'Book Removed! ';
		let divFirstInput = document.getElementById('first-input');
		bookElem.insertBefore(successMessageR, divFirstInput);

		setTimeout(() => {
			successMessageR.remove();
		}, 3000);
	}








