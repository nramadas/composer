import {MigrationInterface, QueryRunner} from "typeorm";

export class init1625735108199 implements MigrationInterface {
    name = 'init1625735108199'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" character varying NOT NULL,
                "authId" character varying NOT NULL,
                "activated" boolean NOT NULL,
                "data" jsonb NOT NULL,
                "email" character varying NOT NULL,
                "created" TIMESTAMP NOT NULL DEFAULT now(),
                "updated" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted" TIMESTAMP,
                CONSTRAINT "UQ_c2c2bfbed3868964a30dccb5f44" UNIQUE ("authId", "email"),
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "composition" (
                "id" character varying NOT NULL,
                "data" jsonb NOT NULL,
                "belongsToId" character varying NOT NULL,
                "key" character varying NOT NULL,
                "created" TIMESTAMP NOT NULL DEFAULT now(),
                "updated" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted" TIMESTAMP,
                CONSTRAINT "PK_fe1f22ddd91de262f6ef0b5f64d" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "composition"
            ADD CONSTRAINT "FK_f280f7c864beb41f03cf55efe7f" FOREIGN KEY ("belongsToId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "composition" DROP CONSTRAINT "FK_f280f7c864beb41f03cf55efe7f"
        `);
        await queryRunner.query(`
            DROP TABLE "composition"
        `);
        await queryRunner.query(`
            DROP TABLE "user"
        `);
    }

}
