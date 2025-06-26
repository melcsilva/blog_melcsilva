import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Postagem } from '../../postagem/entities/postagem.entity';

// criação da tabela temas, com id e descrição
@Entity({ name: 'tb_temas' })
export class Tema {
  @PrimaryGeneratedColumn()
  id: number; //essa linha vai receber as regras do @primary, por isso o @

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  descricao: string;

  @OneToMany(() => Postagem, (postagem) => postagem.tema)
  postagem: Postagem[];
}
