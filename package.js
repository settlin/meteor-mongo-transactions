Package.describe({
  name: 'settlin:mongo-transactions',
  version: '2.0.0',
  // Brief, one-line summary of the package.
  summary: 'Transaction for mongo via bhunjadi:mongo-transactions',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:settlin/meteor-mongo-transactions.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('2.6');
  api.use('typescript');
  api.use('promise');
  api.use('mongo');
  api.mainModule('src/index.ts', 'server');
});

Package.onTest(function(api) {
  api.use('typescript');
  api.use('settlin:mongo-transactions');
  api.use('mongo');
  api.use('underscore');
  api.use('meteortesting:mocha');
  api.mainModule('tests/server/index.ts', 'server');
  api.mainModule('tests/client/index.ts', 'client');
});
