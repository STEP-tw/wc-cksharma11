const assert = require('assert');
const { format } = require('../src/format.js');
const { TAB } = require('../src/constants.js');

describe('format', () => {
  const lineCount = 1;
  const wordCount = 1;
  const charCount = 1;
  const filename = 'testfile';
  const args = { lineCount, wordCount, charCount, filename };

  it('should give formatted output for three options', () => {
    const expectedOutput = ['', lineCount, wordCount, charCount, filename].join(
      TAB
    );
    const options = ['lineCount', 'wordCount', 'charCount'];
    const actualOutput = format(args, options);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should give formatted output for two options', () => {
    const options = ['lineCount', 'wordCount'];
    const expectedOutput = ['', lineCount, wordCount, filename].join(TAB);
    const actualOutput = format(args, options);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should give formatted output for single option', () => {
    const options = ['lineCount'];
    const expectedOutput = ['', lineCount, filename].join(TAB);
    const actualOutput = format(args, options);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});
