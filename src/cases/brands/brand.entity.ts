import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('brand')
export class Brand {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 60, nullable: false })
  name: string;
}