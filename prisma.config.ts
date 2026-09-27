import { config } from 'dotenv';
import { defineConfig } from 'prisma/config';

// Carrega variáveis locais (ignora silenciosamente se o arquivo não existir)
config({ path: '.env.local' });
config();

export default defineConfig({
	datasource: {
		// Usa fallback vazio para não quebrar durante o `pnpm install` da Vercel
		url: process.env.DATABASE_URL ?? '',
	},
	migrations: {
		path: 'prisma/migrations',
	},
	schema: 'prisma/schema.prisma',
});
