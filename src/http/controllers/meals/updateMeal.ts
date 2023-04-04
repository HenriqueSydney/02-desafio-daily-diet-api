import { makeUpdateMealUseCase } from '@/useCases/factories/makeUpdateMealUseCase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function updateMeal(request: FastifyRequest, reply: FastifyReply) {
  const updateMealBodySchema = z.object({
    mealName: z.string(),
    description: z.string(),
    mealDateTime: z.coerce.date(),
    isInDiet: z.boolean(),
  })

  const { mealName, description, mealDateTime, isInDiet } =
    updateMealBodySchema.parse(request.body)

  const updateMealParamSchema = z.object({
    mealId: z.string(),
  })

  const { mealId } = updateMealParamSchema.parse(request.params)

  const updateMealUseCase = makeUpdateMealUseCase()

  await updateMealUseCase.execute({
    mealId,
    userId: request.user.sub,
    meal_name: mealName,
    description,
    meal_date_time: mealDateTime,
    isInDiet,
  })

  return reply.status(201).send()
}
