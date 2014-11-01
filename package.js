Package.describe({
    name: 'fuatsengul:iron-router-auth',
    summary: "Iron:Router Auth for 1.0",
    version: "1.0.7",
    git: "https://github.com/fuatsengul/iron-router-auth"
    
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.use([
    'iron:router@1.0.0', 'session@1.0.0', 'underscore@1.0.0'
    ], 'client');
    api.addFiles('lib/iron-router-auth.js', 'client');
});


Package.onTest(function(api) {
  api.use('tinytest');
});