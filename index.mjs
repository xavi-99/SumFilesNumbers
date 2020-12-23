import fs from "fs";

/**
 * Returns file content
 * @param {string} path - Path to the file.
 * @return {string} File content.
 */
function readFile(path) {
  if (!fs.existsSync(path)) {
    throw new Error("Path or file does not exist");
  }
  return fs.readFileSync(path, "utf-8");
}

/**
 * Return sum of all numbers inside a file and numbers inside embed files inside the original one
 * @param {string} path - Path to the file.
 * @param {number} total - Total amount to be returned, by default is 0
 * @return {number} Total Sum numbers inside file and files
 */
export default function sumFilesNumbers(pathFile, total = 0) {
  let file = readFile(pathFile),
    fileContent = file.split("\n");

  return fileContent.reduce((acc, currentValue) => {
    if (!currentValue) return acc;

    if (isFinite(currentValue)) return (acc += parseInt(currentValue));

    return sumFilesNumbers(currentValue, acc);
  }, total);
}

/**
 * Demo logs to simulate this function
 */
// console.log(sumFilesNumbers('./textFiles/A.txt'))
// console.log(sumFilesNumbers('./textFiles/B.txt'))
// console.log(sumFilesNumbers('./textFiles/C.txt'))
