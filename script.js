const moodCards = document.querySelectorAll(".mood-card");
const selectedMoodTitle = document.querySelector(".selected-mood h3");
const selectedMoodMessage = document.querySelector(".selected-mood p");

moodCards.forEach((moodCard) => {
    moodCard.addEventListener("click", () => {
        const moodName = moodCard.querySelector("p").textContent;

        selectedMoodTitle.textContent = `You chose: ${moodName}`;

        if (moodName === "Happy") {
            selectedMoodMessage.textContent = "Hold on to this little piece of happiness 💕";
        }

        if (moodName === "Sad") {
            selectedMoodMessage.textContent = "You don't have to be okay all the time. Be gentle with yourself 🤍";
        }
        if (moodName === "Excited") {
            selectedMoodMessage.textContent = "Let your happiness sparkle a little brighter today ✨";
        }
        if (moodName === "Angry") {
            selectedMoodMessage.textContent = "Take a little pause. You deserve a moment to breathe 🌷";
        }
    });
});