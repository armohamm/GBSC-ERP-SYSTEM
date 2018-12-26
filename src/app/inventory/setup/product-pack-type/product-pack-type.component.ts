import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { PackType } from '../../../core/Models/Inventory/Setup/PackType';

@Component({
    selector: 'app-product-pack-type',
    templateUrl: './product-pack-type.component.html',
    styleUrls: ['./product-pack-type.component.scss']
})
export class ProductPackTypeComponent implements OnInit {
    public PackTypes: any;
    public UpdatedModel: any;
    private CompanyId: number;

    constructor(public InventoryService: InventorysystemService, private AuthService: AuthService) {

    }

    ngOnInit() {
        this.AuthService.getUserCompanyId().subscribe((res: number) => {
            this.CompanyId = res;
        });
        this.InventoryService.GetPackTypesByCompany(this.CompanyId).subscribe((res: PackType) => {
            this.PackTypes = res;
        });
    }

    AddPackType(value) {
        this.InventoryService.AddPackType(value.data).subscribe(res => {
            this.InventoryService.GetPackTypesByCompany(this.CompanyId).subscribe((res: PackType) => {
                this.PackTypes = res;
            });
        });
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    UpdatePackType() {
        return this.InventoryService.UpdatePackType(this.UpdatedModel).subscribe();
    }

    DeletePackType(value) {
        return this.InventoryService.DeletePackType(value.key).subscribe();
    }
}