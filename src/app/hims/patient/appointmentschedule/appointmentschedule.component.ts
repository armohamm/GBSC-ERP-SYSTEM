import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientService } from '../../patient/services/patient.services';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Patient } from '../../../../app/models/patient'
import { AppointmentTest } from '../../../../app/models/appointmentTest'
import {
    DxDataGridModule, DxLoadPanelModule,
    DxDataGridComponent,
    DxTemplateModule
} from 'devextreme-angular';
import popup from 'devextreme/ui/popup';

@Component({
    selector: 'app-appointmentschedule',
    templateUrl: './appointmentschedule.component.html',
    styleUrls: ['./appointmentschedule.component.scss']
})
export class AppointmentscheduleComponent implements OnInit {

    @ViewChild('appointmentgrid') appointmentgrid: DxDataGridComponent;

    private patientForm: FormGroup;
    public patientIdIs;
    private appointmentForm: FormGroup;



    public PatientType: any;
    public consultant: any;
    public appointment: any;
    public appointmenttest: any;

    private newOrPrevious: string = 'previous';
    private tentativeorfinal: string = 'tetative';
    private showAddNewPatientRow: boolean = false;


    private appointmentTimeForm: FormGroup;
    public appointtime: any;

    public par: any;

    public profileForm: FormGroup;


    public appointmenttestForm: FormGroup;
    public Tests: any = [];
    public test: any;
    public currentpatient: any;
    public e: any;

    public getaptbyid: any;
    // ConsultantIdAndTentiveTime

    public ConsultantIdTentiveTime: any;
    public id: any;
    public date: any;
    public visitNatures: any;



    ///////////////////
    public falto: any;
    constructor(private PatientServiceobj: PatientService, private formBuilder: FormBuilder) {

        // this.profileForm = new FormGroup({
        //   firstName: new FormControl('fajlksdjfas'),
        //   lastName: new FormControl('asldjflkasdjfsss'),
        // });

        this.appointmenttestForm = this.formBuilder.group({
            AppointmentId: ['', Validators.required],
            TestId: ['', Validators.required]
        });

        this.patientForm = this.formBuilder.group(
            {
                FirstName: ['', Validators.required],
                Gender: ['', Validators.required],
                LastName: ['', Validators.required],
                DOB: ['', Validators.required],
                PhoneNumber: ['', Validators.required],
                NIC: ['', Validators.required],

            });
        this.appointmentForm = this.formBuilder.group(
            {
                'PatientType': [''],
                'ConsultantId': ['', Validators.required],
                'VisitStatus': [''],
                'VisitNatureId': [''],
                'PatientId': [''],
                'TimeIn': [''],
                'TimeOut': [''],
                'Remarks': [''],
                'TentativeTime': ['', Validators.required]
            });

        this.appointmentTimeForm = this.formBuilder.group({
            'TimeIn': ['', Validators.required],
            'TimeOut': ['', Validators.required],
            'Remarks': ['', Validators.required]
        });
    }

    async  ngOnInit() {
        console.log(this.appointmentForm);


        await this.PatientServiceobj.getPatient();
        this.par = this.PatientServiceobj.patients;
        console.log(this.par);

        await this.PatientServiceobj.getappointments();
        this.appointment = this.PatientServiceobj.appointment;
        console.log(this.appointment);

        await this.PatientServiceobj.getAppointmentById(this.currentpatient);
        this.getaptbyid = this.PatientServiceobj.getApptbyId;
        console.log(this.getaptbyid);



        await this.PatientServiceobj.getConsultant();
        this.consultant = this.PatientServiceobj.consultant;
        console.log(this.consultant);

        await this.PatientServiceobj.getTests();
        this.test = this.PatientServiceobj.testing;
        console.log(this.test);

        await this.PatientServiceobj.GetVisitNatures();
        this.visitNatures = this.PatientServiceobj.visitNatures;
        console.log(this.visitNatures);

        // await this.PatientServiceobj.GetAppointmentTests();
        // this.appointmenttest = this.PatientServiceobj.appointmenttesting;
        // console.log(this.appointmenttest)

        


        this.PatientType = [{ value: "new", display: "New" }, { value: "previous", display: "Previous" }];
    }

    showIt() {
        if (this.profileForm.valid) {
            console.log(this.profileForm);
        }
    }



    // addrange(id) {
    //     // console.log(id);

    //     //    console.log(id.value);
    //     // let testFound = this.findTestById(id);
    //     // console.log(testFound);

    //     let { value } = this.appointmenttestForm;
    //     // let test = this.test.find(t => { 
    //     //     console.log(t.testId === value.TestId); t.testId === value.TestId; })
    //     console.log(this.test.testName);
    //     //console.log(test)
    //     let doc = {
    //         TestId: value.TestId,
    //         //TestName : test.testName

    //     }
    //     this.Tests.push(doc);
    //     console.log(this.Tests);
    //     //this.appointmenttestForm.reset();


    // }

    
    addrange() {
        // console.log(id);

        //    console.log(id.value);
        // let testFound = this.findTestById(id);
        // console.log(testFound);

        let { value } = this.appointmenttestForm;
         let test = this.test.find(t => { 
          console.log(t.testId === value.TestId);
        
          t.testId === value.TestId;
          console.log(value.TestId);
         })
        console.log(this.test);
        console.log(value.TestId);
        console.log(test);
 
        let doc = {
            TestId: value.TestId,
            //TestName : test.testName

        }
        this.Tests.push(doc);
        console.log(this.Tests);
        //this.appointmenttestForm.reset();



        // new work 


    }


