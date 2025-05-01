import { useEffect, useRef } from 'preact/hooks';

export default function LeafletMap({
  lat = 19.0425,
  lng = -98.2062,
  zoom = 15,
  markerText = 'El Templo Barbería',
}) {
  const mapRef = useRef(null);

  useEffect(() => {
    let map;

    Promise.all([
      import('leaflet'),
      import('leaflet/dist/leaflet.css'),
    ]).then(([L]) => {
      // ⚠️ Creamos un ícono personalizado
      const customIcon = L.icon({
        iconUrl: '/images/icons/barber-icon.png',
        iconSize: [48, 48], // tamaño del ícono
        iconAnchor: [24, 48], // punto donde se "clava" en el mapa
        popupAnchor: [0, -48], // posición del popup
        shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
        shadowSize: [50, 64],
        shadowAnchor: [15, 64],
      });

      map = L.map(mapRef.current).setView([lat, lng], zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
      }).addTo(map);

      L.marker([lat, lng], { icon: customIcon }).addTo(map).bindPopup(markerText);
    });

    return () => {
      if (map) map.remove();
    };
  }, [lat, lng, zoom, markerText]);

  return <div ref={mapRef} class="w-full h-64 md:h-96 rounded-xl shadow-lg" />;
}
