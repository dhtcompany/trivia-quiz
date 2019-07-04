

//Get a random array of 6 questions
function getQuestionsIndex() {
  let questionIndexArray = [];
  for (let i = 0; i < 6; i++) {
    questionIndexArray.push(Math.floor(Math.random() * 5));
  }
  return questionIndexArray;
}

//Shuffle function to shuffle question options taken from http://stackoverflow.com/questions/6274339/
function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

//Data
//I wrote the questions myself so let me know if there are any mistakes!
const trivia = [{
  category: "World Cultures",
  color: "blue",
  questions: [{
    question: "What is the capital of Ecuador?",
    options: ["Quito", "Lima", "Bogota", "La Paz"],
    answer: "Quito" },
  {
    question: "Which is the largest US State by Area?",
    options: ["Alaska", "Montana", "Texas", "California"],
    answer: "Alaska" },
  {
    question: "What is the longest river in Asia?",
    options: ["Yangtze", "Yellow", "Mekong", "Lena"],
    answer: "Yangtze" },
  {
    question: "Latvia shares a border with Russia, Estonia, Lithuania and which other country?",
    options: ["Belarus", "Ukraine", "Poland", "Germany"],
    answer: "Belarus" },
  {
    question: "In which Ocean are the Maldives located?",
    options: ["Indian", "Atlantic", "Arctic", "Pacific"],
    answer: "Indian" }] },



{
  category: "History",
  color: "yellow",
  questions: [{
    question: "The Arabians learned to train a lot of animals but the one the still use the transport is:",
    options: ["Horses", "Camels", "Dogs", "Horses and Camels"],
    answer: "Horses and Camels" },
  {
    question: "Pakistan in 1500 BC was known as:",
    options: ["Indus Valley", "Sahara Desert", "Aryans", "Iraq"],
    answer: "Indus Valley" },
  {
    question: "The farmers of Peru preferred llamas because they provided:",
    options: ["Milk, bacon and wool", "Meat, wool and milk", "Meat and wool", "Wool and shelter"],
    answer: "Meat, wool and milk" },
  {
    question: "Which country assisted the United States in the American Revolutionary War?",
    options: ["France", "Germany", "Netherlands", "Italy"],
    answer: "France" },
  {
    question: "Saladin was a Muslim leader during which conflict?",
    options: ["Crusades", "War of the Roses", "Crimean War", "World War I"],
    answer: "Crusades" }] },



{
  category: "Pop Culture",
  color: "brown",
  questions: [{
    question: "When was George Orwell's 1984 first published?",
    options: ["1949", "1935", "1957", "1984"],
    answer: "1949" },
  {
    question: "Shylock is a charcater in which Shakespeare play?",
    options: ["Hamlet", "Othello", "Merchant of Venice", "Macbeth"],
    answer: "Merchant of Venice" },
  {
    question: "Which book series was turned into a movie franchise starring Daniel Radcliffe, Emma Watson, and Rupert Grint?",
    options: ["Harry Potter", "Lord of the Rings", "The Hunger Games", "Twilight"],
    answer: "Harry Potter" },
  {
    question: "Who painted 'The Birth of Venus'?",
    options: ["Botticelli", "Michelangelo", "Da Vinci", "Caravaggio"],
    answer: "Botticelli" },
  {
    question: "How many members were originally in Fifth Harmony?",
    options: ["9", "5", "3", "7"],
    answer: "5" }] },



{
  category: "Sport",
  color: "orange",
  questions: [{
    question: "How many teams exist in the NFL?",
    options: ["16", "32", "30", "23"],
    answer: "32" },
  {
    question: "Which basketball team is Stephen Curry on?",
    options: ["Raptors", "Warriors", "Lakers", "Pacers"],
    answer: "Warriors" },
  {
    question: "Who was Michael Jordan?",
    options: ["Truck Driver", "Newsman", "Basketball Player", "Soccer Player"],
    answer: "Basketball Player" },
  {
    question: "Who won the NBA finals of 2019?",
    options: ["New York Knicks", "Chicago Bulls", "Raptors", "Utah Jazz"],
    answer: "Raptors" },
  {
    question: "Which team is not part of the MLB?",
    options: ["Los Angeles Lakers", "Chicago White Sox", "Boston Red Sox", "Chicago Cubs"],
    answer: "Los Angeles Lakers" }] },



{
  category: "Science & Tech",
  color: "green",
  questions: [{
    question: "Sn is the chemical symbol for which element?",
    options: ["Sulphur", "Silicon", "Tin", "Tungsten"],
    answer: "Tin" },
  {
    question: "The nearest star to the Sun is?",
    options: ["Polaris", "Vega", "Proxima Centauri", "Sirius"],
    answer: "Proxima Centauri" },
  {
    question: "What is the Earth's primary source of energy?",
    options: ["The sun", "The lightbulb", "Proxima Centauri", "None of the above"],
    answer: "The sun" },
  {
    question: "Which is the only mammal that can fly?",
    options: ["Penguin", "Bat", "Emu", "Platypus"],
    answer: "Bat" },
  {
    question: "In terms of computing, what does ROM stand for?",
    options: ["Range of motion", "Record of material", "Right on the money", "Read only memory"],
    answer: "Read only memory" }] },



{
  category: "Common Sense",
  color: "pink",
  questions: [{
    question: "How often should you clean out the refrigerator?",
    options: ["Hourly", "Daily", "Weekly", "Annually"],
    answer: "Weekly" },
  {
    question: "Kelly runs over to Gina at recess and says someone is calling her names. What should Gina do?",
    options: ["Tell a trusted adult immediately", "Spread rumors", "Get the facts", "Interrupt her"],
    answer: "Tell a trusted adult immediately" },
  {
    question: "All of the following EXCEPT ________ are good for your teeth.",
    options: ["Healthy foods", "Sugary foods", "Flossing", "Brushing"],
    answer: "Sugary foods" },
  {
    question: "Folding arms and crossing legs are an example of what kind of communication?",
    options: ["Hearing", "Speaking", "Body language", "Writing"],
    answer: "Body language" },
  {
    question: "Which is NOT an example of being a good student?",
    options: ["Participating only in personal interests", "Following school rules", "Respecting other students", "Behaving responsibly"],
    answer: "Participating only in personal interests" }] }];




