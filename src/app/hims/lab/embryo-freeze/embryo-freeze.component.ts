import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular/ui/select-box';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConsultantService, PatientService } from '../../../../app/core';
import { TreatmentService } from '../../../../app/core/Services/HIMS/treatment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientclinicalrecordService } from '../../../../app/core/Services/HIMS/patientclinicalrecord.service';
import { EmbryologyService } from '../../../../app/core/Services/HIMS/Lab/embryology.service';
import { TvopuService } from '../../../../app/core/Services/HIMS/Lab/tvopu.service';
import { ThawAssessmentService } from '../../../../app/core/Services/HIMS/Lab/thawassessment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-embryo-freeze',
    templateUrl: './embryo-freeze.component.html',
    styleUrls: ['./embryo-freeze.component.scss']
})
export class EmbryoFreezeComponent implements OnInit {

    @ViewChild("patientcb") patientcb: DxSelectBoxComponent

    public patient: any;
    public spouse: any;
    public patients: any;
    public consultants: any;
    public id: number;
    public clinicalRecord: any;
    public thawAssessment: any;
    public embryoFreezeDetails: any;
    public tvopu: any;
    public freeFreezeOptions: any;
    public topBottomOptions: any;
    public thawAssessmentForm: FormGroup;

    constructor(
        public formBuild: FormBuilder,
        public consultantService: ConsultantService,
        public patientService: PatientService,
        public route: ActivatedRoute,
        public tvopuService: TvopuService,
        public embryologyService: EmbryologyService,
        public thawAssessmentService: ThawAssessmentService,
        public toastr: ToastrService,
        public clinicalrecordservice: PatientclinicalrecordService) {

        this.thawAssessmentForm = this.formBuild.group({
            "CreateDate": ['']
        });

        this.freeFreezeOptions = [{ name: "Vitrification" }, { name: "Slow Freeze" }, { name: "Default" }];

        this.topBottomOptions = [{ name: "Top" }, { name: "Bottom" }, { name: "None" }];

    }

    ngOnInit() {

        this.embryoFreezeDetails = [];

        this.route.params.subscribe((params) => {

            this.id = +params['id'];

            this.setValues();

            this.clinicalrecordservice.getPatientClinicalRecord(this.id).subscribe(resp => {

                this.clinicalRecord = resp;

                this.tvopuService.getTvopuByClinicalRecordId(this.id).subscribe(tvop => {

                    this.tvopu = tvop;

                    if (this.tvopu) {

                        if (!(this.embryoFreezeDetails.length > 0)) {

                            this.embryologyService.getPatientEmbryologyDetailsByTvopuId(this.tvopu.tvopuId).subscribe(det => {

                                for (let embryo of det) {

                                    if (embryo.fate == "Stored")
                                        this.embryoFreezeDetails.push({ embryoNumber: embryo.eggNumber });
                                }

                            });
                        }
                    }
                });



            })




            this.patientcb.onValueChanged.subscribe(res => {
                this.populatePatientDate(res.component.option("value"))

            });

            this.consultantService.getConsultants().subscribe(consultants => this.consultants = consultants)

            this.patientService.getPatientCb().subscribe(patients => this.patients = patients);


        });
    }

    populatePatientDate(patientId) {
        this.patientService.getPatientWithPartner(patientId).subscribe(patient => {
            this.patient = patient;
            this.spouse = patient.partner;
        });
    }

    setValues() {

        this.thawAssessmentService.getThawAssessmentByClinicalRecordId(this.id).subscribe(cresp => {

            this.thawAssessment = cresp;

            this.patchValues(this.thawAssessment);

            if (this.thawAssessment) {
                this.embryoFreezeDetails = [];
                this.embryoFreezeDetails = this.thawAssessment.embryoFreezeUnthaweds;
            }

        });
    }

    displayToast(message) {

        this.toastr.success(message);
    }


    submitForm(value) {

        if (this.tvopu)
            value.tvopuId = this.tvopu.tvopuId;
        value.patientClinicalRecordId = this.clinicalRecord.patientClinicalRecordId;
        value.embryoFreezeUnthaweds = this.embryoFreezeDetails;
        this.embryoFreezeDetails.forEach(element => {
            element.patientId = this.patient.patientId;

        });

        this.thawAssessmentService.addThawAssessment(value).subscribe(resp => this.displayToast("Embryo Freeze Saved"));

    }

    updateForm(value) {
        if (this.tvopu)
            value.tvopuId = this.tvopu.tvopuId;

        this.embryoFreezeDetails.forEach(element => {
            element.patientId = this.patient.patientId;

        });
        value.patientClinicalRecordId = this.clinicalRecord.patientClinicalRecordId;
        value.embryoFreezeUnthaweds = this.embryoFreezeDetails;
        value.thawAssessmentId = this.thawAssessment.thawAssessmentId;


        this.thawAssessmentService.updateThawAssessment(value).subscribe(resp => this.displayToast("Embryo Freeze Updated"));
    }

    patchValues(thawAssessment) {
        this.thawAssessmentForm.patchValue({
            "CreateDate": thawAssessment.createDate
        });
    }


}
