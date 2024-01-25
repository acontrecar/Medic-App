import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  public eyeOpen : boolean = false

  changeIconInput(): void {
    this.eyeOpen = !this.eyeOpen
  }
}
