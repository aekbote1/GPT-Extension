import classNames from 'classnames';
import React, { ReactElement, ReactNode } from 'react';

type ButtonProps = {
  children?: ReactNode;
  active?: boolean;
  onClick?: () => void;
  label?: string;
  className?: string;

};

export default function Button({ children, active, onClick, label, className}: ButtonProps): ReactElement {
  return (
    <button
      className={classNames(
        className
      )}
      onClick={onClick}
      type="button"
    >
      {label}
      {children}
    </button>
  );
}
