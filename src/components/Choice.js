import { h } from 'hyperapp';
import cc from 'classcat';

import './Choice.css';

export default ({
  text, isComplete, isCorrect, isSelected, ...rest
}) => (
  <button
    {...rest}
    class={
      isComplete
        ? cc({
          choice: true,
          'is-correct': isCorrect,
          'is-selected': isSelected,
          'is-incorrect': isSelected && !isCorrect,
        })
        : 'choice'
    }
  >
    {text}
  </button>
);
