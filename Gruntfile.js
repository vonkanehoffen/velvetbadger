module.exports = function (grunt) {
  "use strict";
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/js/main.js',
      ]
    },
    uglify: {
      dist: {
        files: {
          'assets/js/main.min.js': [
            'assets/js/main.js',
          ]
        },
        options: {
          sourceMap: 'assets/js/main.min.js.map',
          sourceMappingURL: '/assets/js/main.min.js.map'
        }
      }
    },
    less: {
      main: {
        files: {
          'assets/css/main.css': 'assets/less/main.less'
        },
        options: {
          compress: true
        }
      }
    },
    watch: {
      less: {
        files: ['assets/less/*.less'],
        tasks: ['less']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify']
      },
    }
  });
  // Task Loading
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['less', 'jshint', 'uglify']);

};