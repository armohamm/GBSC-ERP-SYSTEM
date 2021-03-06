import { Consultant } from "./consultant";
import { Visits } from "./visits";
import { VisitNature } from "./visitnature";
import { Patient } from "./patient";
import { PatientInvoice } from "./patientinvoice";

export interface Appointment {
    AppointmentId: number,
    PatientType: string,
    TentativeTime: string,
    FinalTime: string,
    TimeIn: string,
    TimeOut: string,
    NextAppointment: string,
    VisitStatus: string,
    visitNatureId: number,
    VisitNature: VisitNature,
    AppointmentDay: string,
    Remarks: string,
    ConsultantId: number,
    Consultant: Consultant,
    PatientId: number,
    Patient: Patient,
    VisitId: number,
    Visit: Visits,
    PatientInvoiceId: number,
    PatientInvoice: PatientInvoice,
    IsFinalAppointment: boolean,
    IsCancelled: boolean,
    IsPaid: boolean
};