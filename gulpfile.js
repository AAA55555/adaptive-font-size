const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");


gulp.task('styles', function() {
    return gulp.src("css/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("css/**/*.+(scss|sass)", gulp.parallel('styles'));
});

gulp.task('default', gulp.parallel('watch', 'styles'));