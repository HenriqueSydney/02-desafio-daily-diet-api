import { IUserRepository } from '@/repositories/IUsersRepository'
import { User } from '@prisma/client'
import { InvalidCredentialsError } from './errors/invalidCredentialsError'
import { compare } from 'bcryptjs'

interface IAuthenticateUseCaseRequest {
  email: string
  password: string
}

interface IAuthenticateUseCaseResponse {
  user: User
}
export class AuthenticateUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute({
    email,
    password,
  }: IAuthenticateUseCaseRequest): Promise<IAuthenticateUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new InvalidCredentialsError()
    }

    const doesPasswordMatch = await compare(password, user.password_hash)

    if (!doesPasswordMatch) {
      throw new InvalidCredentialsError()
    }

    return { user }
  }
}
