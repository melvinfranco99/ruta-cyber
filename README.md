# Ruta Cyber · GRC, Privacidad y Human Risk

Curso interactivo y gratuito, de principiante a experto, para preparar un puesto **junior de ciberseguridad en consultoría**: *Privacy, Governance & Compliance* y *Cyber Human Risk Management*. Incluye la preparación de la entrevista.

## Contenido

| Nivel | Módulos |
|---|---|
| Básico | 1 Fundamentos · 2 Amenazas · 3 Consultoría |
| Intermedio | 4 GRC · 5 ISO 27001 · 6 Riesgos · 7 RGPD I · 8 RGPD II · 9 NIS2/DORA/ENS/IA/CRA · 10 Human Risk |
| Profesional | 11 Programa de concienciación · 12 Caja de herramientas · 13 Caso práctico · 14 Terceros y continuidad |
| Entrevista | 15 Proceso de selección · 16 Preguntas modelo · 17 Primeros 90 días |

- 17 vídeos narrados (≈ 2 h 20 min) con capítulos, subtítulos y transcripción.
- 12 laboratorios: clasificador CIA, detector de phishing, mapa de riesgos, bases RGPD, evidencias ISO 27001, aplicabilidad normativa, métricas de campañas, radar NIST CSF 2.0, caso LogiPlus, BIA RTO/RPO, constructor STAR y simulador de entrevista.
- 85 preguntas de test, examen final y glosario con flashcards.
- El progreso se guarda en el navegador (localStorage).

## Estructura

```
index.html              SPA estática (sin dependencias)
assets/js/curso.js      lecciones, tests y glosario
assets/js/labs.js       laboratorios interactivos
assets/js/app.js        navegación, vídeos, progreso, examen
assets/js/videos-data.js  datos de vídeos (generado)
videos/                 MP4 + subtítulos VTT + pósters
produccion/             generador de vídeos y guiones
```

## Regenerar los vídeos

```bash
pip install edge-tts pillow   # requiere ffmpeg
python produccion/generar_videos.py        # todos
python produccion/generar_videos.py 05 06  # solo algunos
```

Los guiones están en `produccion/guiones/*.py` (una diapositiva = título + puntos + narración).

> Contenido formativo orientativo (noviembre de 2026). No está afiliado a ninguna firma. Verifica siempre la normativa vigente.
