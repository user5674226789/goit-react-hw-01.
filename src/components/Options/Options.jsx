import css from "./Options.module.css";

export default function Options({ updateFeedback, totalFeedback, feedbackReset }) {

  return (
    <div className={css.buttonsBlock}>
      <button className={css.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.button} onClick={feedbackReset}>
          Reset
        </button>
      )}

    </div>
  );
}
