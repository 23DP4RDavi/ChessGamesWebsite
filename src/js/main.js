document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.getElementById("hero");
    const chessPieces = [
        "pawn.gif", 
        "knight.gif", 
        "bishop.gif", 
        "rook.gif", 
        "queen.gif", 
        "king.gif", 
        "b_pawn.gif", 
        "b_knight.gif", 
        "b_bishop.gif", 
        "b_rook.gif", 
        "b_queen.gif", 
        "b_king.gif",
        "r_king.gif",
        "r_queen.gif"
    ];

    function createFallingPiece() {
        const piece = document.createElement("img");
        const selectedPiece = chessPieces[Math.floor(Math.random() * chessPieces.length)];

        // Make r_ pieces rarer
        if (selectedPiece.startsWith("r_") && Math.random() > 0.3) {
            return; // Skip creating this piece most of the time
        }

        piece.src = `src/images/pieces/${selectedPiece}`;
        piece.classList.add("falling-piece");

        piece.style.left = Math.random() * 100 + "vw";

        // Make r_ pieces fall faster
        const isRarePiece = selectedPiece.startsWith("r_");
        piece.style.animationDuration = isRarePiece
            ? Math.random() * 0.5 + 1 + "s" // Faster fall for r_ pieces
            : Math.random() * 3 + 2 + "s"; // Normal fall for other pieces

        const horizontalMovement = Math.random() * 200 - 100;
        piece.style.setProperty("--horizontal-movement", `${horizontalMovement}px`);

        // Set random rotation direction (-1 for clockwise, 1 for counterclockwise)
        const rotationDirection = Math.random() < 0.5 ? -1 : 1;
        piece.style.setProperty("--rotation-direction", rotationDirection);

        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        heroSection.appendChild(piece);

        piece.addEventListener("animationend", () => {
            piece.remove();
        });
    }
    setInterval(createFallingPiece, 500);
});
