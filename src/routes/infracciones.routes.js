import { Router } from 'express'
import { getInturnos, getInestado, getInfraccionesDNI, getInfraccionesDNITitular } from '../controllers/infracciones.controllers.js'
const router = Router ()

router.get('/turnos',getInturnos)
router.get('/turnos/estado/:estado',getInestado)
router.get('/infracciones/dni/:dni',getInfraccionesDNI)
router.get('/infracciones/dnititular/:dni',getInfraccionesDNITitular)





export default router 