import { Meals, Prisma } from '@prisma/client'

export interface IMealsRepository {
  create(data: Prisma.MealsUncheckedCreateInput): Promise<Meals>
  update(data: Prisma.MealsUncheckedUpdateInput): Promise<Meals>
  delete(mealId: string): Promise<void>
  findById(mealId: string): Promise<Meals | null>
  findManyByUserId(userId: string, page?: number): Promise<Meals[]>
}
