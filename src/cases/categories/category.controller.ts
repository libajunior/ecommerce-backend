import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { Category } from "./category.entity";
import { CategoryService } from "./category.service";

@Controller('categories')
export class CategoryController {

  constructor(private readonly service: CategoryService) {}

  @Get()
  findAll(): Promise<Category[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Category> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }

    return found;
  }
 
  @Post()
  create(@Body() category: Category) : Promise<Category> {
    return this.service.save(category);
  }

  @Put(':id')
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() category: Category): Promise<Category> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }

    category.id = id;

    return this.service.save(category);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }

    return this.service.remove(id);
  }
}

