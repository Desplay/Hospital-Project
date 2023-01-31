const check = (input) => {
  if (input < 10)
    return "0" + input;
  return input;
}

exports.time = () => {
  const Time = new Date();
  const Min = check(Time.getMinutes());
  const Hour = check(Time.getHours());
  const Day = Time.getDate();
  const Month = Time.getMonth() + 1;
  const Year = Time.getFullYear();
  return Hour + ":" + Min + " - " + Day + "/" + Month + "/" + Year;
};

exports.fullFormat = () => {
  return Date.now();
}
