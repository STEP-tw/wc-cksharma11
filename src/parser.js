const parse = function(args) {
  const seperatedArgs = args.join(' ').split(' ');
  const filenames = seperatedArgs.filter(x => !x.startsWith('-'));
  let options = seperatedArgs.filter(x => x.startsWith('-'));

  options = options.map(x => {
    let option = x.replace('-l', 'lineCount');
    option = option.replace('-w', 'wordCount');
    option = option.replace('-c', 'charCount');
    return option;
  });

  return { filenames, options };
};

module.exports = {
  parse
};