//Component for the modal screen displaying correct/incorrect and the cheese wheel and pieces

Result.propTypes = {
  correct: React.PropTypes.array.isRequired,
  message: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  gameOver: React.PropTypes.bool.isRequired,
  onAgainClick: React.PropTypes.func.isRequired };


function Result(props) {
  //rendering a colored piece into the cheese for correct categories
  let cheeses = [];
  props.correct.forEach(color => {
    cheeses.push(React.createElement("div", { className: "piece " + color }));
  });
  //choosing style of message based on correct/incorrect answer
  let messageStyle = "";
  if (props.message === 'Correct') {
    messageStyle = "correct";
  } else
  if (props.message === 'Incorrect') {
    messageStyle = "incorrect";
  } else
  {
    messageStyle = "game-over";
  }
  return (
    React.createElement("div", { className: "modal-container" },
    React.createElement("div", { className: "modal " + messageStyle },
    React.createElement("h2", { className: "message" }, props.message),
    React.createElement("div", { className: "play-again", onClick: props.onAgainClick },
    props.gameOver ? 'Play Again' : ''),

    React.createElement("div", { className: "cheese-container" },
    React.createElement("div", { className:
      props.correct.length === 6 && props.gameOver ?
      "cheese spin" : "cheese" },
    cheeses)))));





}

//Game component. Handles rendering questions/options and listening for clicks on answer.

