const TEST_FOLDER_PATH = "tests/levels/";

const REGEX_ENUM = {
  STATIC: "STATIC",
  ATTRIBUTE: "ATTRIBUTE",
  DYNAMIC: "DYNAMIC",
};

REGEX_KEYS = Object.keys(REGEX_ENUM);

const REGEX_MAP = {
  [REGEX_ENUM.STATIC]: ">.[^(){}]*</",
  [REGEX_ENUM.ATTRIBUTE]:
    '((label)|(placeholder)|(title)|(caption)|(tip)|(header)|(heading))=".[^=]+"',
  [REGEX_ENUM.DYNAMIC]: "{`[A-Za-z]+",
};

const REGEX_TYPE_DESCRIPTIONS = {
  [REGEX_ENUM.STATIC]: "Static strings",
  [REGEX_ENUM.ATTRIBUTE]: "Component attribute strings",
  [REGEX_ENUM.DYNAMIC]: "Template literal and variable strings",
};

module.exports = {
  TEST_FOLDER_PATH,
  REGEX_KEYS,
  REGEX_MAP,
  REGEX_TYPE_DESCRIPTIONS,
};
