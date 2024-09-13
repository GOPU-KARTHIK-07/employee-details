import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/form', pathMatch: 'full' },
    { path: 'form', component: FormComponent },
    { path: 'empdetails', component: EmpDetailsComponent }
  ];
