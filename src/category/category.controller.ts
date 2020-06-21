import { Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { Repository } from 'typeorm';
import { Category } from 'src/category.entity';

@Controller('categories')
export class CategoryController {

  constructor(
    private categoryRepo: Repository<Category>
  ){}

  @Get()
  index(): {
    return 'Categorias'
  }

@Get()
category_create(){

  }
}
