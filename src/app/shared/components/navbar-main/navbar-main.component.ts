import { Component } from '@angular/core';

@Component({
  selector: 'shared-navbar-main',
  standalone: true,
  imports: [],
  templateUrl: './navbar-main.component.html',
  styleUrl: './navbar-main.component.scss',
})
export class NavbarMainComponent {
  public isOpenNavbar: boolean = false;

  toggleMenu(): void {
    this.isOpenNavbar = !this.isOpenNavbar;
    console.log(this.isOpenNavbar);
  }
}
