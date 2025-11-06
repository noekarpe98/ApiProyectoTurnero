import  express  from 'express'
import infraccionesRoutes from './routes/infracciones.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',infraccionesRoutes)

app.use((req, res, next) =>{
    res.status(404).json({
        message: 'endpoint no funciona'
    })
})

export default app;