import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { Brand } from "./brand.entity";
import { BrandService } from "./brand.service";

@Controller('brands')
export class BrandController {

  constructor(private readonly service: BrandService) {}

  @Get()
  findAll(): Promise<Brand[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Brand> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Brand not found', HttpStatus.NOT_FOUND);
    }

    return found;
  }
 
  @Post()
  create(@Body() brand: Brand) : Promise<Brand> {
    return this.service.save(brand);
  }

  @Put(':id')
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() brand: Brand): Promise<Brand> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Brand not found', HttpStatus.NOT_FOUND);
    }

    brand.id = id;

    return this.service.save(brand);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Brand not found', HttpStatus.NOT_FOUND);
    }

    return this.service.remove(id);
  }
}

