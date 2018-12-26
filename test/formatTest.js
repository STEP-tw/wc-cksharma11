const assert = require('assert');
const { getFormatter, TAB } = require('../src/format.js');

describe('format', () => {
  const lineCount = 1;
  const wordCount = 1;
  const charCount = 1;
  const filename = 'testfile';
  const args = { lineCount, wordCount, charCount, filename };

  it('should give formatted output for three options', () => {
    const formatter = getFormatter(['lineCount', 'wordCount', 'charCount']);
    const expectedOutput = ['', lineCount, wordCount, charCount, filename].join(
      TAB
    );
    const actualOutput = formatter(args);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should give formatted output for two options', () => {
    const options = ['lineCount', 'wordCount'];
    const formatter = getFormatter(options);
    const expectedOutput = ['', lineCount, wordCount, filename].join(TAB);
    const actualOutput = formatter(args, options);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should give formatted output for single option', () => {
    const options = ['lineCount'];
    const formatter = getFormatter(options);
    const expectedOutput = ['', lineCount, filename].join(TAB);
    const actualOutput = formatter(args, options);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});
