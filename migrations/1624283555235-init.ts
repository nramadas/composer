import {MigrationInterface, QueryRunner} from "typeorm";

export class init1624283555235 implements MigrationInterface {
    name = 'init1624283555235'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" character varying NOT NULL,
                "authId" character varying NOT NULL,
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
            CREATE TABLE "persona_contributor" (
                "id" character varying NOT NULL,
                "belongsToId" character varying NOT NULL,
                "data" jsonb NOT NULL,
                "created" TIMESTAMP NOT NULL DEFAULT now(),
                "updated" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted" TIMESTAMP,
                CONSTRAINT "REL_318ca21b2ef7237f8fd8e9d5a0" UNIQUE ("belongsToId"),
                CONSTRAINT "PK_c893d6e2f6baa945276154401b5" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "playlist" (
                "id" character varying NOT NULL,
                "channelId" character varying NOT NULL,
                "data" jsonb NOT NULL,
                "created" TIMESTAMP NOT NULL DEFAULT now(),
                "updated" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted" TIMESTAMP,
                CONSTRAINT "PK_538c2893e2024fabc7ae65ad142" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "channel" (
                "id" character varying NOT NULL,
                "createdById" character varying NOT NULL,
                "data" jsonb NOT NULL,
                "defaultPlaylistId" character varying NOT NULL,
                "created" TIMESTAMP NOT NULL DEFAULT now(),
                "updated" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted" TIMESTAMP,
                CONSTRAINT "REL_e1473a70bb60aa0fb59874a581" UNIQUE ("defaultPlaylistId"),
                CONSTRAINT "PK_590f33ee6ee7d76437acf362e39" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "track" (
                "id" character varying NOT NULL,
                "channelId" character varying NOT NULL,
                "creatorId" character varying NOT NULL,
                "data" jsonb NOT NULL,
                "playlistId" character varying NOT NULL,
                "created" TIMESTAMP NOT NULL DEFAULT now(),
                "updated" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted" TIMESTAMP,
                CONSTRAINT "PK_0631b9bcf521f8fab3a15f2c37e" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "channel_additional_contributors_persona_contributor" (
                "channelId" character varying NOT NULL,
                "personaContributorId" character varying NOT NULL,
                CONSTRAINT "PK_9467ed3f775a2d67f8f0bff27b3" PRIMARY KEY ("channelId", "personaContributorId")
            )
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_3366ea3535a42316ebec945697" ON "channel_additional_contributors_persona_contributor" ("channelId")
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_6b663efd99690ac6bff7e60319" ON "channel_additional_contributors_persona_contributor" ("personaContributorId")
        `);
        await queryRunner.query(`
            ALTER TABLE "persona_contributor"
            ADD CONSTRAINT "FK_318ca21b2ef7237f8fd8e9d5a0a" FOREIGN KEY ("belongsToId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "playlist"
            ADD CONSTRAINT "FK_eecd2a0f0ec3e80829c98fa5949" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "channel"
            ADD CONSTRAINT "FK_b2207f24c9461a9e053f2d2e090" FOREIGN KEY ("createdById") REFERENCES "persona_contributor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "channel"
            ADD CONSTRAINT "FK_e1473a70bb60aa0fb59874a5818" FOREIGN KEY ("defaultPlaylistId") REFERENCES "playlist"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "track"
            ADD CONSTRAINT "FK_ca19f177fe6a296dc3f2a391d10" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "track"
            ADD CONSTRAINT "FK_8afc0b2040e5d5c7a66bac27c69" FOREIGN KEY ("creatorId") REFERENCES "persona_contributor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "track"
            ADD CONSTRAINT "FK_cd57e08e2edf7fd0078a493ffe5" FOREIGN KEY ("playlistId") REFERENCES "playlist"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "channel_additional_contributors_persona_contributor"
            ADD CONSTRAINT "FK_3366ea3535a42316ebec9456976" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
        await queryRunner.query(`
            ALTER TABLE "channel_additional_contributors_persona_contributor"
            ADD CONSTRAINT "FK_6b663efd99690ac6bff7e60319e" FOREIGN KEY ("personaContributorId") REFERENCES "persona_contributor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "channel_additional_contributors_persona_contributor" DROP CONSTRAINT "FK_6b663efd99690ac6bff7e60319e"
        `);
        await queryRunner.query(`
            ALTER TABLE "channel_additional_contributors_persona_contributor" DROP CONSTRAINT "FK_3366ea3535a42316ebec9456976"
        `);
        await queryRunner.query(`
            ALTER TABLE "track" DROP CONSTRAINT "FK_cd57e08e2edf7fd0078a493ffe5"
        `);
        await queryRunner.query(`
            ALTER TABLE "track" DROP CONSTRAINT "FK_8afc0b2040e5d5c7a66bac27c69"
        `);
        await queryRunner.query(`
            ALTER TABLE "track" DROP CONSTRAINT "FK_ca19f177fe6a296dc3f2a391d10"
        `);
        await queryRunner.query(`
            ALTER TABLE "channel" DROP CONSTRAINT "FK_e1473a70bb60aa0fb59874a5818"
        `);
        await queryRunner.query(`
            ALTER TABLE "channel" DROP CONSTRAINT "FK_b2207f24c9461a9e053f2d2e090"
        `);
        await queryRunner.query(`
            ALTER TABLE "playlist" DROP CONSTRAINT "FK_eecd2a0f0ec3e80829c98fa5949"
        `);
        await queryRunner.query(`
            ALTER TABLE "persona_contributor" DROP CONSTRAINT "FK_318ca21b2ef7237f8fd8e9d5a0a"
        `);
        await queryRunner.query(`
            DROP INDEX "IDX_6b663efd99690ac6bff7e60319"
        `);
        await queryRunner.query(`
            DROP INDEX "IDX_3366ea3535a42316ebec945697"
        `);
        await queryRunner.query(`
            DROP TABLE "channel_additional_contributors_persona_contributor"
        `);
        await queryRunner.query(`
            DROP TABLE "track"
        `);
        await queryRunner.query(`
            DROP TABLE "channel"
        `);
        await queryRunner.query(`
            DROP TABLE "playlist"
        `);
        await queryRunner.query(`
            DROP TABLE "persona_contributor"
        `);
        await queryRunner.query(`
            DROP TABLE "user"
        `);
    }

}
