const gulp = require('gulp');

// Minify CSS
const cleanCSS = require('gulp-clean-css');
function minifyCss() {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/css'));
}

// Minify JS
const minify = require('gulp-minify');
function minifyJs() {
    return gulp.src('src/scripts/*.js')
        .pipe(minify())
        .pipe(gulp.dest('dist/scripts'));
}

// Minify SVG
const svgmin = require('gulp-svgmin');
function minifySvg() {
    return gulp.src('src/graphics/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('dist/graphics'));
}

// Minify HTML
const htmlmin = require('gulp-htmlmin');
function minifyHtml() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('dist'));
}

// Copy sound files as-is
function copySounds() {
    return gulp.src('src/sounds/**/*')   // all files inside src/sounds
        .pipe(gulp.dest('dist/sounds'));
}

// Build task: run everything in parallel
const build = gulp.parallel(
    minifyCss,
    minifyJs,
    minifySvg,
    minifyHtml,
    copySounds
);

// Watch task: watch all relevant files
function watch() {
    gulp.watch('src/css/*.css', minifyCss);
    gulp.watch('src/scripts/*.js', minifyJs);
    gulp.watch('src/graphics/*.svg', minifySvg);
    gulp.watch('src/*.html', minifyHtml);
    gulp.watch('src/sounds/**/*', copySounds);  // watch sounds
}

// Exports
exports.build = build;
exports.watch = gulp.series(build, watch);
exports.default = build;