let Game = React.createClass({ displayName: "Game",
  propTypes: {
    trivia: React.PropTypes.array.isRequired,
    gameOver: React.PropTypes.bool.isRequired,
    questionIndex: React.PropTypes.array.isRequired,
    onAnswer: React.PropTypes.func.isRequired,
    category: React.PropTypes.number.isRequired,
    correct: React.PropTypes.array.isRequired,
    currentQuestion: React.PropTypes.number.isRequired,
    onPlayAgain: React.PropTypes.func.isRequired,
    showModal: React.PropTypes.bool.isRequired,
    message: React.PropTypes.string.isRequired },

  render: function () {
    let category = this.props.category;
    let currentQuestion = this.props.questionIndex[this.props.currentQuestion];
    //Stops reshuffling of options between questions
    if (!this.props.showModal) {
      shuffle(trivia[category].questions[currentQuestion].options);
    }
    //show modal after an answer has been clicked
    let result;
    if (this.props.showModal) {
      result = React.createElement(Result, {
        color: trivia[category].color,
        correct: this.props.correct,
        message: this.props.message,
        gameOver: this.props.gameOver,
        onAgainClick: this.props.onPlayAgain });

    }
    return (
      React.createElement("div", { className: "game-container" },
      React.createElement("h1", null, "Trivia Quiz"),
      React.createElement("div", { className: "questions-container" },
      React.createElement("div", { className: "category " + trivia[category].color }, trivia[category].category),
      React.createElement("div", { className: "question" }, trivia[category].questions[currentQuestion].question),
      React.createElement("ul", { className: "options", onClick: e => this.props.onAnswer(e, category, currentQuestion) },
      React.createElement("li", null, trivia[category].questions[currentQuestion].options[0]),
      React.createElement("li", null, trivia[category].questions[currentQuestion].options[1]),
      React.createElement("li", null, trivia[category].questions[currentQuestion].options[2]),
      React.createElement("li", null, trivia[category].questions[currentQuestion].options[3]))),


      result));


  } });


//Main application component
let App = React.createClass({ displayName: "App",
  propTypes: {
    trivia: React.PropTypes.array.isRequired },

  getInitialState: function () {
    return {
      questionIndex: getQuestionsIndex(), //Random questions array
      currentQuestion: 0, //Current question in array
      gameOver: false, //show game over screen on true
      category: 0, //which current category to update cheese
      correct: [], //push correct categories to array
      message: "", //display correct/incorrect message
      showModal: false //shows modal after question answered
    };
  },
  //Check if answer given is correct
  onAnswer: function (e, category, currentQuestion) {
    return (
      e.target.innerText === trivia[category].questions[currentQuestion].answer ? this.onCorrect() : this.onWrong());

  },
  //add colored piece
  updateCheese: function () {
    this.state.correct.push(trivia[this.state.category].color);
    this.state.message = "Correct";
    this.state.showModal = true;
    this.setState(this.state);
  },
  //add timeout between modal and next question
  updateBoard: function () {
    setTimeout(() => {
      this.state.category += 1;
      this.state.currentQuestion += 1;
      this.state.showModal = false;
      this.setState(this.state);
    }, 2000);
  },
  //display modal on game end
  gameEnd: function () {
    setTimeout(() => {
      this.state.message = "You Scored " + this.state.correct.length;
      this.state.gameOver = true;
      this.setState(this.state);
    }, 2000);
  },
  //handle if correct answer given
  onCorrect: function () {
    if (this.state.category < 5) {
      this.updateCheese();
      this.updateBoard();
    } else
    {
      this.updateCheese();
      this.gameEnd();
    }
  },
  //handle if correct answer given
  onWrong: function () {
    if (this.state.category < 5) {
      this.state.message = "Incorrect";
      this.state.showModal = true;
      this.setState(this.state);
      this.updateBoard();
    } else
    {
      this.state.message = "Incorrect";
      this.state.showModal = true;
      this.setState(this.state);
      this.gameEnd();
    }
  },
  //Reset Game on game end.
  onGameEnd: function () {
    this.state.questionIndex = getQuestionsIndex();
    this.state.currentQuestion = 0;
    this.state.gameOver = false;
    this.state.category = 0;
    this.state.correct = [];
    this.state.message = "";
    this.state.showModal = false;
    this.setState(this.state);
  },
  render: function () {
    return (
      React.createElement("div", { className: "container" },
      React.createElement(Game, {
        trivia: trivia,
        questionIndex: this.state.questionIndex,
        category: this.state.category,
        currentQuestion: this.state.currentQuestion,
        correct: this.state.correct,
        message: this.state.message,
        gameOver: this.state.gameOver,
        onAnswer: this.onAnswer,
        showModal: this.state.showModal,
        onPlayAgain: this.onGameEnd })));



  } });


ReactDOM.render(React.createElement(App, { trivia: trivia }), document.getElementById('app'));