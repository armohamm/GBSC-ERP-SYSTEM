import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AttendanceService, AttendancesetupService, EmployeeService } from '../../../core';

@Component({
    selector: 'app-employee-overtime-entitlement',
    templateUrl: './employee-overtime-entitlement.component.html',
    styleUrls: ['./employee-overtime-entitlement.component.scss']
})
export class EmployeeOvertimeEntitlementComponent implements OnInit {
    public empoverTimeEntitlement: any;
    public empworkingot: any;
    public empoffdayot;
    public incomingot;
    public outgoingot;
    public Updatedempovertimeentitlement: any;
    public Updatedworkingot: any;
    public Updatedincoming: any;
    public Updatedoffday: any;
    public Updatedoutgoing: any;
    public OverTimeType: any;
    public employee: any;

    public WorkingDayOTForm: FormGroup;
    public EmployeeEntitlementForm: FormGroup;
    public OffDayOTForm: FormGroup;
    public IncomingOTForm: FormGroup;
    public OutgoingOTForm: FormGroup;

    constructor(private fb: FormBuilder, public attendanceservice: AttendanceService, public attendancesetupservice: AttendancesetupService,
        public employeeservice: EmployeeService) { }

    async ngOnInit() {

        this.WorkingDayOTForm = this.fb.group({
            IsIncludeOtWorking: ['', Validators],
            OverTimeTypeId: ['', Validators],
            WokingOtHours: ['', Validators]
        });
        this.OffDayOTForm = this.fb.group({
            IsIncludeOtOff: ['', Validators],
            OverTimeTypeId: ['', Validators],
            OffOtHours: ['', Validators]
        });
        this.IncomingOTForm = this.fb.group({
            IsIncludeOtIncoming: ['', Validators],
            OverTimeTypeId: ['', Validators],
            IncomingOtHours: ['', Validators]
        });
        this.OutgoingOTForm = this.fb.group({
            IsIncludeOtOutgoing: ['', Validators],
            OverTimeTypeId: ['', Validators],
            OutgoingOtHours: ['', Validators]
        });
        this.EmployeeEntitlementForm = this.fb.group({
            // EmployeeWorkingDayOtId: ['', Validators],
            // EmployeeOffDayOtId: ['', Validators],
            // EmployeeIncomingOtId: ['', Validators],
            // EmployeeOutgoingOtId: ['', Validators] ,
            UserId: ['', Validators]
        });


        this.empoverTimeEntitlement = await this.attendanceservice.getEmpOvertimeEntitlements();

<<<<<<< HEAD
        await this.attendanceservice.getemployeeWorkingDayOts();
        this.empworkingot = this.attendanceservice.workingdayot
        console.log(this.empworkingot);

        await this.attendanceservice.getemployeeOffdayOts();
        this.empoffdayot = this.attendanceservice.workingoffdayot
        console.log(this.empoffdayot);
=======
        this.empworkingot = await this.attendanceservice.getEmployeeWorkingDayOts();
>>>>>>> master

        this.empoffdayot = await this.attendanceservice.getEmployeeOffdayOts();

        this.incomingot = await this.attendanceservice.getEmployeeIncomingOts();

        this.outgoingot = await this.attendanceservice.getEmployeeOutgoingOts();

        this.OverTimeType = await this.attendancesetupservice.getAllOvertimeType();

        this.employee = await this.employeeservice.GetAllEmployees();
    }

    async addEmployeeEntitlement() {

<<<<<<< HEAD
        this.EmployeeEntitlementForm.value.employeeWorkingDayOtID = await this.attendanceservice.addemployeeWorkingDayOt(this.WorkingDayOTForm.value);
        this.EmployeeEntitlementForm.value.employeeOffDayOtID = await this.attendanceservice.addemployeeOffdayOts(this.OffDayOTForm.value);
        this.EmployeeEntitlementForm.value.employeeIncomingOtID = await this.attendanceservice.addemployeeIncomingOts(this.IncomingOTForm.value);
        this.EmployeeEntitlementForm.value.employeeOutgoingOtID = await this.attendanceservice.addemployeeOutgoingOt(this.OutgoingOTForm.value);
        console.log(this.EmployeeEntitlementForm.value);
        await this.attendanceservice.addempOvertimeEntitlement(this.EmployeeEntitlementForm.value);
=======
        this.EmployeeEntitlementForm.value.employeeWorkingDayOtID = await this.attendanceservice.addEmployeeWorkingDayOt(this.WorkingDayOTForm.value);
        this.EmployeeEntitlementForm.value.employeeOffDayOtID = await this.attendanceservice.addEmployeeOffdayOts(this.OffDayOTForm.value);
        this.EmployeeEntitlementForm.value.employeeIncomingOtID = await this.attendanceservice.addEmployeeIncomingOts(this.IncomingOTForm.value);
        this.EmployeeEntitlementForm.value.employeeOutgoingOtID = await this.attendanceservice.addEmployeeOutgoingOt(this.OutgoingOTForm.value);
        await this.attendanceservice.addEmpOvertimeEntitlement(this.EmployeeEntitlementForm.value);
>>>>>>> master
    }

    async updatingempEntitlement(value) {
        this.Updatedempovertimeentitlement = { ...value.oldData, ...value.newData };
        this.Updatedworkingot = { ...value.oldData, ...value.newData };
        this.Updatedincoming = { ...value.oldData, ...value.newData };
        this.Updatedoffday = { ...value.oldData, ...value.newData };
        this.Updatedoutgoing = { ...value.oldData, ...value.newData };
    }
    async updateempoverTimeEntitlement() {
<<<<<<< HEAD
        this.attendanceservice.updateempOvertimeEntitlement(this.Updatedempovertimeentitlement);
        this.attendanceservice.updateemployeeWorkingDayOt(this.Updatedworkingot);
        this.attendanceservice.updateemployeeIncomingOts(this.Updatedincoming);
        this.attendanceservice.updateemployeeOffdayOts(this.Updatedoffday);
        this.attendanceservice.updateemployeeOutgoingOt(this.Updatedoutgoing);
=======
        this.attendanceservice.updateEmpOvertimeEntitlement(this.Updatedempovertimeentitlement);
        this.attendanceservice.updateEmployeeWorkingDayOt(this.Updatedworkingot);
        this.attendanceservice.updateEmployeeIncomingOts(this.Updatedincoming);
        this.attendanceservice.updateEmployeeOffdayOts(this.Updatedoffday);
        this.attendanceservice.updateEmployeeOutgoingOt(this.Updatedoutgoing);
>>>>>>> master
    }

    async deleteempoverTimeEntitlement(value) {
        this.attendanceservice.DeleteEmpOvertimeEntitlement(value.key);
    }

}