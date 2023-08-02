import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

function cargar() {
    const [titulo, setTitulo] = useState('');
  const [duracion, setDuracion] = useState('');
  const [ingredientes, setIngredientes] = useState([]);
  const [preparacion, setPreparacion] = useState('');
  const [imagenes, setImagenes] = useState([]);

  const handleDrop = (acceptedFiles) => {
    // Mostrar la previsualización de las imágenes
    const imagenPreviews = acceptedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImagenes(imagenPreviews);
  };

  const handleIngredientesChange = (e) => {
    // Separar los ingredientes por comas y eliminar espacios en blanco
    const ingredientesArray = e.target.value.split(',').map((ingrediente) => ingrediente.trim());
    setIngredientes(ingredientesArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos al servidor o hacer lo que desees con ellos
    console.log('Datos enviados:', { titulo, duracion, ingredientes, preparacion });
  };

  return (
    <div className="App card-form">
      <h1 className='heading-form'>Formulario de Recetas</h1>
      <div className="card-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group input-div">
          <input
            type="text"
            className="input"
            placeholder='Titulo:'
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="form-group input-div">
          <input
            type="text"
            className="input"
            placeholder='Tiempo de Duración:'
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
            required
          />
        </div>
        <div className="form-group input-div">
          <input
            type="text"
            className="input"
            placeholder='Ingredientes (Por comas):'
            value={ingredientes.join(', ')}
            onChange={handleIngredientesChange}
            required
          />
        </div>
        <div className="form-group input-div">
          <textarea
            value={preparacion}
            placeholder='Preparación:'
            className="input"
            onChange={(e) => setPreparacion(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Arrastra las imágenes aquí:</label>
          <Dropzone onDrop={handleDrop} accept="image/*" multiple>
            {({ getRootProps, getInputProps }) => (
              <div className="dropzone" {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Arrastra y suelta las imágenes aquí o haz clic para seleccionar.</p>
              </div>
            )}
          </Dropzone>
        </div>
        <div className="image-previews">
          {imagenes.map((imagen, index) => (
            <img key={index} src={imagen.preview} alt={`Imagen ${index + 1}`} />
          ))}
        </div>
        <button className='mar submit' type="submit">Enviar</button>
      </form>
    </div>
    </div>
  );
}

export default cargar;
