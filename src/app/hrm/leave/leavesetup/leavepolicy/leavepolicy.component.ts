import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-leavepolicy',
    templateUrl: './leavepolicy.component.html',
    styleUrls: ['./leavepolicy.component.css']
})
export class LeavepolicyComponent implements OnInit {

    public groups: any = [];

    constructor() { }

    ngOnInit() {
        this.groups = [
            { checked: false, index: '01', name: 'N/A' },
            { checked: true, index: '02', name: 'N/A' },
            { checked: false, index: '03', name: 'N/A' },
            { checked: false, index: '04', name: 'N/A' },
            { checked: false, index: '05', name: 'N/A' }
        ]
    }

}