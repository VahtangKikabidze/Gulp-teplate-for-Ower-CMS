var gulp = require("gulp");
var sass = require("gulp-sass");
var prefix = require("gulp-autoprefixer");
var wiredep = require('wiredep').stream;
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');







//STYLES
gulp.task('style', function () {
  gulp.src('sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
    	browsers: ['last 15 versions']
    }))
    .pipe(gulp.dest('templates/site/css'));
});

gulp.task('watch', function () {
  gulp.watch('sass/**/*.sass', ['style']);
});


gulp.task('default', ['watch']);
