
const classes = ["Dreamer", "Harbinger", "Sage", "Lover", "Monarch", "Child", "Champion", "Jester"];
const aspects = {
    "Key": { material: "exploration", emotional: "curiosity", universal: "revelation" },
    "Abyss": { material: "depth", emotional: "introspection", universal: "mystery" },
    "Stone": { material: "stability", emotional: "dependability", universal: "permanence" },
    "Ash": { material: "transience", emotional: "adaptability", universal: "change" },
    "Blood": { material: "bonds", emotional: "compassion", universal: "community" },
    "Wing": { material: "freedom", emotional: "independence", universal: "aspiration" },
    "Flame": { material: "passion", emotional: "intensity", universal: "transformation" },
    "Web": { material: "interconnection", emotional: "complexity", universal: "entanglement" }
};

function generateClassAndAspect() {
    const chosenClass = classes[Math.floor(Math.random() * classes.length)];
    const chosenAspect = Object.keys(aspects)[Math.floor(Math.random() * Object.keys(aspects).length)];
    const aspectProperties = aspects[chosenAspect];

    return `The ${chosenClass} of ${chosenAspect} would ${aspectProperties.material}, ${aspectProperties.emotional}, and ${aspectProperties.universal}.`;
}

document.getElementById("generateButton").addEventListener("click", function() {
    const result = generateClassAndAspect();
    document.getElementById("result").innerText = result;
});
