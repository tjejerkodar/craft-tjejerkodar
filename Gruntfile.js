module.exports = function(grunt) {
grunt.initConfig({
  sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'public/css/build/main.css': 'public/css/dev/main.scss',       // 'destination': 'source'
      }
    }
  },
  watch: {
    files: ['public/css/dev/**/*'],
    tasks: ['default'],
  }
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['sass']);

}