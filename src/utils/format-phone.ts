export class PhoneFormatError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'PhoneFormatError'
  }
}

export function formatPhoneNumber(phone: string, countryCode: string): string {
  if (typeof phone !== 'string' || typeof countryCode !== 'string') {
    throw new PhoneFormatError('Телефон и код страны должны быть строками')
  }

  const normalizedNumber = phone.replace(/\D/g, '')
  const normalizedCode = countryCode.replace(/\D/g, '')

  if (!normalizedCode) {
    throw new PhoneFormatError('Код страны обязателен')
  }

  if (normalizedNumber.length < 10) {
    throw new PhoneFormatError('Телефон должен содержать минимум 10 цифр')
  }

  if (normalizedNumber.length > 12) {
    throw new PhoneFormatError('Телефон содержит слишком много цифр')
  }

  let localNumber = normalizedNumber

  if (
    normalizedCode === '7' &&
    normalizedNumber.length === 11 &&
    normalizedNumber.startsWith('8')
  ) {
    localNumber = normalizedNumber.slice(1)
  } else if (
    normalizedNumber.startsWith(normalizedCode) &&
    normalizedNumber.length === normalizedCode.length + 10
  ) {
    localNumber = normalizedNumber.slice(normalizedCode.length)
  }

  return `+${normalizedCode}${localNumber}`
}
