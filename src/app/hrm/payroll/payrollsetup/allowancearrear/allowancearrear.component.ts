import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-allowancearrear',
    templateUrl: './allowancearrear.component.html',
    styleUrls: ['./allowancearrear.component.scss']
})
export class AllowancearrearComponent implements OnInit {

    public allowancearrear: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.allowancearrear = await this.payrollsetupservice.getAllowanceArrears();
    }

    async addallowancearrear(value) {
        await this.payrollsetupservice.addAllowanceArrear(value.data);
        this.allowancearrear = await this.payrollsetupservice.getAllowanceArrears();
    }

    async updateallowancearrear(value) {
        await this.payrollsetupservice.updateAllowanceArrear(value);
    }

    async deleteallowancearrear(value) {
        await this.payrollsetupservice.deleteAllowanceArrear(value.key);
    }

}