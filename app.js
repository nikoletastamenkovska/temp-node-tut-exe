// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependencu - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties ect)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');
const items = [1, [2, [2, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
