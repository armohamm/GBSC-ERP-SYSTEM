import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './patient.routing';
import { RootComponent } from './root/root.component';
import { RegistrationComponent } from '../patient/registration/registration.component';
import { ActiveVisitsComponent } from '../patient/active-visits/active-visits.component';
import { ProfileComponent } from './profile/profile.component';
import { DiagnosesComponent } from './diagnoses/diagnoses.component';
import { RecentvisitsComponent } from './recentvisits/recentvisits.component';
import { FamilyComponent } from './family/family.component';
import { HealthTrendSummaryComponent } from './health-trend-summary/health-trend-summary.component';
import { AllergiesComponent } from './allergies/allergies.component';
import { WeightGraphComponent } from './weight-graph/weight-graph.component';
import { VitalsComponent } from './vitals/vitals.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { LatestobservationComponent } from './latestobservation/latestobservation.component';
import { PatientvitalsComponent } from './patientvitals/patientvitals.component';
import { AdmitinpatientComponent } from './admitinpatient/admitinpatient.component';
import { GeneralactionsComponent } from './generalactions/generalactions.component';
import { VisitnoteComponent } from './visitnote/visitnote.component';
import { VisitsComponent } from './visits/visits.component';
import { AppointmentsblockComponent } from './appointmentsblock/appointmentsblock.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FindPatientComponent } from './find-patient/find-patient.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { HimsSetupTestComponent } from './hims-setup-test/hims-setup-test.component';
import { MenuComponent } from './shared/menu/menu.component';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { AppointmentscheduleComponent } from './appointmentschedule/appointmentschedule.component';
import { VisitnatureComponent } from './patientsetup/visitnature/visitnature.component';
import { VisitdetailComponent } from './visitdetail/visitdetail.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { DiagnosisComponent } from './patientsetup/diagnosis/diagnosis.component';
import { PackageComponent } from './package/package.component';
import { TestComponent } from './test/test.component';
import { ViewallAppointmetsComponent } from './viewall-appointmets/viewall-appointmets.component';
import { VisitPrescriptionComponent } from './visit-prescription/visit-prescription.component';
import { PaymentreceiptComponent } from './paymentreceipt/paymentreceipt.component';
import { PatientReferenceComponent } from './patient-reference/patient-reference.component';
import { ReportsComponent } from './Reports/reports/reports.component';
import { TestTypeComponent } from './test-type/test-type.component';
import { TestCategoryComponent } from './test-category/test-category.component';
import { AppointmentpaymentreceiptComponent } from './appointmentpaymentreceipt/appointmentpaymentreceipt.component';
import { DxDateBoxModule } from 'devextreme-angular/ui/date-box';
import { PatientInvoiceViewComponent } from './patient-invoice-view/patient-invoice-view.component';
import { PatientpackageComponent } from './patientpackage/patientpackage.component';
import { PatientInvoiceReturnComponent } from './patient-invoice-return/patient-invoice-return.component';
import { InvoiceReturnViewComponent } from './invoice-return-view/invoice-return-view.component';
import { AppointmentSheetComponent } from './Reports/appointment-sheet/appointment-sheet.component';
import { RegistrationlistComponent } from './Reports/registrationlist/registrationlist.component';
import { NewPatientSheetFcKarachiComponent } from './Reports/new-patient-sheet-fc-karachi/new-patient-sheet-fc-karachi.component';
import { DailyActivityReportComponent } from './Reports/daily-activity-report/daily-activity-report.component';
import { FcProcedureMovementSummaryComponent } from './Reports/fc-procedure-movement-summary/fc-procedure-movement-summary.component';
import { BloodConsultationMovementSummaryComponent } from './Reports/blood-consultation-movement-summary/blood-consultation-movement-summary.component';
import { SemenConsultationMovementSummaryComponent } from './Reports/semen-consultation-movement-summary/semen-consultation-movement-summary.component';
import { FcConsultationMovementSummaryComponent } from './Reports/fc-consultation-movement-summary/fc-consultation-movement-summary.component';
import { DailyProcedureComponent } from './daily-procedure/daily-procedure.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { NewFcClinicPatientSummaryComponent } from './Reports/new-fc-clinic-patient-summary/new-fc-clinic-patient-summary.component';
import { FcPatientReferenceSummaryComponent } from './Reports/fc-patient-reference-summary/fc-patient-reference-summary.component';
import { BloodTestReferenceSummaryComponent } from './Reports/blood-test-reference-summary/blood-test-reference-summary.component';
import { SemenPatientReferenceSummaryComponent } from './Reports/semen-patient-reference-summary/semen-patient-reference-summary.component';
import { TotalPatientReferenceSummaryComponent } from './Reports/total-patient-reference-summary/total-patient-reference-summary.component';
import { NewPatientSheetBloodKarachiComponent } from './Reports/new-patient-sheet-blood-karachi/new-patient-sheet-blood-karachi.component';
import { NewPatientSheetSemenKarachiComponent } from './Reports/new-patient-sheet-semen-karachi/new-patient-sheet-semen-karachi.component';
import { SubsiquentSemenFreezingListComponent } from './Reports/subsiquent-semen-freezing-list/subsiquent-semen-freezing-list.component';
import { MedicineDetailsComponent } from './Reports/medicine-details/medicine-details.component';
import { ConsultantActivityDetailsComponent } from './Reports/consultant-activity-details/consultant-activity-details.component';
import { DailySemenAnalysisComponent } from './daily-semen-analysis/daily-semen-analysis.component';
import { DailySemenAnalysisSheetComponent } from './Reports/daily-semen-analysis-sheet/daily-semen-analysis-sheet.component';
import { DailySemenAnalysisViewComponent } from './daily-semen-analysis-view/daily-semen-analysis-view.component';
import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';
import { DxPopupModule } from 'devextreme-angular/ui/popup';

