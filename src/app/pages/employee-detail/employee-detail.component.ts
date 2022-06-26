import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from "src/app/services/employee.service";

@Component({
  selector: "app-employee-detail",
  templateUrl: "./employee-detail.component.html",
  styleUrls: ["./employee-detail.component.css"],
})
export class EmployeeDetailComponent implements OnInit {
  maxDate: Date;

  employees;
  constructor(private route: ActivatedRoute) {
    this.maxDate = new Date();
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const param = routeParams.get("username");
    this.employees = EmployeeService.getDetailEmployee(param);
  }

  changeRP(data: String) {
    let result = "Rp. ";
    let angka = "";

    for (let i = data.toString().length - 1; i >= 0; i--) {
      angka = data.toString()[i] + angka;
      if (i % 3 == 0 && i != 0) {
        angka = "." + angka;
      }
    }
    result = result + angka + ",00";
    return result;
  }
}
