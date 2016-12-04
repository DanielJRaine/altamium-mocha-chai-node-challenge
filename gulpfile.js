'use strict';

let gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    gutil = require('gulp-util'),
    mochaPhantomJS = require('gulp-mocha-phantomjs');

let reporterOptions = {
    list: "-", 
    mochawesome: {
        stdout: "/tmp/mocha-multi.Progress.out",
        options: {
            verbose: true,
            reportDir: 'customReportDir',
            reportName: 'customReportName',
            reportTitle: 'customReportTitle',
            inlineAssets: true
        }
    }
};

gulp.task('phantom', function() {
    return gulp.src(['test/*.js'], {read: false})
        .pipe(mochaPhantomJS({
                     reporter: 'spec'
                    }))
        .on('error', gutil.log);
});

gulp.task('mocha', function(){
    return gulp.src(['test/*.js'], {read: false})
        .pipe(mocha({
                     reporter: 'mocha-multi',
                     reporterOptions: reporterOptions,
                    }))
        .on('error', gutil.log);
});

gulp.task('watch-mocha', function() {
    gulp.run('mocha');
    gulp.watch(['./**/*.js', 'test/**/*.js'], ['mocha']);
});

gulp.task('watch-phantom', function() {
    gulp.run('phantom');    
    gulp.watch(['./**/*.js', 'test/**/*.js'], ['phantom']);
})

gulp.task('default', ['watch-mocha', 'watch-phantom']);

