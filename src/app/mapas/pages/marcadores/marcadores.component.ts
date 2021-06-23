import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorConColor {
  color: string,
  marcador?: mapboxgl.Marker
  centro?: [number, number]
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef
  mapa!: mapboxgl.Map
  zoomLevel: number = 15
  center: [number, number] = [-64.23822810208624, -31.405245724304315]
  marcadores: MarcadorConColor[] = []

  constructor() { }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-64.23822810208624, -31.405245724304315],
      zoom: this.zoomLevel
    })

    // const maker = new mapboxgl.Marker()
    //   .setLngLat(this.center)
    //   .addTo(this.mapa)

    this.leerMArcadoresLS()
  }

  irMarcador(marker: mapboxgl.Marker) {
    this.mapa.flyTo({
      center: marker.getLngLat()
    })

  }


  agregarMarcador() {
    const color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color: color
    })
      .setLngLat(this.center)
      .addTo(this.mapa)

    this.marcadores.push({
      color: color,
      marcador: nuevoMarcador
    })

    this.guardarMarcadorLS()
  }


  guardarMarcadorLS() {
    const lngLatAr: MarcadorConColor[] = []

    this.marcadores.forEach(m => {
      const color = m.color
      const { lng, lat } = m.marcador!.getLngLat()

      lngLatAr.push({
        color: color,
        centro: [lng, lat]

      })
    })

    localStorage.setItem('marcadores', JSON.stringify(lngLatAr))
  }

  leerMArcadoresLS() {
    if (!localStorage.getItem('marcadores')) return

    const lngLatArr: MarcadorConColor[] = JSON.parse(localStorage.getItem('marcadores')!)

    lngLatArr.forEach(m => {

      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true
      })
        .setLngLat(m.centro!)
        .addTo(this.mapa)


      this.marcadores.push({
        marcador: newMarker,
        color: m.color
      })

      this.guardarMarcadorLS()

      newMarker.on('dragend', () => {
        this.guardarMarcadorLS()
      })

    })
  }

  borrarMarcador(i: number) {
    this.marcadores[i].marcador?.remove()
    this.marcadores.splice(i, 1)

    this.guardarMarcadorLS()
  }
}