var gulp = require('gulp');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

//压缩js
gulp.task('minifyJavascript',function () {
    gulp.src('./js/*.js')
        .pipe(concat('min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
})

//压缩css
gulp.task('miniCss',function () {
    gulp.src('./css/*.css')
        .pipe(concat('all.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./css'));
})

//启动一个服务
gulp.task('webserver',function () {
    gulp.src('./')
        .pipe(webserver({
            port:8800,
            livereload:{
                enable:true
            },
            directoryListing:{
                path:'./',
                enable:true
            },
            open:true,
            fallback:'index.html'
        }))
})