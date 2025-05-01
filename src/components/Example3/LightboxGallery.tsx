import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { useEffect } from 'preact/hooks';

interface ImageData {
  src: string;
  alt: string;
  cols: string;
  rows: string;
  width: number;
  height: number;
}

interface Props {
  images: ImageData[];
}

export default function LightboxGallery({ images }: Props) {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#pswp-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => lightbox.destroy();
  }, []);

  return (
    <div
      id="pswp-gallery"
      className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 auto-rows-[180px] gap-4 grid-flow-dense"
      role="group"
      aria-label="Galería de imágenes de la barbería El Templo"
    >
      {images.map(({ src, alt, cols, rows, width, height }) => (
        <a
          key={src + cols + rows}
          href={src}
          data-pswp-width={width}
          data-pswp-height={height}
          data-cropped="true"
          target="_blank"
          rel="noreferrer"
          className={`relative overflow-hidden block rounded-lg ${cols} ${rows}`}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-500"
          />
        </a>
      ))}
    </div>
  );
}
