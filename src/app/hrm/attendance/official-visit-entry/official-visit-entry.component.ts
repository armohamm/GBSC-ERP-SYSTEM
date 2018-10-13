import { Component, OnInit } from '@angular/core';
import { AttendanceService, SystemAdministrationService, EmployeeService } from '../../../core';

@Component({
    selector: 'app-official-visit-entry',
    templateUrl: './official-visit-entry.component.html',
    styleUrls: ['./official-visit-entry.component.scss']
})
export class OfficialVisitEntryComponent implements OnInit {

    public branches: any;
    public employee: any;
    public officialVisitentry: any;
    public updatingOfficialEntry: any;

    constructor(public attendanceservice: AttendanceService, public companyservice: SystemAdministrationService,
        public empservice: EmployeeService) { }

    async ngOnInit() {

        this.officialVisitentry = await this.attendanceservice.getOfficialVisitEntries();

        this.employee = await this.empservice.GetAllEmployees();

        this.branches = await this.companyservice.getBranches();
    }

    async addofficialVisitentry(value) {
        this.attendanceservice.addOfficialVisitEntry(value.data);
    }

    async updatingVisitentry(value) {
        this.updatingOfficialEntry = { ...value.oldData, ...value.newData };
    }

    async updateVisitentry() {
        this.attendanceservice.updateOfficialVisitEntry(this.updatingOfficialEntry);
    }

    async deleteofficialVisitentry(value) {
        this.attendanceservice.DeleteOfficialVisitEntry(value.key);
    }

}