const { extensionByMimeType } = require('./src/index');

const init = () => {
  const test = extensionByMimeType('text/csv');

  console.log(test);
};

init();
