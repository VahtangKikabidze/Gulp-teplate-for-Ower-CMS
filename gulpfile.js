var gulp = require("gulp");
var sass = require("gulp-sass");
var prefix = require("gulp-autoprefixer");
var wiredep = require('wiredep').stream;
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');


//STYLES
gulp.task('style-main', function () {
  gulp.src('sass/main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
    	browsers: ['last 15 versions']
    }))
    .pipe(gulp.dest('templates/site/css'));
});

gulp.task('style-fonts', function () {
    gulp.src('sass/fonts.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix({
            browsers: ['last 15 versions']
        }))
        .pipe(gulp.dest('templates/site/css'));
});

gulp.task('style-media', function () {
    gulp.src('sass/media.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix({
            browsers: ['last 15 versions']
        }))
        .pipe(gulp.dest('templates/site/css'));
});




gulp.task('watch', function () {
  gulp.watch('sass/main.sass', ['style-main']);
  gulp.watch('sass/fonts.sass', ['style-fonts']);
  gulp.watch('sass/media.sass', ['style-media']);
});


gulp.task('default', ['watch']);
