/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      // url: 'postgresql://accounts:ypvN2ke3PGFE@ep-weathered-heart-a58wmzem.us-east-2.aws.neon.tech/AI-Content-Genrator?sslmode=require',
      url: 'postgresql://neondb_owner:npg_fPtCMR5jzD0n@ep-lively-tree-a8b2lhle-pooler.eastus2.azure.neon.tech/neondb?sslmode=require'
    }
  };
  
