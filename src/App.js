import './App.scss';
import CardQuestionAnswer from './CardQuestionAnswer';
import {QuestionAnswer} from './data/data';

function App() {
  return (
    <div className="App">
      <h1>Quiz App With React</h1>
      <CardQuestionAnswer QuestionAnswer={QuestionAnswer} />
    </div>
  );
}

export default App;
