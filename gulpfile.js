/**
 * Created by Sever on 2016/9/27.
 */


var gulp = require('gulp');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var gutil = require('gulp-util');



var myDevConfig = Object.create(webpackConfig);

var devCompiler = webpack(myDevConfig);

//编译
gulp.task("default", function(callback) {
    devCompiler.run(function(err, stats) {
        if (err) throw new gutil.PluginError("webpack:build-js", err);
        gutil.log("[webpack:build-js]", stats.toString({
            colors: true
        }));
        callback();
    });
});