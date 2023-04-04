import { IMealsRepository } from '@/repositories/IMealsRepository'

interface IGetUserMetricsUseCase {
  totalOfMeals: number
  totalOfMealsInDiet: number
  totalOfMealsOutOfDiet: number
  bestSequenceOfMealsInDiet: number
}

export class GetUserMetricsUseCase {
  constructor(private mealsRepository: IMealsRepository) {}

  async execute(userId: string): Promise<IGetUserMetricsUseCase> {
    const meals = await this.mealsRepository.findManyByUserId(userId)

    const metrics = {
      totalOfMeals: 0,
      totalOfMealsInDiet: 0,
      totalOfMealsOutOfDiet: 0,
      bestSequenceOfMealsInDiet: 0,
    }
    let sequenceOfMealsInDiet = 0
    meals.forEach((meal) => {
      metrics.totalOfMeals++
      if (meal.isInDiet) {
        sequenceOfMealsInDiet++
        metrics.totalOfMealsInDiet++
        if (sequenceOfMealsInDiet > metrics.bestSequenceOfMealsInDiet) {
          metrics.bestSequenceOfMealsInDiet = sequenceOfMealsInDiet
        }
      } else {
        sequenceOfMealsInDiet = 0
        metrics.totalOfMealsOutOfDiet++
      }
    })

    return metrics
  }
}
