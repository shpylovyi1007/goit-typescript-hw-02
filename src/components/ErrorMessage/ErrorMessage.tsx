import css from './ErrorMessage.module.css'
import React from 'react';
import { IMessageProps } from './ErrorMessage.types';


const ErrorMessage: React.FC<IMessageProps> = ({ message }) => {
  return <span className={css.errorMessage}>{message}</span>;
};

export default ErrorMessage;