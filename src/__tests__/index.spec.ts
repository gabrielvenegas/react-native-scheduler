import { runFunctionAtSameTimeEveryDay } from "..";


describe('runFunctionAtSameTimeEveryDay', () => {
  test('should call the callback function at the specified time', () => {
    // Mock the callback function.
    const callback = jest.fn();

    // Get current hour, minute, and second.
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    // Call the function with a scheduled time of 12:00:00 PM.
    runFunctionAtSameTimeEveryDay(hour, minute, second, callback);

    // Advance the clock to the scheduled time.
    jest.advanceTimersByTime(24 * 60 * 60 * 1000);

    // Expect the callback function to have been called once.
    expect(callback).toHaveBeenCalledTimes(1);
  });
});