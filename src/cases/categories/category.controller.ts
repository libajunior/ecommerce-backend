import { Controller, Get, Param, ParseUUIDPipe } from "@nestjs/common";
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
  findById(@Param('id', ParseUUIDPipe) id: string): Promise<Category> {

  }

}

