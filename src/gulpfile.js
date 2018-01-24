const gulp = require('gulp');

gulp.task('webpack', () => {
    // 转译
    const webpack = require('webpack-stream');
    const config = require('./webpack.config.js');
    return gulp.src('./js/**/*.ts')
        .pipe(webpack(config, require('webpack')))
        .pipe(gulp.dest('../www/js'));
});

gulp.task('less', () => {
    // 编译less
    const less = require('gulp-less');
    return gulp.src('./less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('../www/css'));
});

gulp.task('default', ['webpack', 'less']);


gulp.task('watch', () => {
    gulp.watch('less/**/*.less', ['less']);
    gulp.watch('js/**/*.ts', ['webpack']);

})