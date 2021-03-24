import React from 'react';
import classNames from 'classnames';

function Button(props) {
  return (
    <button
      className={classNames('button', props.className, {
        'button--outline': props.outline,
      })}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
