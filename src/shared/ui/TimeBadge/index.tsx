import { FC } from 'react';
import { TTimeBadgeProps } from './types';
import styles from './style.module.css';

const TimeBadge: FC<TTimeBadgeProps> = ({ time }) => {
  return <div className={styles.badge}>{time}м</div>;
};

export default TimeBadge;
