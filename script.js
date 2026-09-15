const moodCards = document.querySelectorAll(".mood-card");
const selectedMoodMessage = document.querySelector(".selected-mood p");
const selectedMoodName = document.querySelector("#selected-mood-name");

moodCards.forEach((moodCard) => {
    moodCard.addEventListener("click", () => {
        const moodName = moodCard.querySelector("p").textContent;

        selectedMoodName.textContent = moodName;

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