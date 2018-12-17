import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SuperadminserviceService } from '../../core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-setupcompany',
    templateUrl: './setupcompany.component.html',
    styleUrls: ['./setupcompany.component.scss']
})
export class SetupcompanyComponent implements OnInit {

    private companyForm: FormGroup;

    private systemAdminForm: FormGroup;

    private company: any;

    private companyId: number;

    private HimsInstalled: boolean;

    private HrmInstalled: boolean;

    private ImsInstalled: boolean;

    private PmsInstalled: boolean;

    private AccountingSystemInstalled: boolean;

    private LisInstalled: boolean;

    private InventoryInstalled: boolean;

    private eTrackerInstalled: boolean;

    constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private superAdminService: SuperadminserviceService) {

        this.companyForm = this.formBuilder.group({
            'name': ['', Validators.required],
            'numberOfEmployees': ['', Validators.required]
        });

        this.systemAdminForm = this.formBuilder.group({
            'UserName': ['', Validators.required],
            'Password': ['', Validators.required],
            'Email': ['', Validators.required],
            'CNIC': ['', Validators.required],
            'FirstName': ['', Validators.required],
            'LastName': ['', Validators.required],
            'Phone': ['', Validators.required],
            'DOB': [new Date()]
        })


    }

    ngOnInit() {


        this.route.params.subscribe((params) => {
            this.companyId = +params['id'];
        });

        if (this.companyId) {
            this.superAdminService.getCompanyInfo(this.companyId).subscribe(company => {
                this.company = company;

                for (let module of company.modules) {
                    this.checkModulesInstalled(module);
                }

            })
        }

    }

    async onAddCompany(value) {
        this.superAdminService.addCompany(value).subscribe(resp => {
            console.log("Company Added");
            this.companyId = resp.companyID;
            this.superAdminService.addModule({ Name: "Security Admin", CompanyId: this.companyId, Code: "000", ModuleId: 0 }).subscribe();
        });
    }


    async onAddModule(value) {

        var module = { Name: value, CompanyId: this.companyId, Code: "000", ModuleId: 0 };

        this.superAdminService.addModule(module).subscribe(s => {

            this.checkModulesInstalled(value);
        })
    }

    checkModulesInstalled(value) {
        if (value == "Hospital Management System") {
            this.HimsInstalled = true;
        }
        else if (value == "Human Resource Management") {
            this.HrmInstalled = true;
        }
        else if (value == "Inventory Management System") {
            this.ImsInstalled = true;
        }
        else if (value == "Payroll Management System") {
            this.PmsInstalled = true;
        }
        else if (value == "Accounting System") {
            this.AccountingSystemInstalled = true;
        }
        else if (value == "Lab Information System") {
            this.LisInstalled = true;
        }
        else if (value == "Inventory") {
            this.InventoryInstalled = true;
        }
        else if (value == "eTracker") {
            this.eTrackerInstalled = true;
        }
    }

    async onSubmitRegistration(value: SystemAdminRegistrationViewModel) {

        value.CompanyId = this.companyId;
        value.IsSystemAdmin = true;

        this.superAdminService.registerAdmin(value).subscribe(resp => {

            console.log("Admin registerd");
        });

    }

}
