// src/components/LeafletMap.jsx
import { useEffect, useRef } from 'preact/hooks'

export default function LeafletMap({
  lat = 19.0425,
  lng = -98.2062,
  zoom = 15,
  markerText = 'El Templo Barbería',
}) {
  const mapRef = useRef(null)

  useEffect(() => {
    let map

    // Importamos leaflet sólo en cliente y dentro de useEffect
    Promise.all([import('leaflet'), import('leaflet/dist/leaflet.css')]).then(([L]) => {
      // Inicializamos el mapa
      map = L.map(mapRef.current).setView([lat, lng], zoom)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
      }).addTo(map)

      L.marker([lat, lng]).addTo(map).bindPopup(markerText)
    })

    return () => {
      if (map) {
        map.remove()
      }
    }
  }, [lat, lng, zoom, markerText])

  return <div ref={mapRef} class='w-full h-64 md:h-96 rounded-xl shadow-lg' />
}
