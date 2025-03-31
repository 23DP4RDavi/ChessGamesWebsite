document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.getElementById("hero");
    const chessPieces = ["pawn.png", "knight.png", "bishop.png", "rook.png", "queen.png", "king.png", "bpawn.png", "bknight.png", "bbishop.png", "brook.png", "bqueen.png", "bking.png"];

    function createFallingPiece() {
        const piece = document.createElement("img");
        piece.src = `src/images/pieces/${chessPieces[Math.floor(Math.random() * chessPieces.length)]}`;
        piece.classList.add("falling-piece");

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.animationDuration = Math.random() * 3 + 2 + "s";

        const horizontalMovement = Math.random() * 200 - 100;
        piece.style.setProperty("--horizontal-movement", `${horizontalMovement}px`);

        piece.style.transform = `rotate(${Math.random() * 360}deg)`;

        heroSection.appendChild(piece);

        piece.addEventListener("animationend", () => {
            piece.remove();
        });
    }

    setInterval(createFallingPiece, 500);
});