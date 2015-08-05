var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    eslint = require('gulp-eslint'),
    rimraf = require('gulp-rimraf'),
    htmlreplace = require('gulp-html-replace'),
    minifyHTML = require('gulp-minify-html'),
    imagemin = require('gulp-imagemin'),
    minifyCss = require('gulp-minify-css'),
    shell = require('gulp-shell'),
    pngquant = require('imagemin-pngquant');


gulp.task('eslint', function () {

    return gulp.src(['./src/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('clean', function () {
    return gulp
        .src('./dist/*', {read: false})
        .pipe(rimraf());
});

gulp.task('html-replace', function () {

    return gulp.src('index.html')
        .pipe(htmlreplace({
            production: {
                src: [['main.js']],
                tpl: '<script src="src/%s"></script>'
            }
        }))
        .pipe(gulp.dest('./dist'))

});

gulp.task('minify-image', function () {
    return gulp.src('assets/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('minify-css', function () {
    return gulp.src('assets/styles/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/assets/styles'));
});

gulp.task('minify-html', function () {

    return gulp.src('./src/**/*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('./dist/src/'));

});

gulp.task('build-js', shell.task([
    'jspm bundle-sfx src/main dist/src/main.js'
]));

gulp.task('build-production', function () {

    runSequence("eslint", "clean", "html-replace", "minify-image", "minify-css", "minify-html", "build-js");

});