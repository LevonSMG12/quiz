let questions = [
  {
    question: "1. What does PSG stand for?",
    options: [
      "Paris Saint-Germain", // Correct
      "poland saint-german",
      "Germain Saint-Paris",
      "Saint Germain-Paris"
    ],
    correctAnswer: "Paris Saint-Germain",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null,
  },
  {
    question: "2. when was PSG discovered",
    options: [
      " 12th August 1970, ", // Correct
      "13th july 1990",
      "29th may 2020",
      "18th october"
    ],
    correctAnswer: " 12th August 1970, ",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null,

  },
  {
    question: "3. when did messi join PSG",
    options: [
      "August 2021", // Correct
      "Feburary 2020",
      "April 2019",
      "october 2019"
    ],
    correctAnswer: "August 2021",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null,

  },
  {
    question: "4. who is the youngest person in PSG",
    options: [
      "Zaire-Emery", // Correct
      "neymar",
      "mbappe",
      "Francise borelli"
    ],
    correctAnswer: "Zaire-Emery",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null,

  },
  {
    question: "5. how old is the youngest player that plays for PSG",
    options: [
      "16 years 04 months 29 days", // Correct
      "15 years old",
      "17 years 08 months 18 days",
      "19 years old"
    ],
    correctAnswer: "16 years 04 months 29 days",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null,

  },
  {
    question: "6. how long did neymar play at PSG",
    options: [
      "from 2017 to 2023: ", // Correct
      "8 years",
      "from 2018 to 2022",
      "7 years"
    ],
    correctAnswer: "from 2017 to 2023: ",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null,

  },
  {
    question: "7. how many goals did mbappe score at PSG",
    options: [
      "256", // Correct
      "307",
      "286",
      "237"
    ],
    correctAnswer: "256",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null,

  },
  {
    question: "8. how many goals did  neymar score",
    options: [
      "95",
      "86",
      "103",
      "105"
    ],
    correctAnswer: "86",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null,

  },
  {
    question: "9. who scored the most goals at PSG",
    options: [
      "mbappe", //0
      "neymar", //1
      "Zaïre-Emery", //2
      "Francis Borelli" //3
    ],
    correctAnswer: "mbappe",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null,

  },
  {
    question: "10. who played the longest at PSG",
    options: [
      "Francis Borelli", // Correct
      "Zaïre-Emery",
      "Neymar",
      "mbappe"
    ],
    correctAnswer: "Francis Borelli",
    isAnsweredCorrect: null,
    isAnswered: false,
    answer: null,

  },
]


let limit = questions.length
let score = 0
let count = 0


function render(questions) {
  let quizContainer = document.querySelector(".quiz-container")

  quizContainer.innerHTML = ''
  questions.forEach((el, index) => {
    let item = `
  <div>
     <p  class="question">${el.question}</p>
     ${el.options.map((option, optionIndex) => {
      if (el.isAnswered) {
        return (
          `<button disabled="true" class="option ${el.answer === optionIndex && el.isAnsweredCorrect ? "correct" : "incorrect"}">${option}</button>`
        )
      } else {
        return (
          `<button onClick="checkAnswer(${index},'${option}',${optionIndex})" class="option">${option}</button>`
        )
      }
    }).join('')}
  </div>
  `

    quizContainer.insertAdjacentHTML('beforeend', item)
  })
}
render(questions)

/*
 <label class="answer"> <input type="radio" name="quiz" value="1"> Paris </label>
*/


function checkAnswer(index, choosenAnswer, optionIndex) {
  count++
  if (questions[index].correctAnswer === choosenAnswer) {
    questions[index].isAnswered = true
    questions[index].isAnsweredCorrect = true
    questions[index].answer = optionIndex
    score += 10

  } else {
    questions[index].isAnswered = true
    questions[index].isAnsweredCorrect = false
    questions[index].answer = optionIndex
    score += 0
  }
  render(questions)
  setTimeout(() => {
    if (limit === count) {
      alert(`Score: ${score}`)
    }
  }, 0);



}












//   Levon Paris Saint-Germain F.C