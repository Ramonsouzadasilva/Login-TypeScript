import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Equipamento } from "./Equipamento";

@Entity("setores")
export class Setor {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: "varchar", length: 50 })
	nome: string;

	@Column({ type: "varchar", length: 6 })
	codigo: string;

	@OneToMany(() => Equipamento, (equipamento) => equipamento.setor)
	equipamentos: Equipamento[];
}
