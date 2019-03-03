(() => {
	console.log('js is ok')
	// set up the puzzle pieces and boards
	// 
	//document.querySelector('h1').textContent = 'bonjour' (this changes the text)
	
	//function changeHeadline() {
	//	document.querySelector('h1').textContent = 'bonjour';
	//	document.querySelector('p').textContent = 'oh no you dingus!yall just got CLICKED';
	//}
		

	//const theButton = document.querySelector('#buttonHolder img', changeHeadline) //this targets 'theButton' ID and links it to the function


	//theButton.addEventListener('click', changeHeadline); //plays function fter 'loading page' or after event listener happens


	const thePieces = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
	//'pieces' = 4 images of large picture
	

	let piecesBoard = document.querySelector('.puzzle-pieces');
	let puzzleBoard = document.querySelector('.puzzleBoard');

	let puzzleSelectors = document.querySelectorAll('#buttonHolder img')

	function createPuzzlePiece(pictureIndex) {
		//add images here!
		//debugger;
		//
		thePieces.forEach((piece, index) => {//******fix this
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="puzzle piece">`;

			piecesBoard.innerHTML += newPuzzlePiece;
			//debugger;
		});

	}

	function resetPuzzlePieces() {
		//reset puzzle
		//debugger;
		piecesBoar.innerHTML = "";

		createPuzzlePiece(this.dataset.puzzleref)
	}

	//event handling goes here
	puzzleSelectors.forEach(button => button.addEventListener('click', resetPuzzlePieces));

	createPuzzlePiece(0);
})();
