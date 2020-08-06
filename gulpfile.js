const gulp = require('gulp');
const minify = require("gulp-babel-minify");
const sass = require('gulp-sass');
const autoprefixer  = require('gulp-autoprefixer');
const babel = require('gulp-babel');

var paths = {
	assets: {
		css: {
			src: './assets/src/css/**/*.scss',
			dist: './assets/dist/css',
		},
		js: {
			src: './assets/src/js/**/*.js',
			dist: './assets/dist/js'
		}
	},
};

const brandingStyles = () => {
	return gulp.src(paths.assets.css.src)
	  .pipe(sass().on('error', sass.logError))
	  .pipe(autoprefixer({cascade: false}))
	  .pipe(gulp.dest(paths.assets.css.dist))
  };

const brandingStylesMini = () => {
  return gulp.src(paths.assets.css.src)
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(autoprefixer({cascade: false}))
    .pipe(gulp.dest(paths.assets.css.dist))
};

const babelfy = () => {
	return gulp.src(paths.assets.js.src)
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(gulp.dest(paths.assets.js.dist))
};

const babelMini = () => {
	return gulp.src(paths.assets.js.src)
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(gulp.dest(paths.assets.js.dist));
}

const watchTemplates = () => {
	gulp.watch([paths.assets.css.src], brandingStyles),
	gulp.watch([paths.assets.js.src], babelfy);
};

const watch = gulp.parallel(watchTemplates)
watch.description = 'Watching for changes';

const defaultTasks = gulp.series(brandingStyles, babelfy, watch);
const build = gulp.series(brandingStylesMini, babelMini);

exports.brandingStyles = brandingStyles;
exports.babel = babelfy;
exports.babelMini = babelMini;
exports.build = build;
exports.default = defaultTasks;