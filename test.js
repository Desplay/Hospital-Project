const queue = require("./src/Models/Queue.core");

const test = new queue();

test.enqueue(1);
test.enqueue(3);
test.enqueue(5);

console.log(test.Return());