import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: "text" })
	name: string;

	@Column({ type: "text", unique: true })
	email: string;

	@Column({ type: "text" })
	password: string;
}
