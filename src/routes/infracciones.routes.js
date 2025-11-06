import { Router } from 'express'
import { getInfracciones, getInfraccionesPatente, getInfraccionesDNI, getInfraccionesDNITitular } from '../controllers/infracciones.controllers.js'
const router = Router ()

router.get('/infracciones',getInfracciones)
router.get('/infracciones/dominio/:dominio',getInfraccionesPatente)
router.get('/infracciones/dni/:dni',getInfraccionesDNI)
router.get('/infracciones/dnititular/:dni',getInfraccionesDNITitular)





export default router 