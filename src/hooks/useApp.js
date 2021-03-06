import React from 'react';
import { AppContext } from '../contexts/app';

export default () => {
  const context = React.useContext(AppContext);

  if (!context) {
    throw new Error('Component branch outside of AppProvider.');
  }

  return context;
}