const shuffleDeckofCards = (arrayCards) => {
    let cardNum = 0;
    let newArrayCards = [];
    
    while (newArrayCards.length < arrayCards.length) {
        cardNum = Math.floor(Math.random() * Math.floor(7) + 1);
        newArrayCards.push(arrayCards[cardNum]);
    }
    return newArrayCards;
}

export default shuffleDeckofCards;