import { FastifyReply, FastifyRequest } from 'fastify'
import { makeGetUserMetricsUseCase } from '@/useCases/factories/makeGetUserMetricsUseCase'

export async function getUserMetrics(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getUserMetricsUseCase = makeGetUserMetricsUseCase()

  const metrics = await getUserMetricsUseCase.execute(request.user.sub)

  return reply.status(201).send(metrics)
}
