import { Repository } from "typeorm";
import { Product } from "./product.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private repository: Repository<Product>
  ) {}

  findAll(): Promise<Product[]> {
    return this.repository.find();
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