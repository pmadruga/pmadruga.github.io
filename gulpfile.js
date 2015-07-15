var gulp = require('gulp'),
    builder = require('systemjs-builder'),
    eslint = require('gulp-eslint'),
    rimraf = require('gulp-rimraf'),
    minifyHTML = require('gulp-minify-html');

gulp.task('build-js', function() {
});

gulp.task('clean', function() {
    return gulp.src('./dist/**/*.js', { read: false }) // much faster
        .pipe(rimraf());
});

gulp.task('eslint', function(){

    return gulp.src(['./app/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('minify-html', function() {
    var opts = {
        conditionals: true,
        spare:true
    };

    return gulp.src('./app/**/*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('serve', ['connect']);
gulp.task('build', ['clean','build-js', 'minify-html']);