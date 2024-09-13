import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emp-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  employees: any[] = [];
  filteredEmployees: any[] = [];
  filterTerm: string = '';

  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 5;

  // Sorting
  sortColumn: string = '';
  sortAsc: boolean = true;

  ngOnInit() {
    // Fetch the employee data from localStorage
    const storedEmployees = localStorage.getItem('employees');
    this.employees = storedEmployees ? JSON.parse(storedEmployees) : [];

    // Initialize the filtered employees list
    this.filteredEmployees = [...this.employees];
  }

  // Filter employees by search term
  filterEmployees() {
    this.filteredEmployees = this.employees.filter(employee => 
      employee.firstName.toLowerCase().includes(this.filterTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(this.filterTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(this.filterTerm.toLowerCase()) ||
      employee.phoneNumber.includes(this.filterTerm)
    );

    this.currentPage = 1;
  }

  sortBy(column: string) {
    if (this.sortColumn === column) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortColumn = column;
      this.sortAsc = true;
    }

    this.filteredEmployees.sort((a, b) => {
      const aVal = a[column].toLowerCase ? a[column].toLowerCase() : a[column];
      const bVal = b[column].toLowerCase ? b[column].toLowerCase() : b[column];
      
      if (aVal < bVal) return this.sortAsc ? -1 : 1;
      if (aVal > bVal) return this.sortAsc ? 1 : -1;
      return 0;
    });
  }

  totalPages(): number {
    return Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
  }

  paginatedEmployees() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredEmployees.slice(start, end);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }
}
