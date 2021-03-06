import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../../core';

@Component({
    selector: 'app-sales-return-item',
    templateUrl: './sales-return-item.component.html',
    styleUrls: ['./sales-return-item.component.scss']
})
export class SalesReturnItemComponent implements OnInit {
    public SalesReturn: any;
    public Inventory: any;
    public SalesReturnItem: any;

    constructor(public InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.SalesReturn = await this.InventoryService.GetSalesReturns();
        this.Inventory = await this.InventoryService.GetInventories();
        this.SalesReturnItem = await this.InventoryService.GetSalesReturnItems();
    }

    async AddSalesReturnItem(value) {
        return await this.InventoryService.AddSalesReturnItem(value);
    }

    async UpdateSalesReturnItem(value) {
        return await this.InventoryService.UpdateSalesReturnItem(value.Key);
    }

    async DeleteSalesReturnItem(value) {
        return await this.InventoryService.DeleteSalesReturnItem(value.Key.SalesReturnItemId);
    }
}