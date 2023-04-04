import { IMealsRepository } from '@/repositories/IMealsRepository'
import { InvalidUserAccess } from './errors/invalidUserAccess'
import { ResourceNotFoundError } from './errors/resourceNotFound'

export class DeleteMealUseCase {
  constructor(private mealsRepository: IMealsRepository) {}

  async execute(mealId: string, userId: string): Promise<void> {
    const meal = await this.mealsRepository.findById(mealId)

    if (!meal) {
      throw new ResourceNotFoundError()
    }

    if (meal.user_id !== userId) {
      throw new InvalidUserAccess()
    }

    await this.mealsRepository.delete(mealId)
  }
}
