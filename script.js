const moodCards = document.querySelectorAll(".mood-card");
const selectedMoodMessage = document.querySelector(".selected-mood p");
const selectedMoodName = document.querySelector("#selected-mood-name");
const moodNote = document.querySelector("#mood-note");
const logButton = document.querySelector(".log-button");

const savedMoods = localStorage.getItem("moodHistory");

const moods = savedMoods ? JSON.parse(savedMoods) : [];

console.log(moods);

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

