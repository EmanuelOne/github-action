import './App.css';
import { Route, Routes } from 'react-router-dom';
import { routers } from './routes';

function App() {
  return (
    <Routes>
      {routers.map(({ path, component: Component }) => (
        <Route {...{ key: path, path, element: <Component /> }} />
      ))}
    </Routes>
  );
}

export default App;
