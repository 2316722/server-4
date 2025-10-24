// 自分で一から書いてみよう
import { Hono } from 'jsr:@hono/hono';
import { serveStatic } from 'jsr:@hono/hono/deno';
const app = new Hono();

app.use('/*', serveStatic({ root: './public' }));

app.get('api', (c) => {
  return c.json({ message: 'Hello!!' });
});

Deno.serve(app.fetch);
