import { Repository } from "typeorm";
import { Product } from "./product.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Category } from "../categories/category.entity";

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private repository: Repository<Product>
  ) {}

  findAll(category?: Category): Promise<Product[]> {
    if (!category) {
      return this.repository.find();
    } else {
      return this.repository.find({
        where: {category: category}
      });
    }
  }

  findById(id: string): Promise<Product | null> {
    return this.repository.findOneBy({id: id});
  }

  save(product: Product): Promise<Product> {
    return this.repository.save(product);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}