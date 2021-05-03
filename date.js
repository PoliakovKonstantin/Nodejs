yarn add yargs;
const yargs=require("yargs/yargs");
const {hidebin}=require('yargs/helpers');
const argv=yargs(hidebin(process.argv)).argv;
console.log(argv)
