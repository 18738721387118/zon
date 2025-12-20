import { formatPhoneNumber, PhoneFormatError } from '@/utils/format-phone'

describe('formatPhoneNumber', () => {
  test('добавляет код страны и убирает лишние символы', () => {
    const formatted = formatPhoneNumber('8 (999) 123-45-67', '+7')
    expect(formatted).toBe('+79991234567')
  })

  test('принимает код без плюса', () => {
    expect(formatPhoneNumber('999-000-1122', '1')).toBe('+19990001122')
  })

  test('бросает ошибку при пустом коде страны', () => {
    expect(() => formatPhoneNumber('9990001122', '')).toThrow(PhoneFormatError)
  })

  test('бросает ошибку при коротком номере', () => {
    expect(() => formatPhoneNumber('12345', '7')).toThrow('Телефон должен содержать минимум 10 цифр')
  })

  test('бросает ошибку при слишком длинном номере', () => {
    expect(() => formatPhoneNumber('1234567890123', '7')).toThrow(PhoneFormatError)
  })
})
