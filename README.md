# stack-trace-v8

> Get v8 stack traces as a detailed array of CallSite objects. Determine through which functions your code is called. either find the entire history of the code or detect the first or last function.

## Install

```
    npm install stack-trace-v8 --save
    yarn add stack-trace-v8 --save
```

## Usage

```
import StackTrace, { LastTrace, FirstTrace } from "stack-trace-v8";
console.log("StackTrace", StackTrace);
console.log("LastTrace", LastTrace);
console.log("FirstTrace", FirstTrace);

```

## License

MIT (c) Abdullah Dalgıç
