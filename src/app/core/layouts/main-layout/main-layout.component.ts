import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarMainComponent } from '../../../shared/components/navbar-main/navbar-main.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarMainComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
