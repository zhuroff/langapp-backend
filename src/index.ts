import Fastify from 'fastify'

const app = Fastify({
  logger: {
    transport: {
      target: 'pino-pretty'
    }
  }
})

const start = async () => {
  await app.listen({
    port: 3000,
    host: 'localhost'
  })
}

start()
