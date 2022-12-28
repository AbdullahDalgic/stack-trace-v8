import StackTrace, { LastTrace, FirstTrace } from "../src";

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
//     fileName: "index.ts",
//     line: "1:1"
//   },
//   {
//     caller: "SecondFunction",
//     file: "http://localhost/index.js",
//     fileName: "index.ts",
//     line: "1:1"
//   }
// ]
// Output LastTrace:
// {
//   caller: "SecondFunction",
//   file: "http://localhost/index.js",
//   fileName: "index.ts",
//   line: "1:1"
// }
// Output FirstTrace:
// {
//   caller: "FirstFunction",
//   file: "http://localhost/index.js",
//   fileName: "index.ts",
//   line: "1:1"
// }
