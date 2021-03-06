import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { ScriptLoaderService } from '../../_services/script-loader.service';
import { Helpers } from '../../helpers';




@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss'],


})
export class RootComponent implements OnInit {

    constructor(public _script: ScriptLoaderService, public _router: Router) { }

    ngOnInit() {
        this._script.loadScripts('body', ['assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js'], true)
            .then(result => {
                Helpers.setLoading(false);
                // optional js to be loaded once
                this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js'], true);
            });

    }

    ngAfterViewInit() {
        this._script.loadScripts('body',
            ['assets/demo/default/custom/components/forms/widgets/bootstrap-datepicker.js']);

    }

}
