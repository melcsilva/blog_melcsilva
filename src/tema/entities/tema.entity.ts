import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Postagem } from '../../postagem/entities/postagem.entity';
import { ApiProperty } from '@nestjs/swagger';

// criação da tabela temas, com id e descrição
@Entity({ name: 'tb_temas' })
export class Tema {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number; //essa linha vai receber as regras do @primary, por isso o @

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  descricao: string;

  @ApiProperty()
  @OneToMany(() => Postagem, (postagem) => postagem.tema)
  postagem: Postagem[];
}
