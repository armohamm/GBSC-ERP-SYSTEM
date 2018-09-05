import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-taxadjustment',
    templateUrl: './taxadjustment.component.html',
    styleUrls: ['./taxadjustment.component.scss']
})
export class TaxadjustmentComponent implements OnInit {
    public TaxonBenefits: any;
    public Branch: any;
    public Employee: any;
    constructor() { }

    ngOnInit() {
        this.TaxonBenefits = [
            {
                id: "1",
                bankTitle: "Meezan",
                bankBranchCode: "001",
                companyBank: "Abc",
                Branch: [{ display: "xyz", value: "xyz" }, { display: "xyz", value: "xyz" }],
                Employee: ["--Select--", "Bank Al Habib", "UBL"],
                active: "yes"
            }
        ]
        this.Branch = [{ value: "General-With-NIC", display: "General With NIC" }, { value: "UBL", display: "UBL" }];
        this.Employee = [{ value: "--Select--" }, { value: "Bank-Al-Habib", display: "Bank Al Habib" }, { value: "UBL", display: "UBL" }];
    }

}