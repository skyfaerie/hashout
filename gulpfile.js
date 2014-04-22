var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	nodemon = require('gulp-nodemon'),
	changed = require('gulp-changed'),
	imagemin = require('gulp-imagemin'),
	prefix = require('gulp-autoprefixer');

var path = {
	script:['js/**/*.js/','js/controller/**/*.js'],
	image: 'img/**/*',
	sass: 'sass/**/*.scss'
};

gulp.task('script', function() {
	return gulp.src(path.script)
		.pipe(changed('build/js'))
		.pipe(uglify())
		.pipe(concat('all.min.js'))
		.pipe(gulp.dest('build/js'));
});

gulp.task('image', function() {
	return gulp.src(path.image)
		.pipe(changed('build/img'))
		.pipe(imagemin({optimizationLevel: 5}))
		.pipe(gulp.dest('build/img'));
});

gulp.task('sass', function() {
	return gulp.src(path.sass)
		.pipe(changed('build/css'))
		.pipe(sass())
		.pipe(prefix('last 1 version', "> 1%", {cascade: true}))
		.pipe(gulp.dest('build/css'));
})

gulp.task('watch', function() {
	gulp.watch(path.script, ['script']);
	gulp.watch(path.image, ['image']);
	gulp.watch(path.sass, ['sass']);
});

gulp.task('develop', function() {
	nodemon({ script: 'app.js', ext: 'html jade js'})
	.on('change', ['script'])
	.on('restart', function() {
		console.log('restarted')
	})
});

gulp.task('default', ['script', 'image', 'sass', 'develop', 'watch']);
