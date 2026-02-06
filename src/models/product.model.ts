import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Index()
  @Column()
  name!: string;

  @Column("text")
  description!: string;

  @Index()
  @Column()
  category!: string;

  @Index()
  @Column("float")
  price!: number;

  @Column()
  createdAt!: Date;
}
