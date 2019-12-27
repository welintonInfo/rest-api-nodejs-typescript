import dotenv from 'dotenv'

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

const env = process.env

const appConfig = {
  dbUrl: `mongodb://${env.DB_HOST}:${env.DB_PORT}/${env.DB_DATABASE}`
}

export default appConfig
