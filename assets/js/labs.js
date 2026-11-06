/* Laboratorios interactivos */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = {
    get(k, d) { try { const v = localStorage.getItem("rc." + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("rc." + k, JSON.stringify(v)); } catch (e) {} }
  };
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  const LABS = {};

  /* 1 · Clasificador CIA */
  LABS.cia = {
    titulo: "Clasificador CIA", icono: "🧩", modulo: 1, nivel: "Básico",
    desc: "Clasifica cada incidente según la dimensión de seguridad más afectada.",
    render(el) {
      const casos = [
        ["Un comercial pierde un portátil sin cifrar con la base de datos de clientes.", "C", "Terceros podrían acceder a información confidencial."],
        ["Un ataque DDoS deja la web de reservas sin servicio durante 6 horas.", "D", "El servicio no está accesible cuando se necesita."],
        ["Un empleado modifica por error las tarifas en el ERP y se facturan mal 300 pedidos.", "I", "La información deja de ser exacta."],
        ["Un ransomware cifra el servidor de ficheros y no hay copias recientes.", "D", "No se puede acceder a la información (si además roban datos, también C)."],
        ["Un atacante cambia el IBAN de un proveedor en el maestro de proveedores.", "I", "Alteración no autorizada de datos."],
        ["Se publica por error en la web un PDF con DNI de candidatos.", "C", "Divulgación no autorizada de datos personales."],
        ["Un corte eléctrico sin SAI apaga el centro de datos.", "D", "Interrupción del servicio."],
        ["Un becario con permisos excesivos consulta las nóminas de la dirección.", "C", "Acceso no autorizado: falla el mínimo privilegio."],
        ["Alguien borra registros de auditoría para ocultar su actividad.", "I", "Se altera la información (y se pierde la trazabilidad)."]
      ];
      let ok = 0, n = 0;
      el.innerHTML = `<div class="lab-score">Aciertos: <b id="cia-s">0</b> / ${casos.length}</div>` + casos.map((c, i) => `
        <div class="card cia-item" data-i="${i}"><p>${esc(c[0])}</p>
        <div class="btns"><button data-v="C" class="btn sm">Confidencialidad</button><button data-v="I" class="btn sm">Integridad</button><button data-v="D" class="btn sm">Disponibilidad</button></div>
        <p class="fb"></p></div>`).join("");
      $$(".cia-item", el).forEach((card) => card.addEventListener("click", (e) => {
        const b = e.target.closest("button"); if (!b || card.dataset.done) return;
        const c = casos[card.dataset.i]; card.dataset.done = 1; n++;
        const right = b.dataset.v === c[1]; if (right) ok++;
        $$("button", card).forEach((x) => { x.disabled = true; if (x.dataset.v === c[1]) x.classList.add("good"); });
        if (!right) b.classList.add("bad");
        $(".fb", card).innerHTML = (right ? "✅ " : "❌ ") + esc(c[2]);
        $("#cia-s").textContent = ok;
      }));
    }
  };

  /* 2 · Detector de phishing */
  LABS.phishing = {
    titulo: "Detector de phishing", icono: "🎣", modulo: 2, nivel: "Básico",
    desc: "Haz clic en los elementos sospechosos de cada correo y decide si es phishing o legítimo.",
    render(el) {
      const mails = [
        { de: 'Microsoft 365 &lt;<span class="hot" data-e="Dominio falso: rn + icrosoft (rn imita a m).">no-reply@rnicrosoft-support.com</span>&gt;', asunto: '<span class="hot" data-e="Urgencia artificial y amenaza.">⚠️ Su buzón se bloqueará en 2 horas</span>',
          cuerpo: 'Estimado usuario,<br><br>Hemos detectado actividad inusual. <span class="hot" data-e="Saludo genérico + petición de credenciales.">Verifique su contraseña</span> para evitar la suspensión permanente.<br><br><a class="hot" data-e="El texto dice microsoft.com pero el enlace real apunta a otro dominio (pasa el ratón).">https://login.microsoft.com</a> <small class="real">→ enlace real: http://m365-verify.xyz/login</small><br><br>Equipo de Seguridad', phishing: true },
        { de: 'Laura Gómez (Directora Financiera) &lt;<span class="hot" data-e="Dominio personal, no corporativo, para una petición de la directora financiera.">laura.gomez.cfo@gmail.com</span>&gt;', asunto: 'Operación confidencial',
          cuerpo: 'Hola,<br><br>Estamos cerrando una adquisición y <span class="hot" data-e="Confidencialidad: busca que no lo consultes con nadie.">necesito máxima discreción</span>. <span class="hot" data-e="Petición de pago urgente fuera del procedimiento.">Haz hoy una transferencia de 48.500 €</span> a la cuenta que te paso. <span class="hot" data-e="Evita la verificación por otro canal.">No me llames, estoy en reuniones todo el día</span>.<br><br>Gracias,<br>Laura<br><small>Enviado desde mi móvil</small>', phishing: true },
        { de: 'RR. HH. &lt;rrhh@tuempresa.es&gt;', asunto: 'Recordatorio: formación de seguridad del trimestre',
          cuerpo: 'Hola equipo,<br><br>Os recordamos que la formación del trimestre está disponible en la plataforma interna habitual (accede desde la intranet, como siempre). No hace falta que introduzcáis credenciales desde este correo.<br><br>Cualquier duda, en la extensión 4400.<br><br>Un saludo,<br>Recursos Humanos', phishing: false },
        { de: 'Correos Express &lt;<span class="hot" data-e="Dominio que no es el oficial de la empresa de paquetería.">avisos@correos-entregas-es.info</span>&gt;', asunto: 'Su paquete está retenido',
          cuerpo: 'Su envío no ha podido entregarse por <span class="hot" data-e="Pequeño pago: técnica clásica para robar datos de tarjeta.">tasas pendientes de 1,99 €</span>.<br><br><span class="hot" data-e="Código QR: oculta la URL y lleva al móvil, fuera de los controles corporativos (quishing).">Escanee el código QR</span> para pagar y reprogramar la entrega.<br><br><span class="qr">▦▦▦<br>▦ ▦<br>▦▦▦</span>', phishing: true }
      ];
      let tot = 0;
      el.innerHTML = `<p class="muted">Pista: en los correos maliciosos hay varios elementos sospechosos escondidos. ¡Uno de los correos es legítimo!</p><div class="lab-score">Decisiones correctas: <b id="ph-s">0</b> / ${mails.length}</div>` +
        mails.map((m, i) => `<div class="mail card" data-i="${i}">
        <div class="mail-h"><div><small>De:</small> ${m.de}</div><div><small>Asunto:</small> <b>${m.asunto}</b></div></div>
        <div class="mail-b">${m.cuerpo}</div>
        <div class="mail-f"><span class="found">Sospechosos encontrados: <b>0</b> / ${(m.cuerpo + m.de + m.asunto).split('class="hot"').length - 1}</span>
        <div class="btns"><button class="btn sm" data-v="1">🚩 Es phishing</button><button class="btn sm" data-v="0">✅ Es legítimo</button></div></div>
        <div class="fb"></div></div>`).join("");
      $$(".mail", el).forEach((card) => {
        const m = mails[card.dataset.i];
        card.addEventListener("click", (e) => {
          const h = e.target.closest(".hot");
          if (h) { e.preventDefault(); if (!h.classList.contains("on")) { h.classList.add("on"); h.insertAdjacentHTML("afterend", `<span class="why">${h.dataset.e}</span>`); $(".found b", card).textContent = $$(".hot.on", card).length; } return; }
          const b = e.target.closest("button[data-v]"); if (!b || card.dataset.done) return;
          card.dataset.done = 1;
          const right = (b.dataset.v === "1") === m.phishing; if (right) tot++;
          $("#ph-s").textContent = tot;
          b.classList.add(right ? "good" : "bad"); $$("button", card).forEach((x) => (x.disabled = true));
          $$(".hot:not(.on)", card).forEach((h) => { h.classList.add("on"); h.insertAdjacentHTML("afterend", `<span class="why">${h.dataset.e}</span>`); });
          $(".fb", card).innerHTML = right ? "✅ ¡Correcto!" : "❌ Revisa las señales marcadas.";
          if (!m.phishing) $(".fb", card).innerHTML += " Es legítimo: remitente corporativo, sin enlaces, no pide credenciales y remite a canales habituales.";
          else $(".fb", card).innerHTML += " Acción correcta: no interactuar, <b>reportar</b> con el botón de reporte y, si hay petición de pago, verificar por un canal conocido.";
        });
      });
    }
  };

  /* 3 · Calculadora de riesgos */
  LABS.riesgos = {
    titulo: "Calculadora y mapa de riesgos", icono: "🔥", modulo: 6, nivel: "Intermedio",
    desc: "Registra riesgos, valora probabilidad e impacto y visualiza el mapa de calor inherente vs. residual.",
    render(el) {
      const base = [
        { d: "Ransomware cifra las historias clínicas por falta de copias aisladas", p: 4, i: 5, pr: 2, ir: 4, t: "Mitigar: copias inmutables + MFA + parcheo" },
        { d: "Recepcionista envía por error un informe médico a otro paciente", p: 3, i: 4, pr: 2, ir: 3, t: "Mitigar: doble verificación + formación" },
        { d: "Caída del proveedor de agenda online durante días", p: 2, i: 3, pr: 2, ir: 2, t: "Transferir/mitigar: SLA + agenda en papel de contingencia" }
      ];
      let R = store.get("riesgos", base);
      let modo = "inh";
      const lvl = (v) => v >= 15 ? ["Crítico", "r"] : v >= 10 ? ["Alto", "o"] : v >= 5 ? ["Medio", "y"] : ["Bajo", "g"];
      el.innerHTML = `<div class="grid2 risk-lab">
        <form class="card" id="rf"><h4>Nuevo riesgo</h4>
          <label>Descripción (causa + evento + consecuencia)<textarea name="d" required rows="3" placeholder="Debido a… un/a… podría… provocando…"></textarea></label>
          <div class="row"><label>Prob. inherente<select name="p">${[1,2,3,4,5].map(n=>`<option ${n==3?"selected":""}>${n}</option>`).join("")}</select></label>
          <label>Impacto inherente<select name="i">${[1,2,3,4,5].map(n=>`<option ${n==3?"selected":""}>${n}</option>`).join("")}</select></label></div>
          <div class="row"><label>Prob. residual<select name="pr">${[1,2,3,4,5].map(n=>`<option ${n==2?"selected":""}>${n}</option>`).join("")}</select></label>
          <label>Impacto residual<select name="ir">${[1,2,3,4,5].map(n=>`<option ${n==3?"selected":""}>${n}</option>`).join("")}</select></label></div>
          <label>Tratamiento<input name="t" placeholder="Mitigar: …"></label>
          <div class="btns"><button class="btn primary">Añadir</button><button type="button" class="btn ghost" id="rreset">Restaurar ejemplo</button></div>
        </form>
        <div class="card"><div class="seg"><button class="on" data-m="inh">Inherente</button><button data-m="res">Residual</button></div>
          <div class="heat" id="heat"></div><p class="muted small">Eje X: probabilidad · Eje Y: impacto. Los números son los ID de riesgo.</p></div></div>
        <div class="card"><h4>Registro de riesgos</h4><div class="tbl-wrap"><table class="tbl" id="rt"></table></div></div>`;
      const draw = () => {
        store.set("riesgos", R);
        let h = "";
        for (let im = 5; im >= 1; im--) {
          h += `<div class="ax">${im}</div>`;
          for (let p = 1; p <= 5; p++) {
            const ids = R.map((r, k) => ((modo === "inh" ? r.p == p && r.i == im : r.pr == p && r.ir == im) ? k + 1 : 0)).filter(Boolean);
            h += `<div class="cell ${lvl(p * im)[1]}">${ids.map((x) => `<span>R${x}</span>`).join("")}</div>`;
          }
        }
        h += `<div></div>` + [1,2,3,4,5].map((n) => `<div class="ax">${n}</div>`).join("");
        $("#heat").innerHTML = h;
        $("#rt").innerHTML = `<tr><th>ID</th><th>Riesgo</th><th>Inherente</th><th>Residual</th><th>Tratamiento</th><th></th></tr>` + R.map((r, k) => {
          const a = r.p * r.i, b = r.pr * r.ir;
          return `<tr><td>R${k + 1}</td><td>${esc(r.d)}</td><td><span class="pill ${lvl(a)[1]}">${a} ${lvl(a)[0]}</span></td><td><span class="pill ${lvl(b)[1]}">${b} ${lvl(b)[0]}</span></td><td>${esc(r.t || "")}</td><td><button class="btn xs ghost" data-del="${k}">✕</button></td></tr>`;
        }).join("");
      };
      $("#rf").addEventListener("submit", (e) => { e.preventDefault(); const f = new FormData(e.target); R.push(Object.fromEntries(f)); e.target.reset(); draw(); });
      $("#rreset").onclick = () => { R = base.slice(); draw(); };
      $("#rt").addEventListener("click", (e) => { const b = e.target.closest("[data-del]"); if (b) { R.splice(+b.dataset.del, 1); draw(); } });
      $$(".seg button", el).forEach((b) => b.onclick = () => { modo = b.dataset.m; $$(".seg button", el).forEach((x) => x.classList.toggle("on", x === b)); draw(); });
      draw();
    }
  };

  /* 4 · Clasificador RGPD */
  LABS.rgpd = {
    titulo: "Bases de legitimación RGPD", icono: "⚖️", modulo: 7, nivel: "Intermedio",
    desc: "Elige la base de legitimación más adecuada para cada tratamiento (art. 6 RGPD).",
    render(el) {
      const B = ["Consentimiento", "Contrato", "Obligación legal", "Intereses vitales", "Interés público", "Interés legítimo"];
      const casos = [
        ["Una tienda online usa la dirección del cliente para enviarle el pedido.", 1, "Es necesario para ejecutar el contrato de compraventa."],
        ["Una empresa conserva las facturas durante los plazos fiscales.", 2, "Lo exige la normativa fiscal y mercantil."],
        ["Un hospital facilita datos de un paciente inconsciente a urgencias de otro centro.", 3, "Protege un interés esencial para la vida del interesado."],
        ["Una marca envía su newsletter comercial a personas que no son clientes.", 0, "Comunicaciones comerciales a no clientes: consentimiento (LSSI)."],
        ["Un banco analiza transacciones para detectar fraude.", 5, "Interés legítimo (con ponderación) y, en parte, obligaciones legales de prevención."],
        ["Un ayuntamiento gestiona el padrón municipal.", 4, "Ejercicio de poderes públicos / misión de interés público."],
        ["La empresa registra la jornada diaria de sus empleados.", 2, "Obligación legal (Estatuto de los Trabajadores, art. 34.9)."],
        ["Una app de fitness usa la ubicación GPS del usuario para publicidad personalizada de terceros.", 0, "No es necesaria para el servicio: requiere consentimiento."]
      ];
      let ok = 0;
      el.innerHTML = `<div class="lab-score">Aciertos: <b id="rg-s">0</b> / ${casos.length}</div>` + casos.map((c, i) => `<div class="card rg" data-i="${i}"><p>${esc(c[0])}</p><div class="btns wrap">${B.map((b, k) => `<button class="btn sm" data-v="${k}">${b}</button>`).join("")}</div><p class="fb"></p></div>`).join("");
      $$(".rg", el).forEach((card) => card.addEventListener("click", (e) => {
        const b = e.target.closest("button"); if (!b || card.dataset.done) return;
        card.dataset.done = 1; const c = casos[card.dataset.i]; const right = +b.dataset.v === c[1];
        if (right) ok++; $("#rg-s").textContent = ok;
        $$("button", card).forEach((x) => { x.disabled = true; if (+x.dataset.v === c[1]) x.classList.add("good"); });
        if (!right) b.classList.add("bad");
        $(".fb", card).innerHTML = (right ? "✅ " : "❌ ") + esc(c[2]);
      }));
    }
  };

  /* 5 · Evidencias ISO 27001 */
  LABS.evidencias = {
    titulo: "¿Qué evidencia pedirías?", icono: "🗂️", modulo: 5, nivel: "Intermedio",
    desc: "Relaciona cada control de ISO 27001:2022 con la evidencia que pedirías en una auditoría.",
    render(el) {
      const pares = [
        ["5.1 Políticas de seguridad de la información", "Política aprobada y firmada por la dirección, con fecha de revisión"],
        ["6.3 Concienciación, educación y formación", "Plan anual de formación, registros de finalización y resultados de simulaciones"],
        ["5.18 Derechos de acceso", "Revisión periódica de accesos firmada y tickets de bajas de usuarios"],
        ["8.13 Copias de seguridad", "Política de copias y registro de la última prueba de restauración"],
        ["5.19 Seguridad en la relación con proveedores", "Inventario de proveedores con criticidad y cuestionarios de seguridad evaluados"],
        ["5.24 Planificación de la gestión de incidentes", "Procedimiento aprobado y registro de incidentes con lecciones aprendidas"],
        ["7.7 Mesas y pantallas limpias", "Política comunicada y resultados de rondas de verificación en oficinas"]
      ];
      const ops = shuffle(pares.map((p) => p[1]));
      el.innerHTML = `<div class="card">${pares.map((p, i) => `<div class="match"><b>${p[0]}</b><select data-i="${i}"><option value="">— Elige evidencia —</option>${ops.map((o) => `<option>${esc(o)}</option>`).join("")}</select><span class="mk"></span></div>`).join("")}
        <div class="btns"><button class="btn primary" id="ev-c">Comprobar</button></div><p id="ev-r" class="fb"></p></div>`;
      $("#ev-c").onclick = () => {
        let ok = 0;
        $$("select", el).forEach((s) => { const r = s.value === pares[s.dataset.i][1]; if (r) ok++; s.nextElementSibling.textContent = r ? "✅" : "❌"; s.classList.toggle("badsel", !r); });
        $("#ev-r").innerHTML = `${ok} / ${pares.length} correctas. ${ok === pares.length ? "¡Piensas como un auditor! 🎉" : "Revisa las marcadas: piensa en qué <b>registro</b> demuestra que el control funciona."}`;
      };
    }
  };

  /* 6 · ¿Qué norma aplica? */
  LABS.normas = {
    titulo: "¿Qué normas me aplican?", icono: "🧭", modulo: 9, nivel: "Intermedio",
    desc: "Marca las características de una organización y descubre qué normas y marcos le aplican (orientativo).",
    render(el) {
      const F = [
        ["pub", "Es una administración u organismo del sector público español"],
        ["provpub", "Presta servicios TIC a una administración pública española"],
        ["fin", "Es una entidad financiera (banco, aseguradora, entidad de pago, gestora…)"],
        ["ictfin", "Es proveedor TIC crítico de entidades financieras"],
        ["nis", "Opera en un sector NIS2 (energía, transporte, salud, agua, digital, fabricación, alimentación…)"],
        ["med", "Tiene ≥ 50 empleados o > 10 M€ de facturación"],
        ["datos", "Trata datos personales (clientes, empleados…)"],
        ["esp", "Trata categorías especiales a gran escala (salud, biometría…)"],
        ["prod", "Fabrica o vende productos con elementos digitales (hardware/software)"],
        ["ia", "Desarrolla o usa sistemas de IA en procesos como selección o crédito"],
        ["cli", "Sus grandes clientes le exigen demostrar seguridad"]
      ];
      el.innerHTML = `<div class="grid2"><div class="card">${F.map((f) => `<label class="chk"><input type="checkbox" value="${f[0]}"> ${f[1]}</label>`).join("")}
        <p class="muted small">Ejemplos rápidos: <button class="link" data-p="pub,datos,nis,med,esp">Hospital público</button> · <button class="link" data-p="fin,datos,med">Aseguradora</button> · <button class="link" data-p="prod,datos">Fabricante de cámaras</button> · <button class="link" data-p="provpub,datos,cli,med">Integrador TIC</button></p></div>
        <div class="card"><h4>Resultado</h4><div id="nr"><p class="muted">Marca alguna característica.</p></div></div></div>`;
      const calc = () => {
        const s = new Set($$("input:checked", el).map((x) => x.value)); const out = [];
        if (s.has("datos")) out.push(["RGPD + LOPDGDD", "Trata datos personales: principios, RAT, derechos, brechas en 72 h."]);
        if (s.has("esp")) out.push(["DPO + EIPD probables", "Categorías especiales a gran escala: delegado de protección de datos y evaluaciones de impacto."]);
        if (s.has("pub") || s.has("provpub")) out.push(["ENS (RD 311/2022)", "Sector público y sus proveedores: categorización y conformidad/certificación."]);
        if (s.has("fin") || s.has("ictfin")) out.push(["DORA", s.has("fin") ? "Entidad financiera: 5 pilares desde el 17-01-2025." : "Proveedor TIC: cláusulas contractuales DORA y posible supervisión si es crítico."]);
        if (s.has("nis") && (s.has("med") || s.has("pub"))) out.push(["NIS2 (ley nacional de transposición)", "Probable entidad esencial o importante: gestión de riesgos, notificación 24/72 h/1 mes, responsabilidad de la dirección."]);
        else if (s.has("nis")) out.push(["NIS2: revisar", "Por tamaño podría quedar fuera, salvo excepciones (p. ej., proveedor único o crítico)."]);
        if (s.has("prod")) out.push(["Cyber Resilience Act", "Seguridad desde el diseño, gestión de vulnerabilidades; notificación desde sep-2026."]);
        if (s.has("ia")) out.push(["Reglamento de IA", "Posible sistema de alto riesgo: gestión de riesgos, documentación y supervisión humana."]);
        if (s.has("cli") || s.has("provpub")) out.push(["ISO 27001 (voluntaria)", "Certificación para demostrar madurez a clientes."]);
        if (s.size) out.push(["Marco de apoyo", "NIST CSF 2.0 para medir madurez y comunicar a dirección; marco unificado de controles para cumplir varias normas a la vez."]);
        $("#nr").innerHTML = out.length ? out.map((o) => `<div class="res"><b>${o[0]}</b><p>${o[1]}</p></div>`).join("") + `<p class="muted small">Herramienta orientativa con fines formativos. La aplicabilidad real requiere un análisis jurídico.</p>` : `<p class="muted">Marca alguna característica.</p>`;
      };
      el.addEventListener("change", calc);
      $$("[data-p]", el).forEach((b) => b.onclick = () => { const p = b.dataset.p.split(","); $$("input", el).forEach((i) => (i.checked = p.includes(i.value))); calc(); });
    }
  };

  /* 7 · Métricas de campaña */
  LABS.campana = {
    titulo: "Analizador de campañas de phishing", icono: "📊", modulo: 11, nivel: "Profesional",
    desc: "Introduce los datos de una simulación y obtén las métricas e interpretación para el informe a dirección.",
    render(el) {
      el.innerHTML = `<div class="grid2"><form class="card" id="cf"><h4>Datos de la campaña</h4>
        <div class="row"><label>Enviados<input type="number" name="env" value="1200" min="1"></label><label>Clics<input type="number" name="cli" value="264" min="0"></label></div>
        <div class="row"><label>Credenciales introducidas<input type="number" name="cre" value="96" min="0"></label><label>Reportes<input type="number" name="rep" value="72" min="0"></label></div>
        <div class="row"><label>Minutos hasta el 1.er reporte<input type="number" name="t1" value="14" min="0"></label><label>Dificultad<select name="dif"><option>Baja</option><option selected>Media</option><option>Alta</option></select></label></div>
        <p class="muted small">Valores de ejemplo: línea base de LogiPlus (caso del módulo 13).</p></form>
        <div class="card"><h4>Resultados</h4><div id="cr"></div></div></div>`;
      const calc = () => {
        const f = Object.fromEntries(new FormData($("#cf"))); const env = Math.max(1, +f.env);
        const c = (+f.cli / env) * 100, cr = (+f.cre / env) * 100, r = (+f.rep / env) * 100, ratio = +f.cli ? +f.rep / +f.cli : 0;
        const bar = (lab, v, cls) => `<div class="bars"><div><span>${lab}</span><i class="${cls}" style="--v:${Math.min(100, v)}%"></i><b>${v.toFixed(1)} %</b></div></div>`;
        let msg = [];
        msg.push(r > c ? "✅ La tasa de reporte supera a la de clic: la capa humana de detección funciona." : "⚠️ La tasa de clic supera a la de reporte: prioriza fomentar y facilitar el reporte.");
        if (cr > 5) msg.push("⚠️ Más del 5 % introdujo credenciales: refuerza MFA y formación just-in-time en la página de aterrizaje.");
        if (+f.t1 <= 10) msg.push("✅ Primer reporte rápido: buena capacidad de alerta temprana."); else msg.push("ℹ️ El primer reporte tarda más de 10 min: un botón de reporte más visible ayudaría.");
        if (f.dif === "Alta" && c < 15) msg.push("👏 Buen resultado para una dificultad alta.");
        $("#cr").innerHTML = bar("Tasa de clic", c, "r") + bar("Credenciales", cr, "o") + bar("Tasa de reporte", r, "g") +
          `<p><b>Ratio reporte/clic:</b> ${ratio.toFixed(2)} · <b>Dificultad:</b> ${esc(f.dif)}</p><ul>${msg.map((m) => `<li>${m}</li>`).join("")}</ul>
          <div class="callout"><b>Titular sugerido:</b> “${r.toFixed(0)} % de la plantilla reportó la simulación frente a un ${c.toFixed(0)} % que hizo clic; ${r > c ? "la cultura de reporte se consolida" : "el foco del próximo trimestre será el reporte"}.”</div>`;
      };
      $("#cf").addEventListener("input", calc); calc();
    }
  };

  /* 8 · Madurez NIST CSF 2.0 */
  LABS.madurez = {
    titulo: "Autoevaluación de madurez (NIST CSF 2.0)", icono: "🕸️", modulo: 12, nivel: "Profesional",
    desc: "Valora de 0 a 5 cada función del NIST CSF 2.0 y obtén un gráfico radar como el que presentarías a dirección.",
    render(el) {
      const FN = [["Govern", "Gobernar", "Estrategia, roles, políticas, cadena de suministro"], ["Identify", "Identificar", "Inventario de activos, análisis de riesgos"], ["Protect", "Proteger", "Identidades, formación, datos, plataformas"], ["Detect", "Detectar", "Monitorización y análisis de eventos"], ["Respond", "Responder", "Gestión, análisis y comunicación de incidentes"], ["Recover", "Recuperar", "Planes de recuperación y comunicación"]];
      let V = store.get("madurez", [2, 2, 3, 1, 2, 1]), T = 3;
      el.innerHTML = `<div class="grid2"><div class="card">${FN.map((f, i) => `<label class="slider"><span><b>${f[1]}</b> <small>(${f[0]})</small><br><small class="muted">${f[2]}</small></span><input type="range" min="0" max="5" step="1" value="${V[i]}" data-i="${i}"><output>${V[i]}</output></label>`).join("")}
        <label class="slider"><span><b>Objetivo</b></span><input type="range" min="1" max="5" value="3" id="mt"><output>3</output></label></div>
        <div class="card"><svg viewBox="0 0 320 300" id="radar" role="img" aria-label="Gráfico radar de madurez"></svg><div id="mr"></div></div></div>`;
      const draw = () => {
        store.set("madurez", V);
        const cx = 160, cy = 150, R = 110, n = 6, pt = (i, v) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / n; return [cx + Math.cos(a) * R * v / 5, cy + Math.sin(a) * R * v / 5]; };
        let s = "";
        for (let k = 1; k <= 5; k++) s += `<polygon points="${[...Array(n)].map((_, i) => pt(i, k).join(",")).join(" ")}" class="rg-grid"/>`;
        FN.forEach((f, i) => { const [x, y] = pt(i, 5); const [lx, ly] = pt(i, 6.1); s += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" class="rg-grid"/><text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle" class="rg-lab">${f[1]}</text>`; });
        s += `<polygon points="${[...Array(n)].map((_, i) => pt(i, T).join(",")).join(" ")}" class="rg-target"/>`;
        s += `<polygon points="${V.map((v, i) => pt(i, v).join(",")).join(" ")}" class="rg-val"/>`;
        V.forEach((v, i) => { const [x, y] = pt(i, v); s += `<circle cx="${x}" cy="${y}" r="4" class="rg-dot"/>`; });
        $("#radar").innerHTML = s;
        const avg = V.reduce((a, b) => a + b, 0) / n; const low = FN.map((f, i) => [f[1], V[i]]).filter((x) => x[1] < T).sort((a, b) => a[1] - b[1]);
        $("#mr").innerHTML = `<p><span class="lgd val"></span> Actual · <span class="lgd tgt"></span> Objetivo</p><p><b>Madurez media:</b> ${avg.toFixed(1)} / 5</p>` + (low.length ? `<p><b>Prioridades (por debajo del objetivo):</b> ${low.map((l) => `${l[0]} (${l[1]})`).join(", ")}</p><div class="callout"><b>Título de acción:</b> “La madurez media es ${avg.toFixed(1)}/5; ${low[0][0]} es la función más débil y debe priorizarse en la hoja de ruta”.</div>` : `<p>✅ Todas las funciones alcanzan el objetivo.</p>`);
      };
      el.addEventListener("input", (e) => { if (e.target.id === "mt") T = +e.target.value; else if (e.target.dataset.i) V[+e.target.dataset.i] = +e.target.value; e.target.nextElementSibling.textContent = e.target.value; draw(); });
      draw();
    }
  };

  /* 9 · Caso LogiPlus */
  LABS.caso = {
    titulo: "Resuelve el caso LogiPlus", icono: "🚚", modulo: 13, nivel: "Profesional",
    desc: "Responde como el analista del proyecto y compara con la solución modelo.",
    render(el) {
      const P = [
        ["Escribe 5 documentos que incluirías en la lista de peticiones inicial.", "Organigrama y roles de seguridad; políticas y procedimientos vigentes; inventario de sistemas y activos; contratos con proveedores críticos (y de encargo); RAT; registros de formación y simulaciones previas; informes de auditoría o incidentes (incluido el del fraude)."],
        ["Redacta el riesgo del fraude del CEO con la fórmula causa–evento–consecuencia y valóralo.", "“Debido a la ausencia de un procedimiento de verificación por segundo canal de pagos y cambios de cuenta bancaria, un atacante podría suplantar a un directivo o proveedor y conseguir una transferencia fraudulenta, provocando pérdidas económicas significativas y daño reputacional.” P4 × I5 = 20 (crítico, ya se ha materializado)."],
        ["Propón 3 controles para ese riesgo: uno de proceso, uno de personas y uno tecnológico.", "Proceso: doble verificación por canal conocido + doble aprobación por encima de un umbral. Personas: taller específico de fraude del CEO y vishing para finanzas, con simulación. Tecnología: alerta en el ERP ante cambios de IBAN, etiquetado de correos externos, DMARC/SPF/DKIM."],
        ["¿Qué problema de privacidad ves en la geolocalización de conductores y cómo lo abordarías?", "Seguimiento fuera de la jornada: desproporcionado (minimización, art. 87–90 LOPDGDD). EIPD, limitar la geolocalización al horario laboral, informar a los conductores y a su representación, definir accesos y plazos de conservación."],
        ["Escribe el titular (título de acción) de la diapositiva de diagnóstico para el comité.", "“LogiPlus cumple el 35 % de los requisitos de gobierno de ISO 27001; cerrar proveedores, continuidad y la verificación de pagos es imprescindible para certificar en 12 meses”."]
      ];
      const saved = store.get("caso", {});
      el.innerHTML = P.map((p, i) => `<div class="card"><h4>${i + 1}. ${p[0]}</h4><textarea rows="4" data-i="${i}" placeholder="Tu respuesta…">${esc(saved[i] || "")}</textarea><details><summary>Ver solución modelo</summary><p>${esc(p[1])}</p></details></div>`).join("");
      el.addEventListener("input", (e) => { if (e.target.dataset.i) { saved[e.target.dataset.i] = e.target.value; store.set("caso", saved); } });
    }
  };

  /* 10 · BIA */
  LABS.bia = {
    titulo: "Calculadora BIA: RTO y RPO", icono: "⏱️", modulo: 14, nivel: "Profesional",
    desc: "Estima el impacto de una parada y comprueba si tu estrategia de copias cumple el RPO.",
    render(el) {
      el.innerHTML = `<div class="grid2"><form class="card" id="bf"><h4>Proceso: tienda online</h4>
        <div class="row"><label>Facturación por hora (€)<input type="number" name="fh" value="12000"></label><label>Coste fijo del incidente (€)<input type="number" name="cf" value="20000"></label></div>
        <div class="row"><label>RTO objetivo (horas)<input type="number" name="rto" value="4" step="0.5" min="0"></label><label>RPO objetivo (minutos)<input type="number" name="rpo" value="30" min="0"></label></div>
        <label>Frecuencia actual de copia/replicación (minutos)<input type="number" name="bk" value="1440" min="1"></label></form>
        <div class="card"><h4>Impacto según duración de la parada</h4><div id="br"></div></div></div>`;
      const calc = () => {
        const f = Object.fromEntries([...new FormData($("#bf"))].map(([k, v]) => [k, +v]));
        const hs = [1, 4, 8, 24, 72]; const max = f.cf + f.fh * 72;
        let h = hs.map((x) => { const v = f.cf + f.fh * x; return `<div class="bars"><div><span>${x} h</span><i class="${x <= f.rto ? "g" : "r"}" style="--v:${(v / max) * 100}%"></i><b>${v.toLocaleString("es-ES")} €</b></div></div>`; }).join("");
        const ok = f.bk <= f.rpo;
        h += `<p><b>Pérdida estimada si se cumple el RTO (${f.rto} h):</b> ${(f.cf + f.fh * f.rto).toLocaleString("es-ES")} €</p>`;
        h += `<div class="callout ${ok ? "tip" : ""}">${ok ? "✅ La frecuencia de copia cumple el RPO." : `❌ Con copias cada ${f.bk} min podrías perder hasta ${f.bk} min de pedidos; el RPO exige como máximo ${f.rpo} min → replicación o copias más frecuentes.`}</div>
          <p class="muted small">Regla: RPO = cuántos datos puedes perder (frecuencia de copia). RTO = cuánto tiempo puedes estar parado (capacidad de recuperación).</p>`;
        $("#br").innerHTML = h;
      };
      $("#bf").addEventListener("input", calc); calc();
    }
  };

  /* 11 · Constructor STAR */
  LABS.star = {
    titulo: "Constructor de respuestas STAR", icono: "⭐", modulo: 15, nivel: "Entrevista",
    desc: "Escribe tus historias con el método STAR, mide su duración y guárdalas para repasar.",
    render(el) {
      const Q = ["Cuéntame una vez en la que tomaste la iniciativa.", "Cuéntame un error que cometiste y qué aprendiste.", "Háblame de un conflicto en un equipo.", "Una vez que tuviste que aprender algo muy rápido.", "Un reto analítico que resolviste.", "Una vez que explicaste algo técnico a alguien no técnico.", "Una situación en la que trabajaste bajo presión."];
      let H = store.get("star", []);
      el.innerHTML = `<div class="grid2"><form class="card" id="sf"><label>Pregunta<select name="q">${Q.map((q) => `<option>${q}</option>`).join("")}</select></label>
        <label><b>S</b>ituación<textarea name="s" rows="2" placeholder="En mi tercer curso, en un proyecto de 5 personas…"></textarea></label>
        <label><b>T</b>area<textarea name="t" rows="2" placeholder="Mi responsabilidad era…"></textarea></label>
        <label><b>A</b>cción (en primera persona)<textarea name="a" rows="4" placeholder="Yo propuse… organicé… analicé…"></textarea></label>
        <label><b>R</b>esultado (con datos) y aprendizaje<textarea name="r" rows="2" placeholder="Entregamos 4 días antes, nota de 9; aprendí que…"></textarea></label>
        <div class="btns"><button class="btn primary">Guardar historia</button></div></form>
        <div class="card"><h4>Vista previa</h4><div id="sp" class="answer"></div><div id="sc"></div><h4>Mis historias</h4><div id="sl"></div></div></div>`;
      const prev = () => {
        const f = Object.fromEntries(new FormData($("#sf"))); const txt = [f.s, f.t, f.a, f.r].filter(Boolean).join(" ");
        const w = txt.split(/\s+/).filter(Boolean).length, sec = Math.round((w / 140) * 60);
        $("#sp").textContent = txt || "Empieza a escribir…";
        const chk = [[w >= 180 && w <= 330, `Duración: ~${sec} s (ideal 90–120 s)`], [/\b(yo|propuse|organicé|decidí|analicé|diseñé|lideré|hice|preparé)\b/i.test(f.a), "La acción está en primera persona"], [/\d/.test(f.r), "El resultado incluye datos"], [/aprend/i.test(f.r), "Incluye un aprendizaje"], [(f.a || "").length > (f.s || "").length, "La acción es más larga que la situación"]];
        $("#sc").innerHTML = `<ul class="checks">${chk.map((c) => `<li class="${c[0] ? "ok" : "ko"}">${c[0] ? "✅" : "⬜"} ${c[1]}</li>`).join("")}</ul>`;
      };
      const list = () => { store.set("star", H); $("#sl").innerHTML = H.length ? H.map((h, i) => `<details class="saved"><summary>${esc(h.q)}</summary><p>${esc([h.s, h.t, h.a, h.r].join(" "))}</p><button class="btn xs ghost" data-d="${i}">Eliminar</button></details>`).join("") : `<p class="muted">Aún no has guardado historias. Objetivo: 6–8.</p>`; };
      $("#sf").addEventListener("input", prev);
      $("#sf").addEventListener("submit", (e) => { e.preventDefault(); H.push(Object.fromEntries(new FormData(e.target))); e.target.reset(); prev(); list(); });
      $("#sl").addEventListener("click", (e) => { const b = e.target.closest("[data-d]"); if (b) { H.splice(+b.dataset.d, 1); list(); } });
      prev(); list();
    }
  };

  /* 12 · Simulador de entrevista */
  const PREGUNTAS = [
    ["Motivación", "Háblame de ti.", "Presente (quién eres, qué estudias) → pasado (2 experiencias con logros) → futuro (por qué este puesto). ~90 s. Cierra conectando con Privacy GRC o Human Risk."],
    ["Motivación", "¿Por qué ciberseguridad y por qué esta área?", "Experiencia personal → la mayoría de incidentes son de procesos/personas → el área une análisis, regulación y personas → mercado (NIS2, DORA, AI Act, Human Risk basado en datos) → qué aportas."],
    ["Motivación", "¿Por qué una consultora como Deloitte?", "Variedad de sectores y proyectos, aprendizaje acelerado, equipo de +1.500 profesionales de Cyber, cultura de feedback y formación, impacto en grandes organizaciones. Menciona algo concreto que hayas investigado."],
    ["Motivación", "¿Dónde te ves en tres años?", "Con base sólida en GRC/privacidad o riesgo humano, una o dos certificaciones (ISO 27001, CIPP/E), liderando partes de proyectos y apoyando a nuevos juniors."],
    ["Técnica GRC", "¿Qué es la tríada CIA? Pon un ejemplo de cada dimensión.", "Confidencialidad (Excel de nóminas enviado por error), integridad (cambio de IBAN), disponibilidad (ransomware). Menciona autenticidad y trazabilidad del ENS."],
    ["Técnica GRC", "Diferencia entre amenaza, vulnerabilidad y riesgo.", "Amenaza: phishing. Vulnerabilidad: no hay MFA. Riesgo: probabilidad de robo de credenciales × impacto de acceso a datos de clientes."],
    ["Técnica GRC", "¿Qué es ISO 27001 y cómo se estructura?", "Norma certificable de SGSI basada en riesgos y PDCA; cláusulas 4–10 obligatorias; Anexo A con 93 controles en 4 temas; SoA; certificado 3 años."],
    ["Técnica GRC", "¿Cómo harías un análisis de riesgos?", "6 pasos: contexto y escalas, identificar, analizar (P×I), evaluar frente al apetito, tratar (mitigar/transferir/evitar/aceptar), monitorizar. Ejemplo concreto."],
    ["Técnica GRC", "Explica el modelo de las tres líneas.", "1.ª: negocio y TI gestionan; 2.ª: riesgos/cumplimiento supervisan; 3.ª: auditoría interna aseguramiento independiente."],
    ["Técnica GRC", "¿Qué es NIS2 y qué cambia para las empresas?", "Directiva 2022/2555; más sectores; esenciales e importantes; medidas art. 21; notificación 24 h/72 h/1 mes; responsabilidad de la dirección; multas hasta 10 M€/2 %."],
    ["Técnica GRC", "¿Qué es DORA?", "Reglamento 2022/2554, sector financiero, aplicable desde 17-01-2025; 5 pilares: riesgo TIC, incidentes, pruebas, terceros TIC, intercambio de información."],
    ["Privacidad", "¿Cuáles son los principios del RGPD?", "Licitud, lealtad y transparencia; limitación de la finalidad; minimización; exactitud; limitación del plazo; integridad y confidencialidad; responsabilidad proactiva."],
    ["Privacidad", "¿Qué harías ante una brecha de datos personales?", "Contener, evaluar riesgo (datos, personas, consecuencias), notificar a la AEPD en 72 h si hay riesgo, comunicar a afectados si es alto, registrar siempre, lecciones aprendidas."],
    ["Privacidad", "¿Cuándo es necesaria una EIPD?", "Cuando un tratamiento probablemente suponga alto riesgo: perfilado a gran escala, categorías especiales a gran escala, videovigilancia sistemática, biometría, IA. Listas de la AEPD."],
    ["Privacidad", "Diferencia entre responsable y encargado.", "Responsable decide fines y medios; encargado trata por su cuenta según instrucciones, con contrato art. 28. Ej.: empresa y gestoría de nóminas."],
    ["Human Risk", "¿Cómo medirías si un programa de concienciación funciona?", "Más allá del % completado: tasa de reporte, tasa de clic por dificultad, tiempo al primer reporte, reincidentes, reportes reales, encuesta de cultura; tendencias y por colectivo."],
    ["Human Risk", "El 30 % de la plantilla ha hecho clic en una simulación. ¿Qué harías?", "No culpar; analizar dificultad, colectivos, patrones; mirar reporte; formación just-in-time y por rol; botón de reporte; MFA y procesos; medir tendencia y comunicar."],
    ["Human Risk", "¿Cómo diseñarías una simulación de phishing ética?", "Escenario realista sin cebos crueles; dificultad documentada; landing educativa; coordinación con RR. HH., legal, DPO y soporte; informes agregados; seguimiento para apoyar, no castigar."],
    ["Human Risk", "Explica el phishing a alguien de 70 años.", "Analogía de carta falsa del banco: parece real, mete prisa, pide algo. Regla: si es urgente y raro, para, verifica por otro canal y avisa."],
    ["Caso", "Un cliente quiere certificarse en ISO 27001 en 9 meses. ¿Por dónde empiezas?", "Aclarar motivo, plazo, alcance y punto de partida → gap analysis → riesgos, tratamiento, SoA → implantación priorizada y formación → auditoría interna, revisión por dirección → certificación fases 1 y 2."],
    ["Caso", "Un banco te pregunta si le aplica NIS2 o DORA.", "DORA es lex specialis para el sector financiero en riesgo TIC; NIS2 sigue aplicando en aspectos no cubiertos. Análisis de aplicabilidad y marco unificado de controles."],
    ["Comportamiento", "Cuéntame un error que cometiste.", "Error real, asumir responsabilidad, cómo lo corregiste, qué cambiaste (proceso/checklist) y resultado posterior."],
    ["Comportamiento", "Háblame de un conflicto en un equipo.", "Escucha, datos objetivos, propuesta de acuerdo, resultado y aprendizaje. Nunca hables mal de nadie."],
    ["Comportamiento", "¿Cómo gestionas varias tareas con el mismo plazo?", "Priorizar por impacto y urgencia, comunicar pronto a los implicados, negociar plazos, pedir ayuda si es necesario."],
    ["English", "Tell me about yourself.", "Present (studies) → past (two relevant experiences with results) → future (why cyber risk/privacy and this role). Around 90 seconds."],
    ["English", "Why do you want to work in cyber risk and privacy?", "“I enjoy combining analysis, regulation and people. Most incidents start with processes or human behaviour, and regulations like NIS2 and DORA make this area key for businesses.”"],
    ["English", "What is the difference between a risk and a vulnerability?", "“A vulnerability is a weakness, like missing MFA. A risk combines the likelihood that a threat exploits it and the business impact.”"],
    ["English", "How would you handle a client who does not provide evidence on time?", "“I would follow up politely with a clear list and deadline, offer help to find the documents, and escalate to my manager if it puts the project timeline at risk.”"]
  ];
  LABS.entrevista = {
    titulo: "Simulador de entrevista", icono: "🎤", modulo: 16, nivel: "Entrevista",
    desc: "Pregunta aleatoria, 2 minutos para responder en voz alta y respuesta modelo para comparar.",
    render(el) {
      const cats = [...new Set(PREGUNTAS.map((p) => p[0]))];
      let cur = null, timer = null, left = 120; const stats = store.get("entrev", { n: 0, bien: 0 });
      el.innerHTML = `<div class="card sim"><div class="btns wrap" id="cats"><button class="btn sm on" data-c="">Todas</button>${cats.map((c) => `<button class="btn sm" data-c="${c}">${c}</button>`).join("")}</div>
        <div class="sim-q"><span class="pill" id="qc">—</span><h3 id="qt">Pulsa “Nueva pregunta” y responde en voz alta.</h3><div class="clock" id="clk">2:00</div></div>
        <div class="btns"><button class="btn primary" id="nq">🎲 Nueva pregunta</button><button class="btn" id="st">▶️ Iniciar 2 min</button><button class="btn ghost" id="sh">👀 Ver respuesta modelo</button></div>
        <div id="ma" class="answer hidden"></div>
        <div id="rate" class="btns hidden"><span>¿Qué tal te ha salido?</span><button class="btn sm" data-r="1">💪 Bien</button><button class="btn sm" data-r="0">🔁 A repetir</button></div>
        <p class="muted small" id="stt"></p></div>`;
      let cat = "";
      const upd = () => ($("#stt").textContent = `Has practicado ${stats.n} preguntas · ${stats.bien} bien.`);
      const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
      const stop = () => { clearInterval(timer); timer = null; $("#st").textContent = "▶️ Iniciar 2 min"; };
      $("#cats").onclick = (e) => { const b = e.target.closest("button"); if (!b) return; cat = b.dataset.c; $$("#cats button").forEach((x) => x.classList.toggle("on", x === b)); };
      $("#nq").onclick = () => { const pool = PREGUNTAS.filter((p) => !cat || p[0] === cat); cur = pool[Math.floor(Math.random() * pool.length)]; $("#qc").textContent = cur[0]; $("#qt").textContent = cur[1]; $("#ma").classList.add("hidden"); $("#rate").classList.add("hidden"); stop(); left = 120; $("#clk").textContent = "2:00"; $("#clk").classList.remove("over"); };
      $("#st").onclick = () => { if (!cur) return; if (timer) return stop(); $("#st").textContent = "⏸️ Pausar"; timer = setInterval(() => { left--; $("#clk").textContent = fmt(Math.max(0, left)); if (left <= 0) { stop(); $("#clk").classList.add("over"); } }, 1000); };
      $("#sh").onclick = () => { if (!cur) return; stop(); $("#ma").innerHTML = `<b>Claves de una buena respuesta:</b><br>${esc(cur[2])}`; $("#ma").classList.remove("hidden"); $("#rate").classList.remove("hidden"); };
      $("#rate").onclick = (e) => { const b = e.target.closest("[data-r]"); if (!b) return; stats.n++; stats.bien += +b.dataset.r; store.set("entrev", stats); upd(); $("#rate").classList.add("hidden"); };
      upd();
    }
  };

  window.LABS = LABS;
  window.LAB_UTILS = { $, $$, esc, store, shuffle };
})();
