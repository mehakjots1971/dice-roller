function rollDice() {
    const diceCount = document.getElementById('diceCount').value;
    const diceImagesDiv = document.getElementById('diceImages');
    const count = document.getElementById('count');
    diceImagesDiv.innerHTML = '';
    const images = [];
    const counts = [];

    for (let i = 0; i < diceCount; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;

        counts.push(roll);
        images.push(`<img src="dice_images/dice-${roll}.png" alt="Dice" width="100" height="100">`);
       
    }

    count.innerHTML = `Count in dices: ${counts.join(', ')}`;
    diceImagesDiv.innerHTML = images.join(' ');


}