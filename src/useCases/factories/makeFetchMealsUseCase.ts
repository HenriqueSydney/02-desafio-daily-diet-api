import { PrismaMealsRepository } from '@/repositories/prisma/PrismaMealsRepository'
import { FetchMealsUseCase } from '../fetchMeals'

export function makeFetchMealsUseCase() {
  const mealsRepository = new PrismaMealsRepository()
  const fetchMealsUseCase = new FetchMealsUseCase(mealsRepository)

  return fetchMealsUseCase
}
