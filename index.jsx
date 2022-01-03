import React from 'react';
import clsx from 'clsx';
import styles from './Alert.module.css';

const AlertOutput = (
  {
    data,
  },
) => {
  if (!data || !data.type || !data.message) return null;

  return <div className={clsx(styles.alert, styles[data.type])}>{data.message}</div>;
};

export default AlertOutput;
