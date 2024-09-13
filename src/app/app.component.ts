import { Component } from '@angular/core';
import { RouterOutlet, ROUTES,RouterModule } from '@angular/router';
import { FormComponent } from "./components/form/form.component";
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee-details';
}
