import { IMealsRepository } from '@/repositories/IMealsRepository'
import { Meals } from '@prisma/client'

interface IFetchMealsResponse {
  meals: Meals[]
}

export class FetchMealsUseCase {
  constructor(private mealsRepository: IMealsRepository) {}

  async execute(userId: string, page: number): Promise<IFetchMealsResponse> {
    const meals = await this.mealsRepository.findManyByUserId(userId, page)

    return { meals }
  }
}
