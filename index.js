// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const returnObject = {...driver};
  returnObject[key] = value;
  return returnObject;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const returnObject = {...driver};
  delete returnObject[key];
  return returnObject;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
