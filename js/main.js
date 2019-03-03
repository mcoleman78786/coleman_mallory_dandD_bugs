(() => {
	console.log('js')
	

	const thePieces = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
	

	let piecesBoard = document.querySelector('.puzzle-pieces');
	let puzzleBoard = document.querySelector('.puzzle-board');

	let puzzleSelectors = document.querySelectorAll('#buttonHolder img')

	function createPuzzlePiece(pictureIndex) {
		

		thePieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="puzzle piece">`;

			piecesBoard.innerHTML += newPuzzlePiece;
			
		});

	}

	function resetPuzzlePieces() {

		piecesBoard.innerHTML = "";

		createPuzzlePiece(this.dataset.puzzleref)
	}

	puzzleSelectors.forEach(button => button.addEventListener('click', resetPuzzlePieces));

	createPuzzlePiece(0);
})();
