import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../services/attendancesetup.service';

@Component({
  selector: 'app-attendancerequesttype',
  templateUrl: './attendancerequesttype.component.html',
  styleUrls: ['./attendancerequesttype.component.scss']
})
export class AttendancerequesttypeComponent implements OnInit {

  public attendanceRequesttype: any;
  constructor(public attendancesetupservice:AttendancesetupService) { }

  async ngOnInit() {
      await this.attendancesetupservice.getattendanceRequestTypes(); 
      this.attendanceRequesttype = this.attendancesetupservice.attendanceRequestType
      console.log(this.attendanceRequesttype);
      
  }

  async addattendanceRequesttype(value) { 
      this.attendancesetupservice.addattendanceRequestType(value.data);
    }
    
    async updateattendanceRequesttype(value) {
      console.log(value); 
      this.attendancesetupservice.updateattendanceRequestType(value);   
    }

    async deleteattendanceRequesttype(value) { 
      this.attendancesetupservice.DeleteattendanceRequestType(value.key);
    }

}