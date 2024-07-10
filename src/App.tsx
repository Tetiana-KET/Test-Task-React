import './App.css';
import Quiz from './Components/Quiz/Quiz';
import questions from './data/questions.json';

function App() {
	return <Quiz questions={questions} />;
}

export default App;
