import { useState } from 'preact/hooks';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div class="md:hidden relative z-50">
      {/* Botón abrir */}
      <button
        aria-label="Abrir menú"
        onClick={() => setIsOpen(true)}
        class=""
      >
        {/* Ícono hamburguesa (mejor definido aquí directamente) */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div class="fixed h-screen inset-0 bg-black/90 backdrop-blur-sm flex flex-col justify-center items-center gap-6 text-xl  z-50 animate-fade-in">

          {/* Links */}
          <a href="#About" class="text_glowing" onClick={() => setIsOpen(false)}>Sobre nosotros</a>
          <a href="#Service" class="text_glowing" onClick={() => setIsOpen(false)}>Servicios</a>
          <a href="#Location" class="text_glowing" onClick={() => setIsOpen(false)}>Ubicación</a>
          <a href="#Contact" class="text_glowing" onClick={() => setIsOpen(false)}>Contáctanos</a>

          {/* Botón de acción */}
          <a
            href="https://wa.me/5213312345678"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4  border border-white rounded-xl px-6 py-3 uppercase font-semibold tracking-wide button_effect"
          >
            Realizar cita
          </a>

          {/* Botón cerrar */}
          <button
            aria-label="Cerrar menú"
            onClick={() => setIsOpen(false)}
            class="absolute top-4 right-4 "
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
