import { Component, Input } from '@angular/core';

import { Employee } from '../employee';   // employee type interface

import { EmployeeService } from '../employee.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
  @Input() employee: Employee;

  // we may not need employeeService!!
  constructor(private employeeService: EmployeeService) { }

  /** getReportCount
   * @returns integer - the count of direct reports an employee has
   */
  getReportCount() {
    const directReports = this.employee.directReports;
    if (directReports !== undefined) {
      return directReports.length
    }
    return 0;
  }
}
