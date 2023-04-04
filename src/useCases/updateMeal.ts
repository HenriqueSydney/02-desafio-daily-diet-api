import { IMealsRepository } from '@/repositories/IMealsRepository'
import { Meals } from '@prisma/client'

import { ResourceNotFoundError } from './errors/resourceNotFound'
import { InvalidUserAccess } from './errors/invalidUserAccess'

interface IRegisterMealUseCaseRequest {
  mealId: string
  userId: string
  meal_name: string
  description: string
  meal_date_time: Date
  isInDiet: boolean
}

interface IRegisterMealUseCaseResponse {
  meal: Meals
}

export class UpdateMealUseCase {
  constructor(private mealsRepository: IMealsRepository) {}

  async execute({
    mealId,
    userId,
    meal_name,
    description,
    meal_date_time,
    isInDiet,
  }: IRegisterMealUseCaseRequest): Promise<IRegisterMealUseCaseResponse> {
    const meal = await this.mealsRepository.findById(mealId)

    if (!meal) {
      throw new ResourceNotFoundError()
    }

    if (meal.user_id !== userId) {
      throw new InvalidUserAccess()
    }

    const updatedMeal = await this.mealsRepository.update({
      id: mealId,
      meal_name,
      description,
      meal_datetime: meal_date_time,
      isInDiet,
    })

    return { meal: updatedMeal }
  }
}
