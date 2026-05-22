export const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfzz82_AfHbaAyhL30g9cfes42sk_UME96Q0dlip-XPJCduxQ/formResponse";

export const GOOGLE_FORM_ENTRIES = {
  nombre: "entry.510578738",
  birthYear: "entry.300248318_year",
  birthMonth: "entry.300248318_month",
  birthDay: "entry.300248318_day",
  celular: "entry.2005106731",
  email: "entry.16306269",
  montoDonacion: "entry.130574075",
  confirmacion: "entry.460075758",
} as const;

export const CHECKBOX_CONFIRM_VALUE = "Confirmo";

export const MIN_DONACION_MENSUAL = 25000;

export type InscripcionPayload = {
  nombre: string;
  birthYear: number;
  birthMonth: number;
  birthDay: number;
  celular: string;
  email: string;
  montoDonacion: string;
  confirmacion: boolean;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CELULAR_REGEX = /^[\d\s+\-()]{8,20}$/;

export function validateInscripcion(
  data: unknown
): { ok: true; data: InscripcionPayload } | { ok: false; error: string } {
  if (!data || typeof data !== "object") {
    return { ok: false, error: "Datos inválidos." };
  }

  const {
    nombre,
    birthYear,
    birthMonth,
    birthDay,
    celular,
    email,
    montoDonacion,
    confirmacion,
  } = data as Record<string, unknown>;

  if (typeof nombre !== "string" || nombre.trim().length < 2) {
    return { ok: false, error: "Ingresá tu nombre y apellido." };
  }

  const year = Number(birthYear);
  const month = Number(birthMonth);
  const day = Number(birthDay);

  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day) ||
    year < 1900 ||
    year > new Date().getFullYear() ||
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31
  ) {
    return { ok: false, error: "Ingresá una fecha de nacimiento válida." };
  }

  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return { ok: false, error: "Ingresá una fecha de nacimiento válida." };
  }

  if (typeof celular !== "string" || !CELULAR_REGEX.test(celular.trim())) {
    return {
      ok: false,
      error: "Ingresá un celular válido (incluí el 549).",
    };
  }

  if (typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return { ok: false, error: "Ingresá un email válido." };
  }

  if (typeof montoDonacion !== "string" || montoDonacion.trim().length === 0) {
    return { ok: false, error: "Ingresá el monto de la donación mensual." };
  }

  const montoNumerico = parseMonto(montoDonacion);
  if (montoNumerico === null || montoNumerico < MIN_DONACION_MENSUAL) {
    return {
      ok: false,
      error: `El monto mínimo es $${MIN_DONACION_MENSUAL.toLocaleString("es-AR")} mensuales.`,
    };
  }

  if (confirmacion !== true) {
    return {
      ok: false,
      error: "Tenés que confirmar que leíste la información del programa.",
    };
  }

  return {
    ok: true,
    data: {
      nombre: nombre.trim(),
      birthYear: year,
      birthMonth: month,
      birthDay: day,
      celular: celular.trim(),
      email: email.trim().toLowerCase(),
      montoDonacion: montoDonacion.trim(),
      confirmacion: true,
    },
  };
}

function parseMonto(value: string): number | null {
  const digits = value.replace(/[^\d]/g, "");
  if (!digits) return null;
  const parsed = Number(digits);
  return Number.isFinite(parsed) ? parsed : null;
}

export async function submitToGoogleForm(
  payload: InscripcionPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  const body = new URLSearchParams({
    [GOOGLE_FORM_ENTRIES.nombre]: payload.nombre,
    [GOOGLE_FORM_ENTRIES.birthYear]: String(payload.birthYear),
    [GOOGLE_FORM_ENTRIES.birthMonth]: String(payload.birthMonth),
    [GOOGLE_FORM_ENTRIES.birthDay]: String(payload.birthDay),
    [GOOGLE_FORM_ENTRIES.celular]: payload.celular,
    [GOOGLE_FORM_ENTRIES.email]: payload.email,
    [GOOGLE_FORM_ENTRIES.montoDonacion]: payload.montoDonacion,
  });

  if (payload.confirmacion) {
    body.append(GOOGLE_FORM_ENTRIES.confirmacion, CHECKBOX_CONFIRM_VALUE);
  }

  try {
    const response = await fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
      redirect: "manual",
    });

    // Google Forms returns 200 or 302 on success
    if (response.ok || response.status === 302) {
      return { ok: true };
    }

    return {
      ok: false,
      error: "No pudimos enviar tu inscripción. Intentá de nuevo.",
    };
  } catch {
    return {
      ok: false,
      error: "Error de conexión. Intentá de nuevo en unos minutos.",
    };
  }
}
