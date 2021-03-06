import { Component, OnInit } from '@angular/core';
import { PayrollSetupService, EmployeeService } from '../../../../core';

@Component({
    selector: 'app-userloan',
    templateUrl: './userloan.component.html',
    styleUrls: ['./userloan.component.scss']
})
export class UserloanComponent implements OnInit {

    public UserLoan: any;
    public users: any;
    public loanType: any;
    public Updateloan: any;

    constructor(public payrollsetupservice: PayrollSetupService, public employeeservice: EmployeeService) {
     }

    async ngOnInit() {

        this.UserLoan = await this.payrollsetupservice.getUserLoans();

        this.loanType = await this.payrollsetupservice.getLoanTypes();

        this.users = await this.employeeservice.GetAllEmployees();
    }

    async addUserLoan(value) {
        await this.payrollsetupservice.addUserLoan(value.data);
        this.UserLoan = await this.payrollsetupservice.getUserLoans();
    }

    Updatingloan(value) {
        this.Updateloan = { ...value.oldData, ...value.newData };
    } 

    async updateUserLoan() {
        await this.payrollsetupservice.updateUserLoan(this.Updateloan);
    } 

    async deleteUserLoan(value) {
        await this.payrollsetupservice.deleteUserLoan(value.key);
    }
}