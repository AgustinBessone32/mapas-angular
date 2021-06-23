import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string,
  nombre: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      ruta: 'mapas/fullscreen',
      nombre: 'fullscreen'
    },
    {
      ruta: 'mapas/zoom-range',
      nombre: 'zoom range'
    },
    {
      ruta: 'mapas/marcadores',
      nombre: 'marcadores'
    },
    {
      ruta: 'mapas/propiedades',
      nombre: 'propiedades'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
