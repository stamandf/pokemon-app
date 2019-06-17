// const sum = (accumulator, currentValue) => accumulator + currentValue;
 
// const experienceTotal = (arrayCards) => {
//     let exp = arrayCards.map((card) => card.base_experience);
//     return exp.reduce(sum);
// }

const experienceTotal = (arrayCards) => {
    let exp = arrayCards.reduce((exp, card) => exp + card.base_experience, 0);
    return exp;
}
export default experienceTotal;