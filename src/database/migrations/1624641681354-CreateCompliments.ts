import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompliments1624641681354 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'compliments',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'user_sender',
                        type: 'varchar',
                        generationStrategy: 'uuid'
                        
                    },
                    {
                        name: 'user_receiver',
                        type: 'varchar',
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'tag_id',
                        type: 'varchar',
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'message',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        ) 
        /*
        await queryRunner.createForeignKey(
            'compliments',
            new TableForeignKey(
                {
                    name: 'FKUserSenderCompliment',
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    columnNames: ['user_sender'],
                    onDelete: 'SET NULL',
                    onUpdate: 'SET NULL'
                }
            ), 
        )*/
        
        await queryRunner.createForeignKeys(
            'compliments',
            [
                new TableForeignKey(
                {
                    name: 'FKUserSenderCompliment',
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    columnNames: ['user_sender'],
                    onDelete: 'SET NULL',
                    onUpdate: 'SET NULL'
                }
                ),
                new TableForeignKey(
                    {
                        name: 'FKUserReceiverCompliments',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['user_receiver'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    }
                ),
                new TableForeignKey(
                    {
                        name: 'FKTagCompliments',
                        referencedTableName: 'tags',
                        referencedColumnNames: ['id'],
                        columnNames: ['tag_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    }
                )
            ] 
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('compliments');
    }

}
