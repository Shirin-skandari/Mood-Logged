const moodCards = document.querySelectorAll(".mood-card");
const selectedMoodTitle = document.querySelector(".selected-mood h3");
const selectedMoodMessage = document.querySelector(".selected-mood p");

moodCards.forEach((moodCard) => {
    moodCard.addEventListener("click", () => {
        const moodName = moodCard.querySelector("p").textContent;

        selectedMoodTitle.textContent = `You chose: ${moodName}`;

        if (moodName === "Happy") {
            selectedMoodMessage.textContent = "Good things are coming, keep going";
        }

        if (moodName === "Sad") {
            selectedMoodMessage.textContent = "It's okay to have difficult days";
        }
        if (moodName === "Excited") {
            selectedMoodMessage.textContent = "Keep that beautiful energy going";
        }
    });
});