import { PrismaMealsRepository } from '@/repositories/prisma/PrismaMealsRepository'
import { DeleteMealUseCase } from '../deleteMeal'

export function makeDeleteMealUseCase() {
  const mealsRepository = new PrismaMealsRepository()
  const deleteMealUseCase = new DeleteMealUseCase(mealsRepository)

  return deleteMealUseCase
}
