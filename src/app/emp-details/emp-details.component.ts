// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-emp-details',
//   standalone: true,
//   imports: [],
//   templateUrl: './emp-details.component.html',
//   styleUrl: './emp-details.component.css'
// })
// export class EmpDetailsComponent {

// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emp-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  employees: any[] = [];

  ngOnInit() {
    // Fetch the employee data from localStorage
    const storedEmployees = localStorage.getItem('employees');
    this.employees = storedEmployees ? JSON.parse(storedEmployees) : [];
  }
}

