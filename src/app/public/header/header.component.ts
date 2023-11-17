import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Ropa',
        icon: 'pi pi-fw pi-eye',
        routerLink: ['/dashboard/ropa'],
        
        
      },

      {
        label: 'Salir',
        icon: 'pi pi-fw pi-delete-left',
        routerLink: ['/login'],
      },
    ];
  }
}
