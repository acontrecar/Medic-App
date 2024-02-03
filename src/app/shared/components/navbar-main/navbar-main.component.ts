import { Component } from '@angular/core';

interface Item {
  label: string;
  routerLink: string;
}

@Component({
  selector: 'shared-navbar-main',
  standalone: true,
  imports: [],
  templateUrl: './navbar-main.component.html',
  styleUrl: './navbar-main.component.scss',
})
export class NavbarMainComponent {
  public isOpenNavbar: boolean = false;

  public menuItem: Item[] = [
    {
      label: 'Medicamentos',
      routerLink: '',
    },
    {
      label: 'Citas',
      routerLink: '',
    },
    {
      label: 'Perfil',
      routerLink: '',
    },
  ];

  toggleMenu(): void {
    this.isOpenNavbar = !this.isOpenNavbar;
    console.log(this.isOpenNavbar);
  }
}
