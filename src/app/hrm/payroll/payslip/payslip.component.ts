import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PayrollService, EmployeeService, PayrollSetupService } from '../../../core';
import { UserLoanPayslip } from '../../../core/Models/HRM/userLoanPayslip';
import { PaySlip } from '../../../core/Models/HRM/payslip';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.scss']
})
export class PayslipComponent implements OnInit {

  public PayslipForm: any;
  public PaySlip;
  private userloan: UserLoanPayslip[];

  constructor(private fb: FormBuilder, public payrollservice: PayrollService,
    public Employeeservice: EmployeeService, public payrollsetupservice: PayrollSetupService) { }

  async ngOnInit() {

    this.userloan = [];

    this.PayslipForm = this.fb.group({
      From: ['', Validators],
      Till: ['', Validators],
      PaymentDate: ['', Validators],
      Hours: ['', Validators],
      Days: ['', Validators],
      GrossAmount: ['', Validators],
      TaxAmount: ['', Validators],
      PfDeductionAmount: ['', Validators],
      LoanDeductionAmount: ['', Validators],
      NetAmount: ['', Validators],
      MonthlyUserSalaryId: ['', Validators],
      UserId: ['', Validators]
    });

    await this.payrollservice.getpayslips();
    this.PaySlip = this.payrollservice.Payslip;

    await this.payrollservice.getMonthlySalaries();
    let monthlySalary = this.payrollservice.monthlyUserSalary;

    await this.Employeeservice.GetAllEmployees();
    let User = this.Employeeservice.employeereg;
  }

  async userLoan(value) {
    let data = value.data;
    this.userloan.push(data);
    console.log(this.userloan);
  }

  async addGratuity(value) {
    console.log(value);
    let pushloanslip = new PaySlip();
    pushloanslip = { ...pushloanslip, ...value };
    console.log(this.userloan);
    pushloanslip.UserLoanPayslips = this.userloan;
    console.log(pushloanslip);
    let x = await this.payrollservice.addpayslip(pushloanslip);
    console.log(x);
    this.PayslipForm.reset();

  }

}