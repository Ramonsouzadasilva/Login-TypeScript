import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1706379571738 implements MigrationInterface {
    name = 'Default1706379571738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "equipamentos" ("id" SERIAL NOT NULL, "nome" character varying(50) NOT NULL, "marca" character varying(50) NOT NULL, "descricao" character varying(100) NOT NULL, "codigo" character varying(6) NOT NULL, "valor" numeric(6,2) NOT NULL, "setor_id" integer, CONSTRAINT "PK_0db94e9eed96824cb4446343a86" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "setores" ("id" SERIAL NOT NULL, "nome" character varying(50) NOT NULL, "codigo" character varying(6) NOT NULL, CONSTRAINT "PK_85908551895de8d968532c35d07" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "equipamentos" ADD CONSTRAINT "FK_d4abaccc696e48a81f0cc7d0d80" FOREIGN KEY ("setor_id") REFERENCES "setores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "equipamentos" DROP CONSTRAINT "FK_d4abaccc696e48a81f0cc7d0d80"`);
        await queryRunner.query(`DROP TABLE "setores"`);
        await queryRunner.query(`DROP TABLE "equipamentos"`);
    }

}
