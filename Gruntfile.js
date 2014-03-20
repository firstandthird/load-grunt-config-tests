module.exports = function(grunt) {

  grunt.registerMultiTask('echo', 'Echo back input', function(){
    grunt.log.writeln(JSON.stringify(this.data));
  });

  var obj = require('load-grunt-config')(grunt, {
    data: {
      name: '<%= package.name %>',
      message: 'This is a message'
    }
  });
  console.log('Config object:');
  console.log(JSON.stringify(obj));
  console.log('');
};
