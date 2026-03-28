const express = require('express');
const router  = express.Router();

const {
    getAlumnos,
    getAlumnoById,
    crearAlumno,
    modificarAlumno,
    eliminarAlumno
} = require('../controllers/alumnoController');

router.get('/',      getAlumnos);
router.get('/:id',   getAlumnoById);
router.post('/',     crearAlumno);
router.put('/:id',   modificarAlumno);
router.delete('/:id',eliminarAlumno);

module.exports = router;