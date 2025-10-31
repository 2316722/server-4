// 自分で一から書いてみよう
import { Hono } from 'jsr:@hono/hono';
import { serveStatic } from 'jsr:@hono/hono/deno';
const app = new Hono();

app.use('/*', serveStatic({ root: './public' }));

app.get('/api', async (c) => {
  return c.json({ massage: 'GET' });
});

Deno.serve(app.fetch);
