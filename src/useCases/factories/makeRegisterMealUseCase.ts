import { PrismaMealsRepository } from '@/repositories/prisma/PrismaMealsRepository'
import { RegisterMealUseCase } from '../registerMeal'

export function makeRegisterMealUseCase() {
  const mealsRepository = new PrismaMealsRepository()
  const registerMealUseCase = new RegisterMealUseCase(mealsRepository)

  return registerMealUseCase
}
