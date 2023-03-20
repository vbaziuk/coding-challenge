import { Component, Input } from '@angular/core';
import { Employee } from '../employee';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
  @Input() employees: Employee[]
  @Input() employee: Employee;  //
  reports: string[];  //
  directReports: string[];
  reportCounts: number;

  constructor(private dialog: MatDialog) { }

  get reportCount(): number {
    return this.getReportCount()
  }

  get reportName(): void {
    return this.getReports();
  }

  onEditClick(employee: Employee) {
    console.log('edit button clicked: ', employee);
    const editDialog = this.dialog.open(EditComponent, {data: employee});
  }

  onDeleteClick(employee: Employee) {
    console.log('delete button clicked: ', employee);
    const deleteDialog = this.dialog.open(DeleteComponent, {data: employee});
  }

  private getReportCount() {
    const directReports = this.employee.directReports;
    return directReports !== undefined ? directReports.length : 0;
  }

  private getReports() {
    let reportNames = [];
    let directReports = this.employee.directReports ? this.employee.directReports : [];
    this.employees.forEach(
      emp => directReports.includes(emp.id) ? reportNames.push(emp.firstName + " " + emp.lastName) : ''
    );
    this.reports = reportNames;
  }
}
