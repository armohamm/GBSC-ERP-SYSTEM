import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    tabItem: any;
    public text = 'Next';
    public selectedTabStyles = '.m-nav .m-nav__item:hover:not(.m-nav__item--disabled) > .m-nav__link .m-nav__link-icon, .m-nav .m-nav__item:hover:not(.m-nav__item--disabled) > .m-nav__link .m-nav__link-text, .m-nav .m-nav__item:hover:not(.m-nav__item--disabled) > .m-nav__link .m-nav__link-arrow, .m-nav .m-nav__item.m-nav__item--active > .m-nav__link .m-nav__link-icon, .m-nav .m-nav__item.m-nav__item--active > .m-nav__link .m-nav__link-text, .m-nav .m-nav__item.m-nav__item--active > .m-nav__link .m-nav__link-arrow';
    public showingCurrently: any = 0;
    public tabs =
    [
        { name: "Basic Information", icon: 'm-nav__link-icon fa fa-info-circle', selected: false },
        { name: "Profile Picture", icon: 'm-nav__link-icon fa fa-user-circle', selected: false },
        { name: "Company Information", icon: 'm-nav__link-icon fa fa-building', selected: false },
        { name: "Emergency Contacts", icon: 'm-nav__link-icon fa fa-contao', selected: false },
        { name: "Social Networking", icon: 'm-nav__link-icon fa fa-linkedin', selected: false },
        { name: "Qualification", icon: 'm-nav__link-icon fa fa-graduation-cap', selected: false },
        { name: "Work Experience", icon: 'm-nav__link-icon fa fa-black-tie', selected: false },
        { name: "Bank Account", icon: 'm-nav__link-icon fa fa-money', selected: false },
        { name: "Documents", icon: 'm-nav__link-icon fa fa-file', selected: false }
    ]

    constructor(public employeeService: EmployeeService, public router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.tabItem = this.tabs[this.showingCurrently];

        let currentUser = this.employeeService.getBasicInfoOfCurrentUser();
    }

    //   async onsubmit() {
    //     console.log(this.signupForm.value);
    //  let d= await this.data.signup(this.signupForm.value);
    //  console.log(d);
    //   }
    setTabItem(item, i) {
        this.tabItem = item;
        this.showingCurrently = i;
        console.log();
        if (this.tabItem.name === 'Documents') {
            this.text = 'Save';
        }
        console.log(item);
        console.log(this.tabItem)
        this.tabItem.selected = true;
        // let allFormsData = this.employeeService.allFormData;
        // console.log(allFormsData);


    }

    setForms() {
        this.employeeService.allFormData.Empbasicinfo = this.employeeService.EmpbasicForm.value;
        console.log(this.employeeService.allFormData);
        this.employeeService.allFormData.QualificationForm = this.employeeService.QualificationForm.value;
        this.employeeService.allFormData.experience = this.employeeService.experienceForm.value;
        this.employeeService.allFormData.Profilepic = this.employeeService.Profilepic.value;
        this.employeeService.allFormData.DependantForm = this.employeeService.DependantForm.value;
        this.employeeService.allFormData.SocialForm = this.employeeService.SocialForm.value;
        this.employeeService.allFormData.documentForm = this.employeeService.documentForm.value;
        this.employeeService.allFormData.EmpCompanyForm = this.employeeService.EmpCompanyForm.value;
        this.employeeService.allFormData.EmpbankForm = this.employeeService.EmpbankForm.value;

    }

    async next(e) {
        if (this.showingCurrently < 8) {
            this.showingCurrently++;
            console.log(this.showingCurrently);
            this.tabItem = this.tabs[this.showingCurrently];
            this.tabItem.selected = true;
            if (this.tabItem.name === 'Documents') {
                this.text = 'Save';
            }

        }



        if (this.text === 'Save') {
            console.log(this.employeeService.allFormData);
            this.setForms();
            let ab = await this.employeeService.addEmployee();
            console.log(ab);

        }

    }

    async submit() {
        switch (this.tabItem.name) {
            case 'Basic Information':
                await this.employeeService.addEmployee();
                this.router.navigate(['hrm/employees']);
                console.log(this.activatedRoute.url);
                break;
            case 'Profile Picture':
                await this.employeeService.adduserProfilepic();
                break;

            case 'Company Information':
                await this.employeeService.addusercompany();
                break;

            case 'Emergency Contacts':
                await this.employeeService.adduserRelation();

                break;

            case 'Social Networking':
                await this.employeeService.adduserSocial();
                break;

            case 'Qualification':
                await this.employeeService.adduserUniversities();
                break;

            case 'Work Experience':
                await this.employeeService.adduserexperience();
                break;

            case 'Bank Account':
                await this.employeeService.adduserBank();
                break;

            case 'Documents':
                await this.employeeService.adduserDocuments();
                break;

            default:
                break;
        }
    }



}