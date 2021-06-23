import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as  mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa!: ElementRef
  mapa!: mapboxgl.Map
  zoomLevel: number = 10
  center: [number, number] = [123, 456]

  constructor() { }

  ngOnDestroy(): void {
    this.mapa.off('zoom', () => { })
    this.mapa.off('zoomend', () => { })
    this.mapa.off('move', () => { })
  }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-64.23822810208624, -31.405245724304315],
      zoom: this.zoomLevel
    })

    this.mapa.on('zoom', () => {
      this.zoomLevel = this.mapa.getZoom()
    })

    this.mapa.on('zoomend', () => {
      if (this.mapa.getZoom() > 20) {
        this.mapa.zoomTo(20)
      }
    })

    this.mapa.on('move', (event) => {
      this.zoomLevel = this.mapa.getZoom()
      const target = event.target
      const { lng, lat } = target.getCenter()
      this.center = [lng, lat]
    })
  }

  zoomOut() {
    this.mapa.zoomOut()

  }

  zoomIn() {
    this.mapa.zoomIn()

  }

  zoomCambio(value: string) {
    this.mapa.zoomTo(Number(value))
  }
}
