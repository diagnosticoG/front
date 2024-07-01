import { Component } from '@angular/core';
import { MenuItems } from '../interfaces/menu.model';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent {
  menu: MenuItems[]= [
    
    {label:'Género', icon: 'transgender', routerLink: './genero'},
    
    {label:'Personas', icon: 'person', routerLink: './persona'},
    
  ];

  constructor() {}

}
