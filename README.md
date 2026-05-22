# Hillel Access — Landing Page

Landing page del programa **Hillel Access** de la Fundación Hillel Argentina. Incluye información del programa, beneficios, FAQ e inscripción que envía respuestas al [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSfzz82_AfHbaAyhL30g9cfes42sk_UME96Q0dlip-XPJCduxQ/viewform) de forma transparente para el usuario.

## Requisitos

- Node.js 18+
- npm, pnpm o yarn

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Reglas del formulario de inscripción

- Edad al momento de inscribirse: entre **18 y 35 años** (según fecha de nacimiento).
- Donación mensual mínima: **$20.000** (validado en servidor y en UI).

## Probar el envío al Google Form

1. Completá el formulario de inscripción en la landing con datos de prueba.
2. En Google Forms, abrí el formulario → pestaña **Respuestas** y verificá que llegó la fila nueva.
3. Si no llega, revisá que los `entry.*` en `lib/google-form.ts` coincidan con el formulario actual (cambian si se agregan o quitan preguntas en Google Forms).

## Sitio en producción

- **URL pública:** https://hillel-access-landing.vercel.app
- **Subdominio (pendiente DNS):** https://access.hillelargentina.org.ar — ver [docs/DNS-SETUP.md](docs/DNS-SETUP.md)
- **Repositorio:** https://github.com/danhojman-max/hillel-access-landing

Cada push a `main` en GitHub vuelve a desplegar automáticamente en Vercel.

### Dominio custom `access.hillelargentina.org.ar`

El dominio ya está agregado en Vercel. Falta un registro **A** en **Azure DNS**:

| Host | Tipo | Valor |
|------|------|-------|
| `access` | A | `76.76.21.21` |

Instrucciones completas: [docs/DNS-SETUP.md](docs/DNS-SETUP.md)

## Deploy en Vercel (manual)

Si necesitás redeployar desde tu máquina:

```bash
npm install
npx vercel --prod
```

## Estructura

- `app/page.tsx` — Landing single-page
- `app/api/inscripcion/route.ts` — Proxy de envío a Google Forms
- `lib/google-form.ts` — IDs de campos y validación
- `components/` — Secciones de la UI

## Actualizar campos del formulario

Si modificás el Google Form, actualizá los IDs en `lib/google-form.ts`. Para obtenerlos, abrí el viewform en el navegador, inspeccioná el HTML y buscá `FB_PUBLIC_LOAD_DATA_`, o usá las herramientas de desarrollo en la pestaña Network al enviar una respuesta de prueba.
