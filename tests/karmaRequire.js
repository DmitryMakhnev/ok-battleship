var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});



require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '../public/scripts/',
  paths: {
    User: 'app/modules/User',
    Map: 'app/modules/Map',
    Ship: 'app/modules/Ship',
    //,
    socket: '../bower_components/socket.io-client/socket.io'
  },

  shim: {
    'jasmine': {
      exports: 'jasmine'
    }
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
