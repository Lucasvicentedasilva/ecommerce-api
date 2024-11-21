import { HttpContext } from '@adonisjs/core/http'
import Category from '#models/category'

export default class CategoriesController {
  public async index({}: HttpContext) {
    const categories = await Category.all()
    return categories
  }

  public async show({ params }: HttpContext) {
    const { id } = params
    const category = await Category.find(id)
    if (!category) {
      return { message: 'Categoria não encontrada!' }
    }
    return category
  }

  public async create({ request }: HttpContext) {
    const categoryData = request.only(['name'])
    const category = await Category.create(categoryData)
    return {
      message: 'Categoria criada com sucesso!',
      category,
    }
  }

  public async update({ params, request }: HttpContext) {
    const { id } = params
    const category = await Category.find(id)
    if (!category) {
      return { message: 'Categoria não encontrada!' }
    }

    const updatedData = request.only(['name'])
    category.merge(updatedData)
    await category.save()

    return {
      message: `Categoria de ID ${id} atualizada com sucesso!`,
      category,
    }
  }

  public async delete({ params }: HttpContext) {
    const { id } = params
    const category = await Category.find(id)
    if (!category) {
      return { message: 'Categoria não encontrada!' }
    }
    await category.delete()

    return {
      message: `Categoria excluída com sucesso!`,
    }
  }
}
