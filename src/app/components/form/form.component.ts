import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CalendarModule, InputMaskModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { // Inject Router
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      dob: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  saveEmployee() {
    if (this.employeeForm.valid) {
      const employeeData = this.employeeForm.value;
  
      // Retrieve existing employee data from localStorage
      let existingEmployees = localStorage.getItem('employees');
      
      // If data exists, parse it, else initialize with an empty array
      let employeeArray = existingEmployees ? JSON.parse(existingEmployees) : [];
  
      // Add new employee data to the array
      employeeArray.push(employeeData);
  
      // Save the updated employee array back to localStorage
      localStorage.setItem('employees', JSON.stringify(employeeArray));
  
      alert('Employee data saved successfully!');
      this.employeeForm.reset();

      // Navigate to the empdetails page
      this.router.navigate(['/empdetails']);
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
