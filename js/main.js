(() => {
	console.log('js')
	

	const thePieces = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
	

	let piecesBoard = document.querySelector('.puzzle-pieces');
	let puzzleBoard = document.querySelector('.puzzle-board');

	let puzzleSelectors = document.querySelectorAll('#buttonHolder img')

	function createPuzzlePiece(pictureIndex) {
		

		thePieces.forEach((piece, index) => {//******fix this
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="puzzle piece">`;

			piecesBoard.innerHTML += newPuzzlePiece;
			
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
