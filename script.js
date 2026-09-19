const moodCards = document.querySelectorAll(".mood-card");
const selectedMoodMessage = document.querySelector(".selected-mood p");
const selectedMoodName = document.querySelector("#selected-mood-name");
const moodNote = document.querySelector("#mood-note");
const logButton = document.querySelector(".log-button");

const savedMoods = localStorage.getItem("moodHistory");

const moods = savedMoods ? JSON.parse(savedMoods) : [];
const moodHistoryList = document.querySelector("#mood-history-list");
moods.forEach((moodData) => {
    const moodItem = document.createElement("div");

    moodItem.classList.add("mood-history-item");

    const moodTitle = document.createElement("h3");
    const moodNote = document.createElement("p");

    moodTitle.textContent = moodData.mood;
    moodNote.textContent = moodData.note;

    moodHistoryList.appendChild(moodItem);
});

moodCards.forEach((moodCard) => {
    moodCard.addEventListener("click", () => {
        const moodName = moodCard.querySelector("p").textContent;

        selectedMoodName.textContent = moodName;
        selectedMoodName.className = `${moodName.toLowerCase()}-text`;

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

logButton.addEventListener("click", () => {
    if (selectedMoodName.textContent === "-") {
        return;

    }

    const moodData = {
        mood: selectedMoodName.textContent,
        note: moodNote.value

       
    };
    localStorage.setItem("moodData", JSON.stringify(moodData));
    moods.push(moodData);
    localStorage.setItem("moodHistory", JSON.stringify(moods));
    console.log(moods)
    logButton.classList.add("logged");
    logButton.textContent = "Mood logged ✓";

    
    
});

