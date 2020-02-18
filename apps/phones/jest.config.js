module.exports = {
  name: 'phones',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/phones',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
