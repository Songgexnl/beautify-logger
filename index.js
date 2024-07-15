const chalk = require("chalk");

const logTime = () => {
  let nowDate = new Date();
  return (
    nowDate.toLocaleDateString() +
    " " +
    nowDate.toLocaleTimeString([], { hour12: false })
  );
};

const info = (...args) => {
  console.log(logTime(), process.pid, chalk.bold.green("[INFO]"), ...args);
};

const error = (...args) => {
  console.log(logTime(), process.pid, chalk.bold.red("[ERROR]"), ...args);
};

const warn = (...args) => {
  console.log(logTime(), process.pid, chalk.bold.yellow("[WARN]"), ...args);
};

const debug = (...args) => {
  console.log(logTime(), process.pid, chalk.bold.blue("[DEBUG]"), ...args);
};

const underline = (...args) => {
  console.log(
    logTime(),
    process.pid,
    chalk.bold.green("[INFO]"),
    chalk.underline(...args)
  );
};

const italic = (...args) => {
  console.log(
    logTime(),
    process.pid,
    chalk.bold.green("[INFO]"),
    chalk.italic(...args)
  );
};

const strikethrough = (...args) => {
  console.log(
    logTime(),
    process.pid,
    chalk.bold.green("[INFO]"),
    chalk.strikethrough(...args)
  );
};

const bgRed = (...args) => {
  console.log(
    logTime(),
    process.pid,
    chalk.bold.red("[ERROR]"),
    chalk.bgRed(...args)
  );
};
module.exports = {
  info,
  error,
  warn,
  debug,
  underline,
  italic,
  strikethrough,
  bgRed,
};
