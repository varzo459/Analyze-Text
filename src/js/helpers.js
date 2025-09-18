import { SELECTORS, ANSWER_CELLS } from './selectors'

/**
 * Функция показывает данные поль-ля в <p></p>
 * @param {string} text - Данные пользователя
 */
export const showUserText = (text) => {
  SELECTORS.userText.innerHTML = text
}

/**
 * Функция очистки данных
 */
export const clearData = () => {
  SELECTORS.form?.reset()
  SELECTORS.userText.innerHTML = ''

  // Очищаем ячейки таблицы
  ANSWER_CELLS?.forEach((cell) => {
    cell.innerHTML = ''
  })
}
