module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        "less": {
            "main": {
                files: {
                    "assets/css/main.css": "assets/less/main.less"
                },
                options: {
                    yuicompress: true
                }
            }
        },
        "watch": {
            "main": {
                "files": ["assets/less/*.less"],
                "tasks": ["less:main"]
            }
        }
    });
    // Task Loading
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('build', ["less:main"]);
};