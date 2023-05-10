const { REGEX_MAP, REGEX_KEYS } = require("./constants");
const fsPromise = require("fs/promises");
const fs = require("fs");
const path = require("path");

const getRegexMatches = async (fileName) => {
  const data = await fsPromise.readFile(fileName, { encoding: "utf8" });
  const searchResults = {};
  REGEX_KEYS.forEach((regexType) => {
    const regex = new RegExp(REGEX_MAP[regexType], "g");
    const matches = data.match(regex);
    searchResults[regexType] = matches?.length || 0;
  });
  return searchResults;
};

const getAllFiles = (folderPath) => {
  let files = [];
  fs.readdirSync(folderPath).forEach((file) => {
    const absolutePath = path.join(folderPath, file);
    if (fs.statSync(absolutePath).isDirectory())
      return getAllFiles(absolutePath);
    else return files.push(absolutePath);
  });
  return files;
};

module.exports = { getAllFiles, getRegexMatches };
