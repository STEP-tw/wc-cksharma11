const assert = require('assert');
const { parse } = require('../src/parser.js');

describe('parse', () => {
  it('should give option and filename when one option provided', () => {
    const args = ['-l', 'file'];
    const expectedOutput = { filenames: ['file'], options: ['lineCount'] };
    const actualOutput = parse(args);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should give option and filename when two option provided', () => {
    const args = ['-l', '-w', 'file'];
    const expectedOutput = {
      filenames: ['file'],
      options: ['lineCount', 'wordCount']
    };
    const actualOutput = parse(args);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should give option and filename when three option provided', () => {
    const args = ['-l', '-w', '-c', 'file'];
    const expectedOutput = {
      filenames: ['file'],
      options: ['lineCount', 'wordCount', 'charCount']
    };
    const actualOutput = parse(args);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should give option and filename when no option provided', () => {
    const args = ['file'];
    const expectedOutput = { filenames: ['file'], options: [] };
    const actualOutput = parse(args);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should give option and filename when num of file > 1', () => {
    const args = ['-l', 'file', 'file2'];
    const expectedOutput = {
      filenames: ['file', 'file2'],
      options: ['lineCount']
    };
    const actualOutput = parse(args);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});
