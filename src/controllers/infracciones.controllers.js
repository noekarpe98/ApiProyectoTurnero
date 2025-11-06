import {pool} from '../db.js'

export const getInturnos = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM turnos')
        res.json(rows) 
    } catch (error) {
      return res.status(500).json({
        message: 'Algo salio mal'
      })  
    }
    
}

export const getInestado = async (req, res) => {
    try {
        const estado = req.params.estado;
        console.log('Estado:', estado);

        const [rows] = await pool.query('SELECT * FROM turnos WHERE estado = ?', [estado]);
        console.log('Rows:', rows);

        if (rows.length === 0) {
            return res.status(404).json({
                message: ' no encontrada'
            });
        }

        res.json(rows[0]);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            message: 'Algo salió mal',
            error: error.message // Puedes añadir el mensaje de error para obtener más información
        });
    }
}

export const getInfraccionesDNI = async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM infracciones_maestro WHERE dni = ?', [req.params.dni])
    
    if (rows.length <= 0) return res.status(404).json({
        message: 'Infraccion no encontrada'
    })

    res.json(rows[0])
    }catch (error) {
        return res.status(500).json({
          message: 'Algo salio mal'
        })  
      }
}

export const getInfraccionesDNITitular = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT infracciones_maestro.dni_infractor, infracciones_maestro.dni_titular, infracciones_maestro.dominio, infracciones_maestro.lugar, infracciones_maestro.fecha, infracciones_maestro.estado,infracciones_maestro.id_sistema, detalle.id_detalle,detalle.codigo_multa,codigo_detalle.codigo, codigo_detalle.descripcion FROM infracciones_maestro JOIN detalle ON infracciones_maestro.id_sistema = detalle.id_detalle JOIN codigo_detalle ON detalle.codigo_multa = codigo_detalle.codigo WHERE infracciones_maestro.estado IN ("A", "C", "D", "F", "L", "O", "R", "T") AND infracciones_maestro.dni_titular = ?', [req.params.dni])
  
  if (rows.length <= 0) return res.status(404).json({
      message: 'Infraccion no encontrada'
  })

  res.json(rows[0])
  }catch (error) {
      return res.status(500).json({
        message: 'Algo salio mal'
      })  
    }
}
