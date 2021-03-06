import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {
    AuthGuardService,
    ModuleGuardService,
    AuthService,
    DashboardService,
    BioChemistryService,
    InseminationprepService,
    ConsultantService,
    PatientService,
    AttendanceService,
    AttendancesetupService,
    EmployeeService,
    LeaveService,
    LeaveSetupService,
    PayrollService,
    PayrollSetupService,
    HrmsService,
    SetupService,
    SystemAdministrationService,
    InventorysystemService,
    PharmacyService,
    SuperadminserviceService,
    eTrackerUserService
}
    from '.';

import { ApiService } from './Services/api.service';
import { TreatmentService } from './Services/HIMS/treatment.service';
import { MedicineService } from './Services/HIMS/medicine.service';
import { ProtocolService } from './Services/HIMS/protocol.service';
import { PatientclinicalrecordService } from './Services/HIMS/patientclinicalrecord.service';
import { EmbryologyService } from './Services/HIMS/Lab/embryology.service';
import { TvopuService } from './Services/HIMS/Lab/tvopu.service';
import { EmbryologistService } from './Services/HIMS/Lab/embryologist.service';
import { ThawAssessmentService } from './Services/HIMS/Lab/thawassessment.service';
import { BiopsyService } from './Services/HIMS/Lab/biopsy.service';
import { FreezepreprationService } from './Services/HIMS/Lab/freezeprepration.service';
import { InsemenationService } from './Services/HIMS/Lab/insemenation.service';
import { SemenanalysisService } from './Services/HIMS/Lab/semenanalysis.service';
import { BiochemistryoutsiderService } from './Services/HIMS/Lab/biochemistryoutsider.service';
import { UserService } from './Services/Security/user.service';
import { StoreService } from './Services/ETracker/store.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        HttpClientModule
    ],
    providers: [
        ApiService,
        AuthGuardService,
        ModuleGuardService,
        AuthService,
        DashboardService,
        //FinanceService,
        BioChemistryService,
        BiochemistryoutsiderService,
        InseminationprepService,
        ConsultantService,
        PatientService,
        AttendanceService,
        AttendancesetupService,
        EmployeeService,
        LeaveService,
        LeaveSetupService,
        PayrollService,
        PayrollSetupService,
        HrmsService,
        SetupService,
        SystemAdministrationService,
        InventorysystemService,
        PharmacyService,
        SuperadminserviceService,
        TreatmentService,
        MedicineService,
        ProtocolService,
        PatientclinicalrecordService,
        EmbryologyService,
        TvopuService,
        EmbryologistService,
        ThawAssessmentService,
        BiopsyService,
        FreezepreprationService,
        InsemenationService,
        SemenanalysisService,
        BiochemistryoutsiderService,
        UserService,
        StoreService,
        eTrackerUserService]
})
export class CoreModule { }