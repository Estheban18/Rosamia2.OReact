import React, { useState, useRef, useEffect, useCallback } from 'react';
import './ChatbotRosamia.css'; // Importamos los estilos CSS mejorados

const ChatbotRosamia = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "¡Hola! Soy Rosamia, tu asistente virtual. Estoy aquí para ayudarte. ¿En qué puedo asistirte hoy?", 
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  
  // Estados mejorados para el control del chatbot
  const [chatState, setChatState] = useState('closed'); // 'closed', 'minimized', 'open', 'opening'
  const [isVisible, setIsVisible] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  
  // Estados para el entrenamiento
  const [isTraining, setIsTraining] = useState(false);
  const [trainingData, setTrainingData] = useState({});
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);

  // Base de conocimiento inicial del chatbot
  const knowledgeBase = {
    saludos: [
      "¡Hola! ¿En qué puedo ayudarte?", 
      "¡Hola! ¿Cómo estás?",
      "¡Buenos días! ¿En qué puedo asistirte?",
      "¡Hola! Es un placer saludarte"
    ],
    despedidas: [
      "¡Hasta luego! Que tengas un excelente día",
      "Adiós, fue un placer ayudarte",
      "¡Nos vemos! Siempre estaré aquí cuando me necesites",
      "¡Que tengas un buen día!"
    ],
    ayuda: [
      "Puedo ayudarte con preguntas generales, responder dudas o simplemente conversar contigo. ¿En qué necesitas ayuda?",
      "Estoy aquí para asistirte en lo que necesites. ¿Qué te gustaría saber?",
      "Pregúntame lo que quieras y haré lo posible por ayudarte. También puedes entrenarme para mejorar mis respuestas"
    ],
    default: [
      "Interesante. ¿Podrías contarme más sobre eso?",
      "No estoy completamente segura de entender. ¿Podrías reformular tu pregunta?",
      "Eso es algo sobre lo que todavía estoy aprendiendo. ¿Podrías explicarme más?",
      "Voy a tomar nota de eso para mejorar mis respuestas en el futuro"
    ]
  };

  // Función para scroll automático
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (chatState === 'open') {
      scrollToBottom();
    }
  }, [messages, chatState, scrollToBottom]);

  // Enfocar input cuando se abre el chat
  useEffect(() => {
    if (chatState === 'open' && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 300);
    }
  }, [chatState]);

  // Función mejorada para abrir el chatbot
  const openChatbot = useCallback(() => {
    setIsVisible(true);
    setChatState('opening');
    
    // Cambiar a 'open' después de la animación
    setTimeout(() => {
      setChatState('open');
    }, 300);
  }, []);

  // Función para cerrar el chatbot
  const closeChatbot = useCallback(() => {
    setChatState('closed');
    
    // Ocultar completamente después de la animación
    setTimeout(() => {
      setIsVisible(false);
    }, 400);
  }, []);

  // Función para minimizar/maximizar
  const toggleMinimize = useCallback(() => {
    if (chatState === 'minimized') {
      setChatState('open');
    } else if (chatState === 'open') {
      setChatState('minimized');
    }
  }, [chatState]);

  // Función para encontrar la respuesta más adecuada
  const findBestResponse = useCallback((input) => {
    const inputLower = input.toLowerCase();
    
    // Detectar saludos
    if (inputLower.includes("hola") || inputLower.includes("buenos días") || 
        inputLower.includes("buenas tardes") || inputLower.includes("buenas noches") ||
        inputLower.includes("hi") || inputLower.includes("hello")) {
      return knowledgeBase.saludos[Math.floor(Math.random() * knowledgeBase.saludos.length)];
    }
    
    // Detectar despedidas
    if (inputLower.includes("adiós") || inputLower.includes("chao") || 
        inputLower.includes("nos vemos") || inputLower.includes("hasta luego") ||
        inputLower.includes("bye") || inputLower.includes("hasta la vista")) {
      return knowledgeBase.despedidas[Math.floor(Math.random() * knowledgeBase.despedidas.length)];
    }
    
    // Detectar preguntas de ayuda
    if (inputLower.includes("ayuda") || inputLower.includes("qué puedes hacer") || 
        inputLower.includes("para qué sirves") || inputLower.includes("help") ||
        inputLower.includes("cómo funcionas")) {
      return knowledgeBase.ayuda[Math.floor(Math.random() * knowledgeBase.ayuda.length)];
    }
    
    // Buscar en el conocimiento entrenado
    for (const [key, response] of Object.entries(trainingData)) {
      if (inputLower.includes(key.toLowerCase())) {
        return response;
      }
    }
    
    // Respuesta por defecto
    return knowledgeBase.default[Math.floor(Math.random() * knowledgeBase.default.length)];
  }, [trainingData, knowledgeBase]);

  // Función mejorada para enviar mensajes
  const handleSendMessage = useCallback(() => {
    if (inputValue.trim() === "" || isTyping) return;
    
    // Agregar mensaje del usuario
    const newUserMessage = {
      id: Date.now(),
      text: inputValue.trim(),
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    const currentInput = inputValue;
    setInputValue("");
    setIsTyping(true);
    
    // Simular respuesta del bot con indicador de escritura
    setTimeout(() => {
      const botResponse = findBestResponse(currentInput);
      
      const newBotMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newBotMessage]);
      setIsTyping(false);
    }, Math.random() * 1000 + 500); // Respuesta más natural
  }, [inputValue, isTyping, findBestResponse]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (isTraining) {
        handleTrainResponse();
      } else {
        handleSendMessage();
      }
    }
  }, [isTraining, handleSendMessage]);

  // Función mejorada para el entrenamiento
  const handleTraining = useCallback(() => {
    if (isTraining) {
      setIsTraining(false);
      setTrainingData({});
      setInputValue("");
      
      const cancelMessage = {
        id: Date.now(),
        text: "Entrenamiento cancelado. ¡Sigamos conversando!",
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, cancelMessage]);
    } else {
      setIsTraining(true);
      const trainingMessage = {
        id: Date.now(),
        text: "🎓 Modo entrenamiento activado. Escribe una palabra clave o frase que quieras que aprenda:",
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, trainingMessage]);
    }
  }, [isTraining]);

  const handleTrainResponse = useCallback(() => {
    if (inputValue.trim() === "") return;
    
    if (!trainingData.keyword) {
      // Guardar la palabra clave
      const keyword = inputValue.trim();
      setTrainingData({ keyword, response: "" });
      
      const keywordMessage = {
        id: Date.now(),
        text: `✅ Palabra clave "${keyword}" guardada. Ahora escribe la respuesta que debería dar cuando detecte esta palabra:`,
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, keywordMessage]);
      setInputValue("");
    } else {
      // Guardar la respuesta completa
      const response = inputValue.trim();
      const newTrainingEntry = {
        [trainingData.keyword]: response
      };
      
      setTrainingData(prev => ({
        ...prev,
        ...newTrainingEntry,
        response
      }));
      
      const responseMessage = {
        id: Date.now(),
        text: `🎉 ¡Perfecto! Ahora responderé "${response}" cuando detecte la palabra "${trainingData.keyword}". ¡Gracias por enseñarme!`,
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, responseMessage]);
      setInputValue("");
      
      // Salir del modo entrenamiento después de un momento
      setTimeout(() => {
        setIsTraining(false);
        setTrainingData({});
      }, 2000);
    }
  }, [inputValue, trainingData]);

  // Componente para el icono de flor rosada mejorado
  const FlowerIcon = () => (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#FFB6C1" stroke="#FF69B4" strokeWidth="2"/>
      <circle cx="20" cy="20" r="10" fill="#FF69B4"/>
      <circle cx="14" cy="14" r="4" fill="#FFC0CB"/>
      <circle cx="26" cy="14" r="4" fill="#FFC0CB"/>
      <circle cx="14" cy="26" r="4" fill="#FFC0CB"/>
      <circle cx="26" cy="26" r="4" fill="#FFC0CB"/>
      <circle cx="20" cy="12" r="3" fill="#FFB6C1"/>
      <circle cx="12" cy="20" r="3" fill="#FFB6C1"/>
      <circle cx="28" cy="20" r="3" fill="#FFB6C1"/>
      <circle cx="20" cy="28" r="3" fill="#FFB6C1"/>
    </svg>
  );

  // Componente para el icono de chat
  const ChatIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="currentColor"/>
      <circle cx="8" cy="10" r="1.5" fill="white"/>
      <circle cx="12" cy="10" r="1.5" fill="white"/>
      <circle cx="16" cy="10" r="1.5" fill="white"/>
    </svg>
  );

  // Formatear la hora para mostrar en los mensajes
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Determinar las clases CSS según el estado
  const getContainerClasses = () => {
    const classes = ['chatbot-container'];
    
    if (chatState === 'closed') classes.push('closed');
    if (chatState === 'minimized') classes.push('minimized');
    if (chatState === 'opening') classes.push('opening');
    if (isTyping) classes.push('loading');
    
    return classes.join(' ');
  };

  return (
    <>
      {/* Botón flotante para abrir el chat */}
      {(!isVisible || chatState === 'closed') && (
        <button 
          className="chatbot-toggle" 
          onClick={openChatbot}
          aria-label="Abrir chat con Rosamia"
        >
          <ChatIcon />
        </button>
      )}

      {/* Contenedor principal del chatbot */}
      {isVisible && (
        <div 
          ref={chatContainerRef}
          className={getContainerClasses()}
          role="dialog"
          aria-labelledby="chatbot-title"
          aria-hidden={chatState === 'closed'}
        >
          {/* Cabecera mejorada */}
          <div className="chatbot-header">
            <div className="chatbot-title">
              <FlowerIcon />
              <h2 id="chatbot-title">Rosamia</h2>
              <span 
                className={`status-dot ${isOnline ? '' : 'offline'}`}
                title={isOnline ? 'En línea' : 'Fuera de línea'}
              ></span>
            </div>
            <div className="chatbot-controls">
              <button 
                className="control-btn minimize-btn"
                onClick={toggleMinimize}
                aria-label={chatState === 'minimized' ? 'Maximizar chat' : 'Minimizar chat'}
                title={chatState === 'minimized' ? 'Maximizar' : 'Minimizar'}
              >
                {chatState === 'minimized' ? '□' : '−'}
              </button>
              <button 
                className="control-btn close-btn"
                onClick={closeChatbot}
                aria-label="Cerrar chat"
                title="Cerrar"
              >
                ×
              </button>
            </div>
          </div>
          
          {/* Área de mensajes */}
          {chatState !== 'minimized' && (
            <>
              <div className="chatbot-messages" role="log" aria-live="polite">
                {messages.map((message) => (
                  <div key={message.id} className={`message ${message.sender}`}>
                    <div className="message-content">
                      <p>{message.text}</p>
                      <span className="timestamp">{formatTime(message.timestamp)}</span>
                    </div>
                  </div>
                ))}
                
                {/* Indicador de escritura */}
                {isTyping && (
                  <div className="message bot">
                    <div className="message-content">
                      <p>
                        <span className="typing-indicator">
                          Rosamia está escribiendo
                          <span>.</span><span>.</span><span>.</span>
                        </span>
                      </p>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              {/* Área de entrada mejorada */}
              <div className="chatbot-input">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={
                    isTraining 
                      ? (trainingData.keyword ? "Escribe la respuesta..." : "Escribe una palabra clave...")
                      : "Escribe tu mensaje..."
                  }
                  disabled={isTyping}
                  maxLength={500}
                  aria-label="Escribe tu mensaje"
                />
                <button 
                  onClick={isTraining ? handleTrainResponse : handleSendMessage}
                  disabled={isTyping || inputValue.trim() === ""}
                  aria-label={isTraining ? "Enseñar respuesta" : "Enviar mensaje"}
                >
                  {isTraining ? (trainingData.keyword ? "Enseñar" : "Aprender") : "Enviar"}
                </button>
              </div>
              
              {/* Botones de acción */}
              <div className="chatbot-actions">
                <button 
                  className="training-btn" 
                  onClick={handleTraining}
                  disabled={isTyping}
                  aria-label={isTraining ? "Cancelar entrenamiento" : "Entrenar a Rosamia"}
                >
                  {isTraining ? "Cancelar Entrenamiento" : "🎓 Entrenar a Rosamia"}
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatbotRosamia; 