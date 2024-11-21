import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class SessionController {
  async login({ request, auth, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user, ['server:create', 'server:read'])

    await auth.use('web').login(user)

    return response.json({
      message: 'Login bem-sucedido',
      token: token.value!.release()
    })
}
}
