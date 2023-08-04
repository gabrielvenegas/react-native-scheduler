import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Props for the Scheduler component.
 * @param onExecute - The function to be executed.
 * @param hour - The hour of the day to execute the function (0-23).
 * @param minute - The minute of the hour to execute the function (0-59).
 * @param second - The second of the minute to execute the function (0-59).
 */
interface SchedulerProps {
  onExecute: () => Promise<void>;
  /**
   * @param hour - The hour of the day to execute the function (0-23).
   */
  hour: number;
  /**
   * @param minute - The minute of the hour to execute the function (0-59).
   */
  minute: number;
  /**
   * @param second - The second of the minute to execute the function (0-59).
   */
  second: number;
}

/**
 * Runs a function at the same time every day.
 * @param hour - The hour of the day to execute the function (0-23).
 * @param minute - The minute of the hour to execute the function (0-59).
 * @param second - The second of the minute to execute the function (0-59).
 * @param callback - The function to be executed.
 */
export const runFunctionAtSameTimeEveryDay = (
  hour: number,
  minute: number,
  second: number,
  callback: () => Promise<void>
) => {
  // Get the current time in milliseconds.
  const now = Date.now();

  // Create a new Date object representing the scheduled time.
  const scheduledTime = new Date(now);

  // Set the scheduled time to the specified hour, minute, and second.
  scheduledTime.setHours(hour, minute, second, 0);

  // If the scheduled time is in the past, add one day to the scheduled time.
  if (scheduledTime.getTime() < now) {
    scheduledTime.setDate(scheduledTime.getDate() + 1);
  }

  // Calculate the delay until the scheduled time in milliseconds.
  const delay = scheduledTime.getTime() - now;

  // Call the callback function after the delay.
  setTimeout(() => {
    callback();

    // Call the callback function every 24 hours.
    setInterval(() => {
      callback();
    }, 24 * 60 * 60 * 1000);
  }, delay);
};

/**
 * A component that runs a function at the same time every day.
 * @component
 * @param {SchedulerProps} props - The props of the component.
 * @param {Function} props.onExecute - The function to be executed.
 * @param {number} props.hour - The hour of the day to execute the function (0-23).
 * @param {number} props.minute - The minute of the hour to execute the function (0-59).
 * @param {number} props.second - The second of the minute to execute the function (0-59).
 * @returns {null}
 */
const Scheduler: React.FC<SchedulerProps> = ({
  onExecute,
  hour,
  minute,
  second,
}) => {
  useEffect(
    () => runFunctionAtSameTimeEveryDay(hour, minute, second, onExecute),
    [onExecute, hour, minute, second]
  );

  return null;
};

Scheduler.propTypes = {
  onExecute: PropTypes.func.isRequired,
  hour: PropTypes.number.isRequired,
  minute: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
};

export { Scheduler };
