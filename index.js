import fs from "fs";

function readFile(path) {
  try {
    return fs.readFileSync(path, "utf-8");
  } catch (error) {
    console.log(error);
  }
}

export function sumFilesNumbers(pathFile, total = 0) {
  let file = readFile(pathFile),
    fileContent = file.split("\n");

  return fileContent.reduce((acc, currentValue) => {
    if (!currentValue) return;

    if (isFinite(currentValue)) return (acc += parseInt(currentValue));

    return sumFilesNumbers(currentValue, acc);
  }, total);
}

console.log(sumFilesNumbers("textFiles/C.txt"));
