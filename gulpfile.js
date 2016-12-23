'use strict';

var gulp = require('gulp'),
    path = require('path'),
    uglify = require('gulp-uglify'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync');

var src = {
    scripts: 'src/scripts/*.js',
    styles: 'src/styles/*.css',
    images: 'src/images/*.{png,gif,jpg,jpeg}',
    html: 'src/*.html'
};

var dest = {
    scripts: 'dist/scripts/',
    styles: 'dist/styles/',
    images: 'dist/images/',
    html: 'dist'
}

gulp.task('style', function () {
    return gulp.src(src.styles)
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            remove: true
        }))
        .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest.styles))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('script', function () {
    return gulp.src(src.scripts)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest.scripts))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('image', function () {
    return gulp.src(src.images)
        .pipe(imagemin())
        .pipe(gulp.dest(dest.images))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('html', function () {
    return gulp.src(src.html)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(dest.html))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: 'falcon'
        },
    }, function (err, bs) {
        console.log(bs.options.getIn(["urls", "local"]));
    });

    gulp.watch(src.styles, ['style']);
    gulp.watch(src.scripts, ['script']);
    gulp.watch(src.images, ['image']);
    gulp.watch(src.html, ['html']);
});

gulp.task('default', function () {
    gulp.watch(src.styles, ['style']);
    gulp.watch(src.scripts, ['script']);
    gulp.watch(src.images, ['image']);
    gulp.watch(src.html, ['html']);
});

gulp.task('build', ['style', 'script', 'image', 'html']);