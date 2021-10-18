const { src, dest, series } = require('gulp');
// const sass = require('gulp-sass')(require('sass'));
// const csso = require('gulp-csso');
const htmlmin = require('gulp-htmlmin');

//Пакет отвечающий за слепку нескольких файлов
const include = require('gulp-file-include');
//Пакет обновления страницы браузера
// const sync = require('browser-sync').create();

//Пакет del чистит папки
const del = require('del');

const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');

//Соединяет множество файлов в 1
const concat = require('gulp-concat');

//Автоматически ставит префиксы
// const autoprefixer = require('gulp-autoprefixer');

//обработка html
function html() {
  // Указываем источник и формат файлов которые надо будет обрабатывать
  return (
    src('src/**.html')
      //Используем obj include для связки кусков html кода из разных файлов
      .pipe(
        include({
          prefix: '@@',
        })
      )
      // Пакет htmlmin минифицирует html файлы
      .pipe(
        htmlmin({
          collapseWhitespace: true,
        })
      )
      //dest результирущий пакет, производит обработку файлов и вставляет их в указанную папку
      .pipe(dest('dist'))
  );
}

function js() {
  return src('src/script/**.js').pipe(dest('dist/script'));
}

function images() {
  // Указываем источник и формат файлов которые надо будет обрабатывать
  return src('src/img/**').pipe(dest('dist/img'));
}

function icons() {
  // Указываем источник и формат файлов которые надо будет обрабатывать
  return src('src/img/icon/**').pipe(dest('dist/img/icon'));
}

function scss() {
  // Указываем источник и формат файлов которые надо будет обрабатывать
  return (
    src('src/style/**.scss')
      //метод .sass компилирует файлы в css
      .pipe(sass())
      // Пакет csso минифицирует все css файлы
      .pipe(csso())
      //concat Склеивает все файлы в 1 (В параметры передаем название итогового файла)
      .pipe(concat('index.css'))
      // Помещаем результат в папку продакшна dist
      .pipe(dest('dist'))
  );
}

//Чистка папок с помощью пакета del
function clear() {
  //указанная в методе папка будет очищена
  return del('dist');
}

exports.build = series(clear, js, images, icons, html, scss);
