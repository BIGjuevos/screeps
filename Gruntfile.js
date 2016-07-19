module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({
        copy: {
            main: {
                expand: true,
                cwd: 'src2',
                src: '**',
                dest: 'dist/'
            }
        },
        screeps: {
            options: {
                email: 'ryan.null@gmail.com',
                password: 'Ryanr0ck7!',
                branch: 'default',
                ptr: false
            },
            dist: {
                src: ['dist/*.js']
            }
        }
    });
};