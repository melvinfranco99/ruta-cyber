window.VIDEOS = [
 {
  "id": "01",
  "titulo": "Fundamentos de la ciberseguridad",
  "subtitulo": "Confidencialidad, integridad, disponibilidad, activos, amenazas, vulnerabilidades, riesgos y controles",
  "nivel": "Básico",
  "modulo": 1,
  "duracion": 529.7,
  "palabras": 1336,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 36.1,
    "titulo": "¿Qué es la ciberseguridad?"
   },
   {
    "t": 84.9,
    "titulo": "La tríada CIA: los tres objetivos"
   },
   {
    "t": 134.7,
    "titulo": "La tríada CIA con ejemplos reales"
   },
   {
    "t": 186.5,
    "titulo": "Activo, amenaza y vulnerabilidad"
   },
   {
    "t": 234.9,
    "titulo": "El riesgo: la palabra más importante de tu trabajo"
   },
   {
    "t": 288.3,
    "titulo": "Controles: cómo reducimos el riesgo"
   },
   {
    "t": 339.9,
    "titulo": "Defensa en profundidad"
   },
   {
    "t": 386.0,
    "titulo": "Otros principios que debes conocer"
   },
   {
    "t": 431.7,
    "titulo": "Cómo se conecta todo"
   },
   {
    "t": 476.4,
    "titulo": "Ejercicio y resumen"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "Hola y bienvenido al primer vídeo del curso. Aquí empieza tu ruta para trabajar como consultor junior de ciberseguridad en las áreas de gobierno, riesgo, cumplimiento, privacidad y gestión del riesgo humano. En este vídeo vamos a construir los cimientos: el vocabulario que vas a escuchar todos los días en un proyecto y que te van a preguntar, seguro, en la entrevista. Si dominas estos conceptos y sabes explicarlos con ejemplos sencillos, ya tendrás una ventaja enorme sobre otros candidatos. Coge papel y boli, porque vamos paso a paso."
   },
   {
    "titulo": "¿Qué es la ciberseguridad?",
    "texto": "Empecemos por lo básico. La ciberseguridad es el conjunto de medidas que protegen la información y los sistemas que la tratan frente a amenazas. Esas amenazas pueden venir de fuera, como un grupo criminal, o de dentro, como un empleado que se equivoca al enviar un correo. Y fíjate en algo importante: la ciberseguridad no es solo tecnología. Se apoya en tres pilares: personas, procesos y tecnología. En las áreas en las que vas a trabajar, gobierno, cumplimiento, privacidad y riesgo humano, te centrarás mucho más en las personas y en los procesos que en configurar cortafuegos. Y una idea que debes repetir como un mantra: la seguridad perfecta no existe. Lo que hacemos los profesionales es gestionar el riesgo hasta un nivel que la dirección de la empresa considera aceptable."
   },
   {
    "titulo": "La tríada CIA: los tres objetivos",
    "texto": "El concepto más famoso de la ciberseguridad es la tríada CIA, por sus siglas en inglés: Confidentiality, Integrity y Availability. En español, confidencialidad, integridad y disponibilidad. La confidencialidad significa que solo accede a la información quien está autorizado. La integridad significa que la información es exacta y completa, y que nadie la modifica sin control. Y la disponibilidad significa que la información y los sistemas están accesibles cuando el negocio los necesita. En España, el Esquema Nacional de Seguridad añade dos dimensiones más: la autenticidad, es decir, saber que alguien es quien dice ser, y la trazabilidad, poder saber quién hizo qué y cuándo. Memoriza estas cinco dimensiones porque aparecen en casi todas las metodologías de análisis de riesgos."
   },
   {
    "titulo": "La tríada CIA con ejemplos reales",
    "texto": "Vamos a aterrizarlo con ejemplos que verás en clientes reales. Confidencialidad: un empleado de recursos humanos envía por error un Excel con las nóminas a un proveedor. Los controles típicos son clasificar la información, cifrarla y usar herramientas de prevención de fuga de datos. Integridad: un atacante consigue cambiar el número de cuenta bancaria en una factura de un proveedor, y la empresa paga a los delincuentes. El control es exigir una doble validación de cualquier cambio de datos bancarios. Disponibilidad: un ransomware cifra los servidores y la tienda online está caída tres días. Aquí entran las copias de seguridad y los planes de continuidad. Un truco para la entrevista: cuando te pregunten por un incidente, clasifícalo siempre según qué dimensión se ha visto afectada. Demuestra pensamiento estructurado."
   },
   {
    "titulo": "Activo, amenaza y vulnerabilidad",
    "texto": "Ahora tres palabras que la gente confunde constantemente, y que tú no vas a confundir. Un activo es cualquier cosa que tenga valor para la organización: una base de datos de clientes, un servidor, una aplicación, pero también las personas, el conocimiento o la reputación de la marca. Una amenaza es aquello que puede causar daño a un activo: un ciberdelincuente, un empleado descontento, un incendio o simplemente un error humano. Y una vulnerabilidad es una debilidad que la amenaza puede aprovechar. Por ejemplo: el activo es la base de datos de clientes, la amenaza es un ataque de phishing para robar contraseñas, y la vulnerabilidad es que la empresa no tiene activado el doble factor de autenticación. Si eliminamos la vulnerabilidad, la amenaza pierde su oportunidad."
   },
   {
    "titulo": "El riesgo: la palabra más importante de tu trabajo",
    "texto": "Llegamos a la palabra más importante de tu futuro trabajo: riesgo. El riesgo es la posibilidad de que una amenaza aproveche una vulnerabilidad y cause un daño a un activo. Y para medirlo usamos una fórmula muy simple: riesgo igual a probabilidad por impacto. La probabilidad mide lo fácil o frecuente que es que ocurra. El impacto mide cuánto daño causa al negocio: dinero, multas, reputación, o incluso la seguridad de las personas. Además, distinguimos dos momentos. El riesgo inherente es el riesgo antes de aplicar controles. El riesgo residual es el que queda después de aplicarlos. La pregunta clave que se hace la dirección es: ¿el riesgo residual está por debajo de nuestro apetito de riesgo? Si la respuesta es sí, lo aceptamos. Si es no, tenemos que actuar."
   },
   {
    "titulo": "Controles: cómo reducimos el riesgo",
    "texto": "Para reducir el riesgo aplicamos controles, también llamados salvaguardas o medidas de seguridad. Los podemos clasificar por su función. Los preventivos intentan que el incidente no ocurra, como el doble factor o la formación de empleados. Los detectivos lo descubren cuando está ocurriendo, como la monitorización o la revisión de registros. Y los correctivos reparan el daño, como restaurar una copia de seguridad. También se clasifican por su naturaleza. De hecho, la norma ISO veintisiete mil uno en su versión de dos mil veintidós agrupa sus noventa y tres controles en cuatro temas: organizativos, de personas, físicos y tecnológicos. Como consultor de gobierno y cumplimiento, gran parte de tu trabajo será revisar si estos controles existen, si están documentados y si de verdad funcionan."
   },
   {
    "titulo": "Defensa en profundidad",
    "texto": "Un principio que debes conocer es la defensa en profundidad. La idea es como un castillo medieval: no hay un único muro, hay foso, murallas, torres y guardias. En una empresa, las capas son las políticas, las personas, la red, los equipos, las aplicaciones y los propios datos. Si un atacante supera una capa, por ejemplo consigue que alguien haga clic en un enlace malicioso, la siguiente capa, como el antivirus o el doble factor, debe frenarle. Y fíjate en un matiz que te hará destacar en el área de riesgo humano: hoy no se habla de las personas como el eslabón más débil, sino como una capa de defensa que hay que reforzar. Un empleado bien formado que reporta un correo sospechoso es un sensor de seguridad muy valioso."
   },
   {
    "titulo": "Otros principios que debes conocer",
    "texto": "Vamos con cuatro principios más que salen en cualquier auditoría. El mínimo privilegio dice que cada usuario debe tener solo los permisos imprescindibles para su trabajo. La necesidad de saber es su primo hermano: solo accedes a la información que tu función requiere. La segregación de funciones significa que ninguna persona debe controlar un proceso crítico de principio a fin; por ejemplo, quien da de alta un proveedor no debería ser quien aprueba sus pagos. Y el enfoque Zero Trust, o confianza cero, dice que no debemos confiar en nada por el simple hecho de estar dentro de la red corporativa: verificamos siempre la identidad, el dispositivo y el contexto. Cuando revises procesos en un cliente, pregúntate siempre si se cumplen estos principios."
   },
   {
    "titulo": "Cómo se conecta todo",
    "texto": "Ahora unamos las piezas, porque este es exactamente el flujo de un proyecto de análisis de riesgos. Primero identificas los activos y su valor para el negocio. Segundo, analizas qué amenazas les afectan y qué vulnerabilidades tienen. Tercero, calculas el riesgo combinando probabilidad e impacto. Cuarto, eliges los controles adecuados y vuelves a calcular el riesgo residual. Y quinto, revisas periódicamente, porque las amenazas cambian, la empresa cambia y los controles se degradan. Este ciclo de mejora continua es la base de las normas ISO y de casi cualquier marco de seguridad. En los vídeos de nivel intermedio lo pondremos en práctica con una matriz de riesgos real."
   },
   {
    "titulo": "Ejercicio y resumen",
    "texto": "Para cerrar, un ejercicio práctico que te recomiendo de verdad. Elige una organización que conozcas bien, por ejemplo tu universidad o un supermercado. Identifica tres activos, tres amenazas y tres vulnerabilidades. Después clasifica cada riesgo según si afecta a la confidencialidad, a la integridad o a la disponibilidad. Y para terminar, propón un control preventivo, uno detectivo y uno correctivo. Si eres capaz de hacer esto en cinco minutos y explicarlo en voz alta, ya piensas como un consultor. En la web del curso tienes el laboratorio clasificador CIA para practicar y el test del módulo uno. Resumen de hoy: la seguridad gestiona riesgos, el riesgo es probabilidad por impacto, y los controles reducen ese riesgo. En el próximo vídeo veremos las amenazas más comunes. ¡Nos vemos!"
   }
  ]
 },
 {
  "id": "02",
  "titulo": "Amenazas y ataques más comunes",
  "subtitulo": "Phishing, ingeniería social, ransomware, fraude del CEO y cómo protegerse",
  "nivel": "Básico",
  "modulo": 2,
  "duracion": 483.2,
  "palabras": 1245,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 34.9,
    "titulo": "El factor humano en las brechas"
   },
   {
    "t": 82.5,
    "titulo": "Ingeniería social: hackear a las personas"
   },
   {
    "t": 133.8,
    "titulo": "Phishing: el ataque número uno"
   },
   {
    "t": 180.9,
    "titulo": "Cómo reconocer un phishing"
   },
   {
    "t": 231.5,
    "titulo": "Fraude del CEO y compromiso del correo corporativo"
   },
   {
    "t": 278.3,
    "titulo": "Ransomware y malware"
   },
   {
    "t": 330.8,
    "titulo": "Contraseñas y doble factor"
   },
   {
    "t": 383.0,
    "titulo": "Amenazas internas y errores"
   },
   {
    "t": 431.0,
    "titulo": "Tu discurso de dos minutos para un directivo"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "Bienvenido al segundo vídeo. Para asesorar a una organización tienes que entender cómo la atacan. En las áreas de privacidad y de gestión del riesgo humano esto es todavía más importante, porque la mayoría de los ataques empiezan por una persona: alguien que hace clic, que comparte una contraseña o que confía en una llamada. Hoy vas a conocer los ataques que más daño hacen a las empresas, cómo reconocerlos y qué controles los frenan. Al final del vídeo serás capaz de explicarle a un directivo, en dos minutos, por qué debe invertir en concienciación."
   },
   {
    "titulo": "El factor humano en las brechas",
    "texto": "Empecemos con un dato que vas a usar muchísimo. Según los informes anuales de Verizon sobre brechas de datos, conocidos como DBIR, alrededor del sesenta por ciento de las brechas analizadas en las ediciones recientes implican un elemento humano. Eso incluye errores, como enviar datos a quien no debes, caer en un engaño de ingeniería social o el uso de credenciales robadas. Ojo, no lo uses para culpar a las personas. Úsalo para justificar por qué hay que invertir en ellas. Un consejo: en una entrevista, citar una fuente reconocida como el DBIR de Verizon, el informe de amenazas de ENISA o los datos del INCIBE da mucha credibilidad. Y si no recuerdas la cifra exacta, di aproximadamente y la fuente. Es mejor eso que inventar."
   },
   {
    "titulo": "Ingeniería social: hackear a las personas",
    "texto": "La ingeniería social es el arte de manipular a una persona para que haga algo que no debería: dar una contraseña, abrir un archivo o hacer una transferencia. No ataca a la tecnología, ataca a nuestros sesgos y emociones. Los atacantes usan la urgencia, el miedo, la autoridad, la curiosidad o la codicia. Y usan muchos canales: el correo electrónico, el teléfono, que se llama vishing, los mensajes de texto, que se llaman smishing, las redes sociales o incluso visitas en persona. Y hay una novedad clave que debes mencionar en tu entrevista: la inteligencia artificial generativa. Hoy los atacantes escriben correos sin faltas de ortografía en cualquier idioma, clonan voces de directivos y crean vídeos falsos. Por eso la formación clásica de buscar faltas de ortografía ya no es suficiente."
   },
   {
    "titulo": "Phishing: el ataque número uno",
    "texto": "El phishing es el ataque estrella. Es un mensaje que suplanta a alguien de confianza, como tu banco, un proveedor o el departamento de informática, para que hagas algo: introducir tu contraseña en una web falsa, abrir un adjunto con malware o pagar una factura. Hay variantes. El phishing masivo se envía a miles de personas esperando que alguna pique. El spear phishing está dirigido a una persona concreta, usando información real sobre ella que el atacante saca, por ejemplo, de LinkedIn. Y el whaling, o caza de ballenas, apunta a los altos directivos, porque tienen más poder para autorizar pagos o acceder a información sensible. En los proyectos de riesgo humano harás simulaciones de phishing, así que conocer estas variantes es esencial."
   },
   {
    "titulo": "Cómo reconocer un phishing",
    "texto": "¿Cómo se reconoce un phishing? Enseña siempre estas señales. Primero, el remitente: mira el dominio completo. Erre ene, en lugar de eme, en rnicrosoft punto com es un truco clásico. Segundo, la urgencia o la amenaza: tu cuenta se bloqueará en dos horas. Tercero, los enlaces: antes de hacer clic, pasa el ratón por encima y comprueba a qué dirección lleva de verdad. Cuarto, las peticiones inusuales: que te pidan contraseñas, pagos urgentes o un cambio de cuenta bancaria. Y la regla de oro: ante la duda, verifica por otro canal, por ejemplo llamando a la persona a un número que ya conoces, y reporta el correo con el botón de reporte de tu empresa. En la web del curso tienes un detector de phishing interactivo para practicar."
   },
   {
    "titulo": "Fraude del CEO y compromiso del correo corporativo",
    "texto": "Uno de los ataques que más dinero cuesta a las empresas es el fraude del CEO, que forma parte de lo que en inglés se llama Business Email Compromise. El atacante se hace pasar por el director general o por un proveedor y pide una transferencia urgente y confidencial. Fíjate en la trampa: muchas veces el correo no lleva enlaces ni adjuntos, solo texto, así que los filtros técnicos no lo detectan. Ahora con voces clonadas por inteligencia artificial incluso llaman por teléfono imitando al jefe. ¿Cuál es el control? Es un control de proceso, no tecnológico: cualquier pago o cambio de cuenta bancaria debe verificarse por un segundo canal y con doble aprobación. Este es un ejemplo perfecto de por qué el área de gobierno y la de riesgo humano trabajan juntas."
   },
   {
    "titulo": "Ransomware y malware",
    "texto": "Hablemos de malware, es decir, software malicioso. Hay troyanos, que se disfrazan de algo legítimo, gusanos, que se propagan solos, o programas espía. El más temido es el ransomware: cifra los datos de la empresa y pide un rescate, normalmente en criptomonedas, para devolverlos. Hoy casi siempre es de doble extorsión: además de cifrar, los atacantes roban los datos y amenazan con publicarlos. Eso convierte un problema de disponibilidad en un problema de confidencialidad y, por tanto, de privacidad, con posibles notificaciones a la autoridad de protección de datos. ¿Por dónde entra? Sobre todo por phishing, por credenciales robadas y por vulnerabilidades sin parchear. Los controles clave son copias de seguridad aisladas y probadas, doble factor, parcheo y, de nuevo, formación."
   },
   {
    "titulo": "Contraseñas y doble factor",
    "texto": "Las credenciales robadas son una de las principales puertas de entrada. Las recomendaciones actuales, como las del NIST estadounidense, priorizan contraseñas largas, por ejemplo frases de paso, frente a obligar a meter símbolos raros y cambiarlas cada mes. Además, usa una contraseña distinta para cada servicio, ayudándote de un gestor de contraseñas. Pero el control estrella es el doble factor, o autenticación multifactor: combinar algo que sabes, como la contraseña, con algo que tienes, como el móvil, o algo que eres, como la huella. Bloquea la gran mayoría de ataques de robo de credenciales. Eso sí, los atacantes han inventado la fatiga de MFA: te bombardean con notificaciones hasta que aceptas una por cansancio. Mensaje para los empleados: nunca aceptes una notificación que no has pedido tú."
   },
   {
    "titulo": "Amenazas internas y errores",
    "texto": "No todas las amenazas vienen de fuera. Las amenazas internas incluyen al empleado malintencionado que roba información antes de irse a la competencia, pero sobre todo incluyen errores: enviar un correo a la persona equivocada, subir un documento a una carpeta pública, perder un portátil sin cifrar o configurar mal un servicio en la nube. Desde el punto de vista de la privacidad, muchas brechas de datos notificadas son simplemente errores humanos. Los controles aquí combinan gobierno y personas: aplicar el mínimo privilegio, cifrar los dispositivos, tener un buen proceso de baja de empleados que retire accesos el mismo día, y sobre todo crear una cultura donde la gente reporte sus errores sin miedo. Un error reportado en cinco minutos es mucho menos grave que uno escondido durante un mes."
   },
   {
    "titulo": "Tu discurso de dos minutos para un directivo",
    "texto": "Terminamos con algo muy práctico: tu discurso de dos minutos para convencer a un directivo. Primero, un dato: la mayoría de las brechas tienen un componente humano según fuentes como el DBIR de Verizon. Segundo, un ejemplo concreto: un solo fraude del CEO puede costar cientos de miles de euros y no lo frena ningún antivirus. Tercero, la solución: combinar procesos, como la doble verificación de pagos, con tecnología, como el doble factor, y con cultura, mediante formación continua y simulaciones. Y cuarto, cómo lo vamos a medir: no solo cuánta gente hace clic, sino cuánta gente reporta. Practica este discurso en voz alta. Es una pregunta muy típica de entrevista para el área de riesgo humano. En el siguiente vídeo veremos cómo funciona el mundo de la consultoría de ciberseguridad."
   }
  ]
 },
 {
  "id": "03",
  "titulo": "La ciberseguridad en consultoría",
  "subtitulo": "Áreas, roles, tipos de proyecto y el día a día de un analista junior",
  "nivel": "Básico",
  "modulo": 3,
  "duracion": 501.1,
  "palabras": 1218,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 38.0,
    "titulo": "¿Qué hace una consultora de ciberseguridad?"
   },
   {
    "t": 90.5,
    "titulo": "Las grandes áreas de un equipo Cyber"
   },
   {
    "t": 141.4,
    "titulo": "Privacy, Governance & Compliance"
   },
   {
    "t": 195.9,
    "titulo": "Cyber Human Risk Management"
   },
   {
    "t": 242.2,
    "titulo": "La pirámide de una firma de consultoría"
   },
   {
    "t": 293.2,
    "titulo": "Tipos de proyecto que verás"
   },
   {
    "t": 342.7,
    "titulo": "El día a día de un analista junior"
   },
   {
    "t": 394.1,
    "titulo": "Lo que más se valora en un junior"
   },
   {
    "t": 448.5,
    "titulo": "Tu hoja de ruta en este curso"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "Bienvenido al tercer vídeo. Antes de entrar en normas y metodologías, necesitas entender el entorno en el que vas a trabajar. Una gran firma de servicios profesionales funciona de forma muy distinta a una empresa tradicional: trabajas por proyectos, para clientes, con equipos que cambian y con plazos exigentes. En este vídeo te explico cómo se organiza un equipo de ciberseguridad en consultoría, qué hacen las áreas de privacidad, gobierno y cumplimiento y de gestión del riesgo humano, y cómo es el día a día de un analista junior. Así llegarás a la entrevista sabiendo exactamente dónde te quieres ver."
   },
   {
    "titulo": "¿Qué hace una consultora de ciberseguridad?",
    "texto": "Una gran consultora de ciberseguridad hace básicamente tres cosas. Asesora, es decir, diagnostica la situación de un cliente, diseña cómo mejorarla y le ayuda a implantarlo. Revisa, comprobando que los controles existen y funcionan. Y opera servicios, como centros de operaciones de seguridad que vigilan a los clientes las veinticuatro horas. Los clientes suelen ser grandes organizaciones: bancos, aseguradoras, energéticas, empresas de telecomunicaciones, administraciones públicas o grandes cadenas de distribución. Esto es importante para ti: cada sector tiene su propia regulación. La banca tiene que cumplir DORA, las administraciones el Esquema Nacional de Seguridad, y muchos sectores críticos la directiva NIS dos. Conocer estas normas por sector te hará muy útil desde el primer día."
   },
   {
    "titulo": "Las grandes áreas de un equipo Cyber",
    "texto": "Un equipo de ciberseguridad de una gran firma suele dividirse en áreas. La de estrategia, gobierno, riesgo y cumplimiento hace planes directores, análisis de riesgos, implantaciones de ISO veintisiete mil uno y adecuaciones a regulaciones como NIS dos, DORA o el Esquema Nacional de Seguridad. La de privacidad trabaja con el Reglamento General de Protección de Datos: registros de actividades, evaluaciones de impacto o servicios de delegado de protección de datos externo. La de riesgo humano trabaja la concienciación y la cultura de seguridad. Y luego están las áreas técnicas: hacking ético, gestión de identidades, seguridad en la nube, respuesta a incidentes y operaciones. La oferta que estás preparando se centra en las dos primeras áreas no técnicas, aunque necesitas entender las técnicas para hablar con ellas."
   },
   {
    "titulo": "Privacy, Governance & Compliance",
    "texto": "Veamos el área de privacidad, gobierno y cumplimiento con más detalle. Gobierno significa definir cómo se organiza la seguridad: quién es responsable, qué políticas existen, qué comités toman decisiones y cuál es la hoja de ruta, lo que llamamos plan director. Riesgo significa identificar, medir y tratar los riesgos. Cumplimiento significa asegurar que la organización cumple con normas y leyes: ISO veintisiete mil uno, el Esquema Nacional de Seguridad, NIS dos, DORA. Y privacidad significa proteger los datos personales según el reglamento europeo: registro de actividades de tratamiento, evaluaciones de impacto, gestión de derechos o de brechas. La oferta destaca la alta exposición a cliente. Eso significa reuniones, entrevistas, talleres y presentaciones. Tu comunicación es tan importante como tu conocimiento técnico."
   },
   {
    "titulo": "Cyber Human Risk Management",
    "texto": "La segunda área de la oferta es la gestión del riesgo humano en ciberseguridad. Su objetivo es poner a las personas en el centro y reducir el riesgo que se origina en comportamientos. Aquí diseñarás programas de concienciación adaptados a cada rol, porque no necesita lo mismo un directivo que alguien de finanzas o un desarrollador. Lanzarás simulaciones de phishing y de otros ataques, analizarás métricas, crearás campañas de comunicación, juegos o retos, y redes de embajadores de seguridad. La evolución del sector es pasar de la concienciación a la gestión del riesgo humano: ya no basta con que todos hagan un curso al año, hay que medir comportamientos reales y cambiarlos. Si te gusta la psicología, la comunicación y los datos, esta área es para ti."
   },
   {
    "titulo": "La pirámide de una firma de consultoría",
    "texto": "Las firmas de consultoría tienen una estructura piramidal. En la base están los analistas o juniors: tú, al entrar. Ejecutas tareas, preparas documentación, analizas evidencias, tomas notas en reuniones y aprendes muchísimo. Después vienen los seniors o consultores, que coordinan partes del proyecto y revisan tu trabajo. Los managers gestionan el proyecto completo, el presupuesto, el equipo y la relación diaria con el cliente. Los senior managers y directores se centran en la relación con los clientes y en vender nuevos proyectos. Y en la cúspide están los socios, responsables del negocio. Lo importante para ti: la progresión suele ser rápida si demuestras fiabilidad. Las firmas valoran mucho al junior que entrega a tiempo, con calidad y que pregunta cuando tiene dudas."
   },
   {
    "titulo": "Tipos de proyecto que verás",
    "texto": "¿Qué proyectos te vas a encontrar? Muy a menudo, un análisis de diferencias, que en inglés llamamos gap analysis: comparar la situación actual del cliente con lo que exige una norma, y proponer un plan para cerrar las diferencias. También análisis de riesgos con su plan de tratamiento. Implantaciones de un sistema de gestión de seguridad de la información según ISO veintisiete mil uno, o adecuaciones al Esquema Nacional de Seguridad, a NIS dos o a DORA. En privacidad, adecuaciones al reglamento europeo o servicios continuos de oficina de privacidad. En riesgo humano, programas anuales de concienciación y campañas de simulación. Y también auditorías internas y apoyo para que el cliente obtenga una certificación. En los vídeos profesionales haremos uno de estos proyectos completo."
   },
   {
    "titulo": "El día a día de un analista junior",
    "texto": "¿Cómo es un día normal? Por la mañana quizá tienes una entrevista con el responsable de sistemas de un cliente. Tu papel es tomar notas detalladas y después redactar el acta. Luego revisas evidencias: políticas, procedimientos, capturas de configuraciones, y las comparas con los requisitos de una norma. Rellenas matrices en Excel con el estado de cada control o de cada riesgo. Por la tarde preparas diapositivas para la reunión de seguimiento semanal que presentará tu manager. Y entre medias, formación interna y estudio para certificaciones. El modelo es híbrido: algunos días en la oficina, otros en casa y otros en las oficinas del cliente. Dos herramientas que debes dominar desde ya: Excel y PowerPoint. Parecen básicas, pero marcan la diferencia en un junior."
   },
   {
    "titulo": "Lo que más se valora en un junior",
    "texto": "¿Qué se valora en un junior? Primero, la fiabilidad: entregar a tiempo, y si vas a llegar tarde, avisar con antelación, nunca el último minuto. Segundo, la atención al detalle: todo lo que ve el cliente debe estar impecable, sin erratas ni datos inconsistentes. Tercero, la proactividad: no solo hacer lo que te piden, sino proponer mejoras, por ejemplo una plantilla que ahorre tiempo. Cuarto, una comunicación clara, también en inglés, porque muchos proyectos son internacionales. Quinto, curiosidad y ganas de aprender. Y sexto, discreción absoluta: la información de los clientes es confidencial, no se comenta en el metro ni en redes sociales. Fíjate en que estas cualidades son exactamente las que pide la oferta. En la entrevista, prepara un ejemplo real de tu vida para cada una de ellas."
   },
   {
    "titulo": "Tu hoja de ruta en este curso",
    "texto": "Y aquí tienes tu hoja de ruta. En el nivel básico, que terminas con este vídeo, has aprendido los fundamentos, las amenazas y cómo funciona la consultoría. En el nivel intermedio entraremos en gobierno, riesgo y cumplimiento, la norma ISO veintisiete mil uno, la gestión de riesgos, el reglamento de protección de datos, la regulación europea y los fundamentos del riesgo humano. En el nivel profesional diseñaremos un programa de concienciación, aprenderás las herramientas del consultor, haremos un caso práctico completo y veremos terceros y continuidad de negocio. Y en el bloque de entrevista prepararemos el proceso de selección, las preguntas típicas con respuestas modelo y tus primeros noventa días. Mi consejo: un módulo al día, con su test. En unas semanas estarás preparado. ¡Vamos al nivel intermedio!"
   }
  ]
 },
 {
  "id": "04",
  "titulo": "Gobierno, riesgo y cumplimiento (GRC)",
  "subtitulo": "Políticas, roles, modelo de las tres líneas y marcos de referencia",
  "nivel": "Intermedio",
  "modulo": 4,
  "duracion": 509.9,
  "palabras": 1290,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 35.9,
    "titulo": "Qué significa GRC"
   },
   {
    "t": 86.5,
    "titulo": "La pirámide documental"
   },
   {
    "t": 141.4,
    "titulo": "Roles clave del gobierno de la seguridad"
   },
   {
    "t": 193.8,
    "titulo": "El modelo de las tres líneas"
   },
   {
    "t": 245.0,
    "titulo": "Marcos de referencia que debes conocer"
   },
   {
    "t": 297.4,
    "titulo": "NIST Cybersecurity Framework 2.0"
   },
   {
    "t": 352.1,
    "titulo": "Cumplimiento: obligatorio vs. voluntario"
   },
   {
    "t": 405.4,
    "titulo": "Métricas e indicadores de GRC"
   },
   {
    "t": 454.9,
    "titulo": "Resumen y práctica"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "Bienvenido al nivel intermedio. Empezamos con el corazón del área a la que quieres entrar: gobierno, riesgo y cumplimiento, lo que en inglés se conoce por sus siglas GRC. Hoy vas a aprender cómo se organiza la seguridad dentro de una empresa, qué documentos la sostienen, quién es responsable de qué, y cuáles son los marcos de referencia que todo consultor debe conocer. Al terminar, sabrás explicar la diferencia entre una política y un procedimiento, qué es el modelo de las tres líneas y cuándo usar ISO veintisiete mil uno, el marco del NIST o los controles CIS."
   },
   {
    "titulo": "Qué significa GRC",
    "texto": "Empecemos por definir las tres letras. Gobierno es cómo la dirección dirige y controla la seguridad: fija objetivos, asigna responsabilidades, aprueba políticas y presupuestos, y pide cuentas. Riesgo es el proceso de identificar, evaluar y tratar los riesgos, para decidir dónde invertir. Y cumplimiento es asegurar que la organización cumple con las leyes, con las normas a las que se ha comprometido, con los contratos con clientes y con sus propias políticas internas. Las tres se refuerzan entre sí. El gobierno decide hacia dónde vamos. El análisis de riesgos prioriza qué es lo más importante. Y el cumplimiento verifica que lo que hemos dicho que hacemos, realmente se hace. Un buen consultor de GRC conecta siempre la seguridad con los objetivos de negocio."
   },
   {
    "titulo": "La pirámide documental",
    "texto": "La seguridad se apoya en una pirámide documental. Arriba está la política de seguridad: un documento corto, aprobado por la dirección, que dice qué queremos conseguir y por qué. Debajo vienen las normas o estándares, que fijan requisitos obligatorios concretos, por ejemplo, las contraseñas tendrán al menos catorce caracteres. Luego están los procedimientos, que explican el cómo, paso a paso, y quién lo hace, por ejemplo, el procedimiento de alta y baja de usuarios. Después las guías e instrucciones técnicas, más detalladas o de recomendación. Y en la base, los registros y evidencias, que prueban que todo lo anterior se cumple: un ticket, un acta o un informe. La diferencia entre política y procedimiento es una pregunta típica de entrevista. Política es el qué y el porqué. Procedimiento es el cómo y el quién."
   },
   {
    "titulo": "Roles clave del gobierno de la seguridad",
    "texto": "¿Quién es quién en el gobierno de la seguridad? Arriba, el consejo de administración y la dirección son los responsables últimos. Regulaciones como NIS dos o DORA lo dejan muy claro: los directivos deben aprobar las medidas y pueden responder personalmente si no lo hacen. El CISO, o responsable de seguridad de la información, dirige la función de seguridad. El comité de seguridad reúne a distintas áreas, como tecnología, legal, recursos humanos o negocio, para coordinar y decidir. El delegado de protección de datos supervisa el cumplimiento del reglamento europeo de protección de datos y debe tener independencia. Y en el negocio existen propietarios de activos y propietarios de riesgos: personas que deciden sobre su información y aceptan o no sus riesgos. Una matriz RACI ayuda a dejar todo esto por escrito."
   },
   {
    "titulo": "El modelo de las tres líneas",
    "texto": "Un modelo que aparece en cualquier gran empresa, sobre todo en banca, es el modelo de las tres líneas, publicado por el Instituto de Auditores Internos. La primera línea son las áreas de negocio y de tecnología, que gestionan los riesgos en su día a día: aplican los controles. La segunda línea son las funciones de riesgos, cumplimiento y, normalmente, la propia seguridad de la información, que definen el marco, supervisan y asesoran a la primera. La tercera línea es auditoría interna, que da una opinión independiente al consejo sobre si todo funciona. Y fuera de la organización están los auditores externos y los reguladores. Como consultor puedes apoyar a cualquiera de las tres, pero cuidado: si en un cliente has diseñado un control, no deberías ser tú quien lo audite. Eso rompería la independencia."
   },
   {
    "titulo": "Marcos de referencia que debes conocer",
    "texto": "Ahora los marcos de referencia, la caja de herramientas del GRC. ISO veintisiete mil uno de dos mil veintidós es la norma internacional para un sistema de gestión de seguridad de la información, y es certificable. ISO veintisiete mil dos es su guía de implantación, con el detalle de los noventa y tres controles. El marco de ciberseguridad del NIST, en su versión dos punto cero de dos mil veinticuatro, es voluntario y muy útil para medir madurez y comunicar con la dirección. Los controles CIS son dieciocho controles técnicos priorizados, muy prácticos. El Esquema Nacional de Seguridad, regulado por el Real Decreto trescientos once de dos mil veintidós, es obligatorio para el sector público español y para sus proveedores tecnológicos. Y COBIT es el marco de gobierno de las tecnologías de la información de ISACA, muy usado en auditoría."
   },
   {
    "titulo": "NIST Cybersecurity Framework 2.0",
    "texto": "El marco del NIST merece un momento propio porque se usa muchísimo para presentaciones a la dirección. Su versión dos punto cero, publicada en febrero de dos mil veinticuatro, tiene seis funciones. La gran novedad es Govern, gobernar, que ocupa el centro y cubre estrategia, roles, políticas y la gestión de riesgos de la cadena de suministro. Luego Identify, identificar los activos y los riesgos. Protect, proteger, que incluye la gestión de identidades, la formación y concienciación, la seguridad de los datos y de las plataformas. Detect, detectar, mediante monitorización. Respond, responder a incidentes. Y Recover, recuperar la actividad. Un truco: cuando tengas que presentar la madurez de un cliente, un gráfico de radar con estas seis funciones es muy visual y lo entiende cualquier directivo."
   },
   {
    "titulo": "Cumplimiento: obligatorio vs. voluntario",
    "texto": "No todo el cumplimiento es igual. Hay obligaciones legales, como el reglamento europeo de protección de datos y la ley orgánica española de protección de datos, NIS dos para sectores críticos, DORA para el sector financiero o el Esquema Nacional de Seguridad para el sector público. Si no se cumplen, hay sanciones. Hay normas voluntarias, como ISO veintisiete mil uno, SOC dos o TISAX en automoción, que en la práctica exigen los clientes para contratar. Hay obligaciones contractuales, como las cláusulas de seguridad firmadas con clientes y proveedores. Y hay cumplimiento interno con las propias políticas. Como una empresa grande tiene que cumplir muchas cosas a la vez, se crea un marco unificado de controles: un único catálogo de controles que se relaciona con todas las normas. Así se evalúa una vez y se cumple con muchas."
   },
   {
    "titulo": "Métricas e indicadores de GRC",
    "texto": "Lo que no se mide no se gestiona. En GRC usamos dos tipos de indicadores. Los indicadores de rendimiento, o KPI, miden si los procesos funcionan, por ejemplo el porcentaje de parches críticos aplicados en plazo o el porcentaje de empleados que han completado la formación. Los indicadores de riesgo, o KRI, son alertas tempranas de que un riesgo está creciendo, por ejemplo el número de cuentas privilegiadas sin doble factor o de proveedores críticos sin evaluar. Cada indicador debe tener un objetivo, un umbral de alerta, un responsable y una frecuencia de medida. Y para la dirección se resumen en un cuadro de mando con pocos indicadores, claros y con su tendencia. Como junior, es muy probable que prepares estos cuadros de mando en Excel o en Power BI."
   },
   {
    "titulo": "Resumen y práctica",
    "texto": "Vamos a repasar con una práctica. Primero, explica qué es GRC en una sola frase a alguien no técnico. Por ejemplo: GRC asegura que la seguridad se dirige desde la dirección, se prioriza según el riesgo y se puede demostrar ante clientes y reguladores. Segundo, dibuja de memoria la pirámide documental: política, normas, procedimientos, guías y registros. Tercero, sitúa en el modelo de las tres líneas al equipo de sistemas, que es primera línea, a la función de riesgos, que es segunda, y a auditoría interna, que es tercera. Y cuarto, elige un marco para tres empresas: un ayuntamiento, que necesita el Esquema Nacional de Seguridad; un banco, que necesita DORA; y una empresa de software que vende a multinacionales, que probablemente necesite ISO veintisiete mil uno. En el próximo vídeo profundizamos en esa norma."
   }
  ]
 },
 {
  "id": "05",
  "titulo": "ISO 27001:2022 paso a paso",
  "subtitulo": "El sistema de gestión de seguridad, sus cláusulas, el Anexo A y la certificación",
  "nivel": "Intermedio",
  "modulo": 5,
  "duracion": 505.7,
  "palabras": 1264,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 35.3,
    "titulo": "Qué es un SGSI"
   },
   {
    "t": 86.9,
    "titulo": "El ciclo de mejora continua (PDCA)"
   },
   {
    "t": 137.8,
    "titulo": "Las cláusulas obligatorias (4 a 10)"
   },
   {
    "t": 199.1,
    "titulo": "El Anexo A: 93 controles en 4 temas"
   },
   {
    "t": 255.3,
    "titulo": "La declaración de aplicabilidad (SoA)"
   },
   {
    "t": 303.0,
    "titulo": "Cómo se implanta un SGSI: fases de proyecto"
   },
   {
    "t": 356.5,
    "titulo": "Auditorías y no conformidades"
   },
   {
    "t": 405.0,
    "titulo": "Errores frecuentes que debes detectar"
   },
   {
    "t": 455.3,
    "titulo": "Resumen y práctica"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo vamos a estudiar la norma más importante de tu futuro trabajo: ISO barra IEC veintisiete mil uno, en su versión de dos mil veintidós. Es la norma internacional para crear un sistema de gestión de seguridad de la información, que en español abreviamos como SGSI. Vas a participar en implantaciones, en análisis de diferencias y en auditorías internas basadas en ella, y es casi seguro que te pregunten por ella en la entrevista. Te la voy a explicar sin tecnicismos, cláusula a cláusula, y con ejemplos de las evidencias que se piden en una auditoría."
   },
   {
    "titulo": "Qué es un SGSI",
    "texto": "Un sistema de gestión es una forma organizada de dirigir algo, con objetivos, responsabilidades, procesos y mejora continua. Las empresas tienen sistemas de gestión de calidad, de medio ambiente o, en nuestro caso, de seguridad de la información. El SGSI protege la confidencialidad, la integridad y la disponibilidad de la información, y está basado en el riesgo: no se aplican todos los controles a ciegas, sino los que tienen sentido según los riesgos de la organización. Una entidad de certificación acreditada puede certificarlo, y el certificado dura tres años, con auditorías de seguimiento anuales. ISO veintisiete mil uno forma parte de una familia: la veintisiete mil dos detalla los controles, la veintisiete mil cinco trata la gestión de riesgos, y la veintisiete mil setecientos uno amplía el sistema a la privacidad."
   },
   {
    "titulo": "El ciclo de mejora continua (PDCA)",
    "texto": "Las normas ISO de sistemas de gestión siguen el ciclo de mejora continua, conocido como PDCA o ciclo de Deming. Planificar: entender el contexto de la organización, definir el alcance, analizar los riesgos y fijar objetivos. Hacer: implantar los controles, formar a las personas y operar el sistema. Verificar: medir los indicadores, hacer auditorías internas y que la dirección revise los resultados. Y actuar: corregir lo que no funciona, lo que llamamos no conformidades, y mejorar. Y vuelta a empezar. Esta idea es clave para entender la norma: un SGSI no es un proyecto que termina, es un sistema vivo. Muchas empresas fallan porque implantan, se certifican y luego se olvidan, y en la siguiente auditoría aparecen muchas no conformidades."
   },
   {
    "titulo": "Las cláusulas obligatorias (4 a 10)",
    "texto": "La norma tiene cláusulas de la cuatro a la diez, que son obligatorias para certificarse. La cuatro, contexto: analizar el entorno, identificar las partes interesadas y sus requisitos, y definir el alcance. La cinco, liderazgo: la dirección se compromete, aprueba la política y asigna roles. La seis, planificación: la metodología de riesgos, el tratamiento, la declaración de aplicabilidad y los objetivos de seguridad. La siete, soporte: recursos, competencias, concienciación, comunicación e información documentada. Aquí entra de lleno el área de riesgo humano. La ocho, operación: ejecutar de verdad la evaluación y el tratamiento de los riesgos. La nueve, evaluación del desempeño: indicadores, auditoría interna y revisión por la dirección. Y la diez, mejora: gestionar no conformidades y acciones correctivas. Fíjate en las evidencias típicas de cada una."
   },
   {
    "titulo": "El Anexo A: 93 controles en 4 temas",
    "texto": "El Anexo A es el catálogo de controles de referencia. En la versión de dos mil veintidós hay noventa y tres controles agrupados en cuatro temas. Treinta y siete organizativos, como políticas, roles, relación con proveedores, gestión de incidentes o uso de servicios en la nube. Ocho de personas, como la verificación de antecedentes, la formación y concienciación, o el teletrabajo. Catorce físicos, como el perímetro de seguridad, la protección de equipos o la política de mesas limpias. Y treinta y cuatro tecnológicos, como el control de accesos, el cifrado, las copias de seguridad, los registros o el desarrollo seguro. La versión anterior, de dos mil trece, tenía ciento catorce controles en catorce dominios. La nueva añadió once controles, como inteligencia de amenazas, seguridad en la nube, prevención de fuga de datos o filtrado web."
   },
   {
    "titulo": "La declaración de aplicabilidad (SoA)",
    "texto": "Uno de los documentos más importantes del sistema es la declaración de aplicabilidad, en inglés Statement of Applicability. Es normalmente un Excel con los noventa y tres controles del Anexo A. Para cada uno se indica si aplica o no, la justificación de esa decisión, el estado de implantación y, en las buenas prácticas, a qué riesgos responde y dónde están las evidencias. Por ejemplo, una empresa que trabaja cien por cien en remoto podría justificar que algunos controles físicos de oficinas tienen un alcance limitado. Pero cuidado: excluir un control requiere una justificación sólida basada en el análisis de riesgos. Como junior, es muy probable que te toque mantener esta declaración, así que revisa bien la coherencia entre lo que dice el documento y lo que de verdad se hace."
   },
   {
    "titulo": "Cómo se implanta un SGSI: fases de proyecto",
    "texto": "¿Cómo es un proyecto de implantación? Primero, el arranque: definir el alcance, conseguir el compromiso de la dirección y formar el equipo. Segundo, un análisis de diferencias para saber dónde está el cliente frente a la norma. Tercero, el análisis de riesgos y el plan de tratamiento. Cuarto, la documentación: la política, los procedimientos y la declaración de aplicabilidad. Quinto, implantar los controles y formar a las personas. Sexto, una auditoría interna y una revisión por la dirección, que son obligatorias antes de certificar. Y séptimo, la auditoría de certificación, que tiene dos fases: en la fase uno el auditor revisa la documentación, y en la fase dos comprueba que el sistema funciona en la práctica. Un proyecto así dura normalmente entre seis y doce meses, según el tamaño y la madurez."
   },
   {
    "titulo": "Auditorías y no conformidades",
    "texto": "En una auditoría, el auditor compara lo que exige la norma con lo que ve, y redacta hallazgos. Una no conformidad mayor es un incumplimiento grave o sistemático, por ejemplo, que no se haya hecho nunca una auditoría interna. Puede impedir la certificación. Una no conformidad menor es un fallo puntual, como un usuario que dejó la empresa y conserva su acceso. Una observación es una oportunidad de mejora. Cada hallazgo bien redactado tiene la evidencia de lo observado, el requisito incumplido, y la organización debe analizar la causa raíz y definir una acción correctiva. La norma ISO diecinueve mil once explica cómo auditar sistemas de gestión. Y una certificación muy valorada en tu perfil es la de auditor jefe o implantador jefe de ISO veintisiete mil uno."
   },
   {
    "titulo": "Errores frecuentes que debes detectar",
    "texto": "Te dejo los errores que más vas a encontrar en clientes, para que aprendas a detectarlos. Un alcance ambiguo, que no deja claro qué procesos, sedes y sistemas están incluidos. Políticas copiadas de una plantilla, que mencionan sistemas que el cliente ni siquiera tiene. Un análisis de riesgos que no tiene ninguna relación con los controles de la declaración de aplicabilidad. Una dirección ausente, que firma la política pero no revisa resultados ni pone recursos. Formación genérica, que todos hacen con un clic, sin medir si cambia algo. Y el peor de todos: documentar procedimientos que en la práctica no se siguen. El auditor lo detectará al pedir evidencias. Tu valor como consultor es diseñar un sistema sencillo, realista y que el cliente pueda mantener cuando tú te vayas."
   },
   {
    "titulo": "Resumen y práctica",
    "texto": "Resumimos. ISO veintisiete mil uno define un sistema de gestión de seguridad basado en riesgos y en mejora continua. Tiene cláusulas de la cuatro a la diez, que son obligatorias, y un Anexo A con noventa y tres controles agrupados en cuatro temas. La declaración de aplicabilidad justifica qué controles aplican y su estado. Ahora un ejercicio muy útil para tu primer proyecto: elige cinco controles y escribe qué evidencia pedirías al cliente para comprobarlos. Por ejemplo, para el control de formación y concienciación pedirías el plan anual de formación, los registros de quién la ha completado y los resultados de las simulaciones de phishing. Para el control de copias de seguridad, la política de copias y el registro de la última prueba de restauración. En la web tienes un laboratorio para practicarlo."
   }
  ]
 },
 {
  "id": "06",
  "titulo": "Análisis y gestión de riesgos",
  "subtitulo": "Metodología práctica, matriz de riesgos, MAGERIT, ISO 27005 y planes de tratamiento",
  "nivel": "Intermedio",
  "modulo": 6,
  "duracion": 509.1,
  "palabras": 1251,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 33.8,
    "titulo": "El proceso de gestión de riesgos"
   },
   {
    "t": 87.3,
    "titulo": "Escalas: define los criterios antes de valorar"
   },
   {
    "t": 139.7,
    "titulo": "Identificar riesgos: cómo redactarlos bien"
   },
   {
    "t": 188.4,
    "titulo": "Ejemplo completo: riesgo de fraude del CEO"
   },
   {
    "t": 247.2,
    "titulo": "La matriz de riesgos (mapa de calor)"
   },
   {
    "t": 301.1,
    "titulo": "Las cuatro opciones de tratamiento"
   },
   {
    "t": 353.5,
    "titulo": "Metodologías de referencia"
   },
   {
    "t": 405.4,
    "titulo": "El registro de riesgos en Excel"
   },
   {
    "t": 458.1,
    "titulo": "Resumen y práctica"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo vamos a hacer lo que más hace un consultor de gobierno y riesgo: un análisis de riesgos. Te voy a enseñar una metodología práctica, la que podrías usar el lunes en un cliente, paso a paso y con un ejemplo completo. Verás cómo se valora la probabilidad y el impacto, cómo se construye una matriz de riesgos, qué opciones de tratamiento existen y cómo se presenta el resultado a la dirección. También conocerás las metodologías de referencia en España, como MAGERIT, y a nivel internacional, como ISO veintisiete mil cinco."
   },
   {
    "titulo": "El proceso de gestión de riesgos",
    "texto": "La gestión de riesgos sigue un proceso que comparten ISO treinta y un mil, ISO veintisiete mil cinco y MAGERIT. Primero, establecer el contexto y los criterios: qué escala usamos, qué impacto es alto y cuál es el apetito de riesgo de la empresa. Segundo, identificar los riesgos a partir de activos, amenazas y vulnerabilidades. Tercero, analizarlos, asignando probabilidad e impacto. Cuarto, evaluarlos, comparando cada riesgo con el apetito para decidir cuáles requieren acción. Quinto, tratarlos. Y sexto, comunicar los resultados, monitorizar y revisar periódicamente, al menos una vez al año o cuando haya cambios importantes. Si en la entrevista te piden explicar cómo harías un análisis de riesgos, recita estos seis pasos y pon un ejemplo. Es una respuesta de diez."
   },
   {
    "titulo": "Escalas: define los criterios antes de valorar",
    "texto": "Antes de valorar ningún riesgo, hay que definir las escalas. Si no, cada persona entenderá alto de una manera distinta. Una escala típica tiene cinco niveles. Para la probabilidad usamos frecuencias: desde menos de una vez cada cinco años hasta varias veces al mes. Para el impacto usamos criterios de negocio: económico, operativo, legal, reputacional e incluso de seguridad de las personas. Por ejemplo, un impacto medio sería una interrupción de horas, una pérdida de hasta cien mil euros y quejas de clientes, mientras que uno muy alto sería una multa elevada o aparecer en la prensa nacional. Estos umbrales se adaptan a cada cliente: cien mil euros es una catástrofe para una pyme y una anécdota para un gran banco. Validar estas escalas con la dirección es el primer entregable de un análisis de riesgos."
   },
   {
    "titulo": "Identificar riesgos: cómo redactarlos bien",
    "texto": "Un error típico de juniors es redactar riesgos demasiado genéricos, como riesgo de ciberataque. Eso no ayuda a nadie a decidir. Usa la fórmula causa, evento y consecuencia. Por ejemplo: debido a la falta de doble factor en el correo electrónico, causa, un atacante podría robar credenciales mediante phishing y acceder a los datos de clientes, evento, provocando una brecha de datos notificable a la autoridad y posibles sanciones, consecuencia. Así de concreto, el riesgo ya sugiere el control. ¿De dónde salen los riesgos? De entrevistas con responsables, de talleres con el negocio, de incidentes anteriores, de informes de auditoría, de catálogos de amenazas como el de MAGERIT o el de ENISA, y de la propia experiencia del equipo consultor."
   },
   {
    "titulo": "Ejemplo completo: riesgo de fraude del CEO",
    "texto": "Hagamos un ejemplo completo. Activo: el proceso de pagos a proveedores. Amenaza: suplantación de un directivo mediante correo y, cada vez más, voz clonada con inteligencia artificial. Vulnerabilidad: no existe un procedimiento de verificación por un segundo canal. Valoramos: la probabilidad es alta, un cuatro, porque estos intentos son frecuentes en empresas grandes. El impacto también es alto, un cuatro, porque una transferencia puede ser de cientos de miles de euros. Cuatro por cuatro, dieciséis: riesgo alto. Tratamiento: un procedimiento de doble verificación de pagos y de cambios de cuenta bancaria, más formación específica para el equipo de finanzas. Riesgo residual: la probabilidad baja a dos, el impacto sigue en cuatro, dos por cuatro, ocho: riesgo medio. Fíjate en que los controles suelen bajar la probabilidad más que el impacto."
   },
   {
    "titulo": "La matriz de riesgos (mapa de calor)",
    "texto": "El resultado se presenta en una matriz de riesgos, también llamada mapa de calor. En un eje se sitúa la probabilidad y en el otro el impacto, y cada celda tiene un color según el producto. Un esquema habitual es este: del uno al cuatro, verde, riesgo aceptable que se vigila. Del cinco al nueve, amarillo, riesgo medio que se trata a medio plazo. Del diez al catorce, naranja, riesgo alto con plan de acción prioritario. Y del quince al veinticinco, rojo, riesgo crítico que exige acción inmediata y escalado a la dirección. Un consejo de presentación: muestra dos mapas, el de riesgo inherente y el de riesgo residual, uno al lado del otro. Visualmente se ve el valor de los controles propuestos, y eso ayuda mucho a que la dirección apruebe el presupuesto. En la web tienes una calculadora interactiva."
   },
   {
    "titulo": "Las cuatro opciones de tratamiento",
    "texto": "Una vez evaluado, cada riesgo se trata con una de cuatro opciones. Mitigar o reducir: aplicar controles para bajar la probabilidad o el impacto. Es la opción más común. Transferir o compartir: pasar parte del riesgo a un tercero, por ejemplo contratando un ciberseguro o externalizando un servicio. Pero ojo, la responsabilidad legal no se transfiere: si tu proveedor pierde los datos de tus clientes, ante la autoridad sigues respondiendo tú. Evitar: dejar de hacer la actividad que genera el riesgo, por ejemplo no almacenar los datos de tarjetas. Y aceptar o asumir: decidir conscientemente no hacer nada más, porque el riesgo está dentro del apetito o porque el control cuesta más que el daño. La aceptación debe ser formal, por escrito y firmada por el propietario del riesgo, no por el consultor."
   },
   {
    "titulo": "Metodologías de referencia",
    "texto": "Conoce las metodologías de referencia. MAGERIT, en su versión tres, es la metodología del Gobierno de España para analizar riesgos de sistemas de información, y se apoya en la herramienta PILAR del Centro Criptológico Nacional. Es muy usada con el Esquema Nacional de Seguridad. ISO veintisiete mil cinco, revisada en dos mil veintidós, es la guía internacional de gestión de riesgos de seguridad de la información y admite enfoques basados en activos o en escenarios. ISO treinta y un mil es la norma genérica de gestión de riesgos para cualquier tipo de riesgo. La publicación ochocientos treinta del NIST es una guía estadounidense muy completa. Y FAIR es un modelo para cuantificar el riesgo en euros, cada vez más demandado por los consejos de administración. No necesitas dominarlas todas, pero sí saber qué es cada una."
   },
   {
    "titulo": "El registro de riesgos en Excel",
    "texto": "En la práctica, todo esto vive en un registro de riesgos, normalmente un Excel o una herramienta GRC como ServiceNow, Archer u otras similares. Las columnas típicas son: identificador, descripción con la fórmula causa, evento y consecuencia, categoría, activo afectado, propietario del riesgo, probabilidad, impacto y nivel inherente, controles existentes, controles propuestos, nivel residual, decisión de tratamiento, responsable de la acción, fecha prevista y estado. Como junior, te pedirán mantener este registro limpio y coherente. Usa listas desplegables para las escalas, formato condicional para los colores y fórmulas para calcular los niveles. Y revisa siempre que no haya riesgos sin propietario o acciones sin fecha. En la web tienes una calculadora para practicar."
   },
   {
    "titulo": "Resumen y práctica",
    "texto": "Resumen. Un análisis de riesgos empieza por acordar escalas con la dirección, sigue identificando riesgos bien redactados, los valora con probabilidad e impacto, los compara con el apetito de riesgo y decide cómo tratarlos. Y se repite periódicamente. Te propongo un ejercicio: analiza cinco riesgos de una clínica dental de tamaño medio. Piensa en su agenda online, las historias clínicas, los pagos, el ransomware y los empleados. Una pista: los datos de salud son una categoría especial según el reglamento de protección de datos, así que el impacto de una brecha es mayor. Valora cada riesgo, colócalo en la matriz y propón un tratamiento. Después compáralo con la solución que tienes en la web del curso. En el próximo vídeo entramos en el mundo de la privacidad."
   }
  ]
 },
 {
  "id": "07",
  "titulo": "Privacidad I: RGPD y LOPDGDD",
  "subtitulo": "Principios, bases de legitimación, roles, derechos y sanciones",
  "nivel": "Intermedio",
  "modulo": 7,
  "duracion": 521.2,
  "palabras": 1255,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 36.3,
    "titulo": "Conceptos clave"
   },
   {
    "t": 94.7,
    "titulo": "Los 7 principios (artículo 5)"
   },
   {
    "t": 148.8,
    "titulo": "Las 6 bases de legitimación (artículo 6)"
   },
   {
    "t": 206.5,
    "titulo": "Roles: responsable, encargado y delegado"
   },
   {
    "t": 261.7,
    "titulo": "Los derechos de las personas"
   },
   {
    "t": 315.9,
    "titulo": "Información y transparencia"
   },
   {
    "t": 364.6,
    "titulo": "LOPDGDD: lo específico de España"
   },
   {
    "t": 417.0,
    "titulo": "Sanciones y casos reales"
   },
   {
    "t": 465.2,
    "titulo": "Resumen y práctica"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "Bienvenido al primero de los dos vídeos dedicados a la privacidad. La oferta a la que aspiras menciona privacidad de forma explícita, así que este bloque es fundamental. Vamos a estudiar el Reglamento General de Protección de Datos de la Unión Europea, conocido como RGPD, y la ley española que lo complementa, la Ley Orgánica tres de dos mil dieciocho, de Protección de Datos Personales y garantía de los derechos digitales. Te explicaré los conceptos clave, los principios, las bases para tratar datos, los roles y los derechos de las personas, siempre con ejemplos de empresa."
   },
   {
    "titulo": "Conceptos clave",
    "texto": "Empecemos por los conceptos. Un dato personal es cualquier información sobre una persona física identificada o identificable. No solo el nombre: también un correo electrónico, una dirección IP, una matrícula, una voz o una foto. Un tratamiento es cualquier operación con esos datos: recogerlos, guardarlos, consultarlos, enviarlos o borrarlos. Hay categorías especiales de datos que tienen más protección: salud, datos biométricos para identificar a alguien, datos genéticos, ideología, religión, afiliación sindical, origen étnico, vida u orientación sexual. Y dos conceptos que se confunden: seudonimizar es sustituir los identificadores por un código, pero se puede revertir, así que sigue siendo dato personal. Anonimizar es hacerlo de forma irreversible, y entonces el reglamento deja de aplicarse. El reglamento se aplica desde el veinticinco de mayo de dos mil dieciocho."
   },
   {
    "titulo": "Los 7 principios (artículo 5)",
    "texto": "El artículo cinco fija siete principios que debes saber de memoria. Licitud, lealtad y transparencia: tratar datos con una base legal y explicándolo claramente. Limitación de la finalidad: usar los datos solo para el fin para el que se recogieron. Minimización: recoger solo los datos necesarios. Exactitud: mantenerlos correctos y actualizados. Limitación del plazo de conservación: no guardarlos más tiempo del necesario. Integridad y confidencialidad: protegerlos con medidas de seguridad, y aquí se une la privacidad con la ciberseguridad. Y la responsabilidad proactiva: la empresa no solo debe cumplir, debe poder demostrar que cumple. Este último principio explica buena parte del trabajo de un consultor de privacidad: registros, análisis, políticas y evidencias que demuestran el cumplimiento ante la autoridad."
   },
   {
    "titulo": "Las 6 bases de legitimación (artículo 6)",
    "texto": "Para tratar datos personales necesitas una base de legitimación, y el artículo seis fija seis. El consentimiento, que debe ser libre, específico, informado e inequívoco, y tan fácil de retirar como de dar. Por ejemplo, para enviar un boletín comercial. La ejecución de un contrato, como usar la dirección de un cliente para enviarle su pedido. La obligación legal, como conservar facturas o el registro de jornada de los empleados. Los intereses vitales, como facilitar datos médicos en una emergencia. El interés público o el ejercicio de poderes públicos, típico de administraciones. Y el interés legítimo, como la prevención del fraude, que exige hacer una ponderación documentada entre el interés de la empresa y los derechos de la persona. Un error frecuente es pedir consentimiento para todo: si el tratamiento es necesario para un contrato, el consentimiento no es la base adecuada."
   },
   {
    "titulo": "Roles: responsable, encargado y delegado",
    "texto": "Ahora los roles. El responsable del tratamiento es quien decide para qué y cómo se tratan los datos. Por ejemplo, una empresa respecto a los datos de sus empleados. El encargado del tratamiento trata los datos por cuenta del responsable, siguiendo sus instrucciones. Por ejemplo, la empresa que gestiona las nóminas o el proveedor de la nube. Entre ellos debe existir un contrato de encargo con el contenido del artículo veintiocho. Si dos organizaciones deciden conjuntamente, son corresponsables. Y el delegado de protección de datos, o DPO, asesora y supervisa el cumplimiento con independencia. Es obligatorio para administraciones públicas, para quien hace observación sistemática a gran escala o trata categorías especiales a gran escala, y la ley española amplía la lista, por ejemplo, a colegios, entidades financieras o aseguradoras."
   },
   {
    "titulo": "Los derechos de las personas",
    "texto": "Las personas tienen derechos sobre sus datos. El de acceso, para saber qué datos tienen sobre ellas. El de rectificación, para corregirlos. El de supresión, conocido como derecho al olvido. El de limitación del tratamiento, para congelarlos mientras se resuelve una reclamación. El de portabilidad, para recibirlos en un formato estructurado y llevarlos a otra empresa. El de oposición, por ejemplo al marketing directo. Y el derecho a no ser objeto de decisiones basadas únicamente en tratamientos automatizados con efectos significativos, algo muy relevante con la inteligencia artificial. La empresa debe responder en un mes, ampliable otros dos si es complejo, de forma gratuita. En los proyectos diseñarás procedimientos para gestionar estos derechos, con plantillas de respuesta y un registro de solicitudes."
   },
   {
    "titulo": "Información y transparencia",
    "texto": "El principio de transparencia se concreta en el deber de informar. Cuando se recogen datos, hay que decir quién es el responsable, para qué se usan los datos, con qué base legal, a quién se comunican, cuánto tiempo se conservan, si salen de la Unión Europea, y cómo ejercer los derechos y reclamar ante la Agencia Española de Protección de Datos. La ley española permite la información por capas: un resumen breve en el formulario con lo esencial, y un enlace a la política de privacidad completa. Y siempre con un lenguaje claro, que pueda entender cualquier persona. Revisar políticas de privacidad, cláusulas informativas de formularios y avisos de cookies es una tarea muy típica de un junior de privacidad. Fíjate en las webs que visitas, y empieza a detectar qué está bien y qué no."
   },
   {
    "titulo": "LOPDGDD: lo específico de España",
    "texto": "La Ley Orgánica tres de dos mil dieciocho adapta el reglamento a España y añade cosas propias. La edad para que un menor consienta por sí mismo es de catorce años. Amplía la lista de entidades que deben nombrar delegado de protección de datos, como centros educativos, entidades financieras, aseguradoras o empresas de suministros. Y añade un título completo de derechos digitales: el derecho a la desconexión digital de los trabajadores, la intimidad frente al uso de dispositivos digitales, de videovigilancia y de geolocalización en el trabajo, entre otros. También regula casos concretos como la videovigilancia o los sistemas de información crediticia. La autoridad de control en España es la Agencia Española de Protección de Datos. Su web tiene guías, herramientas y resoluciones que te recomiendo leer: son el mejor material de estudio."
   },
   {
    "titulo": "Sanciones y casos reales",
    "texto": "Hablemos de sanciones. El reglamento prevé multas de hasta veinte millones de euros o el cuatro por ciento de la facturación mundial anual, la cifra mayor, para las infracciones más graves, como tratar datos sin base legal o vulnerar los derechos. Para otras infracciones, hasta diez millones o el dos por ciento. Las grandes multas en Europa han afectado a empresas tecnológicas, pero la Agencia Española es una de las autoridades más activas en número de sanciones, muchas a empresas medianas: por no tener base legal, por medidas de seguridad insuficientes que provocan brechas, por no atender derechos o por videovigilancia indebida. Un consejo: lee algunas resoluciones recientes de la Agencia. En la entrevista, comentar un caso real demuestra interés genuino por el área."
   },
   {
    "titulo": "Resumen y práctica",
    "texto": "Resumen del vídeo. Si hay un dato personal y un tratamiento, necesitas una base de legitimación y cumplir los siete principios. El responsable decide, el encargado trata por cuenta del responsable y el delegado de protección de datos supervisa. Las personas tienen derechos que hay que atender en un mes. Y la ley española añade especificidades como la edad de catorce años y los derechos digitales. Ejercicio práctico: abre el formulario de registro de una web que uses habitualmente. ¿Qué datos pide? ¿Son todos necesarios? ¿Qué base legal crees que usa? ¿Te informa correctamente? ¿Hay casillas premarcadas? Escribe tus conclusiones como si fueras el consultor. Y practica en la web con el clasificador de bases de legitimación. En el siguiente vídeo veremos las herramientas prácticas de privacidad."
   }
  ]
 },
 {
  "id": "08",
  "titulo": "Privacidad II: herramientas prácticas",
  "subtitulo": "Registro de actividades, evaluación de impacto, privacidad desde el diseño, brechas y transferencias",
  "nivel": "Intermedio",
  "modulo": 8,
  "duracion": 511.6,
  "palabras": 1270,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 31.9,
    "titulo": "El Registro de Actividades de Tratamiento (RAT)"
   },
   {
    "t": 86.9,
    "titulo": "La Evaluación de Impacto (EIPD / DPIA)"
   },
   {
    "t": 140.1,
    "titulo": "Privacidad desde el diseño y por defecto"
   },
   {
    "t": 189.6,
    "titulo": "Gestión de brechas de datos personales"
   },
   {
    "t": 246.9,
    "titulo": "Encargados del tratamiento y proveedores"
   },
   {
    "t": 297.9,
    "titulo": "Transferencias internacionales"
   },
   {
    "t": 351.5,
    "titulo": "Cookies, marketing y nuevos retos"
   },
   {
    "t": 403.0,
    "titulo": "El programa de privacidad de una empresa"
   },
   {
    "t": 454.6,
    "titulo": "Resumen y práctica"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En el vídeo anterior aprendiste la teoría del reglamento de protección de datos. Ahora vamos a lo práctico: las herramientas con las que trabaja cada día un consultor de privacidad. Veremos el registro de actividades de tratamiento, la evaluación de impacto, la privacidad desde el diseño, la gestión de brechas de datos, los contratos con encargados y las transferencias internacionales. Son exactamente las tareas que te pedirán en tus primeros proyectos, así que te enseñaré también cómo se hacen y qué errores evitar."
   },
   {
    "titulo": "El Registro de Actividades de Tratamiento (RAT)",
    "texto": "La primera herramienta es el registro de actividades de tratamiento, que en España todo el mundo llama RAT. Lo exige el artículo treinta y es el inventario de todo lo que la empresa hace con datos personales. Cada actividad es una fila: gestión de nóminas, gestión de clientes, videovigilancia, marketing, selección de personal, y así sucesivamente. Para cada una se indica la finalidad, la base legal, las categorías de datos y de personas afectadas, los destinatarios, si hay transferencias fuera de la Unión Europea, los plazos de conservación y una descripción general de las medidas de seguridad. ¿Cómo se construye? Con entrevistas a cada departamento. Pregunta qué datos recogen, de dónde vienen, dónde los guardan, a quién se los mandan y cuándo los borran. El registro es la base de todo: sin saber qué datos tienes, no puedes protegerlos."
   },
   {
    "titulo": "La Evaluación de Impacto (EIPD / DPIA)",
    "texto": "La segunda herramienta es la evaluación de impacto relativa a la protección de datos, en español EIPD y en inglés DPIA. Es obligatoria cuando un tratamiento probablemente suponga un alto riesgo para los derechos y libertades de las personas. Por ejemplo, perfilar a clientes a gran escala, tratar datos de salud de forma masiva, la videovigilancia sistemática de zonas públicas o el uso de biometría para controlar el acceso de empleados. La Agencia Española publica listas orientativas de tratamientos que la requieren. Una evaluación de impacto describe el tratamiento, analiza si es necesario y proporcionado, evalúa los riesgos para las personas, no para la empresa, y define medidas para reducirlos. Si después de las medidas el riesgo sigue siendo alto, hay que consultar a la autoridad antes de empezar. La Agencia ofrece la herramienta gratuita Gestiona para ayudar."
   },
   {
    "titulo": "Privacidad desde el diseño y por defecto",
    "texto": "El artículo veinticinco introduce la privacidad desde el diseño y por defecto. Desde el diseño significa que la privacidad se tiene en cuenta desde el primer día de un proyecto, no al final cuando ya está todo construido. Por defecto significa que la configuración inicial debe ser la más protectora: por ejemplo, un perfil en una aplicación no debe ser público salvo que el usuario lo elija. Medidas típicas: pedir solo los campos imprescindibles, seudonimizar los datos para análisis, cifrar, limitar quién accede, y programar el borrado automático cuando acabe el plazo de conservación. En la práctica, los consultores diseñan una lista de verificación de privacidad que los equipos deben pasar en cada nuevo proyecto, y que decide si hace falta una evaluación de impacto. Es un entregable muy habitual."
   },
   {
    "titulo": "Gestión de brechas de datos personales",
    "texto": "Ahora un proceso que debes conocer al detalle: la gestión de brechas de datos personales. Una brecha es cualquier incidente que afecte a la confidencialidad, integridad o disponibilidad de datos personales: un ransomware, un correo enviado al destinatario equivocado o un portátil robado. Primero, detectar y contener: cortar la fuga y preservar las evidencias. Segundo, evaluar: qué datos, cuántas personas y qué consecuencias. La Agencia ofrece una herramienta llamada Asesora Brecha. Tercero, si hay riesgo para las personas, notificar a la Agencia en setenta y dos horas desde que se tiene constancia. Cuarto, si el riesgo es alto, comunicarlo a los afectados sin dilación indebida, con lenguaje claro. Y quinto, documentar todas las brechas en un registro interno, se notifiquen o no. En las regulaciones de ciberseguridad hay plazos aún más cortos."
   },
   {
    "titulo": "Encargados del tratamiento y proveedores",
    "texto": "Casi todas las empresas usan proveedores que tratan datos por su cuenta: nóminas, nube, centro de atención telefónica o agencias de marketing. Son encargados del tratamiento, y el responsable debe elegir solo aquellos que ofrezcan garantías suficientes. Por eso se necesita un contrato de encargo con el contenido del artículo veintiocho: objeto y duración, tratar los datos solo según instrucciones, confidencialidad del personal, medidas de seguridad, condiciones para subcontratar a otros, ayuda en la gestión de derechos y de brechas, borrado o devolución al terminar, y derecho del responsable a auditar. En los proyectos revisarás contratos frente a una lista de verificación y prepararás cuestionarios de privacidad para proveedores. Esta tarea conecta directamente con la gestión de riesgos de terceros que veremos en el nivel profesional."
   },
   {
    "titulo": "Transferencias internacionales",
    "texto": "Otro tema clave son las transferencias internacionales: enviar datos personales fuera del Espacio Económico Europeo. Por ejemplo, cuando una empresa usa un proveedor de nube estadounidense o un centro de soporte en otro continente. Solo se permite con garantías. La más sencilla es que la Comisión Europea haya declarado adecuado al país, como el Reino Unido, Japón o Suiza. Para Estados Unidos existe desde dos mil veintitrés el Marco de Privacidad de Datos entre la Unión Europea y Estados Unidos, válido para empresas adheridas. Si no hay adecuación, se usan las cláusulas contractuales tipo aprobadas en dos mil veintiuno, acompañadas de una evaluación del impacto de la transferencia. Y los grupos multinacionales pueden aprobar normas corporativas vinculantes. Es un tema que cambia a menudo, así que revisa siempre la situación actual."
   },
   {
    "titulo": "Cookies, marketing y nuevos retos",
    "texto": "Veamos algunos temas del día a día. Las cookies: para instalar cookies que no sean técnicamente necesarias, como las de analítica o publicidad, hace falta consentimiento previo, según la ley de servicios de la sociedad de la información y la guía de cookies de la Agencia. Y el botón de rechazar debe ser tan fácil como el de aceptar. El marketing requiere una base legal clara y respetar el derecho de oposición; en España existe la Lista Robinson para excluirse de publicidad. La inteligencia artificial plantea nuevos retos: con qué base legal se entrenan los modelos, cómo se informa a las personas y cuándo se necesita una evaluación de impacto. Y el control laboral, como la monitorización de empleados, debe ser proporcionado e informado. Estos temas aparecen mucho en las noticias: síguelos para tener conversación en la entrevista."
   },
   {
    "titulo": "El programa de privacidad de una empresa",
    "texto": "Todo esto se organiza en un programa de privacidad. Tiene gobierno: un delegado de protección de datos, un comité, políticas y roles claros. Tiene inventario: el registro de actividades y un mapa de cómo fluyen los datos. Tiene procesos: gestión de derechos, gestión de brechas, evaluaciones de impacto, privacidad desde el diseño y control de proveedores. Tiene formación y concienciación de los empleados, y aquí la privacidad se encuentra de nuevo con el riesgo humano. Y tiene monitorización: indicadores, auditorías y una revisión anual. Muchas empresas usan herramientas especializadas como OneTrust o TrustArc, aunque en empresas medianas sigue siendo muy común trabajar con Excel y SharePoint. Si puedes, haz algún curso gratuito de estas herramientas: es un punto a favor en tu currículum."
   },
   {
    "titulo": "Resumen y práctica",
    "texto": "Resumen. El registro de actividades es el inventario base. La evaluación de impacto se hace para los tratamientos de alto riesgo. Las brechas se notifican a la Agencia en setenta y dos horas si suponen un riesgo. Los proveedores necesitan un contrato de encargo y garantías. Y las transferencias internacionales requieren mecanismos específicos. Ejercicio: completa tres filas del registro de actividades de un gimnasio. Primera, la gestión de socios, con base legal contractual. Segunda, el acceso con huella dactilar: son datos biométricos, una categoría especial, así que pregúntate si es necesario, si hay alternativas y si requiere evaluación de impacto. Y tercera, la videovigilancia, con base en el interés legítimo y plazo máximo de conservación de un mes según la ley española. En la web tienes la plantilla para practicar."
   }
  ]
 },
 {
  "id": "09",
  "titulo": "Regulación europea de ciberseguridad",
  "subtitulo": "NIS2, DORA, ENS, Reglamento de IA y Ley de Ciberresiliencia",
  "nivel": "Intermedio",
  "modulo": 9,
  "duracion": 529.0,
  "palabras": 1272,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 33.3,
    "titulo": "La directiva NIS2"
   },
   {
    "t": 95.6,
    "titulo": "NIS2: notificación de incidentes y sanciones"
   },
   {
    "t": 144.1,
    "titulo": "DORA: resiliencia operativa digital del sector financiero"
   },
   {
    "t": 205.8,
    "titulo": "El Esquema Nacional de Seguridad (ENS)"
   },
   {
    "t": 257.2,
    "titulo": "Reglamento de Inteligencia Artificial (AI Act)"
   },
   {
    "t": 315.7,
    "titulo": "Ley de Ciberresiliencia (CRA) y otras normas"
   },
   {
    "t": 366.7,
    "titulo": "Comparativa rápida"
   },
   {
    "t": 418.8,
    "titulo": "Qué proyectos genera esta regulación"
   },
   {
    "t": 471.5,
    "titulo": "Resumen y práctica"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "Europa está viviendo una auténtica ola regulatoria en ciberseguridad, y eso significa muchísimo trabajo para las consultoras. En este vídeo vas a conocer las cinco normas que más proyectos generan: la directiva NIS dos, el reglamento DORA para el sector financiero, el Esquema Nacional de Seguridad español, el Reglamento de Inteligencia Artificial y la Ley de Ciberresiliencia. No necesitas memorizar cada artículo, pero sí saber a quién aplica cada una, qué exige y qué proyectos genera. Eso te hará brillar en la entrevista."
   },
   {
    "titulo": "La directiva NIS2",
    "texto": "Empezamos por la directiva NIS dos, la directiva europea dos mil veintidós barra dos mil quinientos cincuenta y cinco. Sustituye a la primera directiva NIS y amplía enormemente su alcance: energía, transporte, banca, salud, agua, infraestructuras digitales, administración pública, pero también fabricación, alimentación, servicios postales o gestión de residuos. Clasifica a las organizaciones en entidades esenciales e importantes, según su sector y su tamaño. Les exige gestionar los riesgos de ciberseguridad con unas medidas mínimas del artículo veintiuno, entre ellas políticas, gestión de incidentes, continuidad, seguridad de la cadena de suministro, formación y uso de criptografía. Y algo muy relevante: los órganos de dirección deben aprobar las medidas, supervisarlas, recibir formación y pueden ser responsables. En España, la transposición se tramita mediante una ley de coordinación y gobernanza de la ciberseguridad; revisa su estado antes de tu entrevista."
   },
   {
    "titulo": "NIS2: notificación de incidentes y sanciones",
    "texto": "La directiva NIS dos establece un esquema de notificación de incidentes en varias fases. Una alerta temprana en veinticuatro horas desde que se tiene conocimiento de un incidente significativo. Una notificación en setenta y dos horas con una evaluación inicial de su gravedad e impacto. Y un informe final en el plazo de un mes. Compáralo con el reglamento de protección de datos: si un incidente afecta además a datos personales, la empresa puede tener que notificar a varias autoridades, con plazos distintos. Por eso los consultores diseñamos procedimientos integrados de notificación. En cuanto a las sanciones, para entidades esenciales pueden llegar a diez millones de euros o el dos por ciento de la facturación mundial, y para entidades importantes a siete millones o el uno coma cuatro por ciento."
   },
   {
    "titulo": "DORA: resiliencia operativa digital del sector financiero",
    "texto": "DORA es el reglamento europeo de resiliencia operativa digital del sector financiero. Al ser un reglamento, se aplica directamente, y es obligatorio desde el diecisiete de enero de dos mil veinticinco para bancos, aseguradoras, gestoras de fondos, entidades de pago, proveedores de criptoactivos y muchas otras entidades financieras. Tiene cinco pilares. Uno, la gestión del riesgo de las tecnologías de la información y la comunicación, con un marco aprobado por el consejo. Dos, la gestión, clasificación y notificación de incidentes graves. Tres, las pruebas de resiliencia, incluidas pruebas de penetración guiadas por amenazas para las entidades más relevantes. Cuatro, el riesgo de terceros proveedores tecnológicos, con un registro de información de todos los contratos. Y cinco, el intercambio de información sobre amenazas. Además, los proveedores tecnológicos críticos, como las grandes nubes, pasan a estar supervisados."
   },
   {
    "titulo": "El Esquema Nacional de Seguridad (ENS)",
    "texto": "El Esquema Nacional de Seguridad, regulado por el Real Decreto trescientos once de dos mil veintidós, es obligatorio para todo el sector público español y también para las empresas privadas que les prestan servicios tecnológicos. Por eso muchas empresas privadas se certifican en él. Los sistemas se clasifican en tres categorías, básica, media o alta, según el impacto de un incidente en las dimensiones de seguridad que ya conoces: confidencialidad, integridad, disponibilidad, autenticidad y trazabilidad. Las medidas se organizan en tres marcos: organizativo, operacional y de protección. Para la categoría básica basta una autoevaluación, mientras que para media y alta hace falta una auditoría de certificación. El Centro Criptológico Nacional publica las guías CCN-STIC, que son un material de estudio excelente y gratuito."
   },
   {
    "titulo": "Reglamento de Inteligencia Artificial (AI Act)",
    "texto": "El Reglamento europeo de Inteligencia Artificial, el dos mil veinticuatro barra mil seiscientos ochenta y nueve, es la primera ley integral de inteligencia artificial del mundo. Sigue un enfoque por niveles de riesgo. Hay prácticas de riesgo inaceptable, prohibidas desde febrero de dos mil veinticinco, como la puntuación social. Hay sistemas de alto riesgo, por ejemplo en selección de personal o en evaluación de solvencia, que deben cumplir requisitos de gestión de riesgos, calidad de datos, documentación, supervisión humana y ciberseguridad. Hay sistemas de riesgo limitado, con obligaciones de transparencia, como avisar de que estás hablando con un chatbot. Y el resto, de riesgo mínimo. Su aplicación es escalonada entre dos mil veinticinco y dos mil veintisiete, con ajustes de calendario en debate. Las áreas de gobierno y privacidad están asumiendo el gobierno de la inteligencia artificial: una gran oportunidad para perfiles junior."
   },
   {
    "titulo": "Ley de Ciberresiliencia (CRA) y otras normas",
    "texto": "La Ley de Ciberresiliencia, el reglamento europeo dos mil veinticuatro barra dos mil ochocientos cuarenta y siete, regula la seguridad de los productos con elementos digitales: desde una cámara conectada hasta un programa informático. Los fabricantes deberán diseñar productos seguros, gestionar sus vulnerabilidades durante su vida útil y ofrecer actualizaciones. La obligación de notificar vulnerabilidades explotadas activamente empieza en septiembre de dos mil veintiséis, y la aplicación completa llega en diciembre de dos mil veintisiete. Conviene que conozcas también otras normas por su nombre: la directiva de resiliencia de las entidades críticas, que complementa a NIS dos desde el punto de vista físico; el reglamento eIDAS dos sobre identidad digital europea; y la Ley de Datos europea. No hace falta dominarlas, pero sí saber que existen."
   },
   {
    "titulo": "Comparativa rápida",
    "texto": "Te dejo una tabla resumen que te recomiendo copiar en tus apuntes. El reglamento de protección de datos aplica a quien trate datos personales en la Unión. NIS dos, a entidades esenciales e importantes de sectores críticos. DORA, al sector financiero y a sus proveedores tecnológicos críticos. El Esquema Nacional de Seguridad, al sector público español y a sus proveedores. El reglamento de inteligencia artificial, a quien desarrolle o use sistemas de inteligencia artificial en la Unión. Y la Ley de Ciberresiliencia, a los fabricantes de productos digitales. Fíjate en que muchas empresas tienen que cumplir varias a la vez: un banco cumple el reglamento de protección de datos, DORA y el reglamento de inteligencia artificial. Por eso es tan importante el marco unificado de controles que vimos en el vídeo de gobierno."
   },
   {
    "titulo": "Qué proyectos genera esta regulación",
    "texto": "¿Y qué proyectos te encontrarás? Primero, análisis de aplicabilidad: ¿me afecta esta norma?, ¿soy entidad esencial o importante? Segundo, análisis de diferencias frente a los requisitos, con su plan de acción. Tercero, hojas de ruta de adecuación, a veces con una oficina de gestión del proyecto que coordina muchas iniciativas. Cuarto, procedimientos integrados de notificación de incidentes que combinan los plazos de varias normas. Quinto, formación a consejos de administración, que ahora es obligatoria con NIS dos y DORA, y aquí el área de riesgo humano tiene un papel protagonista. Y sexto, el registro de proveedores tecnológicos y la evaluación de terceros que exige DORA. En la entrevista, si te preguntan por qué te interesa el área, mencionar esta ola regulatoria demuestra que entiendes el mercado."
   },
   {
    "titulo": "Resumen y práctica",
    "texto": "Resumen. NIS dos aplica a sectores críticos, hace responsable a la dirección y exige notificar en veinticuatro horas, setenta y dos horas y un mes. DORA aplica al sector financiero, tiene cinco pilares y es obligatorio desde enero de dos mil veinticinco. El Esquema Nacional de Seguridad aplica al sector público español con categorías básica, media y alta. El reglamento de inteligencia artificial clasifica los sistemas por riesgo, y la Ley de Ciberresiliencia regula los productos digitales. Ejercicio: ¿qué normas aplican a un hospital público, a una aseguradora y a un fabricante de cámaras de vigilancia? Piénsalo antes de mirar la nota. El hospital, el Esquema Nacional, NIS dos y protección de datos. La aseguradora, DORA y protección de datos. Y el fabricante, la Ley de Ciberresiliencia y, si trata datos, también protección de datos."
   }
  ]
 },
 {
  "id": "10",
  "titulo": "Cyber Human Risk Management: fundamentos",
  "subtitulo": "Por qué fallan las personas, cómo cambian los comportamientos y cómo se mide la cultura",
  "nivel": "Intermedio",
  "modulo": 10,
  "duracion": 448.3,
  "palabras": 1127,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 33.6,
    "titulo": "De la concienciación a la gestión del riesgo humano"
   },
   {
    "t": 87.7,
    "titulo": "¿Por qué las personas fallan?"
   },
   {
    "t": 144.8,
    "titulo": "Modelos de cambio de comportamiento"
   },
   {
    "t": 200.5,
    "titulo": "Cultura de seguridad"
   },
   {
    "t": 248.0,
    "titulo": "Métricas: de vanidad vs. de riesgo"
   },
   {
    "t": 297.7,
    "titulo": "Riesgo humano por roles"
   },
   {
    "t": 345.4,
    "titulo": "Ética y límites"
   },
   {
    "t": 395.8,
    "titulo": "Resumen y práctica"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "Bienvenido al vídeo sobre la segunda gran área de la oferta: la gestión del riesgo humano en ciberseguridad. Durante años, las empresas se limitaron a un curso anual obligatorio que todos hacían a toda velocidad. Hoy sabemos que eso no cambia comportamientos. En este vídeo vas a aprender por qué las personas cometen errores de seguridad, qué dice la ciencia del comportamiento, cómo se pasa de la concienciación a la gestión del riesgo humano, y cómo se mide la cultura de seguridad. Es un área en pleno crecimiento y con mucha creatividad."
   },
   {
    "titulo": "De la concienciación a la gestión del riesgo humano",
    "texto": "El área ha evolucionado mucho. Antes, la concienciación consistía en un curso anual obligatorio, y el único indicador era el porcentaje de empleados que lo completaba. Eso cumple con el auditor, pero no reduce el riesgo. Hoy hablamos de gestión del riesgo humano, que tiene otro enfoque. Primero, el objetivo es cambiar comportamientos concretos y medibles: reportar correos sospechosos, usar el gestor de contraseñas, verificar los pagos. Segundo, se basa en datos: quién tiene más riesgo, por qué y en qué comportamiento. Tercero, es personalizada por rol: un directivo, alguien de finanzas, un desarrollador o una persona de atención al cliente tienen riesgos distintos. Y el objetivo final es crear una cultura de seguridad, en la que proteger la información sea lo normal, no una obligación impuesta."
   },
   {
    "titulo": "¿Por qué las personas fallan?",
    "texto": "Una idea fundamental: las personas no fallan por estupidez. Fallan por contexto, presión y mal diseño. Nuestro cerebro usa atajos llamados sesgos. Obedecemos a la autoridad, reaccionamos rápido ante la urgencia y tenemos exceso de confianza: eso no me va a pasar a mí. Además, sufrimos carga cognitiva: demasiadas normas, demasiadas contraseñas y demasiadas alertas, así que acabamos ignorándolas. Y la seguridad compite con la productividad: si el procedimiento seguro es lento, la gente busca atajos. Los expertos en factores humanos distinguen tipos de error: despistes al hacer algo automático, olvidos, errores por falta de conocimiento e infracciones deliberadas, normalmente para ahorrar tiempo. Cada tipo necesita una solución distinta: la formación solo arregla los errores de conocimiento. Los demás se arreglan con mejor diseño y procesos."
   },
   {
    "titulo": "Modelos de cambio de comportamiento",
    "texto": "Para cambiar comportamientos usamos modelos de la ciencia del comportamiento. El modelo de BJ Fogg dice que un comportamiento ocurre cuando coinciden tres cosas: motivación, capacidad y un detonante. Si quieres que la gente reporte el phishing, necesita querer hacerlo, que sea fácil y un recordatorio en el momento justo. El modelo COM-B, muy usado en Reino Unido, habla de capacidad, oportunidad y motivación. Y los nudges, o empujones, son pequeños cambios de diseño que facilitan lo seguro: por ejemplo, un botón de reportar phishing bien visible que, al pulsarlo, da las gracias de inmediato. También trabajamos los hábitos, con pequeños pasos y refuerzo positivo. Una regla práctica: haz que el comportamiento seguro sea fácil, atractivo, social y oportuno. Si citas estos modelos en la entrevista, te diferenciarás muchísimo."
   },
   {
    "titulo": "Cultura de seguridad",
    "texto": "La cultura de seguridad es lo que la gente hace cuando nadie la mira. Un concepto clave es la cultura justa, que viene del sector de la aviación: los errores honestos se reportan sin miedo a castigo, porque así la organización aprende. Si alguien hace clic en un phishing y lo reporta en dos minutos, hay que agradecérselo, no castigarlo. Si se le castiga, la próxima vez lo esconderá. La cultura también se construye con el ejemplo de la dirección: si el director general se salta las normas, nadie las cumplirá. Otra práctica muy eficaz son las redes de embajadores de seguridad: voluntarios de cada departamento que hacen de puente con el equipo de seguridad. Y la cultura se mide con encuestas de percepción, datos de comportamiento y entrevistas o grupos focales."
   },
   {
    "titulo": "Métricas: de vanidad vs. de riesgo",
    "texto": "Medir bien es lo que separa un programa profesional de uno amateur. El porcentaje de formación completada es necesario para el cumplimiento, pero no dice nada del riesgo real. La tasa de clics en las simulaciones de phishing es útil, pero ojo: depende muchísimo de lo difícil que sea el correo, así que no compares campañas de dificultad distinta. Más valiosa es la tasa de reporte: cuánta gente avisa al equipo de seguridad. Y el tiempo hasta el primer reporte, que mide la rapidez de reacción de toda la organización. También interesan los reincidentes, para darles apoyo específico, y el número de reportes de correos maliciosos reales. Y para la cultura, un índice basado en encuestas. Un objetivo típico de madurez es que la tasa de reporte supere claramente a la tasa de clics."
   },
   {
    "titulo": "Riesgo humano por roles",
    "texto": "No todos los empleados tienen el mismo riesgo, así que la formación debe ser por roles. La dirección es objetivo de fraudes del CEO y de vídeos o audios falsos, y además tiene responsabilidad legal con NIS dos o DORA. Finanzas sufre los intentos de cambio de número de cuenta y los pagos urgentes. Recursos humanos recibe currículums que pueden contener malware y maneja datos sensibles de los empleados. Los equipos técnicos y de desarrollo tienen credenciales privilegiadas y pueden dejar contraseñas dentro del código. Atención al cliente recibe llamadas de suplantación para cambiar datos de clientes. Y quienes teletrabajan o viajan se conectan a redes públicas. Un programa profesional identifica estos grupos y les da contenidos y simulaciones adaptados a sus riesgos reales."
   },
   {
    "titulo": "Ética y límites",
    "texto": "Un apartado muy importante, y que valorarán en la entrevista: la ética. Las simulaciones deben educar, no humillar. Nunca se publica quién ha caído. Hay que evitar cebos crueles, como un falso aumento de sueldo, un despido o una noticia de salud, porque dañan la confianza de los empleados en la empresa y en el equipo de seguridad. Antes de lanzar un programa, se coordina con recursos humanos, con el área legal, con la representación de los trabajadores cuando corresponde y con el delegado de protección de datos, porque las simulaciones también son un tratamiento de datos personales de los empleados: hay que informar, definir la base legal y limitar quién ve los resultados individuales. Los informes a la dirección deben ser agregados, y el seguimiento individual debe tener un fin de apoyo y formación, no de castigo."
   },
   {
    "titulo": "Resumen y práctica",
    "texto": "Resumen. La gestión del riesgo humano pasa de cursos anuales a cambiar comportamientos concretos y medibles. Las personas fallan por contexto, sesgos y mal diseño, así que hay que facilitar el comportamiento seguro. Se mide sobre todo con reportes y tendencias, no solo con clics. Y la ética y la privacidad deben estar presentes en todo el programa. Ejercicio: elige un comportamiento, por ejemplo verificar por teléfono cualquier cambio de número de cuenta de un proveedor, y diseña cómo cambiarlo con el modelo de Fogg. Motivación: contar un caso real de fraude. Capacidad: una lista actualizada de teléfonos de proveedores. Detonante: un aviso automático en el sistema de pagos cuando alguien cambia una cuenta. En el nivel profesional diseñaremos un programa completo de un año."
   }
  ]
 },
 {
  "id": "11",
  "titulo": "Diseñar un programa de concienciación",
  "subtitulo": "Plan anual, simulaciones de phishing, contenidos, métricas e informe a dirección",
  "nivel": "Profesional",
  "modulo": 11,
  "duracion": 451.2,
  "palabras": 1086,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 32.3,
    "titulo": "Fase 1: diagnóstico inicial"
   },
   {
    "t": 86.6,
    "titulo": "Fase 2: objetivos y segmentación"
   },
   {
    "t": 140.4,
    "titulo": "Fase 3: el plan anual (ejemplo)"
   },
   {
    "t": 193.7,
    "titulo": "Fase 4: diseñar una simulación de phishing"
   },
   {
    "t": 247.5,
    "titulo": "Fase 5: contenidos que funcionan"
   },
   {
    "t": 303.1,
    "titulo": "Fase 6: comunicación y embajadores"
   },
   {
    "t": 351.7,
    "titulo": "Fase 7: el informe a la dirección"
   },
   {
    "t": 400.2,
    "titulo": "Errores que debes evitar"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "Bienvenido al nivel profesional. A partir de ahora vamos a trabajar como lo harías en un proyecto real. En este vídeo vas a diseñar, paso a paso, un programa anual de gestión del riesgo humano para un cliente: desde el diagnóstico inicial hasta el informe a la dirección. Verás cómo se planifica una campaña de simulación de phishing, cómo se eligen los contenidos, qué métricas se presentan y qué errores hay que evitar. Si te incorporas al área de riesgo humano, esto es literalmente tu trabajo."
   },
   {
    "titulo": "Fase 1: diagnóstico inicial",
    "texto": "Todo programa empieza con un diagnóstico. Primero, entrevistas con las partes implicadas: el equipo de seguridad, recursos humanos, comunicación interna y algunos responsables de negocio. Pregunta qué incidentes han tenido, qué se ha hecho antes, qué ha funcionado y qué no. Segundo, revisa los datos: incidentes reales relacionados con personas y resultados de simulaciones anteriores. Tercero, lanza una simulación de phishing de línea base, para saber desde dónde partimos. Cuarto, una encuesta de cultura de seguridad, breve y anónima. Y quinto, identifica los requisitos regulatorios: ISO veintisiete mil uno exige concienciación, NIS dos y DORA exigen formación incluso a la dirección, y el Esquema Nacional también. Con todo esto redactas un informe de diagnóstico con los riesgos humanos prioritarios por colectivo."
   },
   {
    "titulo": "Fase 2: objetivos y segmentación",
    "texto": "Con el diagnóstico, defines objetivos. Mi consejo: elige pocos comportamientos prioritarios, entre tres y cinco. Por ejemplo, reportar correos sospechosos, verificar los cambios de pago, usar el gestor de contraseñas y no compartir información en herramientas de inteligencia artificial no autorizadas. Después conviértelos en objetivos medibles, lo que llamamos objetivos SMART: específicos, medibles, alcanzables, relevantes y con plazo. Por ejemplo: aumentar la tasa de reporte de simulaciones por encima del cuarenta por ciento en doce meses. Luego segmenta a la plantilla en colectivos: dirección, finanzas, recursos humanos, tecnología, atención al cliente y nuevas incorporaciones. Y presenta todo al patrocinador del proyecto, normalmente el responsable de seguridad, y al comité, para que lo aprueben."
   },
   {
    "titulo": "Fase 3: el plan anual (ejemplo)",
    "texto": "Con los objetivos, se construye un plan anual. Te enseño un ejemplo típico. En el primer trimestre, un lanzamiento con un mensaje del director general, que da peso al programa, y microcursos de pocos minutos sobre phishing y contraseñas, junto a la simulación de línea base y la encuesta. En el segundo trimestre, un taller presencial para finanzas sobre fraude del CEO, el lanzamiento de la red de embajadores y una simulación de dificultad media, incluida una llamada de vishing al equipo de finanzas. En el tercer trimestre se aprovecha octubre, mes europeo de la ciberseguridad, con retos y gamificación, y simulaciones con adjuntos o códigos QR. Y en el cuarto, una sesión para el consejo sobre sus responsabilidades, una simulación avanzada, la encuesta final y el informe anual. Fíjate en que formación y medición avanzan juntas."
   },
   {
    "titulo": "Fase 4: diseñar una simulación de phishing",
    "texto": "Veamos cómo se diseña una simulación. Primero, el escenario: debe ser realista y relevante, por ejemplo un aviso de paquetería, un mensaje de recursos humanos sobre vacaciones o una alerta de una herramienta corporativa. Segundo, define y documenta la dificultad, para poder comparar campañas. Tercero, la página de aterrizaje: si alguien hace clic, no le dices que ha fallado, le explicas en treinta segundos qué señales podía haber detectado. Ese es el momento de aprendizaje más potente. Cuarto, la parte técnica: añadir los dominios de la simulación a la lista blanca del correo y avisar al centro de soporte para que no se colapse. Quinto, enviar de forma escalonada durante varios días, para que la gente no se avise entre sí. Hay muchas plataformas en el mercado, como KnowBe4, Proofpoint, Hoxhunt o la de Microsoft."
   },
   {
    "titulo": "Fase 5: contenidos que funcionan",
    "texto": "¿Qué contenidos funcionan? Lo primero, el microaprendizaje: piezas de tres a cinco minutos, entregadas en el momento oportuno, por ejemplo justo después de caer en una simulación. Segundo, historias y casos reales: la gente recuerda la historia de la empresa que perdió medio millón con un fraude del CEO, no la lista de diez normas. Tercero, formatos interactivos: juegos, retos por equipos, escape rooms de ciberseguridad o concursos. Cuarto, adaptados al rol y, en multinacionales, a varios idiomas. Por eso el inglés profesional que pide la oferta es tan útil. Quinto, accesibles para todas las personas, con subtítulos y buen contraste. Y sexto, positivos: reconoce públicamente a los departamentos que más reportan. El tono importa mucho: el miedo funciona un día, la confianza funciona años."
   },
   {
    "titulo": "Fase 6: comunicación y embajadores",
    "texto": "Un programa sin comunicación no existe. Necesitas un plan de comunicación con los canales, como la intranet, el correo, Teams, pantallas o reuniones de equipo, un calendario y unos mensajes clave. El patrocinio visible de la dirección es decisivo: un vídeo de un minuto del director general vale más que diez correos del equipo de seguridad. Los embajadores, uno por departamento o por sede, multiplican el alcance: necesitan un kit con mensajes, presentaciones breves, preguntas frecuentes y un canal directo con el equipo de seguridad. Y recoge retroalimentación de forma continua: qué contenido gustó, qué resultó pesado, qué dudas tiene la gente. Como junior, probablemente prepararás estos materiales: cuida el diseño, la ortografía y el tono."
   },
   {
    "titulo": "Fase 7: el informe a la dirección",
    "texto": "Y llegamos al informe a la dirección. Empieza con una página de resumen ejecutivo y el mensaje principal primero. Por ejemplo: la tasa de reporte ha pasado del doce al treinta y ocho por ciento, pero finanzas sigue siendo el colectivo más expuesto. Después, gráficos de tendencia: reporte frente a clic, por trimestre y por colectivo. Luego, los riesgos humanos prioritarios y cómo han evolucionado. Compara con los objetivos que se aprobaron, y ten cuidado con las comparativas con el sector, porque cada empresa mide distinto. Y termina siempre con recomendaciones y con las decisiones concretas que pides a la dirección, por ejemplo, presupuesto para un programa específico en finanzas. Un informe que no pide decisiones es solo un informe bonito."
   },
   {
    "titulo": "Errores que debes evitar",
    "texto": "Para terminar, los errores que más se ven. Diseñar simulaciones imposibles para pillar a la gente y presumir de una tasa de clics alta: eso no mide nada y genera rechazo. Castigar a quien cae, que destruye la cultura de reporte. Medir solo el porcentaje de formación completada. Repetir el mismo contenido genérico para todos y todos los años. No coordinar con soporte, recursos humanos o el delegado de protección de datos, lo que provoca quejas y problemas legales. Y medir sin actuar: si los datos dicen que finanzas tiene un problema y no haces nada específico, el programa pierde credibilidad. En la web del curso tienes un laboratorio para diseñar tu propio plan y calcular las métricas de una campaña. Hazlo: puede convertirse en un ejemplo muy potente para la entrevista."
   }
  ]
 },
 {
  "id": "12",
  "titulo": "La caja de herramientas del consultor",
  "subtitulo": "Gap analysis, modelos de madurez, entrevistas, Excel, PowerPoint y comunicación con cliente",
  "nivel": "Profesional",
  "modulo": 12,
  "duracion": 452.3,
  "palabras": 1130,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 31.1,
    "titulo": "El análisis de diferencias (gap analysis)"
   },
   {
    "t": 80.7,
    "titulo": "Modelos de madurez (escala tipo CMMI)"
   },
   {
    "t": 137.1,
    "titulo": "Cómo preparar y conducir una entrevista con cliente"
   },
   {
    "t": 188.6,
    "titulo": "Excel profesional para GRC"
   },
   {
    "t": 240.3,
    "titulo": "PowerPoint de consultoría"
   },
   {
    "t": 295.3,
    "titulo": "Escribir para el cliente"
   },
   {
    "t": 347.8,
    "titulo": "Herramientas del mercado que conviene conocer"
   },
   {
    "t": 401.8,
    "titulo": "Trabajar en equipo y gestionar tu tiempo"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo te enseño las herramientas que diferencian a un buen consultor junior desde la primera semana. No hablo de software de seguridad, hablo de métodos de trabajo: cómo se hace un análisis de diferencias, cómo se mide la madurez, cómo se prepara y se conduce una entrevista con un cliente, cómo se construye un buen Excel de seguimiento, cómo se redacta una diapositiva que entienda un directivo y cómo comunicarte con el cliente y con tu equipo. Son habilidades que nadie te enseña en la universidad y que te harán destacar."
   },
   {
    "titulo": "El análisis de diferencias (gap analysis)",
    "texto": "La herramienta más usada en consultoría de cumplimiento es el análisis de diferencias, el famoso gap analysis. Consiste en comparar la situación actual del cliente, lo que en inglés llamamos as-is, con la situación objetivo, el to-be, que normalmente es una norma o un marco. Para cada requisito registras el estado, la evidencia revisada, la diferencia encontrada, la recomendación para cerrarla y su prioridad. El resultado es un porcentaje de cumplimiento por dominio, muy visual en un gráfico, y un plan de acción priorizado. ¿De dónde sale la información? De tres fuentes: la documentación que te envía el cliente, las entrevistas con los responsables y, cuando se puede, pruebas o inspecciones para comprobar que lo que dicen es cierto. Nunca te quedes solo con lo que te cuentan."
   },
   {
    "titulo": "Modelos de madurez (escala tipo CMMI)",
    "texto": "Además del cumplimiento sí o no, se suele medir la madurez, con una escala inspirada en el modelo CMMI. Nivel cero, inexistente: el control no existe. Nivel uno, inicial: se hace de forma informal y depende de que una persona concreta se acuerde. Nivel dos, repetible: se hace siempre de forma parecida, pero no está bien documentado. Nivel tres, definido: está documentado, aprobado y comunicado. Nivel cuatro, gestionado: además se mide con indicadores y se controla. Y nivel cinco, optimizado: mejora continua, automatización, es un referente. Muchas empresas fijan como objetivo un nivel tres o cuatro. El truco para valorar con rigor es definir criterios claros para cada nivel antes de las entrevistas, y pedir evidencias: sin evidencia documental, como mucho es un nivel dos."
   },
   {
    "titulo": "Cómo preparar y conducir una entrevista con cliente",
    "texto": "Las entrevistas con el cliente son el día a día del área. Antes de la entrevista: lee la documentación disponible, prepara un cuestionario basado en los requisitos y envía una agenda con el objetivo y la duración. Durante la entrevista: preséntate, explica para qué sirve, y usa preguntas abiertas. Las dos mejores preguntas del consultor son: ¿cómo lo hacéis?, y ¿me lo puedes enseñar? La primera evita respuestas de sí o no, y la segunda convierte una afirmación en una evidencia. Toma notas lo más literales posible y apunta las evidencias que quedan pendientes. Después, envía el acta en veinticuatro o cuarenta y ocho horas, con los acuerdos y la lista de evidencias pendientes con fechas. Como junior, empezarás tomando notas: hazlo tan bien que tu manager confíe en ti para conducir la siguiente."
   },
   {
    "titulo": "Excel profesional para GRC",
    "texto": "Excel es la herramienta que más vas a usar, aunque suene poco glamuroso. Un buen Excel de cumplimiento tiene los datos en formato de tabla, con filtros, y cada fila representa un registro: un control, un riesgo o un requisito. Usa la validación de datos para crear listas desplegables con los estados y las escalas, así evitas que cada persona escriba algo distinto. Domina funciones como BUSCARX, CONTAR.SI.CONJUNTO, SI y SUMAPRODUCTO, que te permiten calcular porcentajes de cumplimiento por dominio. Usa el formato condicional para pintar los mapas de calor. Y crea tablas dinámicas y gráficos para el resumen. Un detalle profesional: añade siempre una pestaña de instrucciones y control de versiones. Si llegas a la empresa sabiendo hacer esto con soltura, ahorrarás horas a tu equipo."
   },
   {
    "titulo": "PowerPoint de consultoría",
    "texto": "Las presentaciones de consultoría tienen reglas propias. La más importante: el título de la diapositiva es la conclusión, no el tema. Un mal título es resultados del análisis de diferencias. Un buen título es: el cliente cumple el sesenta y dos por ciento de la norma, y las mayores diferencias están en proveedores y continuidad. Una idea por diapositiva. Estructura tus mensajes con la pirámide de Minto: primero la conclusión, luego los argumentos y después los datos que los sostienen. Si lees solo los títulos de todas las diapositivas seguidos, deben contar la historia completa. Cita siempre las fuentes, numera las diapositivas y mantén la coherencia visual con la plantilla corporativa. Y antes de enviar nada, revísalo dos veces: cifras que cuadran, cero erratas y elementos alineados. Los directivos lo notan todo."
   },
   {
    "titulo": "Escribir para el cliente",
    "texto": "También escribirás mucho. Un buen correo tiene un asunto claro, la petición en la primera línea y una fecha límite. Por ejemplo: asunto, evidencias pendientes del control de accesos, antes del viernes. Para redactar un hallazgo de auditoría o de un análisis de diferencias usa la estructura clásica: condición, que es lo que has visto; criterio, que es lo que exige la norma; causa, por qué ocurre; efecto, qué riesgo supone; y recomendación. El lenguaje debe ser objetivo y no acusatorio: no se ha evidenciado un procedimiento, en lugar de el equipo de sistemas no hace su trabajo. En inglés, usa frases cortas y estructuras estándar. Y una regla de oro para un junior: nada sale hacia el cliente sin la revisión de tu senior o tu manager. No es desconfianza, es control de calidad."
   },
   {
    "titulo": "Herramientas del mercado que conviene conocer",
    "texto": "Conviene que conozcas los nombres de las herramientas del mercado, aunque no las hayas usado. En gobierno, riesgo y cumplimiento: ServiceNow con su módulo de riesgo integrado, Archer, MetricStream u OneTrust. En privacidad: OneTrust, TrustArc o Securiti. En riesgo humano: KnowBe4, Proofpoint, Hoxhunt, SoSafe o el simulador de ataques de Microsoft. Para análisis de riesgos según el Esquema Nacional: la herramienta PILAR del Centro Criptológico Nacional. Y para el día a día, el paquete de ofimática, Teams, SharePoint y Power BI para cuadros de mando. Un punto muy importante sobre la inteligencia artificial generativa: es una ayuda enorme, pero con información de clientes solo se pueden usar las herramientas aprobadas por la firma. Pegar un documento confidencial en una herramienta pública es una brecha de confidencialidad."
   },
   {
    "titulo": "Trabajar en equipo y gestionar tu tiempo",
    "texto": "La última herramienta es la gestión de ti mismo. Cuando recibas un encargo, aclara cuatro cosas: qué hay que hacer exactamente, para cuándo, en qué formato y para quién es el resultado. Si tienes dudas, pregunta pronto: es mucho mejor preguntar el primer día que entregar algo equivocado el último. Si ves que vas a llegar tarde, avisa antes, nunca después del plazo. Organiza tu semana entre el proyecto, la formación y las iniciativas internas de la firma, que también cuentan en tu evaluación. Registra tus horas con rigor, porque en consultoría el tiempo es lo que se factura. Y pide retroalimentación concreta: ¿qué haría falta para que este entregable fuese excelente? La cultura del feedback que menciona la oferta funciona en ambas direcciones: recíbelo bien y actúa sobre él."
   }
  ]
 },
 {
  "id": "13",
  "titulo": "Caso práctico: un proyecto de principio a fin",
  "subtitulo": "Adecuación ISO 27001 + RGPD + concienciación para una empresa de logística",
  "nivel": "Profesional",
  "modulo": 13,
  "duracion": 460.4,
  "palabras": 1174,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 34.0,
    "titulo": "El contexto del cliente"
   },
   {
    "t": 88.4,
    "titulo": "Semana 1–2: kick-off y planificación"
   },
   {
    "t": 142.6,
    "titulo": "Semana 3–6: diagnóstico"
   },
   {
    "t": 194.1,
    "titulo": "Resultados del diagnóstico (resumen)"
   },
   {
    "t": 248.0,
    "titulo": "Semana 7–10: riesgos y plan de tratamiento"
   },
   {
    "t": 300.8,
    "titulo": "Mes 3–9: implantación"
   },
   {
    "t": 355.0,
    "titulo": "Mes 10–12: auditoría interna y certificación"
   },
   {
    "t": 408.3,
    "titulo": "Lecciones del caso para tu entrevista"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "Este es el vídeo más práctico del curso. Vamos a vivir un proyecto completo, de principio a fin, como si estuvieras en el equipo. El cliente es ficticio pero muy realista: LogiPlus, una empresa española de logística con mil doscientos empleados, que quiere certificarse en ISO veintisiete mil uno porque se lo exigen sus grandes clientes, revisar su cumplimiento de protección de datos y lanzar un programa de concienciación tras un fraude del CEO. Verás cada fase, qué hace cada rol y, sobre todo, qué haces tú como analista junior."
   },
   {
    "titulo": "El contexto del cliente",
    "texto": "Situación de partida. LogiPlus es una empresa de logística con mil doscientos empleados, cinco almacenes y sede en Madrid. Sus grandes clientes, cadenas de distribución y comercio electrónico, le exigen la certificación ISO veintisiete mil uno en un plazo de doce meses o dejarán de trabajar con ella. Hace tres meses sufrieron un fraude del CEO: alguien suplantó al director financiero y consiguieron una transferencia de ciento ochenta mil euros. Tratan muchos datos personales: de empleados, de conductores con geolocalización de sus vehículos, y de los destinatarios de los paquetes. Y además, por el sector del transporte y su tamaño, podrían ser entidad importante según NIS dos. Primera lección: antes de cualquier reunión, el equipo prepara una ficha del cliente con su sector, noticias y regulación aplicable. Esa ficha suele hacerla el junior."
   },
   {
    "titulo": "Semana 1–2: kick-off y planificación",
    "texto": "El proyecto empieza con la reunión de arranque, el kick-off. Se presentan los objetivos, el alcance, el equipo, el calendario y los riesgos del propio proyecto, como la disponibilidad de las personas del cliente. El equipo de la consultora tiene un socio responsable, un manager que dirige el día a día, un senior y dos analistas, uno de ellos tú. Se acuerda un seguimiento semanal con el responsable de seguridad del cliente y un comité mensual con la dirección. ¿Qué haces tú? Preparas la presentación del arranque con la plantilla de la firma, y preparas la lista de peticiones de documentación: políticas, organigrama, inventario de sistemas, contratos con proveedores, registro de actividades de tratamiento, resultados de formación. Y luego haces seguimiento de qué ha llegado y qué falta. Parece sencillo, pero un buen control de evidencias salva proyectos."
   },
   {
    "titulo": "Semana 3–6: diagnóstico",
    "texto": "Del mes uno al mes y medio, el diagnóstico. Se hacen unas quince entrevistas con tecnología, recursos humanos, finanzas, legal, operaciones y responsables de almacén. Con ellas y con la documentación se hace el análisis de diferencias frente a ISO veintisiete mil uno, cláusulas y controles. En paralelo, la revisión de protección de datos: el registro de actividades está desactualizado, faltan contratos de encargo con dos proveedores y la geolocalización de los conductores funciona también fuera del horario laboral, lo que es desproporcionado. Y se lanza una simulación de phishing de línea base: veintidós por ciento de clics y solo un seis por ciento de reportes. Tu trabajo: redactar las actas, rellenar la matriz de diferencias en Excel con evidencias y analizar los resultados de la simulación por departamento."
   },
   {
    "titulo": "Resultados del diagnóstico (resumen)",
    "texto": "Este es el resumen del diagnóstico que se presentó al comité. En gobierno del sistema, un treinta y cinco por ciento de cumplimiento: no hay alcance definido, no hay análisis de riesgos y nunca se ha hecho una auditoría interna. En los controles del Anexo A, un cuarenta y ocho por ciento, con las principales carencias en gestión de proveedores, continuidad de negocio, registros de actividad y clasificación de la información. En privacidad, un cincuenta y cinco por ciento, por el registro desactualizado, los contratos de encargo pendientes y la geolocalización. Y en riesgo humano, una madurez baja: solo un curso genérico anual, veintidós por ciento de clics y, lo más grave, ningún procedimiento de verificación de pagos, que fue la causa raíz del fraude. Fíjate en cómo se presenta: porcentaje claro y los gaps más importantes, no la lista completa."
   },
   {
    "titulo": "Semana 7–10: riesgos y plan de tratamiento",
    "texto": "A continuación, el análisis de riesgos. Se hace un taller con la dirección para acordar las escalas y el apetito de riesgo. Se identifican treinta y ocho riesgos, de los cuales seis son altos o críticos. El primero de la lista es el fraude en pagos, con probabilidad cuatro e impacto cinco, porque ya ha ocurrido. Otros riesgos altos son el ransomware en los sistemas de gestión de almacenes, que pararía la operación, y la dependencia de un proveedor de transporte sin evaluar. Con esto se define un plan de tratamiento de veinticuatro iniciativas priorizadas en una hoja de ruta a doce meses, y la primera versión de la declaración de aplicabilidad. Tu papel: mantener el registro de riesgos, preparar el borrador de la declaración y revisar que los cálculos y los colores cuadran. Un error de cálculo en un riesgo crítico se nota mucho en un comité."
   },
   {
    "titulo": "Mes 3–9: implantación",
    "texto": "Del tercer al noveno mes, la implantación. En gobierno: se aprueba la política de seguridad, se crea el comité y se define una matriz de responsabilidades. Se redactan procedimientos de control de accesos, de gestión de proveedores, de incidentes y brechas de datos, y de continuidad. En privacidad: se actualiza el registro de actividades, se firman los contratos de encargo y se hace una evaluación de impacto de la geolocalización, que termina limitándola al horario laboral. Para el riesgo crítico de pagos: un procedimiento de doble verificación por un segundo canal y un aviso automático en el sistema de gestión cada vez que alguien cambia una cuenta bancaria. Y el programa de concienciación por colectivos, con un taller específico para finanzas. Tú redactas borradores, preparas materiales de formación y vas recopilando las evidencias que pedirá el auditor."
   },
   {
    "titulo": "Mes 10–12: auditoría interna y certificación",
    "texto": "En los últimos meses, la recta final. Una auditoría interna, realizada por un equipo distinto al que implantó, para mantener la independencia. La revisión por la dirección, con los primeros indicadores. Se corrigen las no conformidades encontradas. Y llega la auditoría de certificación, en sus dos fases: la documental y la de implantación. El resultado: dos no conformidades menores, que se resuelven con un plan de acciones correctivas, y el certificado obtenido. En riesgo humano, la última simulación muestra un nueve por ciento de clics y un cuarenta y uno por ciento de reportes: el objetivo se ha cumplido. Durante la auditoría, el junior suele acompañar al cliente, localizar las evidencias que pide el auditor y tomar nota de cada pregunta. Es una de las mejores experiencias de aprendizaje."
   },
   {
    "titulo": "Lecciones del caso para tu entrevista",
    "texto": "¿Qué lecciones te llevas a la entrevista? Primera: empieza siempre por el contexto del negocio, nunca por la tecnología. Segunda: un incidente real, como el fraude, es la mejor palanca para conseguir el apoyo de la dirección. Tercera: gobierno, privacidad y riesgo humano no son áreas separadas: el mismo riesgo de fraude se trató con un procedimiento, que es gobierno, con formación, que es riesgo humano, y con un aviso en el sistema, que es tecnología. Cuarta: la causa raíz casi siempre es de proceso. Y quinta: los resultados se cuentan con datos de antes y después. Si en la entrevista te plantean un caso, usa esta estructura: contexto, diagnóstico, riesgos, plan y medición. En la web del curso tienes este caso con ejercicios para que lo resuelvas tú."
   }
  ]
 },
 {
  "id": "14",
  "titulo": "Terceros, continuidad e incidentes",
  "subtitulo": "Gestión de riesgos de proveedores, continuidad de negocio y respuesta a incidentes desde GRC",
  "nivel": "Profesional",
  "modulo": 14,
  "duracion": 399.4,
  "palabras": 997,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 30.1,
    "titulo": "Por qué importan los terceros"
   },
   {
    "t": 77.7,
    "titulo": "El ciclo de vida de la gestión de terceros (TPRM)"
   },
   {
    "t": 133.9,
    "titulo": "Tu papel en TPRM"
   },
   {
    "t": 185.1,
    "titulo": "Continuidad de negocio (BCM)"
   },
   {
    "t": 239.6,
    "titulo": "Ejercicios de crisis (tabletop)"
   },
   {
    "t": 292.2,
    "titulo": "Incidentes desde la perspectiva GRC"
   },
   {
    "t": 343.4,
    "titulo": "Resumen y práctica"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo completamos tu perfil profesional con tres temas que aparecen en casi todos los proyectos y regulaciones: la gestión del riesgo de terceros, es decir, de los proveedores; la continuidad de negocio; y la gestión de incidentes vista desde el gobierno y el cumplimiento. NIS dos, DORA e ISO veintisiete mil uno los exigen, y son una fuente constante de proyectos. Te explicaré cada proceso de forma práctica, con los documentos clave y el papel que tendrías en ellos."
   },
   {
    "titulo": "Por qué importan los terceros",
    "texto": "Hoy ninguna empresa trabaja sola. Dependen de proveedores de nube, de software, de servicios externalizados y de logística. Y muchos de los incidentes más graves de los últimos años han llegado por la cadena de suministro: un proveedor de software comprometido, o un fallo en un proveedor tecnológico que deja sin servicio a miles de empresas a la vez. Por eso la regulación insiste tanto: NIS dos exige gestionar la seguridad de la cadena de suministro, DORA dedica un pilar completo al riesgo de terceros proveedores tecnológicos, y el reglamento de protección de datos obliga a elegir encargados con garantías. La idea clave para la entrevista: el riesgo de una organización incluye el riesgo de sus proveedores. Puedes externalizar un servicio, pero no la responsabilidad."
   },
   {
    "titulo": "El ciclo de vida de la gestión de terceros (TPRM)",
    "texto": "La gestión del riesgo de terceros, en inglés Third Party Risk Management, sigue un ciclo de vida. Primero, el inventario y la criticidad: listar los proveedores y clasificarlos según los datos a los que acceden, si soportan un servicio crítico y cuánto dependemos de ellos. Segundo, la diligencia debida: un cuestionario de seguridad proporcional a la criticidad, revisión de certificaciones como ISO veintisiete mil uno, el Esquema Nacional o un informe SOC dos, y petición de evidencias. Tercero, el contrato, con cláusulas de seguridad, de protección de datos, de notificación de incidentes, de derecho de auditoría y de salida. Cuarto, la monitorización periódica, más frecuente cuanto más crítico es el proveedor. Y quinto, la salida: devolución y borrado de datos y retirada de accesos. DORA exige además estrategias de salida para servicios críticos."
   },
   {
    "titulo": "Tu papel en TPRM",
    "texto": "¿Qué haría un junior en un proyecto de terceros? Enviar los cuestionarios a los proveedores y hacer seguimiento hasta que respondan, con amabilidad y constancia, porque a nadie le gusta rellenar cuestionarios. Revisar las respuestas y las evidencias: ¿son coherentes?, ¿el certificado está vigente?, ¿el alcance del certificado incluye el servicio que nos presta? Este último detalle es muy habitual: un proveedor presume de estar certificado, pero el certificado cubre solo otra sede u otro servicio. Después, puntuar el riesgo y proponer acciones. También revisar contratos con una lista de verificación de cláusulas. Y mantener el registro de proveedores; en entidades financieras, el registro de información que exige DORA, con una estructura muy concreta definida por las autoridades europeas."
   },
   {
    "titulo": "Continuidad de negocio (BCM)",
    "texto": "Pasamos a la continuidad de negocio. Su objetivo es que la organización siga funcionando ante una interrupción grave: un ransomware, un incendio, la caída de un proveedor o una pandemia. La norma de referencia es ISO veintidós mil trescientos uno. El punto de partida es el análisis de impacto en el negocio, en inglés BIA, donde se identifican los procesos críticos y cuánto tiempo pueden estar parados. De ahí salen dos parámetros que debes saber explicar. El RTO es el tiempo máximo en que un proceso o sistema debe volver a estar operativo. El RPO es la cantidad máxima de datos que podemos perder, medida en tiempo: si es de cuatro horas, necesitamos copias al menos cada cuatro horas. Con eso se diseñan los planes: de continuidad, de recuperación tecnológica, de gestión de crisis y de comunicación. Y se prueban."
   },
   {
    "titulo": "Ejercicios de crisis (tabletop)",
    "texto": "Una actividad muy vistosa en la que participarás es el ejercicio de crisis de mesa, en inglés tabletop. Se reúne en una sala al comité de crisis: dirección, tecnología, legal, comunicación, recursos humanos y el delegado de protección de datos. Se les plantea un escenario, por ejemplo un ransomware un viernes por la tarde, y cada quince o veinte minutos el equipo consultor introduce nuevos hechos: los atacantes publican una muestra de datos de clientes, llama un periodista, un cliente importante amenaza con rescindir el contrato. Se observa cómo deciden, si conocen sus roles, si cumplen los plazos de notificación del reglamento de protección de datos y de NIS dos, y cómo comunican. Después se redacta un informe con las lecciones aprendidas. Este ejercicio une las tres áreas: gobierno, privacidad y factor humano."
   },
   {
    "titulo": "Incidentes desde la perspectiva GRC",
    "texto": "La respuesta técnica a incidentes la hacen equipos especializados, pero el área de gobierno y cumplimiento tiene un papel clave. Conoce las fases clásicas: preparación, detección y análisis, contención, erradicación, recuperación y lecciones aprendidas. Desde el gobierno nos preocupa que exista un procedimiento aprobado, con criterios de clasificación de gravedad y para decidir si el incidente es notificable. Que exista una matriz de notificaciones, que diga a quién hay que avisar y en qué plazo: a la Agencia de Protección de Datos en setenta y dos horas, a la autoridad de NIS dos en veinticuatro y setenta y dos horas, al supervisor financiero según DORA, a los clientes según los contratos, o a la policía. Que todo quede registrado. Y que las lecciones aprendidas actualicen el análisis de riesgos y la formación."
   },
   {
    "titulo": "Resumen y práctica",
    "texto": "Resumen. La gestión de terceros sigue un ciclo de inventario, diligencia debida, contrato, monitorización y salida. La continuidad de negocio parte del análisis de impacto, define el RTO y el RPO, diseña planes y los prueba. Y en incidentes, el área de gobierno asegura la clasificación, la matriz de notificaciones y las lecciones aprendidas. Ejercicio: una tienda online factura doce mil euros a la hora y su director dice que como máximo puede perder treinta minutos de pedidos. ¿Cuál sería un RTO razonable y cuál es el RPO? Pista: el RPO es de treinta minutos, por lo que se necesitan copias o replicación al menos cada treinta minutos. El RTO dependerá del coste de la recuperación frente a las pérdidas por hora. Con este vídeo terminas el nivel profesional. ¡Vamos a preparar la entrevista!"
   }
  ]
 },
 {
  "id": "15",
  "titulo": "Preparar el proceso de selección",
  "subtitulo": "Currículum, LinkedIn, fases habituales, método STAR y cómo hablar de ti",
  "nivel": "Entrevista",
  "modulo": 15,
  "duracion": 516.6,
  "palabras": 1280,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 30.8,
    "titulo": "Lee la oferta como un consultor"
   },
   {
    "t": 88.1,
    "titulo": "Tu currículum: una página que demuestra encaje"
   },
   {
    "t": 143.5,
    "titulo": "LinkedIn y tu marca profesional"
   },
   {
    "t": 195.6,
    "titulo": "Fases habituales del proceso"
   },
   {
    "t": 252.4,
    "titulo": "El método STAR"
   },
   {
    "t": 302.4,
    "titulo": "Ejemplo STAR: proactividad"
   },
   {
    "t": 358.0,
    "titulo": "Tu presentación personal: 'Háblame de ti'"
   },
   {
    "t": 410.6,
    "titulo": "Preguntas que debes hacer tú"
   },
   {
    "t": 462.4,
    "titulo": "Checklist del día de la entrevista"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "Bienvenido al bloque de entrevista. Ya tienes el conocimiento; ahora toca demostrarlo. En este vídeo vamos a preparar todo el proceso de selección para un puesto junior de ciberseguridad en una gran firma como Deloitte: cómo adaptar tu currículum y tu perfil de LinkedIn a la oferta, qué fases suele tener el proceso, cómo responder a preguntas de comportamiento con el método STAR y cómo preparar tu presentación personal. Ten a mano la descripción del puesto, porque la vamos a usar como guía."
   },
   {
    "titulo": "Lee la oferta como un consultor",
    "texto": "Empieza por analizar la oferta como lo haría un consultor: separando requisitos y buscando evidencias. Las áreas son dos: privacidad, gobierno y cumplimiento, y gestión del riesgo humano. Piden estar en el último año de un grado o máster de perfil STEM en dos mil veintiséis. Las competencias que mencionan son: capacidad analítica, disposición para aprender, comunicación eficaz en entornos técnicos y funcionales, inglés profesional, proactividad y trabajo en equipo. Y el contexto: alta exposición a cliente y proyectos nacionales e internacionales. Tu objetivo es tener, para cada uno de esos requisitos, al menos una evidencia concreta de tu vida: un proyecto de la universidad, un trabajo, un voluntariado, un deporte de equipo o una certificación. Haz una tabla con dos columnas: requisito y mi evidencia. Esa tabla será tu guion para el currículum y la entrevista."
   },
   {
    "titulo": "Tu currículum: una página que demuestra encaje",
    "texto": "Tu currículum debe caber en una página, ser limpio y enviarse en PDF. Prepara también una versión en inglés. Añade un titular que conecte con la oferta, por ejemplo: estudiante de Ingeniería Informática, con interés en gobierno, privacidad y riesgo humano en ciberseguridad. Después: formación, prácticas, proyectos y, si puedes, orienta tu trabajo de fin de grado o de máster a un tema relacionado, como un análisis de riesgos o un programa de concienciación. Describe tus logros con verbos de acción y cifras: diseñé una encuesta respondida por ciento veinte estudiantes, no participé en una encuesta. Añade certificaciones y formación, aunque sean cursos gratuitos del INCIBE o de la Agencia de Protección de Datos. Pon tu nivel real de inglés. Y menciona Excel, PowerPoint y Power BI: son habilidades que se usan cada día."
   },
   {
    "titulo": "LinkedIn y tu marca profesional",
    "texto": "LinkedIn es tu escaparate. Usa una foto profesional y un titular orientado al puesto. Escribe un extracto breve sobre qué te motiva y qué buscas. Y aquí va un consejo que pocos candidatos siguen: publica lo que aprendes. Por ejemplo, un resumen de una página sobre NIS dos, o tu análisis de una resolución de la Agencia de Protección de Datos. Demuestra iniciativa y comunicación, justo lo que piden. Sigue a la firma y a profesionales de su área de ciberseguridad, y también a la Agencia, al INCIBE, al Centro Criptológico Nacional y a ENISA. Y crea un pequeño portafolio: un programa de concienciación ficticio, un registro de actividades de ejemplo o el caso práctico de este curso resuelto. En la entrevista, decir he preparado esto por mi cuenta, ¿quieres que te lo enseñe?, es muy poderoso."
   },
   {
    "titulo": "Fases habituales del proceso",
    "texto": "¿Cómo suele ser el proceso en una gran firma? Cada proceso cambia, pero estas son las fases habituales. Primero, la solicitud online y un filtro de currículum. Segundo, en algunos procesos, pruebas online de razonamiento, de inglés o una entrevista grabada en vídeo. Tercero, una entrevista con el equipo de talento, centrada en tu motivación, tu encaje y tus competencias. Cuarto, en algunos casos, una dinámica de grupo o un caso práctico en equipo, donde observan cómo colaboras, cómo comunicas y cómo estructuras un problema. Quinto, una entrevista con un manager o senior manager del área, más técnica y de encaje con el equipo, a veces con parte en inglés. Y por último, la oferta. Mi consejo: cuando talento te contacte, pregunta con naturalidad qué fases vas a tener. Es totalmente normal y te permite prepararte bien."
   },
   {
    "titulo": "El método STAR",
    "texto": "Muchas preguntas serán de comportamiento: cuéntame una vez en la que… Para responderlas usa el método STAR. S de situación: el contexto, en una o dos frases. T de tarea: cuál era tu responsabilidad o el reto. A de acción: qué hiciste tú, en primera persona. Es la parte más larga e importante; no digas hicimos, di yo organicé, yo propuse. Y R de resultado: qué pasó, con datos si es posible, y qué aprendiste. Cada respuesta debería durar entre minuto y medio y dos minutos. Prepara de antemano seis u ocho historias de tu vida que puedas adaptar a distintas preguntas: un trabajo en equipo, un conflicto, un error, un reto analítico, una vez que aprendiste algo rápido y una vez que tomaste la iniciativa."
   },
   {
    "titulo": "Ejemplo STAR: proactividad",
    "texto": "Veamos un ejemplo de respuesta STAR a la pregunta: cuéntame una vez en la que tomaste la iniciativa. Situación: en la universidad teníamos un trabajo en grupo de cinco personas y, a tres semanas de la entrega, no había ninguna organización. Tarea: nadie coordinaba y había un riesgo real de suspender. Acción: propuse un tablero de tareas compartido, una reunión de quince minutos cada lunes y repartí el trabajo según las fortalezas de cada persona; yo me encargué además de revisar la coherencia del documento final. Resultado: entregamos cuatro días antes, sacamos un nueve, y la profesora usó nuestro tablero como ejemplo para otros grupos. Aprendí que una estructura sencilla reduce mucho el estrés de un equipo. Fíjate: es concreto, en primera persona, con datos y con un aprendizaje. Además, conecta con la gestión de proyectos de consultoría."
   },
   {
    "titulo": "Tu presentación personal: 'Háblame de ti'",
    "texto": "La primera pregunta casi siempre es: háblame de ti. Usa la estructura presente, pasado y futuro, en un minuto y medio. Presente: quién eres y qué estudias, en unos veinte segundos. Pasado: dos experiencias relevantes con un logro concreto, en unos cuarenta segundos. Y futuro: por qué este puesto y esta área, en treinta segundos. Cierra conectando con la oferta, por ejemplo: por eso me atrae el área de privacidad, gobierno y cumplimiento, porque combina el análisis que disfruto en la carrera con la comunicación con cliente que he practicado en mis prácticas. No recites tu currículum: cuenta una historia coherente que lleve de forma natural a este puesto. Y ensáyala en español y en inglés, en voz alta, cronometrada. Grábate con el móvil: verás muletillas y gestos que no sabías que tenías."
   },
   {
    "titulo": "Preguntas que debes hacer tú",
    "texto": "Al final de la entrevista te preguntarán si tienes alguna pregunta. Nunca digas que no. Prepara tres o cuatro preguntas inteligentes. Por ejemplo: ¿cómo es un proyecto típico de un analista junior en sus primeros seis meses? ¿Qué distingue a los analistas que más crecen en vuestro equipo? ¿Es posible conocer proyectos tanto de privacidad y cumplimiento como de riesgo humano? ¿Qué retos regulatorios, como NIS dos, DORA o el reglamento de inteligencia artificial, están generando más proyectos ahora mismo? Estas preguntas demuestran interés, conocimiento del mercado y ganas de crecer. Evita empezar preguntando por salario, vacaciones o teletrabajo; esos temas se tratan con el equipo de talento cuando llega la oferta. Y toma nota de las respuestas: te servirán para la siguiente fase."
   },
   {
    "titulo": "Checklist del día de la entrevista",
    "texto": "Te dejo la lista de verificación del día. Antes: investiga noticias recientes de la firma y de su área de ciberseguridad, como informes que hayan publicado, y repasa tu tabla de requisitos y evidencias y tus historias STAR. Si es online, cámara a la altura de los ojos, luz frontal, fondo neutro, sin ruido y con conexión probada. Si es presencial, llega diez minutos antes con ropa profesional. Durante: escucha la pregunta completa, tómate un segundo para pensar y estructura la respuesta. Si no sabes algo, dilo con honestidad y explica cómo lo averiguarías. Al terminar, envía en veinticuatro horas un correo breve de agradecimiento mencionando algo concreto de la conversación. Y apunta todas las preguntas que te hicieron: te servirán para mejorar. En el próximo vídeo practicamos las preguntas técnicas."
   }
  ]
 },
 {
  "id": "16",
  "titulo": "Preguntas de entrevista con respuestas modelo",
  "subtitulo": "Técnicas, de caso, de motivación y en inglés",
  "nivel": "Entrevista",
  "modulo": 16,
  "duracion": 527.5,
  "palabras": 1281,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 32.7,
    "titulo": "'¿Por qué ciberseguridad y por qué esta área?'"
   },
   {
    "t": 84.7,
    "titulo": "Preguntas técnicas rápidas (1/2)"
   },
   {
    "t": 138.0,
    "titulo": "Preguntas técnicas rápidas (2/2)"
   },
   {
    "t": 195.0,
    "titulo": "Pregunta de caso: 'Un cliente quiere certificarse en ISO 27001, ¿por dónde empiezas?'"
   },
   {
    "t": 250.5,
    "titulo": "Caso de riesgo humano: 'El 30 % hace clic en el phishing. ¿Qué harías?'"
   },
   {
    "t": 305.9,
    "titulo": "Preguntas de comportamiento frecuentes"
   },
   {
    "t": 358.7,
    "titulo": "Interview questions in English"
   },
   {
    "t": 416.8,
    "titulo": "Vocabulario profesional en inglés"
   },
   {
    "t": 473.5,
    "titulo": "Errores que te descartan"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo vamos a practicar las preguntas más probables de una entrevista para un puesto junior en privacidad, gobierno y cumplimiento o en riesgo humano. Para cada pregunta te daré una respuesta modelo, breve y estructurada. No las memorices palabra por palabra: entiende la estructura y adáptalas con tus propias palabras y experiencias. Al final practicaremos algunas preguntas en inglés, porque la oferta pide nivel profesional. En la web tienes un simulador de entrevista con temporizador para entrenar."
   },
   {
    "titulo": "'¿Por qué ciberseguridad y por qué esta área?'",
    "texto": "Primera pregunta: ¿por qué ciberseguridad y por qué esta área? Una respuesta modelo: durante la carrera me di cuenta de que la mayoría de los incidentes no se deben a fallos técnicos sofisticados, sino a procesos mal diseñados y a personas sin la información adecuada. Me atrae esta área porque une el análisis, la regulación y las personas, y porque tiene un impacto directo en el negocio. Además, el momento es muy interesante: NIS dos, DORA y el reglamento de inteligencia artificial están obligando a muchas organizaciones a madurar, y la gestión del riesgo humano está pasando de cursos anuales a programas basados en datos. Yo puedo aportar capacidad analítica, facilidad para explicar temas técnicos de forma sencilla y muchas ganas de aprender. Fíjate en la estructura: experiencia, conocimiento del área, mercado y aportación."
   },
   {
    "titulo": "Preguntas técnicas rápidas (1/2)",
    "texto": "Vamos con preguntas técnicas rápidas. ¿Qué es la tríada CIA? Responde con la definición de confidencialidad, integridad y disponibilidad, y un ejemplo de cada una, como los del vídeo uno. ¿Diferencia entre amenaza, vulnerabilidad y riesgo? Usa un ejemplo encadenado: la amenaza es el phishing, la vulnerabilidad es no tener doble factor, y el riesgo es la probabilidad de que roben credenciales y accedan a datos de clientes, combinada con el impacto que tendría. ¿Qué es ISO veintisiete mil uno? Es la norma internacional certificable para un sistema de gestión de seguridad de la información, basado en el riesgo y en la mejora continua, con cláusulas de la cuatro a la diez obligatorias y noventa y tres controles de referencia en el Anexo A. ¿Política o procedimiento? La política dice qué y por qué; el procedimiento, cómo y quién."
   },
   {
    "titulo": "Preguntas técnicas rápidas (2/2)",
    "texto": "Más preguntas técnicas. ¿Cuáles son los principios del reglamento de protección de datos? Los siete del artículo cinco: licitud, lealtad y transparencia; limitación de la finalidad; minimización; exactitud; limitación del plazo de conservación; integridad y confidencialidad; y responsabilidad proactiva. ¿Qué haces ante una brecha? Contener, evaluar el riesgo, notificar a la Agencia en setenta y dos horas si hay riesgo para las personas, comunicarlo a los afectados si el riesgo es alto, y documentarlo siempre. ¿Responsable o encargado? El responsable decide, el encargado trata por su cuenta con un contrato del artículo veintiocho. ¿Qué es NIS dos o DORA? Di a quién aplica y dos obligaciones clave. Y ¿cuándo se hace una evaluación de impacto? Cuando un tratamiento probablemente suponga un alto riesgo para los derechos de las personas."
   },
   {
    "titulo": "Pregunta de caso: 'Un cliente quiere certificarse en ISO 27001, ¿por dónde empiezas?'",
    "texto": "Ahora una pregunta de caso: un cliente quiere certificarse en ISO veintisiete mil uno, ¿por dónde empezarías? La clave es no lanzarse a hablar de controles. Primero, aclarar el contexto con preguntas: ¿por qué quiere certificarse?, ¿en qué plazo?, ¿qué alcance, toda la empresa o un servicio concreto?, y ¿qué tiene ya hecho? Segundo, un diagnóstico mediante un análisis de diferencias, con entrevistas y revisión de evidencias. Tercero, definir la metodología de riesgos, hacer el análisis, el plan de tratamiento y la declaración de aplicabilidad. Cuarto, implantar por prioridades, incluyendo formación y concienciación. Y quinto, auditoría interna, revisión por la dirección y auditoría de certificación en dos fases. Termina con una frase de valor: el objetivo no es solo el certificado, sino un sistema que el cliente pueda mantener."
   },
   {
    "titulo": "Caso de riesgo humano: 'El 30 % hace clic en el phishing. ¿Qué harías?'",
    "texto": "Caso de riesgo humano: en una simulación, el treinta por ciento de la plantilla hace clic. ¿Qué harías? Primero, no culpar ni sacar conclusiones con un único dato. Analiza la dificultad del correo, qué colectivos y sedes tienen peores resultados y si hay patrones, como el móvil o el horario. Segundo, mira también la tasa de reporte y el tiempo hasta el primer reporte. Tercero, acciones de personas: formación breve en el momento del error, contenidos por rol para los colectivos más afectados y un botón de reporte fácil con agradecimiento inmediato. Cuarto, acciones de proceso y técnicas, porque las personas son una capa más: doble factor, verificación de pagos y mejor filtrado del correo. Y quinto, medir la tendencia trimestral y comunicarla con datos a la dirección. Esta respuesta demuestra pensamiento sistémico y empatía."
   },
   {
    "titulo": "Preguntas de comportamiento frecuentes",
    "texto": "Prepara también estas preguntas de comportamiento con el método STAR. Cuéntame un error y qué aprendiste: elige uno real, no un falso defecto como soy demasiado perfeccionista. Asume la responsabilidad, explica cómo lo corregiste y qué cambiaste después. Un conflicto en un equipo: muestra que escuchaste, buscaste datos y llegaste a un acuerdo. Una vez que aprendiste algo muy rápido: aquí puedes mencionar este mismo curso. Explica algo técnico a alguien no técnico: te pueden pedir en directo que expliques el phishing a tu abuela o el reglamento de protección de datos a un comercial. Practica analogías sencillas. Y ¿cómo gestionas varias tareas con el mismo plazo?: priorizar por impacto y urgencia, comunicar pronto a quien corresponda y pedir ayuda si es necesario. En la web tienes el simulador con todas estas preguntas."
   },
   {
    "titulo": "Interview questions in English",
    "texto": "Ahora practicamos en inglés. Te leo las preguntas y una respuesta modelo para dos de ellas. Tell me about yourself. Why do you want to work in cyber risk and privacy? What is the difference between a risk and a vulnerability? A model answer: A vulnerability is a weakness, for example, the lack of multi factor authentication. A risk is the combination of the likelihood that a threat exploits that weakness and the impact it would have on the business. How would you explain phishing to a non technical audience? A model answer: Phishing is like a fake letter from your bank. It looks real, it creates urgency, and it asks you to do something, like clicking a link or sharing your password. If something feels urgent and unusual, stop, check it through another channel, and report it. Where do you see yourself in three years? Practica en voz alta: la fluidez importa más que la perfección."
   },
   {
    "titulo": "Vocabulario profesional en inglés",
    "texto": "Te dejo el vocabulario que más se usa en proyectos internacionales. Gap analysis, maturity assessment, roadmap y remediation plan. Risk appetite, inherent risk, residual risk, risk owner y risk register. Statement of Applicability, nonconformity, corrective action y evidence. En privacidad: data subject rights, data breach, DPIA, controller y processor. En riesgo humano: awareness programme, phishing simulation, click rate y report rate. Y vocabulario de consultoría: deliverable, que es un entregable; stakeholder, una parte interesada; kick-off, la reunión de arranque; follow-up, el seguimiento; y deadline, la fecha límite. Un truco para mejorar tu inglés rápido: lee el marco del NIST y los resúmenes de ENISA en inglés, y practica explicando en voz alta lo que has leído durante cinco minutos al día."
   },
   {
    "titulo": "Errores que te descartan",
    "texto": "Para terminar, los errores que te pueden descartar. Inventarte una respuesta: los entrevistadores lo detectan enseguida. Es mucho mejor decir no lo conozco en detalle, pero entiendo que está relacionado con esto, y lo averiguaría consultando tal fuente. Eso demuestra honestidad y criterio, dos cualidades clave en un consultor. Respuestas genéricas sin ejemplos. Hablar mal de experiencias, profesores o compañeros anteriores. No conocer la oferta o la firma. Hablar solo de tecnología sin conectar con el negocio, algo que en las áreas de gobierno y riesgo humano es esencial. Y no hacer preguntas al final. Ahora ve a la web y usa el simulador de entrevista: responde en voz alta, cronométrate y compara con las respuestas modelo. Repítelo varios días y llegarás con mucha confianza."
   }
  ]
 },
 {
  "id": "17",
  "titulo": "Tus primeros 90 días y tu carrera",
  "subtitulo": "Cómo empezar con buen pie, certificaciones y plan de crecimiento",
  "nivel": "Entrevista",
  "modulo": 17,
  "duracion": 390.9,
  "palabras": 1006,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 31.3,
    "titulo": "Días 1–30: aprender y escuchar"
   },
   {
    "t": 80.1,
    "titulo": "Días 31–60: aportar con fiabilidad"
   },
   {
    "t": 129.8,
    "titulo": "Días 61–90: proponer y diferenciarte"
   },
   {
    "t": 177.5,
    "titulo": "Certificaciones recomendadas"
   },
   {
    "t": 235.0,
    "titulo": "La carrera en una gran firma"
   },
   {
    "t": 285.9,
    "titulo": "Hábitos de un profesional excelente"
   },
   {
    "t": 338.3,
    "titulo": "Cierre del curso"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "Último vídeo del curso. Imagina que ya has superado el proceso y te incorporas al equipo de ciberseguridad. ¿Y ahora qué? En este vídeo te doy un plan concreto para tus primeros noventa días, los hábitos que te harán crecer rápido, las certificaciones que más valor aportan en las áreas de privacidad, gobierno y riesgo humano, y cómo suele ser la carrera en una gran firma de consultoría. El objetivo es que no solo consigas el puesto, sino que seas un profesional excelente en él."
   },
   {
    "titulo": "Días 1–30: aprender y escuchar",
    "texto": "Los primeros treinta días son para aprender y escuchar. Tendrás formación de bienvenida, configurarás tus herramientas y conocerás las políticas internas, especialmente las de confidencialidad y uso de la información de clientes. Conoce bien a tu equipo y a la persona que te acompañará en tu desarrollo, y entiende cómo se evalúa el desempeño. Pide acceso a entregables anteriores, plantillas y metodologías de la firma, y estúdialos: aprenderás el estándar de calidad que se espera. Cuando entres en tu primer proyecto, entiende el contexto del cliente, el objetivo del proyecto y tu papel concreto. Y lleva una libreta de aprendizaje con términos nuevos, nombres de personas y dudas. Agrupa tus dudas y pregúntalas en bloque a tu senior; así respetas su tiempo y avanzas rápido."
   },
   {
    "titulo": "Días 31–60: aportar con fiabilidad",
    "texto": "Del día treinta y uno al sesenta, el objetivo es aportar con fiabilidad. Tu reputación en una firma de consultoría se construye en estas semanas: con entregas impecables y a tiempo. Antes de enviar cualquier cosa, haz una autorrevisión: que las cifras cuadren, que el formato sea el de la plantilla y que no haya erratas. Intenta asumir tareas completas de principio a fin, como las actas de un ciclo de entrevistas, la matriz de diferencias de un dominio o el seguimiento de evidencias pendientes. Así tu senior podrá delegar en ti con confianza. Y después de cada entregable importante, pide retroalimentación concreta: ¿qué mejorarías de esto? Apúntalo y demuestra en el siguiente entregable que lo has aplicado. Ese ciclo rápido de aprender y aplicar es lo que más se valora en un junior."
   },
   {
    "titulo": "Días 61–90: proponer y diferenciarte",
    "texto": "Del día sesenta y uno al noventa, toca proponer y diferenciarte. Busca una mejora concreta: una plantilla que ahorre tiempo, una pequeña automatización en Excel o una lista de verificación para revisar evidencias. Empieza a intervenir en las reuniones con cliente con voz propia, por ejemplo presentando una parte del avance que tú has preparado. Elige un tema en el que quieras especializarte poco a poco, como DORA, el gobierno de la inteligencia artificial o las métricas de riesgo humano, y conviértete en la persona que está al día de ese tema en tu equipo. Planifica tu primera certificación. Y participa en iniciativas internas: formación, comunidades de práctica o voluntariado, que la oferta destaca y que te dan visibilidad y una red de contactos dentro de la firma."
   },
   {
    "titulo": "Certificaciones recomendadas",
    "texto": "Hablemos de certificaciones. En el primer año, la más útil para gobierno y cumplimiento es ISO veintisiete mil uno Lead Implementer o Lead Auditor. Como base técnica general, CompTIA Security+ o la certificación de entrada de ISC dos, que puedes empezar incluso antes de incorporarte. Para privacidad, la CIPP barra E de la IAPP, muy reconocida internacionalmente, o la certificación de delegado de protección de datos según el esquema de la Agencia Española, que suele exigir experiencia o formación previa. En el segundo año, puedes ampliar con ISO veintidós mil trescientos uno de continuidad o ISO veintisiete mil setecientos uno de privacidad. A partir del tercer año, las de ISACA: CISA para auditoría, CISM para gestión y CRISC para riesgo, que requieren varios años de experiencia. Y para riesgo humano, formación específica en cambio de comportamiento. Muchas firmas ayudan a financiarlas."
   },
   {
    "titulo": "La carrera en una gran firma",
    "texto": "¿Cómo es la carrera? Aunque los nombres varían entre firmas, la progresión típica es: analista, consultor o analista senior, consultor senior, manager, senior manager o director y, finalmente, socio. Cada año hay una evaluación que tiene en cuenta tu desempeño en los proyectos, tu desarrollo profesional y tu contribución a la firma. Una ventaja enorme de empezar en una gran consultora es la variedad: en pocos años verás muchos sectores, clientes y tipos de proyecto, y podrás moverte entre áreas o participar en proyectos internacionales. Y las salidas profesionales son excelentes: responsable de seguridad en una empresa, delegado de protección de datos, áreas de riesgo en banca, organismos reguladores o incluso emprender. Lo que aprendas en tus primeros años será la base de toda tu carrera."
   },
   {
    "titulo": "Hábitos de un profesional excelente",
    "texto": "Te dejo los hábitos de un profesional excelente. Aprende treinta minutos al día: las webs de la Agencia de Protección de Datos, del INCIBE, del Centro Criptológico Nacional, de ENISA y del NIST, y algún boletín de noticias de ciberseguridad. Lee cada semana una resolución o un caso real. Escribe: resumir en una página lo que aprendes fija el conocimiento y mejora tu comunicación. Cuida tu red de contactos: compañeros, clientes y la comunidad de ciberseguridad, que es muy generosa. Cuida tu energía: la consultoría es exigente y el equilibrio no es un lujo, es parte del rendimiento; aprovecha la flexibilidad y los programas de bienestar. Y, por encima de todo, ética y confidencialidad. En nuestro sector, la confianza lo es todo: tarda años en construirse y un segundo en perderse."
   },
   {
    "titulo": "Cierre del curso",
    "texto": "Y llegamos al final del curso. Has recorrido un camino completo: los fundamentos de la ciberseguridad, el gobierno, el riesgo y el cumplimiento, la norma ISO veintisiete mil uno, la privacidad, la regulación europea, la gestión del riesgo humano, las herramientas del consultor, un caso práctico completo y la preparación de la entrevista. Mis últimos consejos: haz el examen final de la web y repasa los módulos en los que saques menos nota. Practica el simulador de entrevista tres días seguidos, en voz alta. Construye un pequeño portafolio con los ejercicios del curso para enseñarlo si surge la ocasión. Y ve a la entrevista con calma: no tienes que saberlo todo, tienes que demostrar que piensas con estructura, que comunicas con claridad y que tienes muchas ganas de aprender. Mucha suerte. Nos vemos en el sector."
   }
  ]
 }
];
