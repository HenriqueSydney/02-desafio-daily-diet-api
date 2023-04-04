import { PrismaMealsRepository } from '@/repositories/prisma/PrismaMealsRepository'
import { GetMealUseCase } from '../getMeal'

export function makeGetMealUseCase() {
  const mealsRepository = new PrismaMealsRepository()
  const getMealUseCase = new GetMealUseCase(mealsRepository)

  return getMealUseCase
}
