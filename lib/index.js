const { types: mimeTypes } = require('./types');

const extensionByMimeType = mimeType => {
  const extension = mimeTypes[mimeType];

  if (!extension) {
    return 'File extension not found from mime type';
  }

  return extension.replace('.', '');
};

module.exports = {
  extensionByMimeType
};