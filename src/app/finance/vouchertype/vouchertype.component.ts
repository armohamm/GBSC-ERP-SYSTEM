import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'; 
import { FinanceService } from '../../core/Services/Finance/finance.service';


@Component({
    selector: 'app-vouchertype',
    templateUrl: './vouchertype.component.html',
    styleUrls: ['./vouchertype.component.scss']
})
export class VouchertypeComponent implements OnInit {
   
    voucherType: any;
    VoucherTypeForm: any;
    updateVoucherType: any;

    constructor(private fb: FormBuilder,public financeService : FinanceService) { }

    async ngOnInit() {

        this.VoucherTypeForm = this.fb.group({
            Name: [''],
            IsActive: [''],
            StartDate: [''],
            EndDate: [''] 
        });

        this.voucherType = await this.financeService.getFinancialYears();
    }

    async addVouchertype(value){

        await this.financeService.addVoucherType(value.data);
    }
    
    async updatingVouchertype(value){

        this.updateVoucherType = {...value.oldData, ...value.newData};
    }
    async updateVouchertype(){

        await this.financeService.updateVoucherType( this.updateVoucherType);
    }

    async deleteVouchertype(value){

        await this.financeService.DeleteVoucherType(value.data);
    }

}
