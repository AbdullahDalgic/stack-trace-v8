/*!
 * stack-trace.js - Stack trace for JavaScript
 * Copyright(c) 2022 Abdullah Dalgic
 * MIT Licensed
 */

interface ITrace {
  caller?: string;
  file?: string;
  line?: string;
}

let allTraces: ITrace[] = [];

const traces = function () {
  allTraces = [];

  try {
    throw new Error();
  } catch (err: any) {
    const stack = err.stack;
    const regex = /(at .*? \(.*?\)(?!\d{1}))/g;
    const match = stack.match(regex);

    if (typeof match === "object" && match !== null && match.length > 0) {
      match.forEach((item: string, index: number) => {
        if (index > 2) {
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
          // const file =
          allTraces.push({
            caller,
            file,
            line,
          });
        }
      });
    }
  }

  return allTraces;
};

export default function StackTrace() {
  return traces();
}

export function LastTrace() {
  return traces()[allTraces.length - 1];
}
