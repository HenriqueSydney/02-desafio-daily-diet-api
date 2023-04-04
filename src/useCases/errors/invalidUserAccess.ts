import { AppError } from '@/errors/AppError'

export class InvalidUserAccess extends AppError {
  constructor() {
    super('User does not have access to this resource', 403)
  }
}
