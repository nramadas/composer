import {MigrationInterface, QueryRunner} from "typeorm";

export class changesToPlaylist1624359076066 implements MigrationInterface {
    name = 'changesToPlaylist1624359076066'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "channel" DROP CONSTRAINT "FK_e1473a70bb60aa0fb59874a5818"
        `);
        await queryRunner.query(`
            ALTER TABLE "channel"
                RENAME COLUMN "defaultPlaylistId" TO "isDefaultOfId"
        `);
        await queryRunner.query(`
            ALTER TABLE "channel"
                RENAME CONSTRAINT "REL_e1473a70bb60aa0fb59874a581" TO "UQ_f8baf4268357aab216f55be00f8"
        `);
        await queryRunner.query(`
            CREATE TABLE "staged_track" (
                "id" character varying NOT NULL,
                "channelId" character varying NOT NULL,
                "creatorId" character varying NOT NULL,
                "data" jsonb NOT NULL,
                "playlistId" character varying NOT NULL,
                "created" TIMESTAMP NOT NULL DEFAULT now(),
                "updated" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted" TIMESTAMP,
                CONSTRAINT "PK_d4e084cfd07da0fa6fb6266c18a" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "playlist"
            ADD "isDefaultInId" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "playlist"
            ADD CONSTRAINT "UQ_e8b2cf152f21dbe803133a09937" UNIQUE ("isDefaultInId")
        `);
        await queryRunner.query(`
            ALTER TABLE "channel"
            ALTER COLUMN "isDefaultOfId" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "playlist"
            ADD CONSTRAINT "FK_e8b2cf152f21dbe803133a09937" FOREIGN KEY ("isDefaultInId") REFERENCES "channel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "channel"
            ADD CONSTRAINT "FK_f8baf4268357aab216f55be00f8" FOREIGN KEY ("isDefaultOfId") REFERENCES "persona_contributor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "staged_track"
            ADD CONSTRAINT "FK_3aef01ef1a70ca627f8a612edca" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "staged_track"
            ADD CONSTRAINT "FK_6595c5314680b317cb3cc7f113c" FOREIGN KEY ("creatorId") REFERENCES "persona_contributor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "staged_track"
            ADD CONSTRAINT "FK_9271019bb6cf308a2c06ef46fe6" FOREIGN KEY ("playlistId") REFERENCES "playlist"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "staged_track" DROP CONSTRAINT "FK_9271019bb6cf308a2c06ef46fe6"
        `);
        await queryRunner.query(`
            ALTER TABLE "staged_track" DROP CONSTRAINT "FK_6595c5314680b317cb3cc7f113c"
        `);
        await queryRunner.query(`
            ALTER TABLE "staged_track" DROP CONSTRAINT "FK_3aef01ef1a70ca627f8a612edca"
        `);
        await queryRunner.query(`
            ALTER TABLE "channel" DROP CONSTRAINT "FK_f8baf4268357aab216f55be00f8"
        `);
        await queryRunner.query(`
            ALTER TABLE "playlist" DROP CONSTRAINT "FK_e8b2cf152f21dbe803133a09937"
        `);
        await queryRunner.query(`
            ALTER TABLE "channel"
            ALTER COLUMN "isDefaultOfId"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "playlist" DROP CONSTRAINT "UQ_e8b2cf152f21dbe803133a09937"
        `);
        await queryRunner.query(`
            ALTER TABLE "playlist" DROP COLUMN "isDefaultInId"
        `);
        await queryRunner.query(`
            DROP TABLE "staged_track"
        `);
        await queryRunner.query(`
            ALTER TABLE "channel"
                RENAME CONSTRAINT "UQ_f8baf4268357aab216f55be00f8" TO "REL_e1473a70bb60aa0fb59874a581"
        `);
        await queryRunner.query(`
            ALTER TABLE "channel"
                RENAME COLUMN "isDefaultOfId" TO "defaultPlaylistId"
        `);
        await queryRunner.query(`
            ALTER TABLE "channel"
            ADD CONSTRAINT "FK_e1473a70bb60aa0fb59874a5818" FOREIGN KEY ("defaultPlaylistId") REFERENCES "playlist"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

}
