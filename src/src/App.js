import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

@inject("fourQuizStore")
@observer
class App extends Component {
  render() {
  const { gameStart, quizState } = this.props.fourQuizStore;
  const { quizList, index, texts, playingGame, remainSec, correctAnswerList, wrongAnswerList } = quizState;
    return (
      <div className="App">
        <button
          onClick={gameStart}
        >
          게임시작
        </button>
        <div>
          질문: {playingGame ? quizList[index] : null}
        </div>
        <div>
          남은시간: {remainSec}
        </div>
        <div>
          당신의 답변:
          {texts.map((text, index) => (
            <div key={index}>
              {text}
            </div>
          ))}
        </div>
        <div>
          맞은 답:
          {correctAnswerList.map((correctAnswer, index) => (
            <div key={index}>
              {correctAnswer}
            </div>
          ))}
        </div>
        <div>
          틀린 답:
          {wrongAnswerList.map((wrongAnswer, index) => (
            <div key={index}>
              {wrongAnswer}
            </div>
          ))}
        </div>    
      </div>    
    );
  }
}

export default App;
