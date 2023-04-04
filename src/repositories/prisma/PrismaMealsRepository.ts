import { Prisma, Meals } from '@prisma/client'
import { IMealsRepository } from '../IMealsRepository'
import { prisma } from '@/lib/prisma'

export class PrismaMealsRepository implements IMealsRepository {
  async create(data: Prisma.MealsUncheckedCreateInput): Promise<Meals> {
    const meal = await prisma.meals.create({ data })

    return meal
  }

  async update(data: Prisma.MealsUpdateInput): Promise<Meals> {
    const meal = await prisma.meals.update({
      data,
      where: {
        id: data.id as string,
      },
    })

    return meal
  }

  async delete(mealId: string): Promise<void> {
    await prisma.meals.delete({ where: { id: mealId } })
  }

  async findById(mealId: string): Promise<Meals | null> {
    return await prisma.meals.findUnique({ where: { id: mealId } })
  }

  async findManyByUserId(userId: string, page = 0): Promise<Meals[]> {
    const query = {
      where: {
        user_id: userId,
      },
    }

    if (page > 0) {
      Object.assign(query, { take: 20, skip: (page - 1) * 20 })
    }

    return await prisma.meals.findMany(query)
  }
}
