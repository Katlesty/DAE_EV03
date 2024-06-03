import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { useState,useEffect } from 'react';
import AppService from './servicios/AppService';

function App() {

  const [prestamos, setPrestamos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [libros,setLibros] = useState([]);

  const [selectedUsuario, setSelectedUsuario] = useState('');
  const [selectedLibro, setSelectedLibro] = useState('');
  
  useEffect(() => {
    AppService.getPrestamos()
      .then(response => {
        setPrestamos(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    AppService.getUsuarios()
      .then(UsuarioResponse => {
        setUsuarios(UsuarioResponse); 
      })
      .catch(error => {
        console.log(error);
      });
    AppService.getLibros()
      .then(LibroResponse => {
        setLibros(LibroResponse); 
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const actualizarPrestamos = () => {
    AppService.getPrestamos()
      .then(response => {
        setPrestamos(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const agregarPrestamo = () => {
    const fechaActual = new Date().toISOString().split('T')[0];
    const fechaDevolucion = new Date(fechaActual);
    fechaDevolucion.setMonth(fechaDevolucion.getMonth() + 1);

    const nuevoPrestamo = {
      idUsuario: parseInt(selectedUsuario) ,
      idLibro: parseInt(selectedLibro),
      fecPrestamo: fechaActual,
      fecDevolucion: fechaDevolucion
    };

    console.log(nuevoPrestamo);

    AppService.postPrestamos(nuevoPrestamo)
      .then(() => {
        console.log("Préstamo agregado");
        actualizarPrestamos();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const eliminarPrestamo = (idPrestamo) => {
    AppService.deletePrestamo(idPrestamo)
      .then(() => {
        setPrestamos(prestamos.filter(prestamo => prestamo.idPrestamo !== idPrestamo));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const finalizarPrestamo = (prestamo) => {
    const fechaActual = new Date().toISOString().split('T')[0];
    const datos = {
      idPrestamo:prestamo.idPrestamo,
      fecPrestamo:prestamo.fecPrestamo,
      fecDevolucion: fechaActual,
      idLibro:prestamo.idLibro,
      idUsuario:prestamo.idUsuario
    };
  
    AppService.putPrestamo(datos.idPrestamo, datos)
      .then(() => {
        console.log("Préstamo finalizado");
        actualizarPrestamos();
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  const formatFecha = (fecha) => {
    const date = new Date(fecha);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${day}-${month}`;
};

  return (
    <div className="container mt-4">
      <form className='mt-4 mb-5'>
        <div className="mb-3">
          <div className='mb-3'>
            <label className='mb-2'>Usuario</label>
            <select className="form-control col" onChange={(e) => setSelectedUsuario(e.target.value)}>
              <option>Seleccione un usuario</option>
              {usuarios.map((usuario) => (
                <option key={usuario.idUsuario} value={usuario.idUsuario}>{usuario.nombre}</option>
              ))}
            </select>
          </div>
          <div className='mb-3'>
            <label className='mb-2'>Libro</label>
            <select className="form-control col" onChange={(e) => setSelectedLibro(e.target.value)}>
              <option>Seleccione un libro</option>
              {libros.map((libro) => (
                <option key={libro.idLibro} value={libro.idLibro}>{libro.titulo}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type='button' onClick={agregarPrestamo} className="btn btn-primary">Agregar préstamo</button>
          </div>
        </div>
      </form>
      
      <table className="table align-items-center">
        <thead>
          <tr>
            <th scope="col">Ejemplar</th>
            <th scope="col">Libro</th>
            <th scope="col">Cliente</th>
            <th scope="col">Inicio</th>
            <th scope="col">Fin</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {prestamos.map((prestamo) => {
        
            const libroAsociado = libros.find(libro => libro.idLibro === prestamo.idLibro);
            const usuarioAsociado = usuarios.find(usuario => usuario.idUsuario === prestamo.idUsuario);
            
            const libro = libroAsociado;
            const usuario = usuarioAsociado;

            return (
              <tr key={prestamo.idPrestamo}>
                <th scope="row">{prestamo.idPrestamo}</th>
                <td>{libro.titulo}</td>
                <td>{usuario.nombre}</td>
                <td>{formatFecha(prestamo.fecPrestamo)}</td>
                <td>{formatFecha(prestamo.fecDevolucion)}</td>
                <td><button type="button" onClick={() => finalizarPrestamo(prestamo)} className="btn btn-success">Finalizar</button></td>
                <td><button type="button" onClick={() => eliminarPrestamo(prestamo.idPrestamo)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;