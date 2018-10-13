import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevExtremeModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from './LowerCaseUrlSerializer';
<<<<<<< HEAD
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
=======
import { ToastrModule } from 'ngx-toastr';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
>>>>>>> master



@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,

    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }), // ToastrModule added
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ThemeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DevExtremeModule,
        HttpClientModule
    ],
    providers: [{ provide: UrlSerializer, useClass: LowerCaseUrlSerializer },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
        ScriptLoaderService],
    bootstrap: [AppComponent]
})
export class AppModule { }
