import { Component } from '@angular/core';
import { TodayMedicinComponent } from '../../components/today-medicin/today-medicin.component';
import { WeekTasksComponent } from '../../components/week-tasks/week-tasks.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TodayMedicinComponent, WeekTasksComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  public pacientes: String[] = ['Jose', 'Paco', 'Roberta'];
}
