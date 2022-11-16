import { useState } from "react";

import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";
import Wrapper from "./components/Wrapper/Wrapper";
import Button from "./components/ButtonReset/ButtonReset";


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedback = () => {
    return Math.round((100 / countTotalFeedback()) * good);
  };

  const addFeedback = (buttonTitle) => {
    console.log(buttonTitle);
    switch (buttonTitle) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        return;
    }
  };

  const resetFeedbackCount = () => {

    setGood(0);
    setNeutral(0);
    setBad(0);
  };


  const options = Object.keys({ good, neutral, bad });

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          handleFeedback={addFeedback}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistic">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedback()}
          ></Statistics>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>

      <Button title="reset"
        onClickReset={resetFeedbackCount}>

      </Button>



    </Wrapper>
  )

}


//class App extends Component {
//state = {
//    good: 0,
//   neutral: 0,
//    bad: 0,
//  };

//  countTotalFeedback() {
//    const { good, neutral, bad } = this.state;

//    return good + neutral + bad;
//  }

//  countPositiveFeedbackPercentage() {
//    const totalCount = this.countTotalFeedback();

//    return Math.round((this.state.good * 100) / totalCount);
//  }

//  handleFeedback(type) {
//    this.setState((prevState) => ({ [type]: prevState[type] + 1 }));
//  }

//  render() {
//    const {
//      handleFeedback,
//      state,
//      countTotalFeedback,
//      countPositiveFeedbackPercentage,
//    } = this;
//    const { good, neutral, bad } = state;

//    const totalStatistic = countTotalFeedback.call(this);
//    const positivePercentage = countPositiveFeedbackPercentage.call(this);

//    return (
//      <>
//        <Section title="Please leave your feedback">
//          <FeedbackOptions
//            options={["good", "neutral", "bad"]}
//            handleFeedback={handleFeedback.bind(this)} //Без этого падает рендер
//          />
//        </Section>

//        <Section title="Statistics">
//          {totalStatistic ? (
//            <Statistics
//              good={good}
//              neutral={neutral}
//              bad={bad}
//              total={totalStatistic}
//              positivePercentage={positivePercentage}
//            />
//          ) : (
//            <Notification message="No feedback given" />
//          )}
//        </Section>
//         </>
//    );
//  }
// }

//export default App;