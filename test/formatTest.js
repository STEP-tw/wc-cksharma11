const assert = require('assert');
const { getFormatter } = require('../src/format.js');
const { TAB, NEWLINE } = require('../src/constants.js');

describe('format', () => {
  describe('singleFileFormatter', () => {
    const lineCount = 1;
    const wordCount = 1;
    const charCount = 1;
    const filename = ['testfile'];
    const result = [{ lineCount, wordCount, charCount, filename }];
    const formatter = getFormatter(filename);

    it('should give formatted output for three options', () => {
      const expectedOutput = [
        '',
        lineCount,
        wordCount,
        charCount,
        filename
      ].join(TAB);
      const options = ['lineCount', 'wordCount', 'charCount'];
      const actualOutput = formatter(result, options);

      assert.deepEqual(actualOutput, expectedOutput);
    });

    it('should give formatted output for two options', () => {
      const options = ['lineCount', 'wordCount'];
      const expectedOutput = ['', lineCount, wordCount, filename].join(TAB);
      const actualOutput = formatter(result, options);

      assert.deepEqual(actualOutput, expectedOutput);
    });

    it('should give formatted output for single option', () => {
      const options = ['lineCount'];
      const expectedOutput = ['', lineCount, filename].join(TAB);
      const actualOutput = formatter(result, options);

      assert.deepEqual(actualOutput, expectedOutput);
    });
  });

  describe('multipleFileFormatter', () => {
    const result = [
      { lineCount: 1, wordCount: 1, charCount: 1, filename: 'A' },
      { lineCount: 1, wordCount: 1, charCount: 1, filename: 'B' }
    ];
    const formatter = getFormatter(['A', 'B']);

    it('should format multiple file with one option', () => {
      const options = ['lineCount'];
      let expectedOutput = ['', 1, 'A'].join(TAB) + NEWLINE;
      expectedOutput += ['', 1, 'B'].join(TAB) + NEWLINE;
      expectedOutput += ['', 2, 'total'].join(TAB);

      const actualOutput = formatter(result, options);

      assert.equal(actualOutput, expectedOutput);
    });

    it('should format multiple file with two option', () => {
      const options = ['lineCount', 'wordCount'];
      let expectedOutput = ['', 1, 1, 'A'].join(TAB) + NEWLINE;
      expectedOutput += ['', 1, 1, 'B'].join(TAB) + NEWLINE;
      expectedOutput += ['', 2, 2, 'total'].join(TAB);

      const actualOutput = formatter(result, options);

      assert.equal(actualOutput, expectedOutput);
    });

    it('should format multiple file with three option', () => {
      const options = ['lineCount', 'wordCount', 'charCount'];
      let expectedOutput = ['', 1, 1, 1, 'A'].join(TAB) + NEWLINE;
      expectedOutput += ['', 1, 1, 1, 'B'].join(TAB) + NEWLINE;
      expectedOutput += ['', 2, 2, 2, 'total'].join(TAB);

      const actualOutput = formatter(result, options);

      assert.equal(actualOutput, expectedOutput);
    });
  });
});
