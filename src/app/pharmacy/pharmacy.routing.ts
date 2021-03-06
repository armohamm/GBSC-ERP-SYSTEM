import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';
import { GoodsreceiptComponent } from './goodsreceipt/goodsreceipt.component';
import { IssuanceComponent } from './issuance/issuance.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { ReturnmedicineComponent } from './returnmedicine/returnmedicine.component';
import { ReturnViewComponent } from './return-view/return-view.component';
import { InventoryComponent } from './Setup/inventory/inventory.component';
import { InventoryItemComponent } from './Setup/inventory-item/inventory-item.component';
import { InventoryItemCategoryComponent } from './Setup/inventory-item-category/inventory-item-category.component';
import { PackageTypeComponent } from './Setup/package-type/package-type.component';
import { ProductPackCategoryComponent } from './Setup/product-pack-category/product-pack-category.component';
import { ProductPackSizeComponent } from './Setup/product-pack-size/product-pack-size.component';
import { ProductPackTypeComponent } from './Setup/product-pack-type/product-pack-type.component';
import { ProductTypeComponent } from './Setup/product-type/product-type.component';
import { ReturnReasonComponent } from './Setup/return-reason/return-reason.component';
import { SupplierComponent } from './Setup/supplier/supplier.component';
import { UnitComponent } from './Setup/unit/unit.component';
import { GrnViewComponent } from './grn-view/grn-view.component';
import { IssuanceViewComponent } from './issuance-view/issuance-view.component';
import { PurhcaseorderViewComponent } from './purhcaseorder-view/purhcaseorder-view.component';
import { CurrencyComponent } from './Setup/currency/currency.component';
import { PrescriptionViewComponent } from './prescription-view/prescription-view.component';
import { InternalRequisitionComponent } from './internal-requisition/internal-requisition.component';
import { InternalRequisitionViewComponent } from './internal-requisition-view/internal-requisition-view.component';
import { PurchaseInvoiceComponent } from './purchase-invoice/purchase-invoice.component';
import { PurchaseInvoiceViewComponent } from './purchase-invoice-view/purchase-invoice-view.component';
import { PharmacyPurchaseReturnComponent } from './pharmacy-purchase-return/pharmacy-purchase-return.component';
import { PurchaseReturnViewComponent } from './purchase-return-view/purchase-return-view.component';
import { CashSalesReportComponent } from './Reports/cash-sales-report/cash-sales-report.component';
import { CreditSalesComponent } from './Reports/credit-sales/credit-sales.component';
import { GoodsReceiveNoteComponent } from './Reports/goods-receive-note/goods-receive-note.component';
import { GrnTabularComponent } from './Reports/grn-tabular/grn-tabular.component';
import { MonthlyCashSaleReportComponent } from './Reports/monthly-cash-sale-report/monthly-cash-sale-report.component';
import { SupplierWisePurchaseComponent } from './Reports/supplier-wise-purchase/supplier-wise-purchase.component';




export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'pharmacy',
        component: RootComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'grn', component: GoodsreceiptComponent },
            { path: 'grnview', component: GrnViewComponent },
            { path: 'issuance', component: IssuanceComponent },
            { path: 'issuanceview', component: IssuanceViewComponent },
            { path: 'purchaseorder', component: PurchaseOrderComponent },
            { path: 'purchaseorderview', component: PurhcaseorderViewComponent },
            { path: 'return', component: ReturnmedicineComponent },
            { path: 'returnview', component: ReturnViewComponent },
            { path: 'prescriptionview', component: PrescriptionViewComponent },
            { path: 'requisitionfulfilment', component: InternalRequisitionComponent },
            { path: 'requisitionfulfilment/:id', component: InternalRequisitionComponent },
            { path: 'requisitionview', component: InternalRequisitionViewComponent },
            { path: 'purchaseinvoice', component: PurchaseInvoiceComponent },
            { path: 'purchaseinvoiceview', component: PurchaseInvoiceViewComponent },
            { path: 'purchasereturn', component: PharmacyPurchaseReturnComponent },
            { path: 'purchasereturnview', component: PurchaseReturnViewComponent },

            {
                path: "setup",
                children: [
                    { path: 'inventorystock', component: InventoryComponent },
                    { path: 'inventoryitem', component: InventoryItemComponent },
                    { path: 'inventoryitemcategory', component: InventoryItemCategoryComponent },
                    { path: 'packagetype', component: PackageTypeComponent },
                    { path: 'productpackcategory', component: ProductPackCategoryComponent },
                    { path: 'packsize', component: ProductPackSizeComponent },
                    { path: 'packtype', component: ProductPackTypeComponent },
                    { path: 'producttype', component: ProductTypeComponent },
                    { path: 'returnreason', component: ReturnReasonComponent },
                    { path: 'supplier', component: SupplierComponent },
                    { path: 'unit', component: UnitComponent },
                    { path: 'currency', component: CurrencyComponent }
                ]
            },
            {
                path: "report",
                children: [
                    { path: 'cashsale', component: CashSalesReportComponent }, 
                    { path: 'creditsales', component: CreditSalesComponent },
                    { path: 'grn', component: GoodsReceiveNoteComponent },
                    { path: 'grntabular', component: GrnTabularComponent },
                    { path: 'mcs', component: MonthlyCashSaleReportComponent },
                    { path: 'swp', component: SupplierWisePurchaseComponent },

                ]
            }
        ]
    }
]);

