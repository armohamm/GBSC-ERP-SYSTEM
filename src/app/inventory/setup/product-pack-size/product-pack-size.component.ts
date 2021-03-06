import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { PackSize } from '../../../core/Models/Inventory/Setup/PackSize';
@Component({
    selector: 'app-product-pack-size',
    templateUrl: './product-pack-size.component.html',
    styleUrls: ['./product-pack-size.component.scss']
})
export class ProductPackSizeComponent implements OnInit {
    public PackSizes: any;
    public UpdatedModel: any;
    public CompanyId: number;

    constructor(public InventoryService: InventorysystemService, public AuthService: AuthService) {

    }

    ngOnInit() {
        this.CompanyId = this.AuthService.getUserCompanyId();

        this.InventoryService.GetPackSizesByCompany(this.CompanyId).subscribe((res: PackSize) => {
            this.PackSizes = res;
        });
    }

    AddPackSize(value) {
        value.data.companyId = this.CompanyId;
        this.InventoryService.AddPackSize(value.data).subscribe(res => {
            this.InventoryService.GetPackSizesByCompany(this.CompanyId).subscribe((res: PackSize) => {
                this.PackSizes = res;
            });
        });
    }

    UpdateModel(value) {
        value.companyId = this.CompanyId;
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    UpdatePackSize() {
        return this.InventoryService.UpdatePackSize(this.UpdatedModel).subscribe();
    }

    DeletePackSize(value) {
        return this.InventoryService.DeletePackSize(value.key).subscribe();
    }
}