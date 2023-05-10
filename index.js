const fs = require("fs");
fs.readdirSync(".levels/").forEach(file => {
    //Print file name
    console.log(file)

    /*
    Run this to print the file contents
    console.log(readFileSync(".levels/" + file, {encoding: "utf8"}))
    */
});