'use strict';

var argv         = require('minimist')(process.argv.slice(2))
    , gulp            = require('gulp')
    , gutil         = require('gulp-util')
    , watch         = require('gulp-watch')
    , sass          = require('gulp-sass')
    , livereload    = require('gulp-livereload')
    , prefix        = require('gulp-autoprefixer')
    , cssNano       = require('gulp-cssnano')
    , htmlMin       = require('gulp-htmlmin')
    , imagemin      = require('gulp-imagemin')
    , uglify        = require('gulp-uglify')
    , concat        = require('gulp-concat')
    , rename        = require('gulp-rename')
    , jade          = require('gulp-jade')
    , express       = require('express')
    , path          = require('path')
    , opn           = require('opn')
    , del           = require('del');

// Compile jade to html
gulp.task('jade', function() {

    gulp.src('./app/jade/template/**/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./dist/'))
});

// Compile sass to css
gulp.task('sass', function () {
    gulp.src('./app/scss/terasbintang.scss')
        .pipe(sass({
            //outputStyle: 'compressed',
            errLogToConsole: true
        }).on('error', sass.logError))
        .pipe(prefix('last 2 version', '> 5%', 'safari 5', 'ie 8', 'ie 7', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('./dist/css/'));
});

// Server
/*gulp.task('server', function(){
    var server = express()
        .use(express.static(path.resolve('dist')))
        .listen(8080);
    gutil.log('Server listening on port 8080');
});

gulp.task('livereload', function(){
    livereload.listen(35729, function(err) {
        if(err) gutil.log('Livereload error:', err);
    })
});*/

gulp.task('watch', function(){
    watch('./app/jade/**/*.jade', function(){
       gulp.start('jade')
    });

    watch('./app/scss/**/*.scss', function(){
        gulp.start('sass')
    });

    gulp.watch([
        './app/coffee/**/*.coffee',
        './app/css/**/*.css',
        './app/jade/**/*.jade',
        './app/scss/**/*.scss'
    ], function(evt){
        livereload.changed(evt.path);
    });
});

gulp.task('default', [
    'sass', 'jade',
    // 'server', 'livereload',
    'watch'
], function(){
});