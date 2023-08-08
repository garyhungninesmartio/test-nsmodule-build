"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var module_1 = require("./deeper/module");
function printThyName(opts) {
    (0, module_1.default)(opts.name);
}
printThyName({ name: "Build Process 0.1.0" });
