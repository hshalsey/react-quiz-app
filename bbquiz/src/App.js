import React, { useState } from 'react';
import background from "./img/basketball.png";

export default function App() {
  
	const questions = [
		{
			questionText: 'Who is the highest scoring NBA player of all time?',
			answerOptions: [
				{ answerText: 'Dirk Nowitzki', isCorrect: false },
				{ answerText: 'Lebron James', isCorrect: false },
				{ answerText: 'Kareem Abdul-Jabar', isCorrect: true },
				{ answerText: 'Karl Malone', isCorrect: false },
			],
		},
		{
			questionText: 'Who has the most rebounds in NBA history?',
			answerOptions: [
				{ answerText: 'Moses Malone', isCorrect: false },
				{ answerText: 'Bill Russlel', isCorrect: false },
				{ answerText: 'Hakeem Olajuwon', isCorrect: false },
				{ answerText: 'Wilt Chamberlain', isCorrect: true },
			],
		},
		{
			questionText: 'Which player played the most regular seasons in the NBA?',
			answerOptions: [
				{ answerText: 'Kevin Garnett', isCorrect: false },
				{ answerText: 'Vince Carter', isCorrect: true },
				{ answerText: 'Kobe Bryant', isCorrect: false },
				{ answerText: 'John Stockton', isCorrect: false },
			],
		},
		{
			questionText: 'Which NBA player has the most championships won?',
			answerOptions: [
				{ answerText: 'Bill Russell', isCorrect: true },
				{ answerText: 'Michael Jordan', isCorrect: false },
				{ answerText: 'Scottie Pippen', isCorrect: false },
				{ answerText: 'Sam Jones', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div style={{ backgroundImage: `url(${background})`}} className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}