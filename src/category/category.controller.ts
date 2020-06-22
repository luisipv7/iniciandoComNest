import { Controller, Get, Post, Req, Render } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from 'src/category.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('categories')
export class CategoryController {

  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>
  ) { }

  @Get()
  index(): Promise<Category[]> {
    return this.categoryRepo.find()
  }

  @Get('list')
    @Render('category_list')
  async category_list(): Promise<Category[]> {
    const categories = await this.categoryRepo.find()
    console.log(categories)
    return {layout: false, categories}
    }

@Get('create')
  category_create(): Promise<Category>{
  const category = this.categoryRepo.create({ name: 'category teste' })
  return this.categoryRepo.save(category)
}
  // @Post()
  // async store(@Req() request: Request) {
  //  const category = await this.categoryRepo.create(request.body as any)
  //   return this.categoryRepo.save(category)
  // }
}
