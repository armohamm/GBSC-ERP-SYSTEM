import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HrmsService } from '../services/hrms.service';
import { BehaviorSubject } from 'rxjs';
import { SetupService } from '../services/setup.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Accounttype } from '../models/accounttype,interface';

@Component({
    selector: 'app-accounttype',
    templateUrl: './accounttype.component.html',
    styleUrls: ['./accounttype.component.css']
})
export class AccountTypeComponent implements OnInit {


    public accounttype: any;
    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }


    async ngOnInit() {
        await this.dataService.getAllAccounttypes();
        this.accounttype = this.dataService.accounttype;
        console.log(this.accounttype);

        // this.dataService.getAllAccounttypes().subscribe((data)=>this.actype=data);
    }


    addNewAccountType(acounttype) {
        this.dataService.addAccounttype(acounttype.data)
    }

    AccounttypeEdit(acounttype) {

        this.dataService.updateAccounttype(acounttype)
    }

    deleteAccountType(actype) {

        this.dataService.DeleteAccounttype(actype.key)
    }
}