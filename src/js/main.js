import { ANSWER_CELLS, ANSWER_FUNCTIONS } from './selectors'

/**
 * Возвращает первый символ
 * @param {string} text - Данные пользователя
 */
export const firstChar = (text) => {
  if (!text || text.trim().length === 0) return ''
  return text.trim().charAt(0)
}

/**
 * Возвращает количество слов
 * @param {string} text - Данные пользователя
 */
export const wordsCount = (text) => {
  if (!text || text.trim().length === 0) return 0
  const words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0)
  return words.length
}

/**
 * Возвращает количество символов (без учета пробелов)
 * @param {string} text - Данные пользователя
 */
export const charsCount = (text) => {
  if (!text) return 0
  return text.replace(/\s+/g, '').length
}

/**
 * Возвращает самое длинное слово в тексте
 * @param {string} text - Данные пользователя
 */
export const maxLengthWord = (text) => {
  if (!text || text.trim().length === 0) return ''
  const words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0)
  if (words.length === 0) return ''

  let longestWord = words[0]
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i]
    }
  }
  return longestWord
}

/**
 * Возвращает перевернутое слово
 * @param {string} text - Данные пользователя
 */
export const reverseWord = (text) => {
  if (!text) return ''
  return text.split('').reverse().join('')
}

/**
 * Возвращает количество предложений
 * @param {string} text - Данные пользователя
 */
export const sentencesCount = (text) => {
  if (!text || text.trim().length === 0) return 0
  const sentences = text.split(/[.!?]+/).filter((sentence) => sentence.trim().length > 0)
  return sentences.length
}

/**
 * Возвращает количество уникальных слов
 * @param {string} text - Данные пользователя
 */
export const uniqueWordsCount = (text) => {
  if (!text || text.trim().length === 0) return 0
  const words = text
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0)
  const uniqueWords = new Set(words)
  return uniqueWords.size
}

/**
 * Возвращает строку отсортированную в алфавитном порядке
 * @param {string} text - Данные пользователя
 */
export const wordsAlphabetical = (text) => {
  if (!text || text.trim().length === 0) return ''
  const words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0)
  return words.sort().join(' ')
}

/**
 * Основная функция для анализа текста
 * @param {string} text - Данные пользователя
 */
export const analyzeText = (text) => {
  ANSWER_CELLS?.forEach((cell) => {
    const key = cell.dataset.answer
    const func = ANSWER_FUNCTIONS[key]

    if (func) {
      cell.textContent = func(text)
    }
  })
}
