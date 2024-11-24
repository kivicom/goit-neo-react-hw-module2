import style from './Feedback.module.css';

const Feedback = ({ feedback, total, positivePercentage }) => {
  return (
    <>
      <ul className={style['feedback-stats']}>
        <li>
          Good: <strong>{feedback.good}</strong>
        </li>
        <li>
          Neutral: <strong>{feedback.neutral}</strong>
        </li>
        <li>
          Bad: <strong>{feedback.bad}</strong>
        </li>
        <li>
          Total: <strong>{total}</strong>
        </li>
        <li>
          Positive: <strong>{positivePercentage}%</strong>
        </li>
      </ul>
    </>
  );
};

export default Feedback;
