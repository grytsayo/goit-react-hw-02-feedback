import React from 'react';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      {total > 0 ? (
        <ul>
          <li>
            <p>
              Good: <span>{good}</span>
            </p>
          </li>
          <li>
            <p>
              Neutral: <span>{neutral}</span>
            </p>
          </li>
          <li>
            <p>
              Bad: <span>{bad}</span>
            </p>
          </li>
          <p>
            Total: <span>{total}</span>
          </p>
          <p>
            Positive Feedback: <span>{positivePercentage} %</span>
          </p>
        </ul>
      ) : (
        <p>Here is nothing...</p>
      )}
    </>
  );
}

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;