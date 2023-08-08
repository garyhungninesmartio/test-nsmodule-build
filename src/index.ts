import message from "./deeper/module";

type FuncParam = {
  name: String;
};

function printThyName(opts: FuncParam) {
  message(opts.name);
}

printThyName({ name: "Build Process 0.1.0" });
