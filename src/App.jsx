import { useState, useEffect } from 'react';
import './App.css';

const signosZodiacales = {
  aries: {
    nombre: 'Aries',
    fechas: '21 Marzo - 19 Abril',
    simbolo: '♈',
    elemento: 'Fuego',
    planeta: 'Marte',
    horoscopo: 'La energía marciana impulsa tu espíritu pionero hacia nuevas conquistas. Este período trae oportunidades únicas para liderar proyectos importantes. Tu naturaleza valiente será la clave para superar cualquier obstáculo que se presente en tu camino hacia el éxito.',
  },
  taurus: {
    nombre: 'Tauro',
    fechas: '20 Abril - 20 Mayo',
    simbolo: '♉',
    elemento: 'Tierra',
    planeta: 'Venus',
    horoscopo: 'Venus favorece tus asuntos materiales y sentimentales. Es momento de consolidar tus proyectos con paciencia y determinación. La estabilidad que has construido comenzará a dar frutos abundantes y duraderos en todas las áreas de tu vida.',
  },
  gemini: {
    nombre: 'Géminis',
    fechas: '21 Mayo - 20 Junio',
    simbolo: '♊',
    elemento: 'Aire',
    planeta: 'Mercurio',
    horoscopo: 'Tu mente versátil encuentra nuevas formas de comunicación y aprendizaje. Las conexiones intelectuales serán especialmente fructíferas. Mantente abierto a diferentes perspectivas que enriquecerán tu visión del mundo y expandirán tus horizontes.',
  },
  cancer: {
    nombre: 'Cáncer',
    fechas: '21 Junio - 22 Julio',
    simbolo: '♋',
    elemento: 'Agua',
    planeta: 'Luna',
    horoscopo: 'La influencia lunar potencia tu intuición natural y sensibilidad emocional. Los vínculos familiares se fortalecen significativamente. Confía en tus instintos para tomar decisiones importantes relacionadas con tu hogar y seres queridos.',
  },
  leo: {
    nombre: 'Leo',
    fechas: '23 Julio - 22 Agosto',
    simbolo: '♌',
    elemento: 'Fuego',
    planeta: 'Sol',
    horoscopo: 'El Sol ilumina tu carisma natural y creatividad innata. Es tu momento para brillar y mostrar tus talentos únicos al mundo. Tu generosidad y liderazgo natural inspiran a otros a seguir tu ejemplo luminoso y exitoso.',
  },
  virgo: {
    nombre: 'Virgo',
    fechas: '23 Agosto - 22 Septiembre',
    simbolo: '♍',
    elemento: 'Tierra',
    planeta: 'Mercurio',
    horoscopo: 'Tu atención al detalle y capacidad analítica te llevan hacia la perfección deseada. Los proyectos que requieren precisión y método encontrarán en ti al ejecutor ideal. La organización será tu mayor fortaleza en este período.',
  },
  libra: {
    nombre: 'Libra',
    fechas: '23 Septiembre - 22 Octubre',
    simbolo: '♎',
    elemento: 'Aire',
    planeta: 'Venus',
    horoscopo: 'El equilibrio venusiano armoniza todas las áreas de tu vida personal y profesional. Tu diplomacia natural resuelve conflictos con elegancia. Las relaciones interpersonales se benefician de tu búsqueda constante de justicia y belleza.',
  },
  scorpio: {
    nombre: 'Escorpio',
    fechas: '23 Octubre - 21 Noviembre',
    simbolo: '♏',
    elemento: 'Agua',
    planeta: 'Plutón',
    horoscopo: 'Plutón desata tu poder transformador interno más profundo. Las verdades ocultas salen a la luz para tu crecimiento personal. Tu intensidad emocional se convierte en la herramienta perfecta para regenerar aspectos importantes de tu vida.',
  },
  sagittarius: {
    nombre: 'Sagitario',
    fechas: '22 Noviembre - 21 Diciembre',
    simbolo: '♐',
    elemento: 'Fuego',
    planeta: 'Júpiter',
    horoscopo: 'Júpiter expande tus horizontes hacia nuevas filosofías y aventuras emocionantes. Los viajes y el conocimiento superior ocupan un lugar central. Tu espíritu aventurero encuentra el camino hacia la sabiduría ancestral y el crecimiento espiritual.',
  },
  capricorn: {
    nombre: 'Capricornio',
    fechas: '22 Diciembre - 19 Enero',
    simbolo: '♑',
    elemento: 'Tierra',
    planeta: 'Saturno',
    horoscopo: 'Saturno fortalece tu disciplina y ambición hacia metas duraderas y significativas. Los cimientos que construyes ahora perdurarán en el tiempo. Tu perseverancia y responsabilidad son reconocidas y recompensadas apropiadamente por el universo.',
  },
  aquarius: {
    nombre: 'Acuario',
    fechas: '20 Enero - 18 Febrero',
    simbolo: '♒',
    elemento: 'Aire',
    planeta: 'Urano',
    horoscopo: 'Urano activa tu genio innovador y visión futurista única. Las ideas revolucionarias encuentran su momento de manifestación perfecta. Tu originalidad inspira cambios positivos en tu comunidad y círculo social más cercano.',
  },
  pisces: {
    nombre: 'Piscis',
    fechas: '19 Febrero - 20 Marzo',
    simbolo: '♓',
    elemento: 'Agua',
    planeta: 'Neptuno',
    horoscopo: 'Neptuno despierta tu conexión espiritual y capacidades artísticas más profundas. Tu sensibilidad psíquica alcanza nuevos niveles de percepción universal. Los sueños contienen mensajes importantes para tu evolución personal y crecimiento interior.',
  }
};

