import express from 'express';
import { handler } from './dist/server/entry.mjs';

const app = express();
const port = process.env.PORT || 4321;

app.use('/_astro', express.static('dist/client/_astro'));
app.use(express.static('dist/client'));

app.use(handler);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
    console.log('Astro SSR application running in middleware mode.');
});
