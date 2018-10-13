import { Component, OnInit } from '@angular/core';
import { LeaveService, SystemAdministrationService, LeaveSetupService, SetupService } from '../../../core';

@Component({
    selector: 'app-leaveclosing',
    templateUrl: './leaveclosing.component.html',
    styleUrls: ['./leaveclosing.component.scss']
})
export class LeaveclosingComponent implements OnInit {
<<<<<<< HEAD
    public leaveyear;
    public leaveclose;
=======

    public departments: any;
    public groups: any;
    public leaveYears: any;
    public leaveclose: any;
>>>>>>> master

    constructor(public leaveservice: LeaveService, public systemadminservice: SystemAdministrationService,
        public leavesetupservice: LeaveSetupService, public setupservice: SetupService) { }

    async ngOnInit() {

<<<<<<< HEAD
        await this.leaveservice.getleaveclosings();
        this.leaveclose = this.leaveservice.leaveclosing
        console.log(this.leaveclose);

        await this.leavesetupservice.getAllleaveyear();
        this.leaveyear = this.leavesetupservice.leaveyear
        console.log(this.leaveyear);

        await this.setupservice.getAllGroups();
        let groups = this.setupservice.group;

        await this.systemadminservice.getDepartments();
        let department = this.systemadminservice.departments;
    }

    async addleaveclosing(value) {
        console.log(value.data);
        let x = await this.leaveservice.addleaveclosing(value.data);
        console.log(x)
    }

    async updateleaveclosing(value) {
        this.leaveservice.updateleaveclosing(value);
=======
        this.leaveclose = await this.leaveservice.getLeaveClosings();

        this.leaveYears = await this.leavesetupservice.getLeaveYears();

        this.groups = await this.setupservice.getAllGroups();

        this.departments = await this.systemadminservice.getDepartments();
    }

    async addleaveclosing(value) {
        let x = await this.leaveservice.addLeaveClosing(value.data);
    }

    async updateleaveclosing(value) {
        await this.leaveservice.updateLeaveClosing(value);
>>>>>>> master

    }

    async deleteleaveclosing(value) {
<<<<<<< HEAD
        this.leaveservice.Deleteleaveclosing(value.key);
=======
        this.leaveservice.DeleteLeaveClosing(value.key);
>>>>>>> master


    }
}