function obtenerSignoZodiacal(dia, mes) {
  const fechasSignos = [
    { signo: 'capricorn', fin: [1, 19] },
    { signo: 'aquarius', fin: [2, 18] },
    { signo: 'pisces', fin: [3, 20] },
    { signo: 'aries', fin: [4, 19] },
    { signo: 'taurus', fin: [5, 20] },
    { signo: 'gemini', fin: [6, 20] },
    { signo: 'cancer', fin: [7, 22] },
    { signo: 'leo', fin: [8, 22] },
    { signo: 'virgo', fin: [9, 22] },
    { signo: 'libra', fin: [10, 22] },
    { signo: 'scorpio', fin: [11, 21] },
    { signo: 'sagittarius', fin: [12, 21] },
    { signo: 'capricorn', fin: [12, 31] }
  ];

  for (let i = 0; i < fechasSignos.length; i++) {
    const { signo, fin } = fechasSignos[i];
    if (mes < fin[0] || (mes === fin[0] && dia <= fin[1])) {
      return signo;
    }
  }
  return 'capricorn';
}

export default function App() {
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [signoUsuario, setSignoUsuario] = useState(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    link.rel = 'stylesheet';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const calcularSigno = () => {
    if (nombre && fechaNacimiento) {
      const fecha = new Date(fechaNacimiento);
      const dia = fecha.getDate();
      const mes = fecha.getMonth() + 1;
      const signo = obtenerSignoZodiacal(dia, mes);
      setSignoUsuario(signo);
      setMostrarResultado(true);
    }
  };

  const resetear = () => {
    setNombre('');
    setFechaNacimiento('');
    setSignoUsuario(null);
    setMostrarResultado(false);
  };

  const signoData = signoUsuario ? signosZodiacales[signoUsuario] : null;

  return (
    <div className="mystic-container">

      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>


      <div className="mystic-background"></div>
      
      <div className="container-fluid p-4 position-relative" style={{zIndex: 10, minHeight: '100vh'}}>
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            

            <div className="text-center mb-4 mb-md-5">
              <h1 className="title-gradient display-1 fw-bold mb-3">
                Zodiaco Místico React
              </h1>
              <p className="lead text-light opacity-75 fw-light">
                Descifra tu horoscopo personalizado y descubre los secretos que los astros tienen reservados para ti.
              </p>
              <div className="mx-auto mt-4" style={{width: '128px', height: '1px', background: 'linear-gradient(90deg, transparent, #a855f7, transparent)'}}></div>
            </div>

            <div className="row g-4 g-lg-5 align-items-start">
              
              <div className="col-lg-6">
                <div className="glass-container p-4 p-md-5">
                  <div className="text-center mb-4">
                    <h3 className="section-title text-gradient-purple mb-3">
                      Consulta Personal
                    </h3>
                    <div className="mx-auto" style={{width: '64px', height: '1px', background: 'linear-gradient(90deg, #a855f7, #ec4899)'}}></div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="mystic-label">
                      Nombre
                    </label>
                    <input 
                      type="text" 
                      className="mystic-input"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Escribe tu nombre completo"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="mystic-label">
                      Fecha de Nacimiento
                    </label>
                    <input 
                      type="date" 
                      className="mystic-input"
                      value={fechaNacimiento}
                      onChange={(e) => setFechaNacimiento(e.target.value)}
                    />
                  </div>
                  
                  <div className="d-grid mb-4">
                    <button 
                      className="mystic-button"
                      onClick={calcularSigno}
                      disabled={!nombre || !fechaNacimiento}
                    >
                      Desifrar Mi Destino Astral
                    </button>
                  </div>

                  {mostrarResultado && (
                    <div className="text-center">
                      <button 
                        className="mystic-button-secondary"
                        onClick={resetear}
                      >
                        Nueva Consulta Astral
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="glass-container p-4 p-md-5 d-flex align-items-center" style={{minHeight: '600px'}}>
                  {mostrarResultado && signoData ? (
                    <div className="w-100">
                      <div className="text-center mb-4">
                        <img 
                          src={`https://cdn.roxyapi.com/img/astrology/${signoUsuario}.png`}
                          alt={`Signo ${signoData.nombre}`}
                          className="zodiac-image"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            const fallback = e.target.nextElementSibling;
                            fallback.style.display = 'block';
                            fallback.textContent = signoData.simbolo;
                          }}
                        />
                        <div className="zodiac-symbol" style={{display: 'none'}}></div>
                        <h2 className="display-5 fw-bold mb-2 text-gradient-main">
                          {signoData.nombre}
                        </h2>
                        <p className="text-light opacity-75 fs-5">{signoData.fechas}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="h3 fw-bold text-center" style={{color: '#d8b4fe'}}>
                          Revelación para {nombre}
                        </h4>
                        <div className="my-3">
                          <div className="divider-line"></div>
                          <div className="divider-line"></div>
                          <div className="divider-line"></div>
                        </div>
                      </div>

                      <div className="row g-3 mb-4">
                        <div className="col-6">
                          <div className="info-card purple text-center">
                            <div className="section-subtitle">Elemento Primordial</div>
                            <div className="text-gradient-purple fw-bold fs-5">{signoData.elemento}</div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="info-card indigo text-center">
                            <div className="section-subtitle">Regente Celestial</div>
                            <div className="text-gradient-indigo fw-bold fs-5">{signoData.planeta}</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="section-title text-gradient-main text-center mb-3">
                          Mensaje de los Astros
                        </h5>
                        <div className="horoscope-container">
                          <p className="horoscope-text mb-0">
                            {signoData.horoscopo}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                      <div className="text-center w-100">
                      <img 
                        src="https://cdn.roxyapi.com/img/astrology/zodiac-wheel.png"
                        alt="Rueda Zodiacal"
                        className="zodiac-image-placeholder"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <h4 className="display-6 fw-bold text-gradient-main mb-3">
                        El Cosmos Aguarda
                      </h4>
                      <p className="text-light opacity-75 fs-5 lh-base mx-auto" style={{maxWidth: '400px'}}>
                        Completa los campos para descubrir qué secretos tiene el universo para ti.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}