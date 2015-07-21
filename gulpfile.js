var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    eslint = require('gulp-eslint'),
    rimraf = require('gulp-rimraf'),
    builder = require('systemjs-builder'),
    minifyHTML = require('gulp-minify-html'),
    imagemin = require('gulp-imagemin'),
    minifyCss = require('gulp-minify-css'),
    shell = require('gulp-shell'),
    pngquant = require('imagemin-pngquant');


gulp.task('eslint', function () {

    return gulp.src(['./app/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('clean', function () {
    return gulp
        .src('./dist/*', {read: false})
        .pipe(rimraf());
});

gulp.task('minify-image', function () {
    return gulp.src('app/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('minify-css', function() {
    return gulp.src('app/styles/*.css')
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('minify-html', function () {

    return gulp.src('./app/**/*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('./dist/'));

});

gulp.task('build-js', shell.task([
    'jspm bundle-sfx app/main dist/main.js'
]));

gulp.task('build-production', function(){

    runSequence("eslint", "clean", "minify-image", "minify-css", "minify-html", "build-js");

});