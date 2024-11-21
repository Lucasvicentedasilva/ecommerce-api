import { HttpContext} from '@adonisjs/core/http'
import Product from '#models/product'
import { cuid } from '@adonisjs/core/helpers'
import drive from '@adonisjs/drive/services/main'

export default class ProductsController {
  public async index({}: HttpContext) {
    const products = await Product.query().preload('category')
    return products
  }

  public async show({ params }: HttpContext) {
    const { id } = params
    const product = await Product.find(id)
    if (!product) {
      return { message: 'Produto não encontrado!' }
    }
    return product
  }

  public async store({ request }: HttpContext) {
    const productData = request.only(['name', 'image', 'price', 'description', 'categoryId'])

    //   if (productData.price) {
    //     productData.price = parseFloat(
    //         productData.price.toString().replace(/\./g, '').replace(',', '.')
    //     )
    // }

    const image = request.file('image', {
        size: '2mb',
        extnames: ['jpg', 'jpeg', 'png', 'gif'],
    })

    if (image) {
        let imageName = `${cuid()}.${image.extname}`

        await image.moveToDisk(`${imageName}`)	
        
        productData.image = imageName

        const product = await Product.create(productData)

        return {
            message: 'Produto criado com sucesso!',
            product,
            url: await drive.use().getUrl(`${imageName}`)
        }
    }

    const product = await Product.create(productData)

    return {
        message: 'Produto criado com sucesso!',
        product
    }
}

  public async update({ params, request }: HttpContext) {
    const { id } = params
    const product = await Product.find(id)
    if (!product) {
      return { message: 'Produto não encontrado!' }
    }

    const updatedData = request.only(['name', 'price', 'categoryId', 'description', 'image'])	

    if (updatedData.price) {
      updatedData.price = parseFloat(
        updatedData.price.toString().replace(/\./g, '').replace(',', '.')
      )
    }

    const imageFile = request.file('image', {
      size: '2mb',
      extnames: ['jpg', 'jpeg', 'png', 'gif']
    })

    if (imageFile) {
      let imageName = `${cuid()}.${imageFile.extname}`

      await imageFile.moveToDisk(`/uploads/${imageName}`)	
      
      updatedData.image = imageName

      const product = await Product.create(updatedData)

      return {
          message: 'Produto atualizado com sucesso!',
          product,
          url: await drive.use().getUrl(`/uploads/${imageName}`)
      }
  }


    product.merge(updatedData)
    await product.save()

    return {
      message: `Produto de ID ${id} atualizado com sucesso!`,
      product,
    }
  }

  public async destroy({ params }: HttpContext) {
    const { id } = params
    const product = await Product.find(id)
    if (!product) {
      return { message: 'Produto não encontrado!' }
    }

    if (product.image) {
      const imagePath = `/uploads/${product.image}`

      try {
        // Tenta deletar o arquivo
        await drive.use().delete(imagePath)
      } catch (error) {
        console.warn(`Erro ao excluir arquivo: ${imagePath}. O arquivo pode não existir.`, error)
      }
    }
    await product.delete()

    return {
      message: `Produto excluído com sucesso!`,
    }
  }
}
