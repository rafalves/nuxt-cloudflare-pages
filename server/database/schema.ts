import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

// Definindo a tabela Customers em Drizzle
export const customers = sqliteTable('Customers', {
  customerId: integer('CustomerId').primaryKey(),
  companyName: text('CompanyName'),
  contactName: text('ContactName')
});