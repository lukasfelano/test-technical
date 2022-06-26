import { Injectable } from "@angular/core";
import { employees } from "../employee";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  static search = "";
  static limit = 100;
  static sorter = "";
  static page = 0;

  static setSearch(data) {
    EmployeeService.search = data;
    EmployeeService.page = 0;
  }

  static setLimit(data) {
    EmployeeService.limit = data;
    EmployeeService.page = 0;
  }

  static setPage(data) {
    EmployeeService.page = data;
  }

  static getEmployee() {
    let result = {};
    let data = [];
    let dataPerPage = [];
    let counter = 0;
    let counterPage = 0;
    employees.filter((selected) => {
      let inserted = false;
      if (selected.username.toLowerCase().includes(EmployeeService.search)) {
        counter++;
        dataPerPage.push(selected);
        inserted = true;
      }
      if (
        (inserted && dataPerPage.length % EmployeeService.limit == 0) ||
        selected == employees[employees.length - 1]
      ) {
        counterPage++;
        data.push(dataPerPage);
        dataPerPage = [];
      }
    });

    result["data"] = data;
    result["page"] = EmployeeService.page;
    result["limit"] = EmployeeService.limit;
    result["total"] = counter;
    result["totalPage"] = counterPage;

    return result;
  }

  static getDetailEmployee(username) {
    let result = null;
    employees.find((data) => {
      if (data.username === username) result = data;
    });

    return result;
  }

  static addEmployee(data) {
    let exist = false;
    employees.find((check) => {
      if (check.username === data.username) {
        exist = true;
      }
    });

    if (!exist) {
      employees.push(data);
    }
    return exist;
  }

  static deleteEmployee(username) {}

  static editEmployee(username) {
    let selected;
    employees.find((data) => {
      selected = data.username === username;
    });
  }
}
