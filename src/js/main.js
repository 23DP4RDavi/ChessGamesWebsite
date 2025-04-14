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
        piece.src = `src/images/pieces/${chessPieces[Math.floor(Math.random() * chessPieces.length)]}`;
        piece.classList.add("falling-piece");

        piece.style.left = Math.random() * 100 + "vw";
        piece.style.animationDuration = Math.random() * 3 + 2 + "s";
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
