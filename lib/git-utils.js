const core = require("@actions/core");
const github = require("@actions/github");
const { TEST_FOLDER_PATH } = require("./constants");

const getInputs = () => {
  let folderPath;
  try {
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
    // `who-to-greet` input defined in action metadata file
    folderPath = core.getInput("folderPath"); // TEST_FOLDER_PATH;
    console.log(`Folder: ${folderPath}`);
  } catch (error) {
    core.setFailed(error.message);
  } finally {
    return { folderPath };
  }
};

module.exports = { getInputs };
