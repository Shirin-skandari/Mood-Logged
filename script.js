const moodCards = document.querySelectorAll(".mood-card");
const selectedMoodMessage = document.querySelector(".selected-mood p");
const selectedMoodName = document.querySelector("#selected-mood-name");
const moodNote = document.querySelector("#mood-note");
const logButton = document.querySelector(".log-button");

const savedMoods = localStorage.getItem("moodHistory");

const moods = savedMoods ? JSON.parse(savedMoods) : [];
const moodHistoryList = document.querySelector("#mood-history-list");

const emptyState = document.querySelector("#empty-state");

if (moods.length === 0) {
   emptyState.style.display = "block";
} else {
    emptyState.style.display = "none";

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
            emptyState.style.display = "block";
        }
    });

    moodItem.appendChild(moodTitle);
    moodItem.appendChild(moodNote);
    moodItem.appendChild(moodDate);
    moodItem.appendChild(deleteButton);

    moodHistoryList.appendChild(moodItem);

}

function showMoodMessage(moodName) {
    if (moodName === "Happy") {
        selectedMoodMessage.textContent = "Hold on to this little piece of happiness 💕";
    } else if (moodName === "Sad") {
        selectedMoodMessage.textContent = "You don't have to be okay all the time. Be gentle with yourself 🤍";
    } else if (moodName === "Excited") {
        selectedMoodMessage.textContent = "Let your happiness sparkle a little brighter today ✨";
    } else if (moodName === "Angry") {
        selectedMoodMessage.textContent = "Take a little pause. You deserve a moment to breathe 🌷";
    }
}

moodCards.forEach((moodCard) => {
    moodCard.addEventListener("click", () => {
        const moodName = moodCard.querySelector("p").textContent;

        selectedMoodName.textContent = moodName;
        selectedMoodName.className = `${moodName.toLowerCase()}-text`;

        logButton.classList.remove("logged");
        logButton.textContent = "♡ Log my mood";
        showMoodMessage(moodName);
    
    });
});

logButton.addEventListener("click", () => {
    if (selectedMoodName.textContent === "-") {
        return;
    }

    if (moodNote.value.trim() === "") {
         alert("Please write a little note first 💗");
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

    emptyState.style.display = "none";

    moodNote.value = "";

    

    logButton.classList.add("logged");
    logButton.textContent = "Mood logged ✓";

    
    
});

