import sumFilesNumbers from "../index.mjs";


describe("Sum Files Numbers", () => {
  describe("SumFileNumbers function", () => {
    it("Sum number inside a single file with no path to other files inside", () => {
      var test = sumFilesNumbers('./test/testA.txt');
      expect(sumFilesNumbers("./test/testA.txt")).toBe(6);
    });

    it("Sum number inside a single file with one path to other files inside", () => {
      expect(sumFilesNumbers("./test/testB.txt")).toBe(8);
    });
    it("return 0 for empty files", () => {
      expect(sumFilesNumbers("./test/emptyFile.txt")).toBe(0);
    });
    it("Throws an error when path or file does not exists", () => {
      expect(() => {
        sumFilesNumbers("./test/unExistingFile.txt")
      }).toThrow(Error) 
    });
  });
});
