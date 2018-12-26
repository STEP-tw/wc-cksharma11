const assert = require('assert');
const { format, TAB } = require('../src/format.js');

describe('format', () => {
  it('should give formatted output', () => {
    const lineCount = 1;
    const wordCount = 1;
    const charCount = 1;
    const filename = 'testfile';

    const args = { lineCount, wordCount, charCount, filename };

    const expectedOutput = ['', lineCount, wordCount, charCount, filename].join(
      TAB
    );
    const actualOutput = format(args);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});
