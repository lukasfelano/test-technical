import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/services/employee.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"],
})
export class EmployeeListComponent implements OnInit {
  page = EmployeeService.page;
  employees: any = EmployeeService.getEmployee();
  search = EmployeeService.search;

  ngOnInit(): void {
    let dummyID = 121;
    for (let i = 1; i < dummyID; i++) {
      let data = {
        username: "dummy" + i,
        firstName: "dummy",
        lastName: "dummy",
        email: "dummy",
        birthDate: new Date(),
        basicSalary: 300000,
        status: "dummy",
        group: "Group7",
        description: new Date(),
      };

      let result = EmployeeService.addEmployee(data);
    }

    this.employees = EmployeeService.getEmployee();
  }

  changeLimit(limit) {
    EmployeeService.setLimit(limit);
    this.employees = EmployeeService.getEmployee();
  }

  changeSearch(data) {
    EmployeeService.setSearch(data);
    this.employees = EmployeeService.getEmployee();
  }

  changePage(page) {
    EmployeeService.setPage(page);
    this.employees = EmployeeService.getEmployee();
    console.log(this.employees);
  }
}