    remove(index) {
        this.Tests.splice(index, 1);
    }

    removeall(index) {
        // this.Tests.splice(index,10000000000);
        this.Tests.length = 0
    }

    // async addappointmentTest(value: AppointmentTest) {
    //   console.log(value);
    //   let x = await this.PatientServiceobj.AddAppointmentTest(value);
    //   this.getaptbyid = await this.PatientServiceobj.getAppointmentById(this.currentpatient.appointmentId);
    //   this.appointmenttestForm.reset();
    //   console.log(x)
    // }

    async addappointmentTest(value) {
        console.log(value);
        let x = await this.PatientServiceobj.UpdateAppointmentTests(this.currentpatient.appointmentId, value);
        console.log(x)

        // this.getaptbyid = await this.PatientServiceobj.getAppointmentById(this.currentpatient.appointmentId);
        // console.log(this.getaptbyid);

        this.removeall(this.Tests);

        this.appointmentgrid.instance.refresh()

        return x;
    }

    // refresh() {
    //     this.dataGrid.instance.refresh();
    // }

    // async deleteapointmentTest(value) {
    //   console.log(value);
    //   let x = await this.PatientServiceobj.DeleteAppointmentTest(value.key.appointmentTestId);
    //   console.log(x);
    //   return x;
    // }

    valueChanged(d) {
        if (this.PatientType.value = "new") {
            console.log(d)
        }
    }

    addFieldValue() {
        this.showAddNewPatientRow = true;
    }

    deleteFieldValue() {
        this.showAddNewPatientRow = false;
    }


    async onAddPatient(value: Patient, popup) {
        console.log(this.patientForm.value.FirstName);
        console.log(value);
        delete this.patientForm.value.patientId
        this.patientIdIs = await this.PatientServiceobj.addPatient(value);
        popup.style.display = 'none'; 
        console.log(this.PatientServiceobj.patientID);
 
        let x = this.PatientServiceobj.patientID;
        console.log(x)
        return this.patientIdIs;

    }

    // async getappointmentbyid(d)
    // {
    //   this.currentpatient = d.key;
    //   console.log(d.key)
    //   //console.log(value.key.appointmentId);
    //   let x = await this.PatientServiceobj.getAppointmentById(value.key.appointmentId);
    //   console.log(x);
    //   return x;

    // }

    async addApointment(value, cid) {

        if(this.appointmentForm.value.PatientId === '')
        {
              this.appointmentForm.value.PatientId = this.PatientServiceobj.patientID.patientId; 
         }
      
        console.log(cid.value);
        console.log(value);
      
        

        this.appointmentForm.value.ConsultantId = cid.value;
       
        

        // this.appointmentForm.value.patientId = this.patientIdIs.patientId;
        //console.log(this.appointmentForm.value);

        let x = await this.PatientServiceobj.addAppointment(value);
        console.log(x);
        await this.PatientServiceobj.getappointments();
        this.deleteFieldValue();
        this.appointmentForm.reset();
        this.appointmentgrid.instance.refresh();
        return x;
    }

    async updateAppointment(value) {
        console.log(value.key);

        let x = await this.PatientServiceobj.updateAppoint(value.key);
        console.log(x);
        return x;
    }

    async deleteAppointment(value) {
        console.log(value.key.appointmentId);
        let x = await this.PatientServiceobj.deleteAppointment(value.key.appointmentId);
        console.log(x);
        return x;
    }

    async getConsultantIdAndTentive(cid, date) {
        console.log(cid.value, date.value);
        let x = await this.PatientServiceobj.getConsultantIdAndTentiveTime(cid.value, date.value);
        console.log(x);

        await this.PatientServiceobj.getConsultantIdAndTentiveTime(cid.value, date.value);
        this.ConsultantIdTentiveTime = this.PatientServiceobj.ConsultantIdAndTentiveTime;
        console.log(this.ConsultantIdTentiveTime);

        return x;

    }

    selectNewOrPrevious(e) {
        console.log(e.target.value);
        this.newOrPrevious = e.target.value;
        console.log(this.newOrPrevious);
    }

    hidePopup(e, popup) {
        if (e.target.id === 'popup') {
            popup.style.display = 'none'
        }
    }

    contentReady(e) {
        if (!e.component.getSelectedRowKeys().length)
            e.component.selectRowsByIndexes(0);
        console.log(e)
    }
    selectionChanged(e) {
        e.component.collapseAll(-1);
        e.component.expandRow(e.currentSelectedRowKeys[0]);
        console.log(e);

    }

    async getCurrentRowData(d) {
        this.currentpatient = d.key;
        console.log(d.key)
        console.log(this.currentpatient)
        console.log(this.currentpatient.appointmentId);
        this.getaptbyid = await this.PatientServiceobj.getAppointmentById(this.currentpatient.appointmentId);
        console.log(this.getaptbyid);

    }

    hidepopup(popup) {
        console.log('popup')
       popup.style.display = 'none'; 
    }

}

