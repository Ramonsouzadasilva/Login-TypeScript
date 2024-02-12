import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Setor } from "./Setor";

@Entity("equipamentos")
export class Equipamento {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: "varchar", length: 50 })
	nome: string;

	@Column({ type: "varchar", length: 50 })
	marca: string;

	@Column({ type: "varchar", length: 100 })
	descricao: string;

	@Column({ type: "varchar", length: 6 })
	codigo: string;

	@Column({ type: "numeric", precision: 6, scale: 2 })
	valor: number;

	@ManyToOne(() => Setor, (setor) => setor.equipamentos)
	@JoinColumn({ name: "setor_id" })
	setor: Setor;
}
