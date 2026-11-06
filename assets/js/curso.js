/* Contenido del curso: módulos, lecciones y tests */
window.NIVELES = [
  { id: "Básico", color: "basico", desc: "Fundamentos, amenazas y cómo funciona la consultoría de ciberseguridad." },
  { id: "Intermedio", color: "intermedio", desc: "GRC, ISO 27001, riesgos, RGPD, regulación europea y riesgo humano." },
  { id: "Profesional", color: "profesional", desc: "Programas de concienciación, herramientas del consultor, caso real, terceros y continuidad." },
  { id: "Entrevista", color: "entrevista", desc: "Proceso de selección, preguntas modelo, inglés y tus primeros 90 días." }
];

window.MODULOS = [
/* ───────────── BÁSICO ───────────── */
{
  id: 1, nivel: "Básico", video: "01", lab: "cia", min: 25,
  titulo: "Fundamentos de la ciberseguridad",
  resumen: "La tríada CIA, activos, amenazas, vulnerabilidades, riesgo y controles: el vocabulario que usarás cada día.",
  objetivos: ["Explicar confidencialidad, integridad y disponibilidad con ejemplos", "Distinguir activo, amenaza, vulnerabilidad y riesgo", "Clasificar controles por función y naturaleza"],
  secciones: [
    { h: "1. ¿Qué es la ciberseguridad?", html: `<p>Es el conjunto de medidas que <strong>protegen la información y los sistemas</strong> frente a amenazas externas o internas, intencionadas o accidentales. Se apoya en tres pilares: <strong>personas, procesos y tecnología</strong>. En GRC, privacidad y riesgo humano trabajarás sobre todo con los dos primeros.</p>
      <div class="callout">La seguridad perfecta no existe: <strong>se gestiona el riesgo</strong> hasta un nivel que la dirección considera aceptable (apetito de riesgo).</div>` },
    { h: "2. La tríada CIA", html: `<div class="grid3">
      <div class="mini-card"><span class="tag c">C</span><h4>Confidencialidad</h4><p>Solo accede quien está autorizado.</p><p class="ej">Ej.: un Excel de nóminas enviado por error a un proveedor.</p></div>
      <div class="mini-card"><span class="tag i">I</span><h4>Integridad</h4><p>La información es exacta y no se altera sin control.</p><p class="ej">Ej.: un atacante cambia el IBAN de una factura.</p></div>
      <div class="mini-card"><span class="tag d">D</span><h4>Disponibilidad</h4><p>Accesible cuando el negocio la necesita.</p><p class="ej">Ej.: un ransomware tumba la web de ventas 3 días.</p></div></div>
      <p>El <abbr title="Esquema Nacional de Seguridad">ENS</abbr> español añade <strong>autenticidad</strong> (es quien dice ser) y <strong>trazabilidad</strong> (quién hizo qué y cuándo).</p>` },
    { h: "3. Activo, amenaza, vulnerabilidad y riesgo", html: `<div class="chain"><div><b>Activo</b><span>Base de datos de clientes</span></div><i>→</i><div><b>Amenaza</b><span>Phishing para robar contraseñas</span></div><i>→</i><div><b>Vulnerabilidad</b><span>No hay doble factor (MFA)</span></div><i>→</i><div><b>Riesgo</b><span>Probabilidad × impacto</span></div></div>
      <ul><li><strong>Riesgo inherente</strong>: antes de aplicar controles.</li><li><strong>Riesgo residual</strong>: el que queda tras aplicarlos. Si supera el apetito, hay que actuar.</li></ul>` },
    { h: "4. Controles", html: `<table class="tbl"><tr><th>Por función</th><th>Ejemplo</th></tr><tr><td>Preventivo</td><td>MFA, formación, mínimo privilegio</td></tr><tr><td>Detectivo</td><td>Monitorización, revisión de logs, auditoría</td></tr><tr><td>Correctivo</td><td>Restaurar copias, plan de respuesta</td></tr></table>
      <p>Por naturaleza, ISO 27001:2022 agrupa sus <strong>93 controles</strong> en: organizativos, de personas, físicos y tecnológicos.</p>` },
    { h: "5. Principios clave", html: `<ul><li><strong>Defensa en profundidad</strong>: varias capas; si una falla, la siguiente frena el ataque.</li><li><strong>Mínimo privilegio</strong> y <strong>necesidad de saber</strong>.</li><li><strong>Segregación de funciones</strong>: quien da de alta un proveedor no aprueba sus pagos.</li><li><strong>Zero Trust</strong>: nunca confiar por defecto, verificar siempre.</li></ul>
      <div class="callout tip">💡 En entrevista: ante cualquier incidente, clasifícalo por la dimensión CIA afectada y propón un control preventivo, uno detectivo y uno correctivo.</div>` }
  ],
  claves: ["Riesgo = probabilidad × impacto", "CIA + autenticidad + trazabilidad", "Las personas son una capa de defensa, no el 'eslabón débil'"],
  quiz: [
    { q: "Un atacante modifica el número de cuenta de una factura de proveedor. ¿Qué dimensión se ve afectada principalmente?", op: ["Confidencialidad", "Integridad", "Disponibilidad", "Trazabilidad"], ok: 1, exp: "Se ha alterado información sin autorización: es un ataque a la integridad." },
    { q: "La falta de doble factor en el correo corporativo es un ejemplo de…", op: ["Amenaza", "Activo", "Vulnerabilidad", "Riesgo residual"], ok: 2, exp: "Es una debilidad que una amenaza (p. ej., phishing) puede aprovechar." },
    { q: "El riesgo que queda después de aplicar los controles se llama…", op: ["Inherente", "Residual", "Aceptado", "Transferido"], ok: 1, exp: "Residual = el que queda tras los controles. Inherente = sin controles." },
    { q: "Restaurar una copia de seguridad tras un ransomware es un control…", op: ["Preventivo", "Detectivo", "Correctivo", "Disuasorio"], ok: 2, exp: "Repara el daño una vez ocurrido el incidente." },
    { q: "¿En cuántos temas agrupa ISO 27001:2022 los controles del Anexo A?", op: ["14 dominios", "4 temas", "6 funciones", "3 marcos"], ok: 1, exp: "Organizativos (37), personas (8), físicos (14) y tecnológicos (34) = 93 controles." }
  ]
},
{
  id: 2, nivel: "Básico", video: "02", lab: "phishing", min: 25,
  titulo: "Amenazas y ataques más comunes",
  resumen: "Ingeniería social, phishing, fraude del CEO, ransomware, credenciales y amenazas internas.",
  objetivos: ["Reconocer las señales de un phishing", "Explicar el fraude del CEO y su control clave", "Argumentar ante un directivo por qué invertir en las personas"],
  secciones: [
    { h: "1. El factor humano", html: `<div class="stat"><b>≈ 60 %</b><span>de las brechas analizadas en los informes <em>Verizon DBIR</em> recientes implican un elemento humano (error, engaño o credenciales robadas).</span></div><p>No sirve para culpar a las personas, sino para justificar invertir en ellas. Cita siempre la fuente (DBIR, ENISA Threat Landscape, INCIBE).</p>` },
    { h: "2. Ingeniería social", html: `<p>Manipular a alguien para que haga algo que no debe. Explota <strong>urgencia, miedo, autoridad, curiosidad y codicia</strong>.</p>
      <table class="tbl"><tr><th>Variante</th><th>Canal</th></tr><tr><td>Phishing</td><td>Correo masivo</td></tr><tr><td>Spear phishing</td><td>Correo dirigido a una persona concreta</td></tr><tr><td>Whaling</td><td>Dirigido a altos directivos</td></tr><tr><td>Vishing</td><td>Llamada (cada vez más con voz clonada por IA)</td></tr><tr><td>Smishing</td><td>SMS / mensajería</td></tr><tr><td>Quishing</td><td>Códigos QR maliciosos</td></tr></table>
      <div class="callout">Con la IA generativa, los correos ya no tienen faltas de ortografía: enseña a fijarse en el <strong>contexto y la petición</strong>, no en la redacción.</div>` },
    { h: "3. Cómo reconocer un phishing", html: `<ol class="steps"><li><b>Remitente:</b> dominio parecido pero distinto (<code>rnicrosoft.com</code>).</li><li><b>Urgencia o amenaza:</b> “tu cuenta se bloqueará en 2 horas”.</li><li><b>Enlaces:</b> pasa el ratón y mira la URL real.</li><li><b>Petición inusual:</b> credenciales, pagos, cambio de IBAN.</li><li><b>Ante la duda:</b> verifica por otro canal y <strong>repórtalo</strong>.</li></ol>` },
    { h: "4. Fraude del CEO (BEC)", html: `<p>El atacante suplanta a un directivo o proveedor y pide una transferencia urgente y confidencial. Suele <strong>no llevar enlaces ni adjuntos</strong>, por lo que los filtros técnicos no lo detectan.</p><div class="callout tip">Control clave = <strong>de proceso</strong>: verificación de pagos y cambios de cuenta por un segundo canal + doble aprobación.</div>` },
    { h: "5. Ransomware, credenciales y amenazas internas", html: `<ul><li><strong>Ransomware de doble extorsión</strong>: cifra y roba datos → problema de disponibilidad <em>y</em> de privacidad (posible notificación a la AEPD).</li><li><strong>Contraseñas</strong>: largas (frases de paso), únicas, con gestor. <strong>MFA</strong> bloquea la mayoría de robos de credenciales; cuidado con la <em>fatiga de MFA</em>.</li><li><strong>Amenazas internas</strong>: la mayoría son errores (envíos equivocados, portátiles perdidos). Fomenta reportar sin miedo.</li></ul>` }
  ],
  claves: ["Phishing = el vector número uno", "Fraude del CEO se frena con procesos", "Mide reportes, no solo clics"],
  quiz: [
    { q: "Un correo dirigido específicamente al director financiero, con datos reales sacados de LinkedIn, es…", op: ["Phishing masivo", "Spear phishing / whaling", "Smishing", "Spam"], ok: 1, exp: "Es dirigido y personalizado; si apunta a alta dirección se llama whaling." },
    { q: "¿Cuál es el control más eficaz contra el fraude del CEO?", op: ["Antivirus", "Verificación de pagos por un segundo canal", "Cortafuegos", "Cambiar contraseñas cada mes"], ok: 1, exp: "Es un ataque sin malware: lo frena un procedimiento de verificación." },
    { q: "El ransomware de doble extorsión afecta a…", op: ["Solo disponibilidad", "Disponibilidad y confidencialidad", "Solo integridad", "Solo trazabilidad"], ok: 1, exp: "Cifra (disponibilidad) y roba datos que amenaza con publicar (confidencialidad)." },
    { q: "Recibes 15 notificaciones de MFA que no has solicitado. ¿Qué haces?", op: ["Aceptar una para que paren", "Rechazarlas y avisar a seguridad: alguien tiene tu contraseña", "Ignorarlas", "Desinstalar la app"], ok: 1, exp: "Es un ataque de fatiga de MFA: tu contraseña está comprometida." },
    { q: "Hoy, la señal MENOS fiable para detectar phishing es…", op: ["La URL real del enlace", "Las faltas de ortografía", "Una petición inusual de pago", "El dominio del remitente"], ok: 1, exp: "Con IA generativa los correos maliciosos suelen estar perfectamente redactados." }
  ]
},
{
  id: 3, nivel: "Básico", video: "03", lab: null, min: 20,
  titulo: "La ciberseguridad en consultoría",
  resumen: "Cómo se organiza un equipo Cyber en una Big Four, las áreas del puesto y el día a día de un analista.",
  objetivos: ["Describir las áreas de Privacy GRC y Cyber Human Risk", "Entender la pirámide de una firma", "Saber qué se valora en un junior"],
  secciones: [
    { h: "1. Qué hace una consultora de ciberseguridad", html: `<p>Asesora (diagnostica, diseña, implanta), revisa (audita controles) y opera servicios (p. ej., SOC). Clientes: banca, seguros, energía, telecomunicaciones, sector público, retail… <strong>cada sector con su regulación</strong> (DORA, ENS, NIS2…).</p>` },
    { h: "2. Las dos áreas de la oferta", html: `<div class="grid2"><div class="mini-card"><h4>🔐 Privacy, Governance & Compliance</h4><ul><li>Gobierno: políticas, roles, comités, plan director</li><li>Riesgo: análisis y tratamiento</li><li>Cumplimiento: ISO 27001, ENS, NIS2, DORA</li><li>Privacidad: RGPD, RAT, EIPD, brechas</li><li><b>Alta exposición a cliente</b></li></ul></div>
      <div class="mini-card"><h4>👥 Cyber Human Risk Management</h4><ul><li>Programas de concienciación por roles</li><li>Simulaciones de phishing, vishing, QR</li><li>Métricas de comportamiento y cultura</li><li>Comunicación, gamificación, embajadores</li><li><b>Personas en el centro</b></li></ul></div></div>` },
    { h: "3. La pirámide de la firma", html: `<div class="pyramid"><div>Partner / Socio</div><div>Senior Manager / Director</div><div>Manager</div><div>Senior / Consultant</div><div class="you">Analyst / Junior ← tú</div></div>` },
    { h: "4. Tipos de proyecto", html: `<ul><li>Gap analysis frente a una norma</li><li>Análisis de riesgos y plan de tratamiento</li><li>Implantación de SGSI / adecuación ENS, NIS2, DORA</li><li>Adecuación RGPD y oficina de privacidad (DPO as a service)</li><li>Programas de concienciación y simulaciones</li><li>Auditorías internas y apoyo en certificaciones</li></ul>` },
    { h: "5. Un día de un analista", html: `<div class="timeline"><div><b>09:30</b> Entrevista con el responsable de sistemas del cliente — tú tomas notas.</div><div><b>11:30</b> Redactas el acta y la lista de evidencias pendientes.</div><div><b>13:00</b> Revisas políticas y capturas frente a los requisitos de la norma.</div><div><b>15:30</b> Actualizas la matriz de gaps en Excel.</div><div><b>17:00</b> Preparas 3 diapositivas para el seguimiento semanal.</div></div>
      <div class="callout tip">Se valora: <b>fiabilidad</b>, atención al detalle, proactividad, comunicación (también en inglés), curiosidad y <b>discreción</b>.</div>` }
  ],
  claves: ["Excel y PowerPoint son tus herramientas diarias", "Avisa antes de un retraso, nunca después", "La información del cliente es confidencial"],
  quiz: [
    { q: "¿Qué área se encarga de simulaciones de phishing y cultura de seguridad?", op: ["Privacy GRC", "Cyber Human Risk Management", "Hacking ético", "Identidades"], ok: 1, exp: "Human Risk pone a las personas en el centro: concienciación, simulaciones, cultura." },
    { q: "Un proyecto que compara la situación actual del cliente con una norma se llama…", op: ["Pentest", "Gap analysis", "Tabletop", "BIA"], ok: 1, exp: "Análisis de diferencias (as-is vs. to-be)." },
    { q: "Vas a entregar tarde un documento. ¿Qué haces?", op: ["Entregarlo tarde sin decir nada", "Avisar con antelación y proponer nueva fecha", "Entregarlo incompleto a tiempo sin avisar", "Pedir a otro que lo haga"], ok: 1, exp: "La fiabilidad incluye gestionar expectativas a tiempo." },
    { q: "La regulación típica del sector financiero en la UE es…", op: ["ENS", "DORA", "CRA", "LSSI"], ok: 1, exp: "DORA: resiliencia operativa digital del sector financiero." },
    { q: "Es habitual que un junior…", op: ["Firme la aceptación de riesgos del cliente", "Tome notas, redacte actas y mantenga matrices", "Presente en solitario al consejo", "Negocie el precio del proyecto"], ok: 1, exp: "Ejecución, documentación y análisis son la base del rol junior." }
  ]
},
/* ───────────── INTERMEDIO ───────────── */
{
  id: 4, nivel: "Intermedio", video: "04", lab: "normas", min: 30,
  titulo: "Gobierno, riesgo y cumplimiento (GRC)",
  resumen: "Pirámide documental, roles, modelo de las tres líneas, marcos (ISO, NIST CSF 2.0, CIS, ENS, COBIT) e indicadores.",
  objetivos: ["Diferenciar política, norma y procedimiento", "Explicar el modelo de las tres líneas", "Elegir el marco adecuado para cada organización"],
  secciones: [
    { h: "1. Las tres letras", html: `<p><b>Gobierno</b>: la dirección dirige y controla la seguridad. <b>Riesgo</b>: identificar, evaluar y tratar. <b>Cumplimiento</b>: leyes, normas, contratos y políticas internas. <em>El gobierno decide, el riesgo prioriza, el cumplimiento verifica.</em></p>` },
    { h: "2. Pirámide documental", html: `<div class="pyramid doc"><div>Política — qué y por qué (aprueba la dirección)</div><div>Normas / estándares — requisitos obligatorios</div><div>Procedimientos — cómo y quién</div><div>Guías / instrucciones técnicas</div><div>Registros y evidencias</div></div>` },
    { h: "3. Roles y modelo de las tres líneas", html: `<ul><li><b>Consejo / dirección</b>: responsables últimos (NIS2 y DORA los responsabilizan personalmente).</li><li><b>CISO</b>, <b>comité de seguridad</b>, <b>DPO</b>, propietarios de activos y de riesgos. Documentar con una <b>matriz RACI</b>.</li></ul>
      <table class="tbl"><tr><th>Línea</th><th>Quién</th><th>Función</th></tr><tr><td>1.ª</td><td>Negocio y TI</td><td>Gestionan el riesgo y aplican controles</td></tr><tr><td>2.ª</td><td>Riesgos, cumplimiento, seguridad</td><td>Definen el marco, supervisan, asesoran</td></tr><tr><td>3.ª</td><td>Auditoría interna</td><td>Aseguramiento independiente al consejo</td></tr></table>` },
    { h: "4. Marcos de referencia", html: `<table class="tbl"><tr><th>Marco</th><th>Qué es</th></tr><tr><td>ISO/IEC 27001:2022</td><td>SGSI certificable basado en riesgos</td></tr><tr><td>ISO/IEC 27002:2022</td><td>Guía de los 93 controles</td></tr><tr><td>NIST CSF 2.0 (2024)</td><td>6 funciones: <b>Govern</b>, Identify, Protect, Detect, Respond, Recover</td></tr><tr><td>CIS Controls v8.1</td><td>18 controles técnicos priorizados</td></tr><tr><td>ENS (RD 311/2022)</td><td>Obligatorio sector público español y proveedores</td></tr><tr><td>COBIT 2019</td><td>Gobierno de TI (ISACA)</td></tr></table>
      <div class="callout">Las empresas grandes cumplen muchas normas a la vez: se crea un <b>marco unificado de controles</b> mapeado a todas ellas.</div>` },
    { h: "5. KPI y KRI", html: `<ul><li><b>KPI</b> (rendimiento): % de parches críticos en plazo, % de formación completada.</li><li><b>KRI</b> (riesgo): cuentas privilegiadas sin MFA, proveedores críticos sin evaluar.</li><li>Cada indicador: objetivo, umbral, responsable y frecuencia.</li></ul>` }
  ],
  claves: ["Política = qué/por qué; procedimiento = cómo/quién", "3 líneas: gestionar, supervisar, auditar", "NIST CSF 2.0 añade la función Govern"],
  quiz: [
    { q: "“Las contraseñas tendrán al menos 14 caracteres” es un ejemplo de…", op: ["Política", "Norma / estándar", "Procedimiento", "Registro"], ok: 1, exp: "Es un requisito obligatorio concreto que desarrolla la política." },
    { q: "En el modelo de las tres líneas, auditoría interna es…", op: ["Primera línea", "Segunda línea", "Tercera línea", "No forma parte"], ok: 2, exp: "Da aseguramiento independiente al consejo." },
    { q: "¿Qué función se añadió en NIST CSF 2.0?", op: ["Detect", "Govern", "Recover", "Protect"], ok: 1, exp: "Govern (Gobernar) se añadió en 2024 y ocupa el centro del marco." },
    { q: "Un ayuntamiento debe cumplir obligatoriamente…", op: ["ISO 27001", "ENS", "SOC 2", "TISAX"], ok: 1, exp: "El Esquema Nacional de Seguridad es obligatorio para el sector público español." },
    { q: "“Número de proveedores críticos sin evaluar” es un…", op: ["KPI", "KRI", "SLA", "RTO"], ok: 1, exp: "Indicador de riesgo: alerta temprana de exposición creciente." }
  ]
},
{
  id: 5, nivel: "Intermedio", video: "05", lab: "evidencias", min: 35,
  titulo: "ISO 27001:2022 paso a paso",
  resumen: "SGSI, ciclo PDCA, cláusulas 4–10, Anexo A con 93 controles, declaración de aplicabilidad y certificación.",
  objetivos: ["Explicar qué es un SGSI y el ciclo PDCA", "Enumerar las cláusulas 4 a 10 y sus evidencias", "Saber qué evidencia pedir para cada control"],
  secciones: [
    { h: "1. SGSI y familia ISO 27000", html: `<p>Un <b>Sistema de Gestión de Seguridad de la Información</b> protege la CIA con un enfoque <b>basado en riesgos</b> y de <b>mejora continua</b>. Certificable (3 años, con auditorías de seguimiento anuales).</p><p>Familia: <b>27002</b> (controles), <b>27005</b> (riesgos), <b>27701</b> (privacidad), <b>27017/27018</b> (cloud).</p>` },
    { h: "2. Ciclo PDCA", html: `<div class="pdca"><div><b>Plan</b>Contexto, alcance, riesgos, objetivos</div><div><b>Do</b>Implantar controles, formar, operar</div><div><b>Check</b>Medir, auditar, revisión por la dirección</div><div><b>Act</b>Corregir no conformidades, mejorar</div></div>` },
    { h: "3. Cláusulas obligatorias", html: `<table class="tbl"><tr><th>Cláusula</th><th>Contenido</th><th>Evidencia típica</th></tr>
      <tr><td>4 Contexto</td><td>Cuestiones internas/externas, partes interesadas, alcance</td><td>Documento de alcance</td></tr>
      <tr><td>5 Liderazgo</td><td>Compromiso, política, roles</td><td>Política firmada</td></tr>
      <tr><td>6 Planificación</td><td>Riesgos, tratamiento, SoA, objetivos</td><td>Metodología, análisis, SoA</td></tr>
      <tr><td>7 Soporte</td><td>Recursos, competencia, <b>concienciación</b>, comunicación, documentación</td><td>Plan de formación</td></tr>
      <tr><td>8 Operación</td><td>Ejecutar evaluación y tratamiento</td><td>Plan de tratamiento</td></tr>
      <tr><td>9 Evaluación</td><td>Indicadores, auditoría interna, revisión dirección</td><td>Informe de auditoría, acta</td></tr>
      <tr><td>10 Mejora</td><td>No conformidades y acciones correctivas</td><td>Registro de acciones</td></tr></table>` },
    { h: "4. Anexo A y SoA", html: `<div class="grid4"><div class="mini-card"><b>37</b> Organizativos</div><div class="mini-card"><b>8</b> Personas</div><div class="mini-card"><b>14</b> Físicos</div><div class="mini-card"><b>34</b> Tecnológicos</div></div>
      <p>Nuevos en 2022 (11), p. ej.: inteligencia de amenazas, seguridad cloud, preparación TIC para la continuidad, DLP, filtrado web, codificación segura, enmascaramiento de datos.</p>
      <p>La <b>Declaración de Aplicabilidad (SoA)</b> lista los 93 controles: aplica / no aplica, justificación, estado, riesgos relacionados y evidencias.</p>` },
    { h: "5. Proyecto y auditoría", html: `<ol class="steps"><li>Arranque y alcance</li><li>Gap analysis</li><li>Análisis de riesgos y plan de tratamiento</li><li>Documentación (política, procedimientos, SoA)</li><li>Implantación y formación</li><li>Auditoría interna + revisión por la dirección</li><li>Certificación: fase 1 (documental) y fase 2 (implantación)</li></ol>
      <p><b>No conformidad mayor</b> (sistemática/grave) · <b>menor</b> (puntual) · <b>observación</b>. Guía de auditoría: <b>ISO 19011</b>.</p>` }
  ],
  claves: ["Cláusulas 4–10 obligatorias", "93 controles en 4 temas", "La SoA conecta riesgos y controles"],
  quiz: [
    { q: "¿Qué cláusula incluye la auditoría interna y la revisión por la dirección?", op: ["6", "7", "9", "10"], ok: 2, exp: "Cláusula 9: evaluación del desempeño." },
    { q: "¿Cuántos controles tiene el Anexo A de ISO 27001:2022?", op: ["114", "93", "18", "73"], ok: 1, exp: "93 controles (la versión 2013 tenía 114)." },
    { q: "Un usuario que dejó la empresa hace un mes aún conserva acceso. En auditoría sería normalmente…", op: ["No conformidad mayor", "No conformidad menor", "Observación", "Nada"], ok: 1, exp: "Fallo puntual de un control existente → menor (si fuera sistemático, mayor)." },
    { q: "La fase 1 de la auditoría de certificación revisa…", op: ["La documentación y preparación", "Solo los controles técnicos", "Los estados financieros", "El código fuente"], ok: 0, exp: "Fase 1 documental; fase 2 comprueba la implantación efectiva." },
    { q: "La concienciación y formación aparecen en…", op: ["Cláusula 7 y controles de personas", "Solo en la cláusula 4", "Solo en controles físicos", "No aparecen"], ok: 0, exp: "Cláusula 7.3 (concienciación) y control de personas 6.3 del Anexo A." }
  ]
},
{
  id: 6, nivel: "Intermedio", video: "06", lab: "riesgos", min: 35,
  titulo: "Análisis y gestión de riesgos",
  resumen: "Proceso, escalas, redacción causa–evento–consecuencia, matriz de calor, tratamiento y metodologías (MAGERIT, ISO 27005, FAIR).",
  objetivos: ["Aplicar el proceso de gestión de riesgos en 6 pasos", "Redactar y valorar riesgos", "Elegir la opción de tratamiento adecuada"],
  secciones: [
    { h: "1. El proceso", html: `<ol class="steps"><li>Contexto y criterios (escalas, apetito)</li><li>Identificar (activos, amenazas, vulnerabilidades)</li><li>Analizar (probabilidad e impacto)</li><li>Evaluar (comparar con apetito)</li><li>Tratar</li><li>Comunicar, monitorizar y revisar</li></ol>` },
    { h: "2. Redactar bien un riesgo", html: `<p>Fórmula: <b>causa + evento + consecuencia</b>.</p><p class="bad">✗ “Riesgo de ciberataque”.</p><p class="good">✓ “Debido a la falta de MFA en el correo, un atacante podría robar credenciales mediante phishing y acceder a datos de clientes, provocando una brecha notificable y sanciones”.</p>` },
    { h: "3. Escalas y matriz", html: `<table class="tbl"><tr><th>Nivel</th><th>Probabilidad</th><th>Impacto</th></tr><tr><td>1</td><td>&lt; 1 vez / 5 años</td><td>Sin efecto relevante</td></tr><tr><td>2</td><td>1 vez / 2–5 años</td><td>Molestias, &lt; 10 k€</td></tr><tr><td>3</td><td>Anual</td><td>Horas de parada, ≤ 100 k€</td></tr><tr><td>4</td><td>Varias al año</td><td>Días de parada, sanción</td></tr><tr><td>5</td><td>Mensual o más</td><td>Multa elevada, prensa nacional</td></tr></table>
      <p>Niveles: <span class="pill g">1–4 bajo</span> <span class="pill y">5–9 medio</span> <span class="pill o">10–14 alto</span> <span class="pill r">15–25 crítico</span></p>` },
    { h: "4. Ejemplo completo", html: `<div class="chain"><div><b>Activo</b><span>Pagos a proveedores</span></div><i>→</i><div><b>Amenaza</b><span>BEC con voz clonada</span></div><i>→</i><div><b>Vulnerabilidad</b><span>Sin verificación por 2.º canal</span></div><i>→</i><div><b>Inherente</b><span>P4 × I4 = 16 🔴</span></div><i>→</i><div><b>Residual</b><span>P2 × I4 = 8 🟡</span></div></div><p>Los controles suelen bajar más la <b>probabilidad</b> que el impacto.</p>` },
    { h: "5. Tratamiento y metodologías", html: `<div class="grid4"><div class="mini-card"><b>Mitigar</b><p>Aplicar controles</p></div><div class="mini-card"><b>Transferir</b><p>Ciberseguro, externalizar (¡la responsabilidad legal no se transfiere!)</p></div><div class="mini-card"><b>Evitar</b><p>Dejar la actividad</p></div><div class="mini-card"><b>Aceptar</b><p>Formalmente, por el propietario del riesgo</p></div></div>
      <p>Metodologías: <b>MAGERIT v3</b> + herramienta <b>PILAR</b> (CCN), <b>ISO/IEC 27005:2022</b>, <b>ISO 31000</b>, <b>NIST SP 800-30</b>, <b>FAIR</b> (cuantificación en €).</p>` }
  ],
  claves: ["Acordar escalas antes de valorar", "Causa + evento + consecuencia", "La aceptación la firma el propietario del riesgo"],
  quiz: [
    { q: "Contratar un ciberseguro es una forma de…", op: ["Mitigar", "Transferir", "Evitar", "Aceptar"], ok: 1, exp: "Se comparte parte del impacto económico con un tercero." },
    { q: "Probabilidad 3 e impacto 5 da un nivel…", op: ["Bajo (8)", "Medio (8)", "Crítico (15)", "Alto (12)"], ok: 2, exp: "3 × 5 = 15 → crítico en la escala 15–25." },
    { q: "¿Quién debe firmar la aceptación de un riesgo?", op: ["El consultor", "El propietario del riesgo", "Cualquier empleado", "El auditor externo"], ok: 1, exp: "La decisión es del negocio, no del consultor." },
    { q: "La metodología española de análisis de riesgos del sector público es…", op: ["FAIR", "MAGERIT", "OCTAVE", "COBIT"], ok: 1, exp: "MAGERIT v3, con la herramienta PILAR del CCN." },
    { q: "¿Cuál es la mejor redacción de un riesgo?", op: ["Riesgo de hackeo", "Fallo de seguridad", "Por falta de copias aisladas, un ransomware podría cifrar el ERP y parar la facturación varios días", "Ciberataque grave"], ok: 2, exp: "Incluye causa, evento y consecuencia." }
  ]
},
{
  id: 7, nivel: "Intermedio", video: "07", lab: "rgpd", min: 35,
  titulo: "Privacidad I: RGPD y LOPDGDD",
  resumen: "Datos personales, 7 principios, 6 bases de legitimación, roles, derechos, información, LOPDGDD y sanciones.",
  objetivos: ["Enumerar los 7 principios del art. 5", "Elegir la base de legitimación correcta", "Distinguir responsable, encargado y DPO"],
  secciones: [
    { h: "1. Conceptos", html: `<ul><li><b>Dato personal</b>: cualquier información de una persona identificada o identificable (email, IP, matrícula, voz…).</li><li><b>Tratamiento</b>: cualquier operación (recoger, guardar, consultar, borrar…).</li><li><b>Categorías especiales (art. 9)</b>: salud, biometría para identificar, genéticos, ideología, religión, afiliación sindical, origen étnico, vida/orientación sexual.</li><li><b>Seudonimizar</b> (reversible → sigue siendo dato personal) ≠ <b>anonimizar</b> (irreversible → fuera del RGPD).</li></ul>` },
    { h: "2. Los 7 principios (art. 5)", html: `<div class="grid4 principles"><div>Licitud, lealtad y transparencia</div><div>Limitación de la finalidad</div><div>Minimización</div><div>Exactitud</div><div>Limitación del plazo de conservación</div><div>Integridad y confidencialidad</div><div class="hl">Responsabilidad proactiva (cumplir y poder demostrarlo)</div></div>` },
    { h: "3. Bases de legitimación (art. 6)", html: `<table class="tbl"><tr><th>Base</th><th>Ejemplo</th></tr><tr><td>Consentimiento</td><td>Newsletter comercial (libre, específico, informado, inequívoco)</td></tr><tr><td>Contrato</td><td>Dirección para entregar un pedido</td></tr><tr><td>Obligación legal</td><td>Facturas, registro de jornada</td></tr><tr><td>Intereses vitales</td><td>Emergencia médica</td></tr><tr><td>Interés público</td><td>Padrón municipal</td></tr><tr><td>Interés legítimo</td><td>Prevención del fraude (con ponderación documentada)</td></tr></table><div class="callout">Error frecuente: pedir consentimiento para todo. Si es necesario para un contrato, la base es el contrato.</div>` },
    { h: "4. Roles y derechos", html: `<ul><li><b>Responsable</b>: decide fines y medios. <b>Encargado</b>: trata por cuenta del responsable (contrato art. 28). <b>Corresponsables</b>: deciden juntos.</li><li><b>DPO</b>: obligatorio en administraciones, observación sistemática a gran escala, categorías especiales a gran escala + lista ampliada de la LOPDGDD (art. 34: colegios, entidades financieras, aseguradoras…).</li><li><b>Derechos</b>: acceso, rectificación, supresión, limitación, portabilidad, oposición y no ser objeto de decisiones automatizadas. Respuesta en <b>1 mes</b> (+2 si es complejo).</li></ul>` },
    { h: "5. LOPDGDD y sanciones", html: `<ul><li>Consentimiento de menores: <b>14 años</b>. Derechos digitales: desconexión digital, intimidad ante videovigilancia y geolocalización en el trabajo.</li><li>Autoridad: <b>AEPD</b>. Lee sus guías y resoluciones: son el mejor material.</li><li>Multas: hasta <b>20 M€ o 4 %</b> de la facturación mundial (la mayor); hasta <b>10 M€ o 2 %</b> en otras infracciones.</li></ul>` }
  ],
  claves: ["7 principios + responsabilidad proactiva", "6 bases: no todo es consentimiento", "Derechos: 1 mes"],
  quiz: [
    { q: "Una empresa usa la dirección del cliente para entregarle su compra. Base legal:", op: ["Consentimiento", "Ejecución de contrato", "Interés legítimo", "Interés público"], ok: 1, exp: "Es necesario para cumplir el contrato de compraventa." },
    { q: "Pedir la fecha de nacimiento para descargar un PDF gratuito vulnera principalmente…", op: ["Exactitud", "Minimización", "Portabilidad", "Integridad"], ok: 1, exp: "Se piden más datos de los necesarios." },
    { q: "Una gestoría que hace las nóminas de una empresa es…", op: ["Responsable", "Encargado del tratamiento", "Corresponsable", "DPO"], ok: 1, exp: "Trata datos por cuenta del responsable (la empresa)." },
    { q: "Plazo general para responder a un derecho de acceso:", op: ["72 horas", "15 días", "1 mes (ampliable 2 más)", "6 meses"], ok: 2, exp: "Art. 12.3 RGPD." },
    { q: "En España, la edad para consentir por sí mismo el tratamiento es…", op: ["13", "14", "16", "18"], ok: 1, exp: "Art. 7 LOPDGDD: 14 años." }
  ]
},
{
  id: 8, nivel: "Intermedio", video: "08", lab: null, min: 35,
  titulo: "Privacidad II: herramientas prácticas",
  resumen: "RAT, EIPD, privacidad desde el diseño, brechas en 72 h, encargados, transferencias internacionales y cookies.",
  objetivos: ["Construir filas de un RAT", "Saber cuándo hace falta una EIPD", "Gestionar una brecha de datos paso a paso"],
  secciones: [
    { h: "1. Registro de Actividades de Tratamiento (art. 30)", html: `<table class="tbl small"><tr><th>Actividad</th><th>Finalidad</th><th>Base</th><th>Datos</th><th>Conservación</th></tr><tr><td>Gestión de socios (gimnasio)</td><td>Prestar el servicio y cobrar</td><td>Contrato</td><td>Identificativos, bancarios</td><td>Relación + plazos legales</td></tr><tr><td>Acceso con huella</td><td>Control de acceso</td><td>Consentimiento explícito con alternativa</td><td><b>Biométricos (art. 9)</b> → EIPD</td><td>Mientras sea socio</td></tr><tr><td>Videovigilancia</td><td>Seguridad</td><td>Interés público / legítimo (art. 22 LOPDGDD)</td><td>Imagen</td><td><b>1 mes</b></td></tr></table><p>Se construye con <b>entrevistas por departamento</b>: qué datos, de dónde, dónde se guardan, a quién se envían, cuándo se borran.</p>` },
    { h: "2. Evaluación de impacto (EIPD/DPIA, art. 35)", html: `<p>Obligatoria si un tratamiento supone <b>probable alto riesgo</b> para los derechos: perfilado a gran escala, salud masiva, videovigilancia sistemática, biometría, nuevas tecnologías (IA). La AEPD publica listas orientativas y la herramienta <b>Gestiona</b>. Si el riesgo residual sigue alto → <b>consulta previa</b> (art. 36).</p>` },
    { h: "3. Privacidad desde el diseño y por defecto (art. 25)", html: `<ul><li>Pedir solo los campos imprescindibles · seudonimizar · cifrar · limitar accesos · borrado automático.</li><li>Configuración por defecto más protectora (perfiles privados por defecto).</li><li>Entregable típico: <b>checklist de privacidad</b> en el ciclo de proyectos.</li></ul>` },
    { h: "4. Brechas de datos", html: `<div class="timeline"><div><b>0 h</b> Detectar y contener; preservar evidencias.</div><div><b>Horas</b> Evaluar: qué datos, cuántas personas, consecuencias (AEPD: <em>Asesora Brecha</em>).</div><div><b>≤ 72 h</b> Notificar a la AEPD si hay riesgo (art. 33).</div><div><b>Sin dilación</b> Comunicar a los afectados si el riesgo es alto (art. 34).</div><div><b>Siempre</b> Registro interno de todas las brechas.</div></div>` },
    { h: "5. Encargados, transferencias y cookies", html: `<ul><li><b>Contrato art. 28</b>: instrucciones, confidencialidad, seguridad, subencargados, asistencia, borrado/devolución, auditoría.</li><li><b>Transferencias</b> fuera del EEE: decisión de adecuación, <b>EU–US Data Privacy Framework</b> (2023) para empresas adheridas, <b>cláusulas contractuales tipo</b> (2021) + evaluación de transferencia, <b>BCR</b>.</li><li><b>Cookies</b> no necesarias: consentimiento previo (LSSI + guía AEPD); “rechazar” tan fácil como “aceptar”.</li><li>Herramientas: OneTrust, TrustArc, Securiti… o Excel + SharePoint.</li></ul>` }
  ],
  claves: ["RAT = inventario base", "EIPD para alto riesgo", "Brecha: 72 h a la AEPD si hay riesgo"],
  quiz: [
    { q: "Plazo para notificar una brecha con riesgo a la AEPD:", op: ["24 horas", "72 horas", "1 semana", "1 mes"], ok: 1, exp: "Art. 33: 72 horas desde que se tiene constancia." },
    { q: "Un correo con datos de 3 clientes enviado por error a otro cliente…", op: ["No es una brecha", "Es una brecha de confidencialidad; se registra y se evalúa si notificar", "Solo es un error, se ignora", "Es siempre notificable a todos los afectados"], ok: 1, exp: "Toda brecha se registra; la notificación depende del riesgo." },
    { q: "¿Cuál suele requerir EIPD?", op: ["Nóminas de 10 empleados", "Control de acceso con reconocimiento facial de empleados", "Lista de proveedores", "Agenda de contactos comerciales"], ok: 1, exp: "Biometría (categoría especial) + seguimiento de empleados." },
    { q: "Instalar cookies de analítica requiere…", op: ["Nada", "Consentimiento previo", "Solo informar en el aviso legal", "Notificar a la AEPD"], ok: 1, exp: "No son técnicamente necesarias." },
    { q: "Plazo máximo de conservación de imágenes de videovigilancia en España (regla general):", op: ["1 semana", "1 mes", "1 año", "5 años"], ok: 1, exp: "Art. 22 LOPDGDD: un mes, salvo que acrediten un ilícito." }
  ]
},
{
  id: 9, nivel: "Intermedio", video: "09", lab: "normas", min: 35,
  titulo: "Regulación europea de ciberseguridad",
  resumen: "NIS2, DORA, ENS, Reglamento de IA y Ley de Ciberresiliencia: a quién aplican, qué exigen y qué proyectos generan.",
  objetivos: ["Saber a quién aplica cada norma", "Recordar los plazos de notificación", "Identificar los proyectos que genera la regulación"],
  secciones: [
    { h: "1. NIS2 — Directiva (UE) 2022/2555", html: `<ul><li>Amplía sectores: energía, transporte, banca, salud, agua, digital, administración, fabricación, alimentación, postal, residuos…</li><li><b>Entidades esenciales</b> e <b>importantes</b> (por sector y tamaño).</li><li>Medidas mínimas (art. 21): políticas de riesgo, incidentes, continuidad, cadena de suministro, formación, criptografía, MFA…</li><li><b>Dirección</b>: aprueba, supervisa, se forma y puede responder.</li><li>Notificación: <b>24 h</b> alerta temprana · <b>72 h</b> notificación · <b>1 mes</b> informe final.</li><li>Multas: esenciales hasta 10 M€ / 2 %; importantes hasta 7 M€ / 1,4 %.</li><li>España: transposición mediante una ley de coordinación y gobernanza de la ciberseguridad — <b>comprueba su estado actual</b>.</li></ul>` },
    { h: "2. DORA — Reglamento (UE) 2022/2554", html: `<p>Aplicable desde el <b>17 de enero de 2025</b> al sector financiero. Cinco pilares:</p><ol class="steps"><li>Gestión del riesgo TIC</li><li>Gestión y notificación de incidentes TIC graves</li><li>Pruebas de resiliencia (incluidas TLPT)</li><li>Riesgo de terceros TIC (registro de información, estrategias de salida)</li><li>Intercambio de información</li></ol><p>Los proveedores TIC críticos (p. ej., grandes nubes) pasan a estar supervisados.</p>` },
    { h: "3. ENS — Real Decreto 311/2022", html: `<p>Sector público español y sus proveedores. Categorías <b>BÁSICA / MEDIA / ALTA</b>. Marcos: organizativo, operacional y de medidas de protección. Básica: autoevaluación; media y alta: certificación. Guías <b>CCN-STIC</b>.</p>` },
    { h: "4. AI Act y CRA", html: `<ul><li><b>Reglamento de IA (UE) 2024/1689</b>: niveles de riesgo (inaceptable, alto, limitado, mínimo). Prohibiciones desde feb-2025; aplicación escalonada 2025–2027 (con ajustes de calendario en debate). Alfabetización en IA del personal.</li><li><b>Cyber Resilience Act (UE) 2024/2847</b>: seguridad de productos con elementos digitales. Notificación de vulnerabilidades explotadas desde <b>sep-2026</b>; plena aplicación <b>dic-2027</b>.</li><li>Otras: Directiva CER, eIDAS 2, Data Act.</li></ul>` },
    { h: "5. Proyectos que genera", html: `<ul><li>Análisis de aplicabilidad (¿me afecta?, ¿esencial o importante?)</li><li>Gap analysis + hoja de ruta + PMO</li><li>Procedimientos integrados de notificación (RGPD + NIS2 + DORA)</li><li>Formación a consejos de administración</li><li>Registro de proveedores TIC y evaluación de terceros</li><li>Gobierno de la IA</li></ul>` }
  ],
  claves: ["NIS2: 24 h / 72 h / 1 mes", "DORA: 5 pilares, enero 2025", "ENS: básica, media, alta"],
  quiz: [
    { q: "¿Desde cuándo es aplicable DORA?", op: ["25 mayo 2018", "17 enero 2025", "17 octubre 2024", "2 agosto 2026"], ok: 1, exp: "17 de enero de 2025." },
    { q: "La alerta temprana de NIS2 se envía en…", op: ["4 horas", "24 horas", "72 horas", "1 mes"], ok: 1, exp: "24 h alerta temprana; 72 h notificación; 1 mes informe final." },
    { q: "Una empresa privada que da servicios cloud a un ministerio debe cumplir…", op: ["DORA", "ENS", "CRA únicamente", "Ninguna"], ok: 1, exp: "El ENS alcanza a los proveedores del sector público." },
    { q: "La puntuación social de ciudadanos en el AI Act es…", op: ["Riesgo mínimo", "Riesgo limitado", "Alto riesgo", "Práctica prohibida"], ok: 3, exp: "Riesgo inaceptable: prohibida desde febrero de 2025." },
    { q: "¿Qué norma regula la seguridad de productos con elementos digitales?", op: ["NIS2", "CRA", "DORA", "LOPDGDD"], ok: 1, exp: "Cyber Resilience Act (Ley de Ciberresiliencia)." }
  ]
},
{
  id: 10, nivel: "Intermedio", video: "10", lab: null, min: 30,
  titulo: "Cyber Human Risk Management: fundamentos",
  resumen: "Por qué fallan las personas, modelos de cambio de comportamiento, cultura justa, métricas y ética.",
  objetivos: ["Explicar el paso de concienciación a gestión del riesgo humano", "Aplicar el modelo de Fogg y COM-B", "Elegir métricas que midan riesgo real"],
  secciones: [
    { h: "1. De la concienciación al riesgo humano", html: `<table class="tbl"><tr><th>Antes</th><th>Ahora</th></tr><tr><td>Curso anual igual para todos</td><td>Contenidos por rol y nivel de riesgo</td></tr><tr><td>Métrica: % completado</td><td>Métricas de comportamiento y cultura</td></tr><tr><td>Cumplir con el auditor</td><td>Reducir el riesgo real</td></tr><tr><td>Las personas, eslabón débil</td><td>Las personas, capa de defensa</td></tr></table>` },
    { h: "2. Por qué fallan las personas", html: `<ul><li><b>Sesgos</b>: autoridad, urgencia, exceso de confianza, reciprocidad.</li><li><b>Carga cognitiva</b>: demasiadas normas y alertas.</li><li><b>Fricción</b>: la seguridad compite con la productividad.</li><li>Tipos de error: despiste, olvido, error de conocimiento, infracción. <b>La formación solo arregla los de conocimiento</b>; el resto, diseño y procesos.</li></ul>` },
    { h: "3. Modelos de comportamiento", html: `<div class="grid2"><div class="mini-card"><h4>Fogg: B = M · A · P</h4><p>Comportamiento cuando coinciden <b>Motivación</b>, <b>Capacidad</b> y un <b>detonante (Prompt)</b>.</p></div><div class="mini-card"><h4>COM-B</h4><p><b>Capacidad</b>, <b>Oportunidad</b> y <b>Motivación</b> → Comportamiento.</p></div></div><p><b>Nudges</b>: diseño que facilita lo seguro (botón “Reportar phishing” visible + agradecimiento inmediato). Regla: hazlo <b>fácil, atractivo, social y oportuno</b>.</p>` },
    { h: "4. Cultura y métricas", html: `<ul><li><b>Cultura justa</b>: reportar errores sin miedo. Quien hace clic y lo reporta en 2 minutos merece un “gracias”.</li><li>Ejemplo de la dirección y <b>redes de embajadores</b>.</li></ul><table class="tbl"><tr><th>Métrica</th><th>Valor</th></tr><tr><td>% completado</td><td>Cumplimiento, no riesgo</td></tr><tr><td>Tasa de clic</td><td>Útil, depende de la dificultad</td></tr><tr><td><b>Tasa de reporte</b></td><td>Capa humana de detección</td></tr><tr><td>Tiempo al primer reporte</td><td>Velocidad de reacción</td></tr><tr><td>Reincidentes / reportes reales</td><td>Dónde actuar y si funciona</td></tr></table>` },
    { h: "5. Riesgo por roles y ética", html: `<ul><li>Dirección (deepfakes, NIS2/DORA) · Finanzas (IBAN, pagos) · RR. HH. (CV con malware) · TI/devs (credenciales, secretos en código) · Atención al cliente (vishing).</li><li><b>Ética</b>: simular, no humillar; evitar cebos crueles; coordinar con RR. HH., legal, representación de trabajadores y <b>DPO</b> (las simulaciones son tratamiento de datos); informes agregados.</li></ul>` }
  ],
  claves: ["Mide reportes, no solo clics", "Diseña para facilitar lo seguro", "Cultura justa"],
  quiz: [
    { q: "Según el modelo de Fogg, un comportamiento ocurre cuando coinciden…", op: ["Miedo, castigo y control", "Motivación, capacidad y detonante", "Política, norma y procedimiento", "Probabilidad e impacto"], ok: 1, exp: "B = MAP: Motivation, Ability, Prompt." },
    { q: "La métrica que mejor refleja la capa humana de detección es…", op: ["% de formación completada", "Tasa de reporte", "Número de cursos", "Horas de formación"], ok: 1, exp: "Mide cuántas personas avisan al equipo de seguridad." },
    { q: "Alguien hace clic en un phishing real y lo reporta en 2 minutos. ¿Qué haces?", op: ["Sancionarle", "Agradecérselo y gestionar el incidente", "Ignorarlo", "Publicar su nombre"], ok: 1, exp: "Cultura justa: reforzar el reporte rápido." },
    { q: "Un cebo de simulación que anuncia despidos falsos es…", op: ["Recomendable por realista", "Poco ético: daña la confianza", "Obligatorio por NIS2", "Neutral"], ok: 1, exp: "Hay que evitar cebos crueles." },
    { q: "La formación resuelve sobre todo errores de…", op: ["Despiste", "Conocimiento", "Infracción deliberada", "Diseño del sistema"], ok: 1, exp: "Los despistes e infracciones se abordan con diseño y procesos." }
  ]
},
/* ───────────── PROFESIONAL ───────────── */
{
  id: 11, nivel: "Profesional", video: "11", lab: "campana", min: 40,
  titulo: "Diseñar un programa de concienciación",
  resumen: "Diagnóstico, objetivos SMART, plan anual, simulaciones, contenidos, comunicación e informe a dirección.",
  objetivos: ["Diseñar un plan anual por colectivos", "Planificar una simulación de phishing ética", "Presentar resultados con datos y peticiones"],
  secciones: [
    { h: "Fases del programa", html: `<ol class="steps"><li><b>Diagnóstico</b>: entrevistas, incidentes, simulación de línea base, encuesta de cultura, requisitos (ISO 27001, NIS2, DORA, ENS).</li><li><b>Objetivos SMART</b> sobre 3–5 comportamientos (p. ej., “tasa de reporte &gt; 40 % en 12 meses”) y <b>segmentación</b>.</li><li><b>Plan anual</b> (ver tabla).</li><li><b>Simulaciones</b> con dificultad documentada.</li><li><b>Contenidos</b> que funcionan.</li><li><b>Comunicación</b> y embajadores.</li><li><b>Informe a dirección</b>.</li></ol>` },
    { h: "Plan anual de ejemplo", html: `<table class="tbl"><tr><th>T</th><th>Formación y comunicación</th><th>Simulación y medición</th></tr><tr><td>T1</td><td>Lanzamiento con vídeo del CEO; microcursos phishing y contraseñas</td><td>Línea base + encuesta</td></tr><tr><td>T2</td><td>Taller fraude del CEO para finanzas; red de embajadores</td><td>Dificultad media; vishing a finanzas</td></tr><tr><td>T3</td><td>Mes Europeo de la Ciberseguridad (octubre): retos y gamificación</td><td>Adjunto; QR</td></tr><tr><td>T4</td><td>Sesión al consejo (NIS2/DORA); boletín</td><td>Avanzada; encuesta final; informe</td></tr></table>` },
    { h: "Checklist de una simulación", html: `<ul class="check"><li>Escenario realista y relevante (paquetería, RR. HH., herramienta corporativa)</li><li>Dificultad definida y documentada</li><li>Página de aterrizaje educativa (no punitiva)</li><li>Lista blanca técnica + aviso al soporte</li><li>Envío escalonado</li><li>Aprobación de RR. HH., legal y DPO; información previa a la plantilla</li><li>Plataformas: KnowBe4, Proofpoint, Hoxhunt, SoSafe, Microsoft Attack Simulation…</li></ul>` },
    { h: "Contenidos y comunicación", html: `<ul><li>Microaprendizaje (3–5 min) <i>just-in-time</i> · historias reales · gamificación · por rol e idiomas · accesible · positivo.</li><li>Patrocinio visible de la dirección; <b>kit para embajadores</b>; retroalimentación continua.</li></ul>` },
    { h: "Informe a dirección", html: `<div class="callout">Titular: “La tasa de reporte ha pasado del 12 % al 38 %; finanzas sigue siendo el colectivo más expuesto”.</div><ul><li>Resumen ejecutivo de 1 página · tendencias reporte vs. clic · riesgos por colectivo · comparación con objetivos · <b>decisiones que se piden</b>.</li></ul><p class="bad">Errores: simulaciones imposibles, castigar, medir solo % completado, mismo contenido siempre, no coordinar, medir sin actuar.</p>` }
  ],
  claves: ["Pocos comportamientos, bien medidos", "Educar, no pillar", "Un informe debe pedir decisiones"],
  quiz: [
    { q: "¿Qué debe mostrar la página de aterrizaje de una simulación?", op: ["“Has fallado”", "Las señales que se podían detectar, en 30 s", "Nada", "Un formulario de sanción"], ok: 1, exp: "Es el momento de aprendizaje más potente." },
    { q: "¿Por qué enviar una simulación de forma escalonada?", op: ["Para ahorrar dinero", "Para evitar el efecto boca a boca y no saturar soporte", "Porque lo exige el RGPD", "Para engañar más"], ok: 1, exp: "Evita que los resultados se distorsionen." },
    { q: "Un objetivo SMART es…", op: ["Mejorar la concienciación", "Tasa de reporte > 40 % en 12 meses", "Que nadie haga clic nunca", "Hacer más cursos"], ok: 1, exp: "Específico, medible, alcanzable, relevante y con plazo." },
    { q: "¿Con quién hay que coordinar un programa de simulaciones?", op: ["Solo con TI", "RR. HH., legal, DPO y soporte", "Nadie", "Solo con el CEO"], ok: 1, exp: "Implica tratamiento de datos de empleados y afecta a la operación." },
    { q: "Un informe a dirección debe terminar con…", op: ["Agradecimientos", "Recomendaciones y decisiones que se piden", "La lista de quién cayó", "Los logos de las plataformas"], ok: 1, exp: "Un informe que no pide decisiones es solo un informe bonito." }
  ]
},
{
  id: 12, nivel: "Profesional", video: "12", lab: "madurez", min: 40,
  titulo: "La caja de herramientas del consultor",
  resumen: "Gap analysis, madurez CMMI, entrevistas, Excel, PowerPoint con títulos de acción, redacción de hallazgos y herramientas del mercado.",
  objetivos: ["Hacer un gap analysis y valorar la madurez", "Conducir una entrevista con cliente", "Escribir títulos de acción y hallazgos"],
  secciones: [
    { h: "1. Gap analysis", html: `<table class="tbl small"><tr><th>Req.</th><th>Estado</th><th>Evidencia</th><th>Gap</th><th>Recomendación</th><th>Prioridad</th></tr><tr><td>A.5.19 Seguridad en proveedores</td><td>Parcial</td><td>Contratos sin cláusulas de seguridad</td><td>No hay evaluación de proveedores</td><td>Procedimiento TPRM + cuestionario</td><td>Alta</td></tr></table><p>Fuentes: <b>documentación + entrevistas + pruebas</b>. Nunca te quedes solo con lo que te cuentan.</p>` },
    { h: "2. Madurez (escala tipo CMMI)", html: `<div class="levels"><div><b>0</b> Inexistente</div><div><b>1</b> Inicial</div><div><b>2</b> Repetible</div><div><b>3</b> Definido</div><div><b>4</b> Gestionado</div><div><b>5</b> Optimizado</div></div><p>Sin evidencia documental, como mucho nivel 2.</p>` },
    { h: "3. Entrevistas con cliente", html: `<ul><li><b>Antes</b>: lee la documentación, prepara cuestionario, envía agenda.</li><li><b>Durante</b>: preguntas abiertas. Las dos mejores: <em>“¿Cómo lo hacéis?”</em> y <em>“¿Me lo puedes enseñar?”</em></li><li><b>Después</b>: acta en 24–48 h + evidencias pendientes con fecha.</li></ul>` },
    { h: "4. Excel y PowerPoint", html: `<div class="grid2"><div class="mini-card"><h4>Excel</h4><ul><li>Formato tabla, una fila = un registro</li><li>Validación de datos (desplegables)</li><li>BUSCARX, CONTAR.SI.CONJUNTO, SI, SUMAPRODUCTO</li><li>Formato condicional (mapas de calor)</li><li>Tablas dinámicas; pestaña de instrucciones</li></ul></div><div class="mini-card"><h4>PowerPoint</h4><ul><li><b>Título de acción</b> = conclusión</li><li>Una idea por diapositiva</li><li>Pirámide de Minto: conclusión → argumentos → datos</li><li>Los títulos leídos seguidos cuentan la historia</li><li>Revisa cifras, erratas y alineación</li></ul></div></div>
      <p class="bad">✗ “Resultados del gap analysis”</p><p class="good">✓ “El cliente cumple el 62 % de ISO 27001; los mayores gaps están en proveedores y continuidad”</p>` },
    { h: "5. Escribir hallazgos y herramientas", html: `<p>Hallazgo = <b>condición</b> (lo visto) + <b>criterio</b> (lo exigido) + <b>causa</b> + <b>efecto</b> (riesgo) + <b>recomendación</b>. Lenguaje objetivo, no acusatorio.</p><p>Herramientas: <b>GRC</b> ServiceNow IRM, Archer, MetricStream, OneTrust · <b>Privacidad</b> OneTrust, TrustArc · <b>Human Risk</b> KnowBe4, Proofpoint, Hoxhunt, SoSafe · <b>ENS</b> PILAR · Power BI.</p><div class="callout">IA generativa con datos de cliente: <b>solo herramientas aprobadas</b> por la firma.</div>` }
  ],
  claves: ["“¿Me lo puedes enseñar?” convierte afirmaciones en evidencias", "Títulos de acción", "Nada sale al cliente sin revisión"],
  quiz: [
    { q: "Un control documentado, aprobado y comunicado, pero sin indicadores, está en nivel…", op: ["1", "2", "3", "4"], ok: 2, exp: "Definido (3). Con medición y control sería 4." },
    { q: "¿Cuál es un buen título de diapositiva de consultoría?", op: ["Resultados", "Análisis de riesgos", "6 riesgos críticos concentran el 70 % de la exposición; 4 se resuelven en 3 meses", "Introducción"], ok: 2, exp: "Un título de acción comunica la conclusión." },
    { q: "La pregunta que convierte una afirmación en una evidencia es…", op: ["¿Estáis seguros?", "¿Me lo puedes enseñar?", "¿Lo cumplís?", "¿Quién es el responsable?"], ok: 1, exp: "Pide ver el registro, la captura o el documento." },
    { q: "Estructura de un hallazgo:", op: ["Problema y culpable", "Condición, criterio, causa, efecto, recomendación", "Solo la recomendación", "Riesgo y precio"], ok: 1, exp: "Estructura clásica de auditoría." },
    { q: "¿Puedes pegar el informe confidencial de un cliente en una IA pública para resumirlo?", op: ["Sí, si es rápido", "No: solo herramientas aprobadas por la firma", "Sí, si borras el logo", "Solo los viernes"], ok: 1, exp: "Sería una brecha de confidencialidad." }
  ]
},
{
  id: 13, nivel: "Profesional", video: "13", lab: "caso", min: 45,
  titulo: "Caso práctico: un proyecto de principio a fin",
  resumen: "LogiPlus: ISO 27001 + RGPD + concienciación tras un fraude del CEO. Fases, entregables y tu papel como junior.",
  objetivos: ["Recorrer un proyecto real fase a fase", "Saber qué entregables produce un junior", "Estructurar un caso en la entrevista"],
  secciones: [
    { h: "Contexto", html: `<div class="case"><p><b>LogiPlus</b> · logística · 1.200 empleados · 5 almacenes · sede en Madrid.</p><ul><li>Grandes clientes exigen <b>ISO 27001 en 12 meses</b>.</li><li>Fraude del CEO reciente: <b>180.000 €</b>.</li><li>Datos de empleados, conductores (geolocalización) y destinatarios.</li><li>Posible <b>entidad importante NIS2</b> (transporte).</li></ul></div>` },
    { h: "Cronología", html: `<div class="timeline"><div><b>Sem. 1–2 · Kick-off</b> Objetivos, alcance, equipo, calendario. <i>Tú: presentación de arranque y lista de peticiones.</i></div><div><b>Sem. 3–6 · Diagnóstico</b> 15 entrevistas, gap ISO, revisión RGPD, phishing base: 22 % clic / 6 % reporte. <i>Tú: actas, matriz de gaps, análisis de la simulación.</i></div><div><b>Sem. 7–10 · Riesgos</b> Taller con dirección, 38 riesgos (6 altos/críticos), 24 iniciativas, SoA v1. <i>Tú: registro de riesgos y borrador de SoA.</i></div><div><b>Mes 3–9 · Implantación</b> Política, comité, RACI, procedimientos, RAT, contratos, EIPD geolocalización, doble verificación de pagos, plan de concienciación. <i>Tú: borradores, materiales, evidencias.</i></div><div><b>Mes 10–12 · Certificación</b> Auditoría interna, revisión por la dirección, fases 1 y 2: 2 NC menores → certificado. Phishing: 9 % clic / 41 % reporte.</div></div>` },
    { h: "Resultados del diagnóstico", html: `<div class="bars"><div><span>Gobierno ISO</span><i style="--v:35%"></i><b>35 %</b></div><div><span>Controles Anexo A</span><i style="--v:48%"></i><b>48 %</b></div><div><span>Privacidad</span><i style="--v:55%"></i><b>55 %</b></div><div><span>Reporte phishing</span><i style="--v:6%"></i><b>6 %</b></div></div>` },
    { h: "Lecciones para la entrevista", html: `<ol class="steps"><li>Empieza por el <b>contexto de negocio</b>.</li><li>Un incidente real es la mejor palanca.</li><li>GRC + privacidad + riesgo humano se refuerzan.</li><li>La causa raíz suele ser de <b>proceso</b>.</li><li>Cuenta resultados con datos <b>antes / después</b>.</li></ol><div class="callout tip">Estructura para cualquier caso: <b>contexto → diagnóstico → riesgos → plan → medición</b>.</div>` }
  ],
  claves: ["Contexto antes que tecnología", "El junior sostiene el control de evidencias", "Antes / después con datos"],
  quiz: [
    { q: "¿Cuál fue la causa raíz del fraude en LogiPlus?", op: ["Falta de antivirus", "No existía procedimiento de verificación de pagos", "Contraseñas cortas", "Falta de cortafuegos"], ok: 1, exp: "Una causa de proceso, como suele pasar." },
    { q: "La geolocalización de conductores fuera de horario es un problema de…", op: ["Disponibilidad", "Proporcionalidad / minimización (RGPD)", "Continuidad", "Integridad"], ok: 1, exp: "Se resolvió con una EIPD limitándola al horario laboral." },
    { q: "¿Quién debe hacer la auditoría interna?", op: ["El mismo equipo que implantó", "Un equipo independiente", "El junior solo", "El cliente sin formación"], ok: 1, exp: "Para preservar la independencia." },
    { q: "¿Qué entregable suele preparar el junior en el kick-off?", op: ["El contrato", "La lista de peticiones de documentación", "El certificado", "La factura"], ok: 1, exp: "Y el seguimiento de lo recibido y pendiente." },
    { q: "Estructura recomendada para resolver un caso en entrevista:", op: ["Herramientas → precio", "Contexto → diagnóstico → riesgos → plan → medición", "Plan → contexto", "Solo conclusiones"], ok: 1, exp: "Demuestra pensamiento estructurado." }
  ]
},
{
  id: 14, nivel: "Profesional", video: "14", lab: "bia", min: 35,
  titulo: "Terceros, continuidad e incidentes",
  resumen: "TPRM, ISO 22301, BIA, RTO/RPO, ejercicios tabletop y la matriz de notificaciones de incidentes.",
  objetivos: ["Recorrer el ciclo de vida de terceros", "Calcular RTO y RPO", "Diseñar una matriz de notificaciones"],
  secciones: [
    { h: "1. Gestión de riesgos de terceros (TPRM)", html: `<ol class="steps"><li><b>Inventario y criticidad</b> (datos, servicio crítico, dependencia)</li><li><b>Due diligence</b>: cuestionario, certificaciones (ISO 27001, ENS, SOC 2), evidencias</li><li><b>Contrato</b>: seguridad, art. 28, notificación de incidentes, auditoría, salida</li><li><b>Monitorización</b> según criticidad</li><li><b>Salida</b>: devolución/borrado, retirada de accesos</li></ol><div class="callout">Comprueba que el <b>alcance del certificado</b> del proveedor incluye el servicio que presta.</div>` },
    { h: "2. Continuidad de negocio (ISO 22301)", html: `<ul><li><b>BIA</b>: procesos críticos y tolerancia a la parada.</li><li><b>RTO</b>: tiempo máximo para recuperar el servicio.</li><li><b>RPO</b>: pérdida máxima de datos aceptable (en tiempo). RPO 4 h → copias al menos cada 4 h.</li><li><b>MTPD</b>: periodo máximo tolerable de interrupción.</li><li>Planes: continuidad (BCP), recuperación TI (DRP), crisis y comunicación. <b>Probarlos.</b></li></ul>` },
    { h: "3. Ejercicios tabletop", html: `<p>Comité de crisis en una sala; escenario que evoluciona con “inyecciones” cada 15–20 min.</p><div class="case"><b>Escenario clásico</b>: ransomware un viernes a las 18:00 → los atacantes publican una muestra de datos de clientes → llama un periodista → un cliente clave amenaza con rescindir.</div><p>Se evalúan decisiones, roles, plazos de notificación y comunicación → informe de lecciones aprendidas.</p>` },
    { h: "4. Matriz de notificaciones", html: `<table class="tbl"><tr><th>Destinatario</th><th>Cuándo</th><th>Plazo</th></tr><tr><td>AEPD</td><td>Brecha de datos con riesgo</td><td>72 h</td></tr><tr><td>Afectados</td><td>Riesgo alto</td><td>Sin dilación indebida</td></tr><tr><td>Autoridad NIS2 / CSIRT</td><td>Incidente significativo</td><td>24 h / 72 h / 1 mes</td></tr><tr><td>Supervisor financiero (DORA)</td><td>Incidente TIC grave</td><td>Plazos de horas según normas técnicas</td></tr><tr><td>Clientes</td><td>Según contrato</td><td>Según contrato</td></tr><tr><td>Policía / Guardia Civil</td><td>Delito</td><td>Lo antes posible</td></tr></table>` }
  ],
  claves: ["Externalizas el servicio, no la responsabilidad", "RPO = datos; RTO = tiempo", "Prueba los planes"],
  quiz: [
    { q: "El RPO mide…", op: ["El tiempo para recuperar", "La pérdida máxima de datos aceptable", "El coste del incidente", "El número de servidores"], ok: 1, exp: "Recovery Point Objective." },
    { q: "La norma de continuidad de negocio es…", op: ["ISO 27001", "ISO 22301", "ISO 9001", "ISO 31000"], ok: 1, exp: "ISO 22301." },
    { q: "Un proveedor certificado ISO 27001… ¿qué compruebas?", op: ["Nada más", "Que el alcance del certificado cubre el servicio prestado y que está vigente", "Solo el logo", "Su facturación"], ok: 1, exp: "Error habitual: certificado de otra sede o servicio." },
    { q: "Un ejercicio tabletop…", op: ["Apaga servidores reales", "Simula un escenario de crisis en una sala con el comité", "Es un pentest", "Es una auditoría ISO"], ok: 1, exp: "Prueba decisiones, roles y comunicación." },
    { q: "¿Qué pilar de DORA trata los proveedores tecnológicos?", op: ["Pruebas", "Riesgo de terceros TIC", "Intercambio de información", "Ninguno"], ok: 1, exp: "Incluye el registro de información y estrategias de salida." }
  ]
},
/* ───────────── ENTREVISTA ───────────── */
{
  id: 15, nivel: "Entrevista", video: "15", lab: "star", min: 40,
  titulo: "Preparar el proceso de selección",
  resumen: "Leer la oferta, CV, LinkedIn, fases habituales, método STAR, “háblame de ti” y preguntas para el entrevistador.",
  objetivos: ["Construir tu tabla requisito → evidencia", "Preparar 6–8 historias STAR", "Ensayar tu presentación personal"],
  secciones: [
    { h: "1. Requisito → evidencia", html: `<table class="tbl"><tr><th>Requisito de la oferta</th><th>Tu evidencia (rellénalo)</th></tr><tr><td>Último año de grado/máster STEM en 2026</td><td>…</td></tr><tr><td>Capacidad analítica</td><td>TFG, proyecto con datos, olimpiada…</td></tr><tr><td>Disposición para aprender</td><td>Este curso, certificación, curso AEPD/INCIBE</td></tr><tr><td>Comunicación técnica y funcional</td><td>Presentaciones, docencia, divulgación</td></tr><tr><td>Inglés profesional</td><td>Certificado, Erasmus, proyecto en inglés</td></tr><tr><td>Proactividad y equipo</td><td>Historia STAR de iniciativa</td></tr></table>` },
    { h: "2. CV y LinkedIn", html: `<ul><li>1 página, PDF, versión en inglés. Titular orientado: <em>“Estudiante de Ing. Informática · GRC, privacidad y riesgo humano”</em>.</li><li>Logros con verbos de acción y cifras.</li><li>Certificaciones/cursos, idiomas reales, Excel/PowerPoint/Power BI.</li><li>LinkedIn: publica lo que aprendes (resumen NIS2, análisis de una resolución AEPD); sigue a AEPD, INCIBE, CCN, ENISA.</li><li><b>Portafolio</b>: RAT de ejemplo, programa de concienciación ficticio, caso LogiPlus resuelto.</li></ul>` },
    { h: "3. Fases habituales", html: `<ol class="steps"><li>Solicitud online y filtro de CV</li><li>Pruebas online (razonamiento, inglés o vídeo-entrevista) — según el proceso</li><li>Entrevista con Talento: motivación y competencias</li><li>Dinámica de grupo o caso — en algunos procesos</li><li>Entrevista con manager / senior manager (técnica y encaje, a veces en inglés)</li><li>Oferta</li></ol><div class="callout tip">Pregunta a Talento qué fases tendrás: es normal y te permite prepararte.</div>` },
    { h: "4. Método STAR", html: `<div class="grid4"><div class="mini-card"><b>S</b>ituación<p>Contexto breve</p></div><div class="mini-card"><b>T</b>area<p>Tu reto</p></div><div class="mini-card"><b>A</b>cción<p>Lo que hiciste TÚ (la parte más larga)</p></div><div class="mini-card"><b>R</b>esultado<p>Con datos + aprendizaje</p></div></div><p>1,5–2 min por respuesta. Usa el <a href="#/lab/star">constructor STAR</a> para escribir las tuyas.</p>` },
    { h: "5. “Háblame de ti” y tus preguntas", html: `<p><b>Presente</b> (20 s) → <b>pasado</b> con 2 logros (40 s) → <b>futuro</b>: por qué este puesto (30 s).</p><p>Preguntas para el entrevistador:</p><ul><li>¿Cómo es un proyecto típico de un junior en sus primeros 6 meses?</li><li>¿Qué distingue a los analistas que más crecen?</li><li>¿Es posible conocer proyectos de Privacy GRC y de Human Risk?</li><li>¿Qué retos regulatorios generan más proyectos ahora?</li></ul>` }
  ],
  claves: ["Una evidencia por requisito", "STAR en primera persona", "Siempre haz preguntas al final"],
  quiz: [
    { q: "En STAR, la parte más larga debe ser…", op: ["Situación", "Tarea", "Acción", "Resultado"], ok: 2, exp: "Lo que hiciste tú, en primera persona." },
    { q: "Al final te preguntan si tienes dudas. Lo mejor es…", op: ["Decir que no", "Preguntar por vacaciones", "Hacer 2–3 preguntas sobre el rol y el área", "Preguntar el salario primero"], ok: 2, exp: "Demuestra interés y conocimiento." },
    { q: "Duración ideal de “háblame de ti”:", op: ["15 segundos", "~1,5 minutos", "10 minutos", "Lo que haga falta"], ok: 1, exp: "Presente, pasado y futuro en torno a 90 s." },
    { q: "Un logro bien escrito en el CV es…", op: ["Participé en una encuesta", "Diseñé una encuesta respondida por 120 estudiantes y presenté resultados al departamento", "Responsable", "Encuestas"], ok: 1, exp: "Verbo de acción + cifra + resultado." },
    { q: "Tras la entrevista conviene…", op: ["No hacer nada", "Enviar un correo breve de agradecimiento en 24 h", "Llamar cada día", "Escribir en redes sobre el proceso"], ok: 1, exp: "Mencionando algo concreto de la conversación." }
  ]
},
{
  id: 16, nivel: "Entrevista", video: "16", lab: "entrevista", min: 45,
  titulo: "Preguntas de entrevista con respuestas modelo",
  resumen: "Motivación, preguntas técnicas, casos de ISO 27001 y de phishing, comportamiento, inglés y errores que descartan.",
  objetivos: ["Responder con estructura a preguntas técnicas", "Resolver casos en voz alta", "Responder con soltura en inglés"],
  secciones: [
    { h: "1. ¿Por qué esta área?", html: `<div class="answer">“Durante la carrera vi que la mayoría de incidentes no se deben a fallos técnicos sofisticados, sino a procesos mal diseñados y personas sin la información adecuada. Me atrae esta área porque une análisis, regulación y personas, con impacto directo en el negocio. Además, NIS2, DORA y el Reglamento de IA están obligando a madurar a muchas organizaciones, y el riesgo humano está pasando a programas basados en datos. Puedo aportar capacidad analítica, facilidad para explicar lo técnico de forma sencilla y muchas ganas de aprender.”</div><p class="muted">Estructura: experiencia → conocimiento del área → mercado → aportación.</p>` },
    { h: "2. Caso ISO 27001", html: `<div class="answer">“Primero aclararía el contexto: por qué quieren certificarse, plazo, alcance y qué tienen ya. Después un gap analysis con entrevistas y evidencias. Luego metodología y análisis de riesgos, plan de tratamiento y SoA. Implantaría por prioridades, con formación. Y cerraría con auditoría interna, revisión por la dirección y certificación en dos fases. El objetivo no es solo el certificado, sino un sistema que el cliente pueda mantener.”</div>` },
    { h: "3. Caso: 30 % de clics", html: `<div class="answer">“No sacaría conclusiones de un único dato: analizaría dificultad, colectivos, sedes y dispositivos, y también la tasa de reporte y el tiempo al primer reporte. Actuaría con formación breve en el momento del error, contenidos por rol y un botón de reporte sencillo con agradecimiento. Y como las personas son una capa más, reforzaría MFA, verificación de pagos y filtrado. Mediría la tendencia trimestral y la comunicaría con datos.”</div>` },
    { h: "4. Inglés", html: `<div class="answer en"><b>Risk vs. vulnerability?</b> “A vulnerability is a weakness, for example the lack of multi-factor authentication. A risk is the combination of the likelihood that a threat exploits that weakness and the impact it would have on the business.”</div><div class="answer en"><b>Explain phishing to a non-technical audience.</b> “Phishing is like a fake letter from your bank: it looks real, it creates urgency, and it asks you to click a link or share your password. If something feels urgent and unusual, stop, check it through another channel, and report it.”</div><p><b>Vocabulario</b>: gap analysis, maturity assessment, roadmap, risk appetite, risk owner, risk register, Statement of Applicability, nonconformity, corrective action, data subject rights, controller/processor, DPIA, awareness programme, click rate / report rate, deliverable, stakeholder, kick-off, follow-up, deadline.</p>` },
    { h: "5. Errores que descartan", html: `<ul class="cross"><li>Inventar (mejor: “no lo conozco en detalle; lo averiguaría en…”)</li><li>Respuestas genéricas sin ejemplos</li><li>Hablar mal de experiencias anteriores</li><li>No conocer la oferta ni la firma</li><li>Solo técnica, sin conectar con el negocio</li><li>No hacer preguntas al final</li></ul><p>👉 Practica en el <a href="#/lab/entrevista">simulador de entrevista</a>.</p>` }
  ],
  claves: ["Estructura > memoria", "Honestidad si no lo sabes", "Practica en voz alta, cronometrado"],
  quiz: [
    { q: "Te preguntan algo que no sabes. ¿Qué haces?", op: ["Inventar con seguridad", "Reconocerlo, razonar lo que sí sabes y decir cómo lo averiguarías", "Cambiar de tema", "Quedarte en silencio"], ok: 1, exp: "Honestidad y criterio son clave en consultoría." },
    { q: "“Risk owner” significa…", op: ["Dueño de la empresa", "Propietario del riesgo", "Auditor", "Proveedor"], ok: 1, exp: "Persona responsable de decidir sobre un riesgo." },
    { q: "Ante un caso de entrevista, lo primero es…", op: ["Proponer herramientas", "Aclarar contexto y objetivos", "Dar el precio", "Hablar de cortafuegos"], ok: 1, exp: "Contexto antes que soluciones." },
    { q: "“Deliverable” es…", op: ["Una fecha límite", "Un entregable", "Una reunión", "Un riesgo"], ok: 1, exp: "Documento o producto que se entrega al cliente." },
    { q: "Al explicar algo técnico a un no técnico conviene usar…", op: ["Siglas y jerga", "Analogías sencillas y un mensaje accionable", "Artículos de la ley", "Código"], ok: 1, exp: "Comunicación eficaz en entornos funcionales." }
  ]
},
{
  id: 17, nivel: "Entrevista", video: "17", lab: null, min: 25,
  titulo: "Tus primeros 90 días y tu carrera",
  resumen: "Plan 30-60-90, certificaciones recomendadas, carrera en una Big Four y hábitos de un profesional excelente.",
  objetivos: ["Tener un plan concreto 30-60-90", "Elegir tu ruta de certificaciones", "Construir hábitos de aprendizaje continuo"],
  secciones: [
    { h: "Plan 30-60-90", html: `<div class="grid3"><div class="mini-card"><h4>Días 1–30 · Aprender</h4><ul><li>Bienvenida, herramientas, confidencialidad</li><li>Conoce a tu equipo y a tu coach</li><li>Estudia entregables anteriores</li><li>Libreta de aprendizaje; dudas agrupadas</li></ul></div><div class="mini-card"><h4>Días 31–60 · Aportar</h4><ul><li>Entregas impecables y a tiempo</li><li>Autorrevisión antes de enviar</li><li>Tareas completas de principio a fin</li><li>Feedback tras cada entregable</li></ul></div><div class="mini-card"><h4>Días 61–90 · Proponer</h4><ul><li>Una mejora: plantilla, macro, checklist</li><li>Voz propia en reuniones</li><li>Tema de especialización</li><li>Primera certificación; iniciativas internas</li></ul></div></div>` },
    { h: "Certificaciones", html: `<table class="tbl"><tr><th>Certificación</th><th>Para qué</th><th>Cuándo</th></tr><tr><td>ISO 27001 Lead Implementer / Lead Auditor</td><td>Implantar y auditar SGSI</td><td>Año 1</td></tr><tr><td>CompTIA Security+ / ISC2 CC</td><td>Base técnica</td><td>Antes o año 1</td></tr><tr><td>CIPP/E (IAPP) / Certificación DPD (esquema AEPD)</td><td>Privacidad europea</td><td>Año 1–2</td></tr><tr><td>ISO 22301 / ISO 27701</td><td>Continuidad / privacidad</td><td>Año 2</td></tr><tr><td>CISA · CISM · CRISC (ISACA)</td><td>Auditoría, gestión, riesgo (requieren experiencia)</td><td>Año 3+</td></tr></table>` },
    { h: "Carrera y hábitos", html: `<p>Analyst → Consultant → Senior Consultant → Manager → Senior Manager/Director → Partner. Salidas: CISO, DPO, riesgo en banca, reguladores, emprendimiento.</p><ul class="check"><li>30 min/día: AEPD, INCIBE, CCN, ENISA, NIST, newsletters</li><li>Una resolución o caso real por semana</li><li>Resume lo que aprendes en una página</li><li>Cuida tu red y tu energía</li><li>Ética y confidencialidad, siempre</li></ul>` }
  ],
  claves: ["Fiabilidad primero, brillo después", "Una certificación al año", "La confianza lo es todo"],
  quiz: [
    { q: "En tus primeros 30 días, la prioridad es…", op: ["Proponer grandes cambios", "Aprender, escuchar y entender el estándar de calidad", "Pedir un ascenso", "Trabajar solo"], ok: 1, exp: "Aprender y escuchar." },
    { q: "Certificación de ISACA orientada a auditoría:", op: ["CISM", "CISA", "CRISC", "CIPP/E"], ok: 1, exp: "CISA = Certified Information Systems Auditor." },
    { q: "CIPP/E está orientada a…", op: ["Hacking ético", "Privacidad europea", "Redes", "Cloud"], ok: 1, exp: "Certificación de la IAPP sobre el marco europeo de privacidad." },
    { q: "Para tener dudas resueltas sin interrumpir constantemente…", op: ["No preguntes nunca", "Agrúpalas y pregúntalas en bloque", "Pregunta cada 5 minutos", "Pregunta al cliente"], ok: 1, exp: "Respeta el tiempo del senior y avanzas rápido." },
    { q: "Certificación muy útil el primer año en GRC:", op: ["CISSP", "ISO 27001 Lead Implementer/Auditor", "OSCP", "CCIE"], ok: 1, exp: "Aplicación directa en proyectos de SGSI." }
  ]
}
];

