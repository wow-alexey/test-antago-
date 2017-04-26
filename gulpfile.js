var gulp = require('gulp'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglifyjs'),
	concat = require('gulp-concat'),
    tinypng = require('gulp-tinypng'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    gulp.src('./dist/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(gulp.dest('./app/css'))
});

gulp.task('build', function () {
    gulp.src([
            './dist/img/**/*.jpg',
            './dist/img/**/*.jpeg',
            './dist/img/**/*.png'])
        .pipe(tinypng('hylLB7nSN6FcdAGX2fOWXTjDbCuJbvez'))
        .pipe(gulp.dest('app/img/'));
});

gulp.task('script', function() {
    return gulp.src([
        'dist/js/*.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

gulp.task('watch', ['script', 'sass'], function() {
 gulp.watch('dist/js/*.js', ['script']);
 gulp.watch('./dist/sass/*.scss', ['sass']);
});

// gulp.task('watch', ['sass', 'scripts'], function(){
// 	gulp.watch('dist/sass/**/*.scss', ['sass']);
// 	gulp.watch('dist/js/*.js', ['scripts']);
// });


gulp.task('default', ['watch']);