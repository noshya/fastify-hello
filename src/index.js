const Fastify = require('fastify');

const app = Fastify();

// Route בסיסי
app.get('/', async (req, reply) => {
  return { message: 'Hello, Render!' };
});

// הפעלת השרת
const start = async () => {
  try {
    await app.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' });
    console.log(`🚀 Server running`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