window.GLOSARIO = [
  ["Activo", "Cualquier recurso con valor para la organización: datos, sistemas, personas, reputación."],
  ["Amenaza", "Causa potencial de un incidente que puede dañar un activo."],
  ["Vulnerabilidad", "Debilidad de un activo o control que una amenaza puede aprovechar."],
  ["Riesgo", "Combinación de la probabilidad de un evento y su impacto."],
  ["Riesgo residual", "Riesgo que queda tras aplicar los controles."],
  ["Apetito de riesgo", "Nivel de riesgo que la organización está dispuesta a aceptar para lograr sus objetivos."],
  ["Control", "Medida que modifica el riesgo (preventiva, detectiva o correctiva)."],
  ["SGSI", "Sistema de Gestión de Seguridad de la Información (ISO 27001)."],
  ["SoA", "Declaración de Aplicabilidad: lista de controles del Anexo A, si aplican, justificación y estado."],
  ["No conformidad", "Incumplimiento de un requisito (mayor o menor)."],
  ["Gap analysis", "Análisis de diferencias entre la situación actual y una referencia."],
  ["Three Lines Model", "Modelo de las tres líneas: gestión, supervisión y aseguramiento independiente."],
  ["KRI", "Key Risk Indicator: indicador de alerta temprana de riesgo."],
  ["RACI", "Matriz de responsabilidades: Responsable, Aprobador, Consultado, Informado."],
  ["RGPD", "Reglamento (UE) 2016/679 de protección de datos, aplicable desde 25-05-2018."],
  ["LOPDGDD", "Ley Orgánica 3/2018 de Protección de Datos y garantía de los derechos digitales."],
  ["AEPD", "Agencia Española de Protección de Datos."],
  ["RAT", "Registro de Actividades de Tratamiento (art. 30 RGPD)."],
  ["EIPD / DPIA", "Evaluación de impacto relativa a la protección de datos (art. 35 RGPD)."],
  ["DPO / DPD", "Delegado de Protección de Datos."],
  ["Encargado del tratamiento", "Quien trata datos por cuenta del responsable (contrato art. 28)."],
  ["Brecha de datos", "Incidente que afecta a la confidencialidad, integridad o disponibilidad de datos personales."],
  ["SCC", "Cláusulas contractuales tipo para transferencias internacionales."],
  ["NIS2", "Directiva (UE) 2022/2555 sobre ciberseguridad de entidades esenciales e importantes."],
  ["DORA", "Reglamento (UE) 2022/2554 de resiliencia operativa digital del sector financiero."],
  ["ENS", "Esquema Nacional de Seguridad (Real Decreto 311/2022)."],
  ["AI Act", "Reglamento (UE) 2024/1689 de Inteligencia Artificial."],
  ["CRA", "Cyber Resilience Act, Reglamento (UE) 2024/2847."],
  ["NIST CSF 2.0", "Marco de ciberseguridad del NIST con 6 funciones (incluye Govern)."],
  ["MAGERIT", "Metodología española de análisis y gestión de riesgos; herramienta PILAR."],
  ["Phishing", "Engaño por mensaje que suplanta a alguien de confianza."],
  ["Vishing / Smishing / Quishing", "Variantes por voz, SMS y código QR."],
  ["BEC", "Business Email Compromise: fraude por compromiso o suplantación del correo corporativo (p. ej., fraude del CEO)."],
  ["MFA", "Autenticación multifactor."],
  ["Human Risk Management", "Gestión del riesgo de ciberseguridad originado en comportamientos humanos."],
  ["Cultura justa", "Entorno donde los errores honestos se reportan sin miedo a castigo."],
  ["Tasa de reporte", "% de destinatarios que reportan una simulación o ataque."],
  ["TPRM", "Third Party Risk Management: gestión del riesgo de terceros."],
  ["BIA", "Business Impact Analysis: análisis de impacto en el negocio."],
  ["RTO / RPO", "Tiempo máximo de recuperación / pérdida máxima de datos aceptable."],
  ["Tabletop", "Ejercicio de crisis simulado en sala."],
  ["Título de acción", "Título de diapositiva que expresa la conclusión, no el tema."]
];
