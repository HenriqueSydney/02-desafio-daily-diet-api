import { PrismaMealsRepository } from '@/repositories/prisma/PrismaMealsRepository'
import { GetUserMetricsUseCase } from '../getUserMetrics'

export function makeGetUserMetricsUseCase() {
  const mealsRepository = new PrismaMealsRepository()
  const getUserMetricsUseCase = new GetUserMetricsUseCase(mealsRepository)

  return getUserMetricsUseCase
}
