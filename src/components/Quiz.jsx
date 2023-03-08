import React, { useState } from "react";
import './Quiz.css'


const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");


  const addQuestion = (question) => {
    const newQuestions = questions.concat(question);
    setQuestions(newQuestions);
  };

 const handleEdit = (index, editedQuestion) => {
    const newQuestions = questions.slice();
    newQuestions[index] = editedQuestion;
    setQuestions(newQuestions);
  };

  const handleDelete = (index) => {
    const newQuestions = questions.filter((question, i) => i !== index);
    setQuestions(newQuestions);
  };

 //Reads input value
  const handleQuestionChange = (event) => {
    setCurrentQuestion(event.target.value);
  };

//This submits the questions form
  const handleQuizAdd = (event) => {
    event.preventDefault();
    addQuestion(currentQuestion);
    setCurrentQuestion("");
  };




  return (
    <div className="container">
        <div className="header">
         <h2>Questions</h2>
      
      <form onSubmit={handleQuizAdd}>
        <input type="text" value={currentQuestion} onChange={handleQuestionChange} />
        <button type="addQuiz">ADD</button>
      </form>
        </div>
 
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <div className="question">{question}</div>
           
           <div id="buttons"> 
            <button onClick={() => handleEdit(index, prompt("Enter edited Version:"))}>Edit Question</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
            <button>Answer Question</button>
           
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default Quiz;