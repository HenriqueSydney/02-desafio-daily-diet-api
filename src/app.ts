import fastify from 'fastify'
import { fastifyJwt } from '@fastify/jwt'

import { env } from './env'

import { ZodError } from 'zod'
import { usersRoutes } from './http/controllers/users/routes'
import { mealsRoutes } from './http/controllers/meals/routes'
import { AppError } from './errors/AppError'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: '10m',
  },
})

app.register(usersRoutes)
app.register(mealsRoutes)

app.setErrorHandler((error, _, reply) => {
  console.log(error)
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Validation error.',
      issues: error.format(),
    })
  }

  if (error instanceof AppError) {
    return reply.status(error.statusCode).send({ message: error.message })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO Here we should log to an external tool like DataDog/NewRelic/Rentry
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})
