import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/prueba.txt'; // Cambia esta ruta al archivo que deseas descargar
    link.download = 'prueba.txt'; // Nombre del archivo a descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="app-container">
      <div className="content-box text-center">
        <h1>¡Acelera Tu PC al Máximo!</h1>
        <p className="lead">
          Hemos creado una herramienta especial para optimizar tu rendimiento. 
          Descárgala ahora y lleva tu PC al siguiente nivel.
        </p>
        <button 
          className="btn btn-lg btn-success mt-4 download-button" 
          onClick={handleDownload}
          title="Haz clic para descargar la herramienta de optimización"
        >
          Descargar Ahora
        </button>
      </div>
    </div>
  );
}

export default App;
