(() => {
	// started add puzzles, pieces and board
	

	//  Need to know which piece we want to create
	const pieces = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
	

	//  Use something to know the drag side
	let piecesBoard = document.querySelector('.puzzle-pieces');
	    let puzzleBoard = document.querySelector('.puzzle-board');
	    let puzzleSelectors = document.querySelectorAll('#buttonHolder img')

	    let dropZones = document.querySelectorAll('.drop-zone');

	

	function createPuzzlePiece(pictureIndex) {
		// Images need to go here 
		// debugger;
		
	    pieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="puzzle-piece">`;

			piecesBoard.innerHTML += newPuzzlePiece;
			
		});

	puzzleBoard.style.backgroundImage = `url(images/backGround${pictureIndex}.jpg)`;

	initDrag();

     } 

     function initDrag() {
     	piecesBoard.querySelectorAll('img').forEach(img => {
     		img.addEventListener("dragstart", function(e) {
     			// e.preventDefault();
     			console.log('draggin')

     			e.dataTransfer.setData("text/plain", this.id);
     });
     });
     }

     dropZones.forEach(zone => {
     	zone.addEventListener("dragover", function(e) {
     		e.preventDefault();
     		console.log("you dragged me over");

     	});

     	zone.addEventListener("drop", function(e) {
     		e.preventDefault();
     		console.log("you dropped");


     		let pieces = e.dataTransfer.getData("text/plain");
     		e.target.appendChild(document.querySelector(`#${piece}`));
     });

});

	function resetPuzzlePieces() {

		piecesBoard.innerHTML = "";

		createPuzzlePiece(this.dataset.puzzleref)
	}

	puzzleSelectors.forEach(puzzle => puzzle.addEventListener('click', resetPuzzlePieces));

	createPuzzlePiece(0);


})();
