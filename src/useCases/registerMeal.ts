import { IMealsRepository } from '@/repositories/IMealsRepository'
import { Meals } from '@prisma/client'

interface IRegisterMealUseCaseRequest {
  userId: string
  meal_name: string
  description: string
  meal_date_time: Date
  isInDiet: boolean
}

interface IRegisterMealUseCaseResponse {
  meal: Meals
}

export class RegisterMealUseCase {
  constructor(private mealsRepository: IMealsRepository) {}

  async execute({
    userId,
    meal_name,
    description,
    meal_date_time,
    isInDiet,
  }: IRegisterMealUseCaseRequest): Promise<IRegisterMealUseCaseResponse> {
    const meal = await this.mealsRepository.create({
      user_id: userId,
      meal_name,
      description,
      meal_datetime: meal_date_time,
      isInDiet,
    })

    return { meal }
  }
}
