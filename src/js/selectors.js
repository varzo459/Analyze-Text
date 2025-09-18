// src/js/selectors.js

import {
  firstChar,
  wordsCount,
  charsCount,
  maxLengthWord,
  reverseWord,
  sentencesCount,
  uniqueWordsCount,
  wordsAlphabetical,
} from './main'

// Основные селекторы приложения
export const SELECTORS = {
  form: document?.querySelector('form'),
  textArea: document?.querySelector('textarea'),
  userText: document?.querySelector('#userText'),
  analyzeBtn: document?.querySelector('#analyzeButton'),
  clearBtn: document?.querySelector('#clearButton'),
}

// Ячейки таблицы
export const ANSWER_CELLS = document.querySelectorAll('[data-answer]')

// Объект с функциями для каждой ячейки
export const ANSWER_FUNCTIONS = {
  1: firstChar,
  2: wordsCount,
  3: charsCount,
  4: maxLengthWord,
  5: reverseWord,
  6: sentencesCount,
  7: uniqueWordsCount,
  8: wordsAlphabetical,
}
