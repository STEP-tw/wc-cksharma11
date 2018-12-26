const assert = require('assert');
const { format } = require('../src/format.js');

describe('format', () => {
  it('should give formatted output', () => {
    const lineCount = 1;
    const wordCount = 1;
    const charCount = 1;
    const filename = 'testfile';
    const args = { lineCount, wordCount, charCount, filename };
    const expectedOutput =
      '\t' + lineCount + '\t' + wordCount + '\t' + charCount + '\t' + filename;
    const actualOutput = format(args);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});
