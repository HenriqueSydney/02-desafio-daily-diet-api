import { makeDeleteMealUseCase } from '@/useCases/factories/makeDeleteMealUseCase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function deleteMeal(request: FastifyRequest, reply: FastifyReply) {
  const deleteMealParamSchema = z.object({
    mealId: z.string(),
  })

  const { mealId } = deleteMealParamSchema.parse(request.params)

  const deleteMealUseCase = makeDeleteMealUseCase()

  await deleteMealUseCase.execute(mealId, request.user.sub)

  return reply.status(201).send()
}
