module.exports = function(grunt) {
	grunt.initConfig({
	  watch: {
	    files: ['**/*'],
	    tasks: ['jshint'],
	    options: {
			livereload: true,
			spawn: false
		}
	  }
	});
};