// import { SharedModule } from './shared/shared.module';

@NgModule({
    imports: [
        DxDataGridModule,
        DxButtonModule,
        DxSelectBoxModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        DxDateBoxModule,
        DxPopupModule,
        HttpClientModule
    ],
    declarations: [

        RootComponent,
        RegistrationComponent,
        PaymentreceiptComponent,
        ActiveVisitsComponent,
        ReportsComponent,
        ProfileComponent,
        DiagnosesComponent,
        RecentvisitsComponent,
        FamilyComponent,
        HealthTrendSummaryComponent,
        AllergiesComponent,
        WeightGraphComponent,
        ConsultantComponent,
        PackageComponent,
        VitalsComponent,
        AppointmentsComponent,
        LatestobservationComponent,
        PatientvitalsComponent,
        AdmitinpatientComponent,
        GeneralactionsComponent,
        VisitnoteComponent,
        VisitsComponent,
        AppointmentsblockComponent,
        HimsSetupTestComponent,
        HomeComponent,
        FindPatientComponent,
        MenuComponent,
        AppointmentscheduleComponent,
        VisitnatureComponent,
        VisitdetailComponent,
        ConditionsComponent,
        DiagnosisComponent,
        TestComponent,
        ViewallAppointmetsComponent,
        VisitPrescriptionComponent,
        PatientReferenceComponent,
        TestTypeComponent,
        TestCategoryComponent,
        AppointmentpaymentreceiptComponent,
        PatientInvoiceViewComponent,
        PatientpackageComponent,
        PatientInvoiceReturnComponent,
        InvoiceReturnViewComponent,
        AppointmentSheetComponent,
        RegistrationlistComponent,
        NewPatientSheetFcKarachiComponent,
        DailyActivityReportComponent,
        FcProcedureMovementSummaryComponent,
        BloodConsultationMovementSummaryComponent,
        SemenConsultationMovementSummaryComponent,
        FcConsultationMovementSummaryComponent,
        DailyProcedureComponent,
        ProcedureComponent,
        NewFcClinicPatientSummaryComponent,
        FcPatientReferenceSummaryComponent,
        BloodTestReferenceSummaryComponent,
        SemenPatientReferenceSummaryComponent,
        TotalPatientReferenceSummaryComponent,
        NewPatientSheetBloodKarachiComponent,
        NewPatientSheetSemenKarachiComponent,
        SubsiquentSemenFreezingListComponent,
        MedicineDetailsComponent,
        ConsultantActivityDetailsComponent,
        DailySemenAnalysisComponent,
        DailySemenAnalysisSheetComponent,
        DailySemenAnalysisViewComponent,
    ]
})
export class PatientModule { }