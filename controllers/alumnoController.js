const Alumno = require('../models/Alumno');

// GET todos los alumnos
const getAlumnos = async (req, res) => {
    const alumnos = await Alumno.find();
    res.status(200).json(alumnos);
};

// GET alumno por ID
const getAlumnoById = async (req, res) => {
    const alumno = await Alumno.findById(req.params.id);
    res.status(200).json(alumno);
};

// POST crear alumno
const crearAlumno = async (req, res) => {
    const alumno = new Alumno({
        numControl : req.body.numControl,
        nombre     : req.body.nombre,
        primerAp   : req.body.primerAp,
        segundoAp  : req.body.segundoAp,
        fechaNac   : req.body.fechaNac,
        semestre   : req.body.semestre,
        carrera    : req.body.carrera
    });

    await alumno.save();
    res.status(201).json({ exito: true });
};

// PUT modificar alumno
const modificarAlumno = async (req, res) => {
    const alumno = await Alumno.findById(req.params.id);

    alumno.nombre    = req.body.nombre;
    alumno.primerAp  = req.body.primerAp;
    alumno.segundoAp = req.body.segundoAp;
    alumno.fechaNac  = req.body.fechaNac;
    alumno.semestre  = req.body.semestre;
    alumno.carrera   = req.body.carrera;

    const actualizado = await alumno.save();
    res.status(200).json(actualizado);
};

// DELETE eliminar alumno
const eliminarAlumno = async (req, res) => {
    const alumno = await Alumno.findById(req.params.id);
    await alumno.deleteOne();
    res.status(200).json({ message: 'Registro ELIMINADO correctamente' });
};

module.exports = {
    getAlumnos,
    getAlumnoById,
    crearAlumno,
    modificarAlumno,
    eliminarAlumno
};