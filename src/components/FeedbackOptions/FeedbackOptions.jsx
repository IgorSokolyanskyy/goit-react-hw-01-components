import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.items}>
    {options.map(option => (
      <li key={option} className={css.item}>
        <button
          type="button"
          value={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
