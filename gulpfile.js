var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
	return gulp.src(['sass/**/*.sass', 'sass/**/*.scss'])
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
	.pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
	gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']);
});

gulp.task('default', ['watch']);