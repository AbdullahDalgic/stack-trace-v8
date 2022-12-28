# stack-trace-v8

> Get v8 stack traces as a detailed array of CallSite objects. Determine through which functions your code is called. either find the entire history of the code or detect the first or last function.

## Install

```
    npm install stack-trace-v8
    yarn add stack-trace-v8
```

## Usage

```
import StackTrace, { LastTrace, FirstTrace } from "stack-trace-v8";

const FirstFunction = () => {
  SecondFunction();
};

FirstFunction();

const SecondFunction = () => {
  console.log(StackTrace());
  console.log(LastTrace());
  console.log(FirstTrace());
};

// Output StackTrace:
// [
//   {
//     caller: "FirstFunction",
//     file: "http://localhost/index.js",
//     fileName: "index.js",
//     line: "1:1"
//   },
//   {
//     caller: "SecondFunction",
//     file: "http://localhost/index.js",
//     fileName: "index.js",
//     line: "1:1"
//   }
// ]

// Output LastTrace:
// {
//   caller: "SecondFunction",
//   file: "http://localhost/index.js",
//   fileName: "index.js",
//   line: "1:1"
// }

// Output FirstTrace:
// {
//   caller: "FirstFunction",
//   file: "http://localhost/index.js",
//   fileName: "index.js",
//   line: "1:1"
// }

```

## License

MIT (c) Abdullah Dalgıç
