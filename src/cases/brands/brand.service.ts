import { Repository } from "typeorm";
import { Brand } from "./brand.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BrandService {

  constructor(
    @InjectRepository(Brand)
    private repository: Repository<Brand>
  ) {}

  findAll(): Promise<Brand[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<Brand | null> {
    return this.repository.findOneBy({id: id});
  }

  save(brand: Brand): Promise<Brand> {
    return this.repository.save(brand);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}