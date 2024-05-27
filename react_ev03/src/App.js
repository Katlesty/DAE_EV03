import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <div className="container">
      <table class="table">
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <th scope="col"><button className="btn btn-success">Finalizar</button></th>
            <th scope="col"><button className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
