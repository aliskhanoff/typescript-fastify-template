import fastify from 'fastify';
import { join } from 'path';

const app = fastify({ logger: true })
.register(require('fastify-cors'), { 
  origin: true,
  methods: ["GET","POST", "DELETE", "PUT", "PATCH"]
})

.register(require('fastify-static'), {
  root: join(__dirname, '../../frontend/build'),
  prefix: '/',
});

app.addContentTypeParser('*', function (request, payload, done) {
  let data = ''
  payload.on('data', chunk => { data += chunk })
  payload.on('end', () => {
    done(null, data)
  })
});

app.listen(process.env.PORT || 1337)
