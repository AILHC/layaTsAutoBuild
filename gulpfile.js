var gulp = require("gulp");
var tsify = require('tsify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require("watchify");
var gutil = require("gulp-util");
var gConfig = require('./gulpConfig')
var rev = require('gulp-rev');//- 对文件名加MD5后缀
var revCollector = require('gulp-rev-collector');//- 路径替换
//编译
var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: [gConfig.entry],
    cache: {},
    packageCache: {}
})
.plugin(tsify,{
    module: "commonjs",
    target: "es5",
    sourceMap: true,
    outDir: "./bin//js",
}));

function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("./bin/js"))//- 输出文件本地

}
//当更新之后就打包
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);
gulp.task("default",bundle);

gulp.task('rev',['default'],function(){
    return gulp.src('./bin/js/*.js')
    .pipe(rev())
    .pipe(gulp.dest('./bin/js'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./bin/js'));
})
gulp.task('revCollector',['rev'],function(){
    return gulp.src(['./bin/js/*.json','./bin/*.html'])
    .pipe(revCollector())
    .pipe(gulp.dest('./bin'))
})
