import fs from "fs";
import path from "path";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";

export default function GalleryPage() {
  const logosDir = path.join(process.cwd(), "public", "brands", "logos");
  const files = fs.readdirSync(logosDir);
  const images = files.filter((file) =>
    [".png", ".jpg", ".jpeg", ".webp", ".svg"].includes(path.extname(file).toLowerCase())
  );

  return (
    <div className="p-10">
      <Breadcrumb
        pageName="Brands"
        description="Our trusted brand partners"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-24 flex items-center justify-center bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200"
          >
            <Image
              src={`/brands/logos/${img}`}
              alt={`Brand ${index + 1}`}
              width={200}
              height={100}
              className="object-contain p-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
