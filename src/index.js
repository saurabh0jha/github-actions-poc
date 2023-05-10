const fs = require("fs");
const path = require("path");
const { getInputs } = require("../lib/git-utils");
const { getAllFiles, getRegexMatches } = require("../lib/utils");
const { REGEX_MAP, REGEX_KEYS, REGEX_TYPE_DESCRIPTIONS } = require("../lib/constants");

const main = async () => {
  const { folderPath } = getInputs();

  const filePaths = getAllFiles(folderPath);

  const totals = {};
  REGEX_KEYS.forEach(regexType => totals[regexType] = 0);

  const fileMatchCount = {};


  for (i=0; i < filePaths.length; i++){
    const currentFilePath = filePaths[i];
    const matches = await getRegexMatches(currentFilePath);
    REGEX_KEYS.forEach(regexType => totals[regexType] += matches[regexType]);
    fileMatchCount[currentFilePath] = matches;
  }

  console.log(totals);
  console.log(fileMatchCount);
};

main();
