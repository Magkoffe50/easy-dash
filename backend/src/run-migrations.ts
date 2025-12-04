import dataSource from './migrations/data-source';

async function runMigrations(): Promise<void> {
  try {
    console.log('Running database migrations...');
    await dataSource.initialize();
    await dataSource.runMigrations();
    await dataSource.destroy();
    console.log('Migrations completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

runMigrations();
