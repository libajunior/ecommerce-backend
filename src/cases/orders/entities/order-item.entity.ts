import { Product } from "src/cases/produtcs/product.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Order } from "./order.entity";

@Entity('order-item')
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Order)
  order: Order;

  @ManyToOne(() => Product, {eager: true, nullable: false})
  product: Product;

  @Column({nullable: false})
  quantity: number;

  @Column('decimal', {nullable: false, precision: 10, scale: 2})
  value: number;
}