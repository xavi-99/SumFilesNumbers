import fs from "fs";

/**
 * Returns file content
 * @param {string} path - Path to the file.
 * @return {string} File content.
 */
function readFile(path) {
  try {
    return fs.readFileSync(path, "utf-8");
  } catch (error) {
    console.log(error);
  }
}


/**
 * Return sum of all numbers inside a file and numbers inside embed files inside the original one
 * @param {string} path - Path to the file.
 * @param {number} total - Total amount to be returned, by default is 0
 * @return {number} Total Sum numbers inside file and files
 */
export function sumFilesNumbers(pathFile, total = 0) {
  let file = readFile(pathFile),
    fileContent = file.split("\n");

  return fileContent.reduce((acc, currentValue) => {
    if (!currentValue) return;

    if (isFinite(currentValue)) return (acc += parseInt(currentValue));

    return sumFilesNumbers(currentValue, acc);
  }, total);
}

