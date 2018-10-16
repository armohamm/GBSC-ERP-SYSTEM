import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FinanceSetupService } from '../../../core/Services/Finance/financeSetup.service';

@Component({
  selector: 'app-master-account',
  templateUrl: './master-account.component.html',
  styleUrls: ['./master-account.component.scss']
})
export class MasterAccountComponent implements OnInit {

  public MasterAccountForm: any;
  public masterAccount: any;
  public updatingMasterAccount: any;

  constructor(private fb: FormBuilder, public financeService: FinanceSetupService) { }

  async ngOnInit() {

      this.MasterAccountForm = this.fb.group({
          Name: [''],
          MasterAccountCode: [''] 
      });

      this.masterAccount = await this.financeService.getMasterAccounts();
  }

  async addMasteraccount() {

      await this.financeService.addMasterAccount(this.MasterAccountForm.value);
  }

   updatingMasteraccount(value) {

      this.updatingMasterAccount = { ...value.oldData, ...value.newData };
  }
  async updateMasteraccount() {

      await this.financeService.updateMasterAccount(this.updatingMasterAccount);
  }

  async deleteMasteraccount(value) {

      await this.financeService.DeleteMasterAccount(value.data);
  }
}
