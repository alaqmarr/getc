import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const logosDir = path.join(process.cwd(), "public", "brands", "logos");
    const files = fs.readdirSync(logosDir);
    const images = files.filter((file) =>
      [".png", ".jpg", ".jpeg", ".webp", ".svg"].includes(
        path.extname(file).toLowerCase()
      )
    );
    return NextResponse.json({ images });
  } catch (err) {
    console.error("Error reading logos:", err);
    return NextResponse.json({ images: [] });
  }
}
