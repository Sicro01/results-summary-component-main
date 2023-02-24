const createScoresHTML = ({
    className,
    category,
    score,
    icon
}) =>
    `
<div class="flex-group result__detail-area ${className}">
    <p class="flex-group">
        <img class="icon" src="${icon}" alt="${category} icon"/>
        <span>${category}</span>
    </p>
    <div>
        <span>${score}</span>
        <span class="slash-100">/ 100</span>
    </div>
</div>
    `;


const scoresEl = document.getElementById("scores")
async function displayScores() {
    const response = await fetch('data.json')
    const sourceData = await response.json()
    // create html for each score
    const data = sourceData.map(scoreData => ({ ...scoreData, className: scoreData.category.toLowerCase() }))
    console.log(data);
    const scores = data.map(createScoresHTML)
    console.log(scores);
    // add each score to html
    scores.forEach(score => {
        scoresEl.innerHTML += score;
        console.log(score);
    });
}
displayScores();