import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService, SetupService } from '../../../core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../../../core/Models/HRM/employee';
import { EmployeeQualification } from '../../../core/Models/HRM/employeeQualification';
import { DataGrid } from 'primeng/primeng';

@Component({
    selector: 'app-employeequalification',
    templateUrl: './qualification.component.html',
    styleUrls: ['./qualification.component.css']
})
export class EmployeeQualificationComponent implements OnInit {

    public degrees: any;
    public qualifications: any;


    @Input('employeeId') id: number;


    constructor(public employeeService: EmployeeService, public SetupServiceobj: SetupService,
        public router: Router, public route: ActivatedRoute) {
    }

    async ngOnInit() {

        this.degrees = await this.SetupServiceobj.getAllDegrees();

        this.employeeService.getQualifications(this.id).subscribe(resp => this.qualifications = resp);
    }

    addQualification(value) {
        value.data.userId = this.id;

        this.employeeService.addQualification(value.data).subscribe(resp => console.log(resp));
    }

    updateQualification(value) {

        let qualification = this.qualifications.find(x => x.universityId == value.key);

        qualification = { ...qualification, ...value.data };

        this.employeeService.updateQualification(qualification).subscribe(resp => console.log(resp));
    }

}

