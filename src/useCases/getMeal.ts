import { IMealsRepository } from '@/repositories/IMealsRepository'
import { Meals } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resourceNotFound'
import { InvalidUserAccess } from './errors/invalidUserAccess'

interface IGetMealUseCaseRequest {
  mealId: string
  userId: string
}

interface IGetMealUseCaseResponse {
  meal: Meals
}

export class GetMealUseCase {
  constructor(private mealsRepository: IMealsRepository) {}

  async execute({
    mealId,
    userId,
  }: IGetMealUseCaseRequest): Promise<IGetMealUseCaseResponse> {
    const meal = await this.mealsRepository.findById(mealId)

    if (!meal) {
      throw new ResourceNotFoundError()
    }

    if (meal.user_id !== userId) {
      throw new InvalidUserAccess()
    }

    return { meal }
  }
}
