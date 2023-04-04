import { makeFetchMealsUseCase } from '@/useCases/factories/makeFetchMealsUseCase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function fetchMeals(request: FastifyRequest, reply: FastifyReply) {
  const checkInHistoryQuerySchema = z.object({
    page: z.coerce.number().min(1).default(1),
  })

  const { page } = checkInHistoryQuerySchema.parse(request.query)

  const fetchMealsUseCase = makeFetchMealsUseCase()

  const meals = await fetchMealsUseCase.execute(request.user.sub, page)

  return reply.status(201).send(meals)
}
