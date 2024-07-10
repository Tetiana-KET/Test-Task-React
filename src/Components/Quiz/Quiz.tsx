import { useState } from 'react';
import styles from './Quiz.module.css';

interface Answer {
	text: string;
	isCorrect: boolean;
}

interface Question {
	answers: Array<Answer>;
	question: string;
}

interface QuizProps {
	questions: Question[];
}
function Quiz({ questions }: QuizProps): JSX.Element {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
	const [correctAnswers, setCorrectAnswers] = useState<boolean[]>([]);
	const [isAnswerSelected, setIsAnswerSelected] = useState<boolean>(false);

	const currentQuestion = questions[currentQuestionIndex];

	console.log(questions);

	function handleButtonClick() {
		setSelectedAnswer(null);
		setIsAnswerSelected(false);
		setCurrentQuestionIndex(prev => prev + 1);
	}

	const handleAnswerClick = (answer: Answer) => {
		if (isAnswerSelected) return;
		setSelectedAnswer(answer.text);
		setIsAnswerSelected(true);
		if (answer.isCorrect) {
			setCorrectAnswers(prev => [...prev, true]);
		} else {
			setCorrectAnswers(prev => [...prev, false]);
		}
	};

	return (
		<div className={styles.quizContainer}>
			<div className={styles.quizWrap}>
				<header className={styles.header}>
					<h2>{`Question ${currentQuestionIndex + 1} of ${
						questions.length
					}`}</h2>
				</header>
				<main>
					<h2 className={styles.questionTitle}>{currentQuestion.question}</h2>
					<ul className={styles.currentQuestionAnswers}>
						{currentQuestion.answers.map((answer: Answer) => (
							<li
								onClick={() => {
									handleAnswerClick(answer);
								}}
								key={answer.text}
								className={`${styles.answersItem}
                  ${isAnswerSelected ? styles.disabled : ''}
                  ${
										selectedAnswer === answer.text
											? answer.isCorrect
												? styles.correct
												: styles.incorrect
											: ''
									}`}
							>
								{answer.text}
							</li>
						))}
					</ul>
					<div className={styles.buttonWrap}>
						<button
							type='button'
							onClick={handleButtonClick}
							disabled={currentQuestionIndex + 1 === questions.length}
						>
							Next
						</button>
					</div>
				</main>
				<footer className={styles.footer}>
					{questions.map((question, index) => (
						<div
							className={`${styles.correctAnswerCount} ${
								index < correctAnswers.length
									? correctAnswers[index]
										? styles.correct
										: styles.incorrect
									: ''
							}`}
							key={`${question.question.split(' ').slice(0, 3).join('-')}`}
						>
							{index < correctAnswers.length &&
								(correctAnswers[index] ? '✓' : '✗')}
						</div>
					))}
				</footer>
			</div>
		</div>
	);
}
export default Quiz;
