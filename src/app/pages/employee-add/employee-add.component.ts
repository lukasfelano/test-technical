import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { EmployeeService } from "src/app/services/employee.service";

@Component({
  selector: "app-employee-add",
  templateUrl: "./employee-add.component.html",
  styleUrls: ["./employee-add.component.css"],
})
export class EmployeeAddComponent implements OnInit {
  maxDate: Date;
  addForm = new FormGroup({
    username: new FormControl(""),
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    birthDate: new FormControl(""),
    basicSalary: new FormControl(""),
    status: new FormControl(""),
    group: new FormControl(""),
    description: new FormControl(""),
  });

  constructor(private router: Router) {
    this.maxDate = new Date();
  }

  ngOnInit(): void {}

  submitAdd() {
    let data = this.addForm.value;
    let dump = {
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      birthDate: data.birthDate,
      basicSalary: data.basicSalary,
      status: data.status,
      group: data.group,
      description: data.description,
    };
    let result = EmployeeService.addEmployee(dump);
    if (result) {
      alert("Already Exist");
    } else {
      alert("Add Employee Done");
      this.router.navigateByUrl("/employee");
    }
  }
}
