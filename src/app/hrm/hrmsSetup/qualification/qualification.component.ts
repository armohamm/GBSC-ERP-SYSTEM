import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { HomeDetails } from '../models/home.details.interface';
import { HrmsService } from '../services/hrms.service';
import { Department } from '../models/department.interface';

import { BehaviorSubject } from 'rxjs';

import { SetupService } from '../services/setup.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Qualification } from '../models/qualification,interface';

@Component({
    selector: 'app-qualification',
    templateUrl: './qualification.component.html',
    styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {

    public qualification: any;

    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }

    async ngOnInit() {
        //  this.dataService.getAllFunctions().subscribe((data)=>this.qualification=data);
        await this.dataService.getAllqualifications();
        this.qualification = this.dataService.qualification;
        console.log(this.qualification);

    }


    // If you don't need a filter or a pagination this can be simplified, you just use code from else block

    addNewqualification(qfc) {
        this.dataService.addQualification(qfc.data);

    }

    EditNewqualification(qfction) {
        this.dataService.updateQualification(qfction);
    }

    deletequalification(qualificatin) {

        this.dataService.DeleteQualification(qualificatin.key);
    }


}