import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { PackageType } from '../../../core/Models/Inventory/Setup/PackageType';

@Component({
    selector: 'app-package-type',
    templateUrl: './package-type.component.html',
    styleUrls: ['./package-type.component.scss']
})
export class PackageTypeComponent implements OnInit {
    public PackageTypes: any;
    public UpdatedModel: any;
    private CompanyId: number;

    constructor(public InventoryService: InventorysystemService, private AuthService: AuthService) {

    }

    ngOnInit() {
        this.AuthService.getUserCompanyId().subscribe((res: number) => {
            this.CompanyId = res;
        });
        this.InventoryService.GetPackageTypesByCompany(this.CompanyId).subscribe((res: PackageType) => {
            this.PackageTypes = res;
        });
    }

    AddPackageType(value) {
        this.InventoryService.AddPackageType(value.data).subscribe(res => {
            this.InventoryService.GetPackageTypesByCompany(this.CompanyId).subscribe((res: PackageType) => {
                this.PackageTypes = res;
            });
        });
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    UpdatePackageType() {
        return this.InventoryService.UpdatePackageType(this.UpdatedModel).subscribe();
    }

    DeletePackageType(value) {
        return this.InventoryService.DeletePackageType(value.key).subscribe();
    }

}