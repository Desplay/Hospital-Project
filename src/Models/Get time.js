const check = (input) => {
  if (input < 10)
    return "0" + input;
  return input;
}

exports.time = () => {
  const temp = new Date();
  const Min = check(temp.getMinutes());
  const Hour = check(temp.getHours());
  const Day = temp.getDate();
  const Month = temp.getMonth() + 1;
  const Year = temp.getFullYear();
  return Hour + ":" + Min + " - " + Day + "/" + Month + "/" + Year;
};

exports.fullFormat = () => {
  return Date.now();
}
