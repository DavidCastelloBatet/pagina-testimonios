import React from 'react';

const Testimonio = ({ imagen, nom, pais, cargo, empresa, texto }) => {
  return (
    <div className="container-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../images/testimonio-${imagen}.png`)}
        alt={`foto ${nom}`}
        title={`foto ${nom}`}
      />

      <div className="contenedor-texto-testimonio">
        <h2 className="nombre-testimonio">
          {nom} in {pais}
        </h2>
        <h3 className="cargo-testimonio">
          {cargo} at {empresa}
        </h3>
        <p className="texto-testimonio">"{texto}"</p>
      </div>
    </div>
  );
};

export default Testimonio;
