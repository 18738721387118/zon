export class DeliveryEstimationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'DeliveryEstimationError'
  }
}

export function estimateDeliveryCost(distanceKm: number, parcelWeightKg: number): number {
  if (!Number.isFinite(distanceKm) || !Number.isFinite(parcelWeightKg)) {
    throw new DeliveryEstimationError('Дистанция и вес должны быть числами')
  }

  if (distanceKm < 0 || parcelWeightKg < 0) {
    throw new DeliveryEstimationError('Дистанция и вес не могут быть отрицательными')
  }

  const baseFee = 200
  const extraDistanceCost = Math.max(0, distanceKm - 3) * 35
  const weightSurcharge = Math.max(0, parcelWeightKg - 1) * 80

  const total = baseFee + extraDistanceCost + weightSurcharge

  return Math.round(total * 100) / 100
}
