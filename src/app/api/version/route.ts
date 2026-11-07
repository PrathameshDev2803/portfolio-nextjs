import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const headers = {
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
    Pragma: "no-cache",
    Expires: "0",
  };

  try {
    const filePath = path.join(process.cwd(), "public", "version.json");
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf8");
      const data = JSON.parse(content);
      return NextResponse.json(data, { headers });
    }
  } catch {
    // If reading file fails, continue to fallback
  }

  return NextResponse.json(
    { version: Date.now().toString(), builtAt: new Date().toISOString() },
    { headers }
  );
}

