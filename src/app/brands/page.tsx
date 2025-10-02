import fs from "fs";
import path from "path";
import Breadcrumb from "@/components/Common/Breadcrumb";

export default function GalleryPage() {
  const logosDir = path.join(process.cwd(), "public", "brands", "logos");
  const files = fs.readdirSync(logosDir);
  const images = files.filter((file) =>
    [".png", ".jpg", ".jpeg", ".webp", ".svg"].includes(
      path.extname(file).toLowerCase()
    )
  );

  return (
    <div className="p-6 sm:p-10 overflow-y-auto scroll-smooth">
      <Breadcrumb pageName="Brands" description="Our trusted brand partners" />

      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="break-inside-avoid bg-white p-2 shadow rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={`/brands/logos/${img}`}
              alt={`Brand ${index + 1}`}
              loading="lazy"
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
