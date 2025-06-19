// These variables get access to all the flashcards, the navigation buttons, and the progress bar elements.
const flashcards = document.querySelectorAll('.flashcard');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const progressText = document.getElementById('progress');
const progressFill = document.getElementById('progress-fill');

// Keeps track of which flashcard is being displayed.
let currentIndex = 0;

// Hides all flashcards and resets flips.
// Only shows the current one (.active).
// Updates the progress text (e.g., 5 / 20) and bar width.
function updateFlashcards() {
    flashcards.forEach((card, index) => {
        card.classList.remove('active');
        card.querySelector('.card-inner').classList.remove('flipped');
        if (index === currentIndex) {
            card.classList.add('active');
        }
    });

    progressText.textContent = `${currentIndex + 1} / ${flashcards.length}`;
    const progressPercent = ((currentIndex + 1) / flashcards.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
}

// Next button: Increments the index if it’s not the last flashcard.
// Previous button: Decrements the index if it’s not the first.
nextBtn.addEventListener('click', () => {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        updateFlashcards();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateFlashcards();
    }
});

// When you click the flashcard, the flipped class is toggled.
// This flips between front and back.
flashcards.forEach(card => {
    const cardInner = card.querySelector('.card-inner');
    cardInner.addEventListener('click', () => {
        cardInner.classList.toggle('flipped');
    });
});

// Initial display , Runs once at the beginning to display the first card and set the progress.
updateFlashcards();
