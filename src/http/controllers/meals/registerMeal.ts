import { makeRegisterMealUseCase } from '@/useCases/factories/makeRegisterMealUseCase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function registerMeal(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createRegisterMealBodySchema = z.object({
    mealName: z.string(),
    description: z.string(),
    mealDateTime: z.coerce.date(),
    isInDiet: z.boolean(),
  })

  const { mealName, description, mealDateTime, isInDiet } =
    createRegisterMealBodySchema.parse(request.body)

  const registerMealUseCase = makeRegisterMealUseCase()

  await registerMealUseCase.execute({
    userId: request.user.sub,
    meal_name: mealName,
    description,
    meal_date_time: mealDateTime,
    isInDiet,
  })

  return reply.status(201).send()
}
