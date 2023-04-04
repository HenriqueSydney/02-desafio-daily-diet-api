import { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/middlewares/verifyJwt'

import { registerMeal } from './registerMeal'
import { updateMeal } from './updateMeal'
import { deleteMeal } from './deleteMeal'
import { fetchMeals } from './fetchMeals'
import { getMeal } from './getMeal'
import { getUserMetrics } from './getUserMetrics'

export async function mealsRoutes(app: FastifyInstance) {
  app.post('/meals', { onRequest: [verifyJWT] }, registerMeal)
  app.put('/meals/:mealId', { onRequest: [verifyJWT] }, updateMeal)
  app.delete('/meals/:mealId', { onRequest: [verifyJWT] }, deleteMeal)
  app.get('/meals', { onRequest: [verifyJWT] }, fetchMeals)
  app.get('/meals/:mealId', { onRequest: [verifyJWT] }, getMeal)
  app.get('/meals/userMetrics', { onRequest: [verifyJWT] }, getUserMetrics)
}
