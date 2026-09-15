const moodCards = document.querySelectorAll(".mood-card");
const selectedMoodTitle = document.querySelector(".selected-mood h3");

moodCards.forEach((moodCard) => {
    moodCard.addEventListener("click", () => {
        const moodName = moodCard.querySelector("p").textContent;

        selectedMoodTitle.textContent = `You chose: ${moodName}`;
    });
});