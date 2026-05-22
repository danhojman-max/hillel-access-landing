import { NextResponse } from "next/server";
import { submitToGoogleForm, validateInscripcion } from "@/lib/google-form";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Datos inválidos." },
      { status: 400 }
    );
  }

  const validation = validateInscripcion(body);

  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, error: validation.error },
      { status: 400 }
    );
  }

  const result = await submitToGoogleForm(validation.data);

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.error },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
