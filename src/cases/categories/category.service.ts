import { Repository } from "typeorm";
import { Category } from "./category.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category)
    private repository: Repository<Category>
  ) {}

  findAll(): Promise<Category[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<Category> {
    return this.repository.findOneBy({id: id});
  }

  save(category: Category): Promise<Category> {
    return this.repository.save(category);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}