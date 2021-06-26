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
      nombre: 'pantalla completa'
    },
    {
      ruta: 'mapas/zoom-range',
      nombre: 'realizar zoom'
    },
    {
      ruta: 'mapas/marcadores',
      nombre: 'marcadores'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
