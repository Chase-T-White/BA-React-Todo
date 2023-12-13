const healthBarTimer = (createdAt, dueBy) => {
  const currentDate = new Date().getTime();

  // calculate total amount of time to complete task
  const totalTime = new Date(dueBy).getTime() - new Date(createdAt).getTime();

  // calculate time remaining to complete task
  const remainingTime = new Date(dueBy).getTime() - currentDate;

  // health bar based on percentage of total time remaining
  let healthBarRemaining = ((remainingTime / totalTime) * 100).toFixed(0);

  if (Number(healthBarRemaining) < 0) {
    healthBarRemaining = "0";
  }

  // check if time remaining is 2 days or less
  const millisecondsOneDay = 24 * 3600000;

  let headsUpMessage =
    remainingTime <= millisecondsOneDay
      ? "danger"
      : remainingTime <= millisecondsOneDay * 2
      ? "warning"
      : null;

  return [Number(healthBarRemaining), headsUpMessage];
};

export default healthBarTimer;
