// const player = "Per"
// const opponent = "Nick"
// const game = "AmazingFighter"
// let points = 0
// let hasWon = false

// // PLAYING THE GAME
// points += 100
// hasWon = false

// // ANNOUNCING THE WINNER
// if (hasWon) {
//     console.log(`${player} got ${points} points and won the ${game} game!`)
// } else {
//     console.log(`The winner is ${opponent}! ${player} lost the game`)
// }

// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// function listArray( arr ) {
//     arr.reduce(( acc , item ) => {
//         console.log( item )
//     }, [])
// }

// listArray(myCourses)

// const btnScore = document.getElementById("btn-score")

// let data = [
//     {
//         player: "Jane",
//         score: 52
//     }, 
//     {
//         player: "Mark",
//         score: 41
//     }
// ]

// btnScore.addEventListener("click", () => {
//     console.log(data[0].score)
// })

// function generateSentence(desc, arr) {
//     let item = `` 
//     arr.reduce((acc, value, index) => {
//         if (index + 1 !== arr.length) {
//             item += `${value}, `
//         }
//         else {
//             item += `${value}.`
//         }
//     }, ``)
//     let template = `The ${arr.length} ${desc} are ${item}`
//     return template
// }

// console.log(generateSentence("largest countries", ["China", "India", "Usa"]))

// const imgs = [
//     "images/hip1.jpg",
//     "images/hip2.jpg",
//     "images/hip3.jpg"
// ]

// function renderImgs() {
//     let imgsDOM = ""
//     imgs.reduce( (acc, value) => {
//         imgsDOM +=  `<img alt="Employee in the company" class="team-img" src=${value}>`
//     }, 0)
//     document.getElementById("container").innerHTML = imgsDOM
// }

// renderImgs()

const totalPrice = "420.69235632455"
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy €${ Math.floor((Number(totalPrice) * 100 )) / 100 }`
                            // totalPrice.toFixed(2) would be cleaner
