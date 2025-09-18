import { SELECTORS } from './selectors'
import { clearData, showUserText } from './helpers'
import { analyzeText } from './main'

// Обработчик очистки данных
export const clearTable = () => {
  SELECTORS?.clearBtn?.addEventListener('click', () => {
    clearData()
  })
}

// Обработчик отправки данных
export const submitData = () => {
  SELECTORS.form.addEventListener('submit', (event) => {
    event?.preventDefault()

    // Основная функция анализа
    analyzeText(SELECTORS?.textArea?.value)

    // Показ данных в <p></p>
    showUserText(SELECTORS?.textArea?.value)
  })
}
