import React, { useState, useEffect } from 'react';
import './NuestrosLogros.css';

const NuestrosLogros = () => {
  const [counters, setCounters] = useState([
    { id: 1, valor: 0, objetivo: 12, texto: "Años de Experiencia", icono: "🎉" },
    { id: 2, valor: 0, objetivo: 3500, texto: "Clientes Satisfechos", icono: "💐" },
    { id: 3, valor: 0, objetivo: 28, texto: "Premios Internacionales", icono: "🏆" },
    { id: 4, valor: 0, objetivo: 98, texto: "Porcentaje de Satisfacción", icono: "⭐" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prevCounters => 
        prevCounters.map(counter => {
          if (counter.valor < counter.objetivo) {
            // Para el porcentaje, incrementamos de 0.5 en 0.5
            const incremento = counter.id === 4 ? 0.5 : 1;
            return { ...counter, valor: Math.min(counter.valor + incremento, counter.objetivo) };
          }
          return counter;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="logros" className="section section-gradient">
      <div className="container">
        <h2 className="section-title text-white">Nuestros Logros</h2>
        <p className="text-center text-white mb-5">Los números que hablan de nuestra dedicación y excelencia</p>
        
        <div className="row">
          {counters.map(logro => (
            <div key={logro.id} className="col-3 col-md-6 col-sm-12">
              <div className="achievement-card text-center slide-in-up">
                <div className="achievement-icon">{logro.icono}</div>
                <h3 className="achievement-value text-white">
                  {logro.id === 4 ? `${logro.valor.toFixed(1)}%` : logro.valor.toFixed(0)}+
                </h3>
                <p className="achievement-text">{logro.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NuestrosLogros; 