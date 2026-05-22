# DNS: access.hillelargentina.org.ar → Vercel

## Estado

| Paso | Estado |
|------|--------|
| Dominio en Vercel | Hecho — `access.hillelargentina.org.ar` en proyecto `hillel-access-landing` |
| Registro DNS en Azure | **Pendiente** — requiere acceso al portal Azure |
| HTTPS / sitio en subdominio | Pendiente hasta crear el registro DNS |

## Dónde está el dominio

| Capa | Proveedor |
|------|-----------|
| Registro `.ar` | [NIC Argentina](https://nic.ar) — titular WHOIS `30708190655` |
| DNS | **Azure DNS** — `ns1-07.azure-dns.com` … `ns4-07.azure-dns.info` |
| `www` | PythonAnywhere — `webapp-1168053.pythonanywhere.com` (no tocar) |
| Landing Access | Vercel — https://hillel-access-landing.vercel.app |

**Crear el subdominio en:** https://portal.azure.com → **DNS zones** → `hillelargentina.org.ar`

Quién no tenga acceso: preguntar en la fundación por la suscripción Microsoft/Azure o al proveedor que delegó el DNS a Azure.

---

## Registro a crear (valor indicado por Vercel)

| Name | Type | Value | TTL |
|------|------|-------|-----|
| `access` | **A** | `76.76.21.21` | 3600 (o default) |

Vercel recomienda registro **A** (no CNAME) cuando los nameservers siguen en Azure.

### Pasos en Azure Portal

1. Entrá a https://portal.azure.com
2. Buscá **DNS zones** → abrí `hillelargentina.org.ar`
3. **+ Record set**
4. Name: `access` | Type: `A` | IP: `76.76.21.21`
5. Guardar
6. **No modificar** el registro `www` (PythonAnywhere)

Propagación: 15 min – 2 h (a veces hasta 24 h).

---

## Verificación

```bash
dig access.hillelargentina.org.ar A +short
# Debe mostrar: 76.76.21.21

curl -I https://access.hillelargentina.org.ar
```

En Vercel → proyecto → **Settings** → **Domains**: el dominio debe pasar a **Valid** (check verde).

Probar el formulario de inscripción una vez activo el subdominio.
