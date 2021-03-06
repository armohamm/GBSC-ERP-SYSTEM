import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from '../inventory/root/root.component';
import { HomeComponent } from '../inventory/home/home.component';
import { PurchaseInvoiceComponent } from './purchase/purchase-invoice/purchase-invoice.component';
import { PurchaseOrderComponent } from './purchase/purchase-order/purchase-order.component';
import { SalesReturnComponent } from './sales/sales-return/sales-return.component';
import { GoodsreceiptComponent } from './purchase/goodsreceipt/goodsreceipt.component';
import { UnitComponent } from './setup/unit/unit.component';
import { InventoryItemComponent } from './setup/inventory-item/inventory-item.component';
import { DeliveryOrderComponent } from './sales/delivery-order/delivery-order.component';
import { SalesOrderComponent } from './sales/sales-order/sales-order.component';
import { ProductPackCategoryComponent } from './setup/product-pack-category/product-pack-category.component';
import { ProductPackSizeComponent } from './setup/product-pack-size/product-pack-size.component';
import { ProductPackTypeComponent } from './setup/product-pack-type/product-pack-type.component';
import { ProductTypeComponent } from './setup/product-type/product-type.component';
import { SalesIndentComponent } from './sales/sales-indent/sales-indent.component';
import { CustomerSetupComponent } from './setup/customer-setup/customer-setup.component';
import { CustomerAccountComponent } from './setup/customer-account/customer-account.component';
import { CustomerBankComponent } from './setup/customer-bank/customer-bank.component';
import { CustomerTypeComponent } from './setup/customer-type/customer-type.component';
import { SupplierComponent } from './setup/supplier/supplier.component';
import { AreaComponent } from './setup/area/area.component';
import { ComissionComponent } from './setup/comission/comission.component';
import { BrandComponent } from './setup/brand/brand.component';
import { CustomerPricePickLevelComponent } from './setup/customer-price-pick-level/customer-price-pick-level.component';
import { CustomerWarehouseComponent } from './setup/customer-warehouse/customer-warehouse.component';
import { InventoryComponent } from './setup/inventory/inventory.component';
import { InventoryItemCategoryComponent } from './setup/inventory-item-category/inventory-item-category.component';
import { ItemPriceStructureComponent } from './setup/item-price-structure/item-price-structure.component';
import { ModeOfPaymentComponent } from './setup/mode-of-payment/mode-of-payment.component';
import { PackageTypeComponent } from './setup/package-type/package-type.component';
import { TerritoryComponent } from './setup/territory/territory.component';
import { TransportComponent } from './setup/transport/transport.component';
import { DistributorComponent } from './setup/distributor/distributor.component';
import { RegionComponent } from './setup/region/region.component';
import { ReturnReasonComponent } from './setup/return-reason/return-reason.component';
import { SalesPersonComponent } from './setup/sales-person/sales-person.component';
import { TaxComponent } from './setup/tax/tax.component';
import { SalesIndentItemComponent } from './sales/sales-indent-item/sales-indent-item.component';
import { DeliveryNoteComponent } from './sales/delivery-note/delivery-note.component';
import { DeliveryOrderItemComponent } from './sales/delivery-order-item/delivery-order-item.component';
import { SalesInvoiceComponent } from './sales/sales-invoice/sales-invoice.component';
import { SalesOrderItemComponent } from './sales/sales-order-item/sales-order-item.component';
import { SalesReturnItemComponent } from './sales/sales-return-item/sales-return-item.component';
import { PurchaseIndentItemComponent } from './purchase/purchase-indent-item/purchase-indent-item.component';
import { PurchaseOrderItemComponent } from './purchase/purchase-order-item/purchase-order-item.component';
import { PurchaseReturnComponent } from './purchase/purchase-return/purchase-return.component';
import { PurchaseReturnItemComponent } from './purchase/purchase-return-item/purchase-return-item.component';
import { PurchaseIndentComponent } from './purchase/purchase-indent/purchase-indent.component';
import { InventoryMasterComponent } from './setup/inventory-master/inventory-master.component';
import { IndentProcessComponent } from './sales/indent-process/indent-process.component';
import { OrderDetailComponent } from './reports/order-detail/order-detail.component';
import { OrderSummaryComponent } from './reports/order-summary/order-summary.component';
import { GeneralSkuComponent } from './setup/general-sku/general-sku.component';

const routes: Routes = [

    {
        path: 'inventory',
        component: RootComponent,

        children: [
            { path: 'home', component: HomeComponent },
            {
                path: "setup",
                children: [
                    { path: 'area', component: AreaComponent },
                    { path: 'comission', component: ComissionComponent },
                    { path: 'customeraccount', component: CustomerAccountComponent },
                    { path: 'customerbank', component: CustomerBankComponent },
                    { path: 'pricepicklevel', component: CustomerPricePickLevelComponent },
                    { path: 'customer', component: CustomerSetupComponent },
                    { path: 'customertype', component: CustomerTypeComponent },
                    { path: 'customerwarehouse', component: CustomerWarehouseComponent },
                    { path: 'distributor', component: DistributorComponent },
                    { path: 'itempricestructure', component: ItemPriceStructureComponent },
                    { path: 'modeofpayment', component: ModeOfPaymentComponent },
                    { path: 'region', component: RegionComponent },
                    { path: 'returnreason', component: ReturnReasonComponent },
                    { path: 'salesperson', component: SalesPersonComponent },
                    { path: 'supplier', component: SupplierComponent },
                    { path: 'tax', component: TaxComponent },
                    { path: 'territory', component: TerritoryComponent },
                    { path: 'transport', component: TransportComponent },
                    { path: 'unit', component: UnitComponent },
                    { path: 'inventory-master', component: InventoryMasterComponent },
                    { path: 'generalsku', component: GeneralSkuComponent }
                ]
            },
            {
                path: "sales",
                children: [
                    { path: 'dispatchnote', component: DeliveryNoteComponent },
                    { path: 'deliveryorder', component: DeliveryOrderComponent },
                    { path: 'deliveryorderitem', component: DeliveryOrderItemComponent },
                    { path: 'salesindent', component: SalesIndentComponent },
                    { path: 'salesindentitem', component: SalesIndentItemComponent },
                    { path: 'salesindentprocess', component: IndentProcessComponent},
                    { path: 'salesinvoice', component: SalesInvoiceComponent },
                    { path: 'salesorder', component: SalesOrderComponent },
                    { path: 'salesorderitem', component: SalesOrderItemComponent },
                    { path: 'salesreturn', component: SalesReturnComponent },
                    { path: 'salesreturnitem', component: SalesReturnItemComponent }
                ]
            },
            {
                path: "purchase",
                children: [
                    { path: 'grn', component: GoodsreceiptComponent },
                    { path: 'purchaseindent', component: PurchaseIndentComponent },
                    { path: 'purchaseindentitem', component: PurchaseIndentItemComponent },
                    { path: 'purchaseinvoice', component: PurchaseInvoiceComponent },
                    { path: 'purchaseorder', component: PurchaseOrderComponent },
                    { path: 'purchaseorderitem', component: PurchaseOrderItemComponent },
                    { path: 'purchasereturn', component: PurchaseReturnComponent },
                    { path: 'purchasereturnitem', component: PurchaseReturnItemComponent }
                ]
            },
            {
                path: "reports",
                children: [
                    { path: 'order-detail', component: OrderDetailComponent },
                    { path: 'order-summary', component: OrderSummaryComponent },
                ]
            }
        ]
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InventoryRoutingModule { }
