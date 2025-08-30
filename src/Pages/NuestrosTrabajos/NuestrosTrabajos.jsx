import React, { useState, useRef, useEffect } from 'react';
import './NuestrosTrabajos.css';

const NuestrosTrabajos = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef([]);
  
  const trabajos = [
    {
      id: 1,
      categoria: "bodas",
      titulo: "Arreglos Florales para Boda",
      video: "https://assets.mixkit.co/videos/preview/mixkit-bride-with-floral-wreath-in-her-hair-41035-large.mp4",
      descripcion: "Decoración floral completa para una boda en jardín.",
      likes: 245,
      comentarios: 32
    },
    {
      id: 2,
      categoria: "eventos",
      titulo: "Centros de Mesa para Gala",
      video: "https://assets.mixkit.co/videos/preview/mixkit-floral-design-in-a-wedding-41071-large.mp4",
      descripcion: "Diseño de centros de mesa para evento corporativo.",
      likes: 189,
      comentarios: 21
    },
    {
      id: 3,
      categoria: "ramos",
      titulo: "Ramo de Novia Personalizado",
      video: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-holding-a-bouquet-of-flowers-41030-large.mp4",
      descripcion: "Ramo de novia con rosas blancas y detalles en perlas.",
      likes: 321,
      comentarios: 45
    },
    {
      id: 4,
      categoria: "decoracion",
      titulo: "Decoración con Flores Frescas",
      video: "https://assets.mixkit.co/videos/preview/mixkit-woman-holding-a-tray-with-flowers-41033-large.mp4",
      descripcion: "Transformamos espacios con arreglos florales frescos.",
      likes: 276,
      comentarios: 29
    }
  ];

  // Efecto para manejar la reproducción de videos
  useEffect(() => {
    const handleScroll = () => {
      // Lógica para detectar qué video está en el centro de la pantalla
      // y pausar los demás (simplificado para este ejemplo)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const togglePlay = () => {
    if (videoRefs.current[activeVideo]) {
      if (isPlaying) {
        videoRefs.current[activeVideo].pause();
      } else {
        videoRefs.current[activeVideo].play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextVideo = () => {
    if (activeVideo < trabajos.length - 1) {
      videoRefs.current[activeVideo].pause();
      setActiveVideo(activeVideo + 1);
      setIsPlaying(false);
    }
  };

  const prevVideo = () => {
    if (activeVideo > 0) {
      videoRefs.current[activeVideo].pause();
      setActiveVideo(activeVideo - 1);
      setIsPlaying(false);
    }
  };

  return (
    <section id="trabajos" className="section section-light">
      <div className="container">
        <h2 className="section-title">Nuestros Trabajos</h2>
        <p className="text-center mb-5">Descubre nuestra creatividad en acción a través de estos videos</p>
        
        <div className="tiktok-container">
          <div className="tiktok-video-wrapper">
            <div className="tiktok-video-container">
              <video 
                ref={el => videoRefs.current[activeVideo] = el}
                className="tiktok-video"
                loop
                onClick={togglePlay}
                poster="https://via.placeholder.com/300x500?text=Cargando+video..."
              >
                <source src={trabajos[activeVideo].video} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              
              {/* Controles de video */}
              <div className="video-controls">
                <button className="control-btn" onClick={prevVideo} disabled={activeVideo === 0}>
                  <span className="css-flower"></span>
                </button>
                
                <button className="play-pause-btn" onClick={togglePlay}>
                  {isPlaying ? '❚❚' : '▶'}
                </button>
                
                <button className="control-btn" onClick={nextVideo} disabled={activeVideo === trabajos.length - 1}>
                  <span className="css-flower"></span>
                </button>
              </div>
              
              {/* Indicador de progreso */}
              <div className="video-progress">
                {trabajos.map((trabajo, index) => (
                  <div 
                    key={trabajo.id} 
                    className={`progress-dot ${index === activeVideo ? 'active' : ''}`}
                    onClick={() => {
                      videoRefs.current[activeVideo].pause();
                      setActiveVideo(index);
                      setIsPlaying(false);
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Panel de información al estilo TikTok */}
            <div className="tiktok-info-panel">
              <div className="video-info">
                <h3 className="video-title">{trabajos[activeVideo].titulo}</h3>
                <p className="video-description">{trabajos[activeVideo].descripcion}</p>
                <div className="video-category">
                  <span className="flower-badge">{trabajos[activeVideo].categoria}</span>
                </div>
              </div>
              
              <div className="interaction-buttons">
                <div className="interaction-btn">
                  <span className="heart-icon">❤️</span>
                  <span className="count">{trabajos[activeVideo].likes}</span>
                </div>
                
                <div className="interaction-btn">
                  <span className="comment-icon">💬</span>
                  <span className="count">{trabajos[activeVideo].comentarios}</span>
                </div>
                
                <div className="interaction-btn">
                  <span className="share-icon">↗️</span>
                  <span className="count">Compartir</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Miniaturas de videos */}
          <div className="video-thumbnails">
            {trabajos.map((trabajo, index) => (
              <div 
                key={trabajo.id} 
                className={`thumbnail ${index === activeVideo ? 'active' : ''}`}
                onClick={() => {
                  videoRefs.current[activeVideo].pause();
                  setActiveVideo(index);
                  setIsPlaying(false);
                }}
              >
                <div className="thumbnail-image">
                  <img 
                    src={`https://via.placeholder.com/80x100?text=Video+${index + 1}`} 
                    alt={`Miniatura ${trabajo.titulo}`} 
                  />
                </div>
                <span className="thumbnail-title">{trabajo.titulo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestrosTrabajos; 