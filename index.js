module.exports = () => {
  try {
    throw new Error();
  } catch (err) {
    const stack = err.stack;
    const regex = /(at .*? \(.*?\)(?!\d{1}))/g;
    const match = stack.match(regex);
    const history = [];

    if (typeof match === "object" && match !== null && match.length > 0) {
      match.forEach((item, index) => {
        if (index > 0) {
          const caller = item.split("at ")[1].split(" (")[0];
          const calledLine = item
            .split("at ")[1]
            .split(" (")[1]
            .split(")")[0]
            .split(":");
          const line =
            calledLine[calledLine.length - 2] +
            ":" +
            calledLine[calledLine.length - 1];
          const file = calledLine.slice(0, calledLine.length - 2).join(":");
          const fileName = file.split("/").pop();
          history.push({
            caller,
            file,
            fileName,
            line,
          });
        }
      });
    }
  }

  return history;
};
