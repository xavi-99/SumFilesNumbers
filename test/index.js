import { expect } from "chai";


describe('Sum Files Numbers', () => {
  describe('SumFileNumbers function', () =>  {
    it('Sum number inside a single file with no path to other files inside', () => {
        expect(sumFilesNumbers('./test/testA.txt')).to.equal(6)
    });

    it('Sum number inside a single file with one path to other files inside', () => {
        expect(sumFilesNumbers('./test/testB.txt')).to.equal(8)
    });
    it('return 0 for empty files', () => {
        expect(sumFilesNumbers('./test/emptyFile.txt')).to.equal(0)
    });
  });
});