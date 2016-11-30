'use strict';

let gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    gutil = require('gulp-util');


gulp.task('mocha', function(){
    var reporterOptions = {
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

gulp.task('default', ['watch-mocha']);

