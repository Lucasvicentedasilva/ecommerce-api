// app/Controllers/Http/UsersController.ts
import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  public async index({}: HttpContext) {
    const users = await User.all()
    return users
  }

  // Exibe um usuário específico pelo ID
  public async show({ params }: HttpContext) {
    const { id } = params
    const user = await User.find(id)

    if (!user) {
      return { message: `Usuário com ID ${id} não encontrado` }
    }

    return user
  }

  // Cria um novo usuário
  public async store({ request }: HttpContext) {
    const userData = request.only(['username', 'email', 'password'])

    const user = await User.create({
      username: userData.username,
      email: userData.email,
      password: userData.password,  
    })

    return {
      message: 'Usuário criado com sucesso!',
      user,
    }
  }

  // Atualiza um usuário existente
  public async update({ params, request }: HttpContext) {
    const { id } = params
    const user = await User.find(id)

    if (!user) {
      return { message: `Usuário com ID ${id} não encontrado` }
    }

    const updatedData = request.only(['username', 'email', 'password'])

    user.username = updatedData.username
    user.email = updatedData.email
    user.password = updatedData.password  

    await user.save()

    return {
      message: `Usuário de ID ${id} atualizado com sucesso!`,
      user,
    }
  }

  // Exclui um usuário pelo ID
  public async destroy({ params }: HttpContext) {
    const { id } = params
    const user = await User.find(id)

    if (!user) {
      return { message: `Usuário com ID ${id} não encontrado` }
    }

    await user.delete()

    return {
      message: `Usuário de ID ${id} excluído com sucesso!`,
    }
  }
}
