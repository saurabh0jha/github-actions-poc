const core = require("@actions/core");
const github = require("@actions/github");
const { TEST_FOLDER_PATH } = require("./constants");

const getInputs = () => {
  let folderPath;
  try {
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = github.context.payload;
    console.log(`The event payload: ${JSON.stringify(payload, undefined, 2)}`);
    // `folderPath` input defined in action metadata file
    folderPath = payload.workflow ? core.getInput("folderPath"): TEST_FOLDER_PATH;
    console.log(`Folder: ${folderPath}`);
  } catch (error) {
    core.setFailed(error.message);
  } finally {
    return { folderPath };
  }
};

module.exports = { getInputs };
