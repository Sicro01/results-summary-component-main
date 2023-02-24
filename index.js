const createScoresHTML = ({
    className,
    category,
    score,
    icon
}) =>
    `
<div class="flex-group result__detail-area ${className}">
    <p class="flex-group">
        <img class="icon" src="${icon}" />
        <span>${category}</span>
    </p>
    <div>
        <span>${score}</span>
        <span class="slash-100">/ 100</span>
    </div>
</div>
    `;

// create html for each score

// add each score to html
// scores.forEach(score => {
//     scoresEl.innerHTML += score;
//     console.log(score);
// })

// add each score to html
const scoresEl = document.getElementById("scores")
async function displayScores() {
    const response = await fetch('data.json')
    const sourceData = await response.json()
    const data = sourceData.map(scoreData => ({ ...scoreData, className: scoreData.category.toLowerCase() }))
    const scores = data.map(createScoresHTML)

    scores.forEach(score => {
        // res = obj.category == "Reaction" ? obj.score : null
        // console.log(res);
        scoresEl.innerHTML += score;
    });
}
displayScores();