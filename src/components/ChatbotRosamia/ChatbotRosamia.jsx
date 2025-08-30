import React, { useState, useRef, useEffect } from 'react';
import './ChatbotRosamia.css'; // Importamos los estilos CSS

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
  const [isOpen, setIsOpen] = useState(false);
  const [isTraining, setIsTraining] = useState(false);
  const [trainingData, setTrainingData] = useState({});
  const messagesEndRef = useRef(null);

  // Base de conocimiento inicial del chatbot
  const knowledgeBase = {
    saludos: ["Hola", "Hola!", "¡Hola! ¿En qué puedo ayudarte?", "¡Hola! ¿Cómo estás?"],
    despedidas: ["Adiós", "Hasta luego", "¡Que tengas un buen día!", "Fue un placer ayudarte"],
    ayuda: [
      "Puedo ayudarte con preguntas generales. ¿En qué necesitas ayuda?",
      "Estoy aquí para asistirte. ¿Qué necesitas saber?",
      "Pregúntame lo que quieras y haré lo posible por ayudarte"
    ],
    default: [
      "Interesante. ¿Podrías decirme más?",
      "No estoy segura de entender completamente. ¿Podrías reformular?",
      "Eso es algo sobre lo que todavía estoy aprendiendo",
      "Voy a tomar nota de eso para mejorar mis respuestas en el futuro"
    ]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Función para encontrar la respuesta más adecuada
  const findBestResponse = (input) => {
    const inputLower = input.toLowerCase();
    
    // Detectar saludos
    if (inputLower.includes("hola") || inputLower.includes("buenos días") || 
        inputLower.includes("buenas tardes") || inputLower.includes("hi") || 
        inputLower.includes("hello")) {
      return knowledgeBase.saludos[Math.floor(Math.random() * knowledgeBase.saludos.length)];
    }
    
    // Detectar despedidas
    if (inputLower.includes("adiós") || inputLower.includes("chao") || 
        inputLower.includes("nos vemos") || inputLower.includes("hasta luego") ||
        inputLower.includes("bye")) {
      return knowledgeBase.despedidas[Math.floor(Math.random() * knowledgeBase.despedidas.length)];
    }
    
    // Detectar preguntas de ayuda
    if (inputLower.includes("ayuda") || inputLower.includes("qué puedes hacer") || 
        inputLower.includes("para qué sirves") || inputLower.includes("help")) {
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
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;
    
    // Agregar mensaje del usuario
    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages([...messages, newUserMessage]);
    setInputValue("");
    
    // Simular respuesta del bot después de un breve retraso
    setTimeout(() => {
      const botResponse = findBestResponse(inputValue);
      
      const newBotMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, newBotMessage]);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleTraining = () => {
    if (isTraining) {
      // Finalizar el modo entrenamiento
      setIsTraining(false);
      setInputValue("");
    } else {
      // Iniciar el modo entrenamiento
      setIsTraining(true);
      const trainingMessage = {
        id: messages.length + 1,
        text: "Modo entrenamiento activado. Por favor, escribe una palabra clave o frase que quieras que aprenda:",
        sender: "bot",
        timestamp: new Date()
      };
      setMessages([...messages, trainingMessage]);
    }
  };

  const handleTrainResponse = () => {
    if (inputValue.trim() === "") return;
    
    if (!trainingData.keyword) {
      // Guardar la palabra clave
      setTrainingData({
        keyword: inputValue,
        response: ""
      });
      
      const keywordMessage = {
        id: messages.length + 1,
        text: `Palabra clave "${inputValue}" guardada. Ahora escribe la respuesta que debería dar cuando detecte esta palabra:`,
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages([...messages, keywordMessage]);
      setInputValue("");
    } else {
      // Guardar la respuesta completa
      const newTrainingData = {
        ...trainingData,
        response: inputValue
      };
      
      // Aquí normalmente enviaríamos estos datos a un backend para almacenamiento permanente
      // Por ahora, solo lo guardamos en el estado local
      setTrainingData(newTrainingData);
      
      const responseMessage = {
        id: messages.length + 1,
        text: `¡Perfecto! Ahora responderé "${inputValue}" cuando detecte la palabra "${trainingData.keyword}".`,
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages([...messages, responseMessage]);
      setInputValue("");
      
      // Salir del modo entrenamiento después de 2 segundos
      setTimeout(() => {
        setIsTraining(false);
        setTrainingData({});
      }, 2000);
    }
  };

  // Componente para el icono de flor rosada
  const FlowerIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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

  // Formatear la hora para mostrar en los mensajes
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="chatbot-title">
          <FlowerIcon />
          <h2>Rosamia</h2>
          <span className="status-dot"></span>
        </div>
        <button className="minimize-btn">{isOpen ? '−' : '+'}</button>
      </div>
      
      {isOpen && (
        <>
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="timestamp">{formatTime(message.timestamp)}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="chatbot-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={isTraining ? "Escribe la respuesta..." : "Escribe tu mensaje..."}
              disabled={isTraining && trainingData.keyword && !trainingData.response}
            />
            <button 
              onClick={isTraining ? handleTrainResponse : handleSendMessage}
              disabled={isTraining && trainingData.keyword && !trainingData.response}
            >
              {isTraining ? (trainingData.keyword ? "Enseñar" : "Aprender") : "Enviar"}
            </button>
          </div>
          
          <div className="chatbot-actions">
            <button className="training-btn" onClick={handleTraining}>
              {isTraining ? "Cancelar Entrenamiento" : "Entrenar a Rosamia"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatbotRosamia;  