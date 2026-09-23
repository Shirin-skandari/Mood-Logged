const moodCards = document.querySelectorAll(".mood-card");
const selectedMoodMessage = document.querySelector(".selected-mood p");
const selectedMoodName = document.querySelector("#selected-mood-name");
const moodNote = document.querySelector("#mood-note");
const logButton = document.querySelector(".log-button");

const savedMoods = localStorage.getItem("moodHistory");

const moods = savedMoods ? JSON.parse(savedMoods) : [];
const moodHistoryList = document.querySelector("#mood-history-list");

if (moods.length === 0) {
    document.querySelector("#empty-state").style.display = "block";
} else {

    document.querySelector("#empty-state").style.display = "none";

    moods.forEach((moodData) => {
        addMoodToHistory(moodData);
    });
}



function addMoodToHistory(moodData) {
    const moodItem = document.createElement("div");

    moodItem.classList.add("mood-history-item");
    moodItem.classList.add(`${moodData.mood.toLowerCase()}-history`);

    const moodTitle = document.createElement("h3");
    const moodNote = document.createElement("p");
    const moodDate = document.createElement("small");
    const deleteButton = document.createElement("button");

    moodTitle.textContent = moodData.mood;
    moodNote.textContent = moodData.note;
    moodDate.textContent = moodData.date;
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
        const moodIndex = moods.indexOf(moodData);

        moods.splice(moodIndex, 1);

        localStorage.setItem("moodHistory", JSON.stringify(moods));

        moodItem.remove();

        if (moods.length === 0) {
            document.querySelector("#empty-state").style.display = "block";
        }
    });

    moodItem.appendChild(moodTitle);
    moodItem.appendChild(moodNote);
    moodItem.appendChild(moodDate);
    moodItem.appendChild(deleteButton);

    moodHistoryList.appendChild(moodItem);

}
moodCards.forEach((moodCard) => {
    moodCard.addEventListener("click", () => {
        const moodName = moodCard.querySelector("p").textContent;

        selectedMoodName.textContent = moodName;
        selectedMoodName.className = `${moodName.toLowerCase()}-text`;

        logButton.classList.remove("logged");
        logButton.textContent = "♡ Log my mood";

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
        note: moodNote.value,
        date: new Date().toLocaleString()

       
    };
    moods.push(moodData);
    localStorage.setItem("moodHistory", JSON.stringify(moods));
    
    addMoodToHistory(moodData);

    moodNote.value = "";

    document.querySelector("#empty-state").style.display = "none";

    logButton.classList.add("logged");
    logButton.textContent = "Mood logged ✓";

    
    
});

