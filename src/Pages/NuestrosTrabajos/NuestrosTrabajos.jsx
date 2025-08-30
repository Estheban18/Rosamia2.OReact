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
      video: "https://www.facebook.com/reel/1302685047465090",
      descripcion: "Decoración floral completa para una boda en jardín.",
      likes: 245,
      comentarios: 32,
      tipo: "mp4"
    },
    {
      id: 2,
      categoria: "eventos",
      titulo: "Centros de Mesa para Gala",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Ejemplo YouTube
      descripcion: "Diseño de centros de mesa para evento corporativo.",
      likes: 189,
      comentarios: 21,
      tipo: "youtube"
    },
    {
      id: 3,
      categoria: "ramos",
      titulo: "Ramo de Novia Personalizado",
      video: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-holding-a-bouquet-of-flowers-41030-large.mp4",
      descripcion: "Ramo de novia con rosas blancas y detalles en perlas.",
      likes: 321,
      comentarios: 45,
      tipo: "mp4"
    },
    {
      id: 4,
      categoria: "decoracion",
      titulo: "Decoración con Flores Frescas",
      video: "https://player.vimeo.com/video/148751763", // Ejemplo Vimeo
      descripcion: "Transformamos espacios con arreglos florales frescos.",
      likes: 276,
      comentarios: 29,
      tipo: "vimeo"
    }
  ];

  // Determinar el tipo de video basado en la URL
  const getVideoType = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
    if (url.includes('vimeo.com')) return 'vimeo';
    if (url.includes('facebook.com') || url.includes('fb.watch')) return 'facebook';
    if (url.includes('.mp4') || url.includes('webm') || url.includes('ogg')) return 'mp4';
    return 'unknown';
  };

  // Obtener ID de YouTube desde URL
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Obtener ID de Vimeo desde URL
  const getVimeoId = (url) => {
    const regExp = /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)([0-9]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

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
    const currentVideo = trabajos[activeVideo];
    const videoType = getVideoType(currentVideo.video);
    
    if (videoType === 'mp4' && videoRefs.current[activeVideo]) {
      if (isPlaying) {
        videoRefs.current[activeVideo].pause();
      } else {
        videoRefs.current[activeVideo].play();
      }
      setIsPlaying(!isPlaying);
    }
    // Para YouTube, Vimeo y Facebook, la reproducción se maneja mediante iframes
    // que tienen sus propios controles integrados
  };

  const nextVideo = () => {
    if (activeVideo < trabajos.length - 1) {
      setActiveVideo(activeVideo + 1);
      setIsPlaying(false);
    }
  };

  const prevVideo = () => {
    if (activeVideo > 0) {
      setActiveVideo(activeVideo - 1);
      setIsPlaying(false);
    }
  };

  // Renderizar el reproductor de video según el tipo
  const renderVideoPlayer = () => {
    const currentVideo = trabajos[activeVideo];
    const videoType = getVideoType(currentVideo.video);
    
    switch (videoType) {
      case 'youtube':
        const youtubeId = getYouTubeId(currentVideo.video);
        return (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&controls=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={currentVideo.titulo}
          ></iframe>
        );
      
      case 'vimeo':
        const vimeoId = getVimeoId(currentVideo.video);
        return (
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}`}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={currentVideo.titulo}
          ></iframe>
        );
      
      case 'facebook':
        return (
          <div className="facebook-video-container">
            <p>Los videos de Facebook deben verse directamente en su plataforma.</p>
            <a href={currentVideo.video} target="_blank" rel="noopener noreferrer" className="external-link">
              Ver video en Facebook
            </a>
          </div>
        );
      
      case 'mp4':
      default:
        return (
          <>
            <video 
              ref={el => videoRefs.current[activeVideo] = el}
              loop
              onClick={togglePlay}
              poster="https://via.placeholder.com/300x500?text=Cargando+video..."
            >
              <source src={currentVideo.video} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
            
            {!isPlaying && (
              <div className="play-button" onClick={togglePlay}>
                ▶
              </div>
            )}
          </>
        );
    }
  };

  return (
    <section id="trabajos" className="video-section">
      <div className="container">
        <h2 className="section-title">Nuestros Trabajos</h2>
        <p className="text-center mb-5">Descubre nuestra creatividad en acción a través de estos videos</p>
        
        <div className="video-container">
          {renderVideoPlayer()}
          
          {/* Controles de video - solo para MP4 */}
          {getVideoType(trabajos[activeVideo].video) === 'mp4' && (
            <div className="video-controls">
              <button className="control-btn" onClick={prevVideo} disabled={activeVideo === 0}>
                <span>◀</span>
              </button>
              
              <button className="play-pause-btn" onClick={togglePlay}>
                {isPlaying ? '❚❚' : '▶'}
              </button>
              
              <button className="control-btn" onClick={nextVideo} disabled={activeVideo === trabajos.length - 1}>
                <span>▶</span>
              </button>
            </div>
          )}
          
          {/* Indicador de progreso */}
          <div className="video-progress">
            {trabajos.map((trabajo, index) => (
              <div 
                key={trabajo.id} 
                className={`progress-dot ${index === activeVideo ? 'active' : ''}`}
                onClick={() => {
                  setActiveVideo(index);
                  setIsPlaying(false);
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Panel de información */}
        <div className="video-info-panel">
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
              <span className="share-icon">↗️</span>
              <span className="count">Compartir</span>
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
    </section>
  );
};

export default NuestrosTrabajos; 