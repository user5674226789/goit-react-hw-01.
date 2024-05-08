import { useState, useEffect } from "react";

import Description from "./description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

const App = () => {
  const startFeedback = { good: 0, neutral: 0, bad: 0 };

  const [state, setState] = useState(() => {
    const storageFeedback = window.localStorage.getItem("saveFeedback");
    return storageFeedback !== null
      ? JSON.parse(storageFeedback)
      : startFeedback;
  });

  const feedbackReset = () => {
    setState(startFeedback);
  };
  useEffect(() => {
    window.localStorage.setItem("saveFeedback", JSON.stringify(state));
  }, [state]);

  let totalFeedback = 0;

  const updateFeedback = (feedbackType) => {
    setState({
      ...state,
      [feedbackType]: state[feedbackType] + 1,
    });
  };

  for (let i of Object.values(state)) {
    totalFeedback += i;
  }
  const positive = Math.round((state.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        feedbackReset={feedbackReset}
      />

      {totalFeedback > 0 ? (
        <Feedback feedback={state} totalFeedback={totalFeedback} positive={positive} />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
