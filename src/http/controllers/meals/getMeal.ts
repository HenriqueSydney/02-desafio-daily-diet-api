import { makeGetMealUseCase } from '@/useCases/factories/makeGetMealUseCase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getMeal(request: FastifyRequest, reply: FastifyReply) {
  const getMealParamSchema = z.object({
    mealId: z.string(),
  })

  const { mealId } = getMealParamSchema.parse(request.params)

  const getMealsUseCase = makeGetMealUseCase()

  const meals = await getMealsUseCase.execute({
    mealId,
    userId: request.user.sub,
  })

  return reply.status(201).send(meals)
}
