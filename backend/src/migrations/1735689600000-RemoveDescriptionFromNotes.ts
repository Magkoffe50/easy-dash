import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class RemoveDescriptionFromNotes1735689600000
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('notes', 'description');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'notes',
      new TableColumn({
        name: 'description',
        type: 'text',
        isNullable: true,
      }),
    );
    await queryRunner.query(
      `UPDATE "notes" SET "description" = '' WHERE "description" IS NULL`,
    );
    await queryRunner.changeColumn(
      'notes',
      'description',
      new TableColumn({
        name: 'description',
        type: 'text',
        isNullable: false,
      }),
    );
  }
}
