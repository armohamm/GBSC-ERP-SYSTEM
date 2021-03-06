import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ApiService } from '../api.service';
import { Company } from '../../Models/HRM/company';
import { Branch } from '../../Models/HRM/branch';
import { Department } from '../../Models/HRM/department';
import { Role } from '../../Models/HRM/role';
import { Feature } from '../../Models/HRM/feature';
import { Module } from '../../Models/HRM/module';
import { Observable } from 'rxjs/Observable';
import { compileNgModule } from '@angular/core/src/render3/jit/module';

export class Product {
    id: string;
    text: string;
    expanded?: boolean;
    selected?: boolean;
    items?: Product[];
}

@Injectable()
export class SystemAdministrationService {

    public readonly API_URL = "systemadmin/api/setup/";
    public modules: any = [];


    constructor(public ApiService: ApiService) {
    }

    async saveNewRoleData(data) {
        console.log(data);
        return await this.ApiService.post(this.API_URL + 'addrole', data).toPromise();
    }

    async getModulesByCompanyId(companyId: any) {

        let params = new HttpParams().set('companyId', companyId);

        let response: any = await this.ApiService.get(this.API_URL + 'getmodules', params).toPromise();

        console.log(response);
        // localStorage.setItem('modulesFromApi', JSON.stringify(response));

        for (let m of response) {
            this.modules.push({
                moduleId: m.moduleId,
                name: m.name,
                expanded: false,
                features: m.features.map(f => {
                    return {
                        featureId: f.featureId,
                        name: f.name,
                        moduleId: f.moduleId,
                        permissions: f.permissions.map(p => {
                            return {
                                permissionName: p.attribute,
                                featureId: p.featureId
                            }
                        })
                    }
                })
            });
        }

    }

    getfeaturesByCompany(companyId: number) {
        return this.ApiService.get(this.API_URL + 'GetFeaturesByCompany/' + companyId);
    }

    getFeaturePermission(featureName, moduleName, roleId) {
        return this.ApiService
            .get(this.API_URL + 'getFeaturePermission?feature=' + featureName + '&module=' + moduleName + '&roleId=' + roleId);
    }

    async getPermissions() {
        let response = await this.ApiService.get(this.API_URL + 'getpermissions').toPromise();
    }

    async getCompanies() {
        return await this.ApiService.get(this.API_URL + 'GetCompanies').toPromise();

    }

    async addCompany(company: Company) {
        return await this.ApiService.post(this.API_URL + 'AddCompany', company).toPromise();
    }

    async updateCompany(company: Company) {
        return await this.ApiService.put(this.API_URL + 'UpdateCompany', company).toPromise();
    }

    async deletCompany(id) {
        return await this.ApiService.delete(this.API_URL + 'DeleteCompany/' + id).toPromise();
    }


     getBranches(): Observable<any> {
        return this.ApiService.get(this.API_URL + 'GetBranches');
    }

    getBranchesByComapnyId(compid: number): Observable<Branch[]> {
        return this.ApiService.get(this.API_URL + 'GetBranchesByCompanyId/' + compid);
    }

     addBranches(branch: Branch): Observable<any> {
        return this.ApiService.post(this.API_URL + 'AddBranch', branch);
    }

    updateBranch(branch: Branch):Observable<any> {
        return this.ApiService.put(this.API_URL + 'UpdateBranch', branch);
    }

     deletBranch(id): Observable<any> {
        return this.ApiService.delete(this.API_URL + 'DeleteBranch/' + id);
    }

    async getDepartments() {
        return await this.ApiService.get(this.API_URL + 'GetDepartments').toPromise();
    }

    getDepartmentsByCompanyId(compid: number): Observable<Department[]> {
        return this.ApiService.get(this.API_URL + 'GetDepartmentsByCompanyId/' + compid);
    }

    async addDepartment(department: Department) {
        return await this.ApiService.post(this.API_URL + 'AddDepartment', department).toPromise();
    }

    async updateDepartment(department: Department) {
        return await this.ApiService.put(this.API_URL + 'UpdateDepartment', department).toPromise();
    }

    async deletDepartment(id) {
        return await this.ApiService.delete(this.API_URL + 'DeleteDepartment/' + id).toPromise();
    }


    async getRoles() {
        return await this.ApiService.get(this.API_URL + 'GetRoles').toPromise();
    }

    getDropdownRolesByCompany(companyId: any) {
        return this.ApiService.get(this.API_URL + 'GetDropdownRolesByCompany/' + companyId);
    }

    getRolesByCompanyId(companyId: any) {
        return this.ApiService.get(this.API_URL + 'GetRolesByCompany/' + companyId);
    }

    async getRolesByCompanyIdAsync(companyId: any) {
        return await this.ApiService.get(this.API_URL + 'GetRolesByCompanyId/' + companyId).toPromise();
    }

    // GetRolesByCompanyId(companyId: number) : Observable<Role[]> {
    //     return this.ApiService.get(this.API_URL + 'GetRolesByCompanyId/' + companyId);
    // }

    async addRole(role: Role) {
        return this.ApiService.post(this.API_URL + 'AddRole', role).toPromise();
    }


    async updateRole(role: Role) {
        return await this.ApiService.put(this.API_URL + 'UpdateRole', role).toPromise();

    }

    async deletRole(id) {
        return await this.ApiService.delete(this.API_URL + 'DeleteRole/' + id).toPromise();
    }

    async getFeatures() {
        return await this.ApiService.get(this.API_URL + 'GetFeatures').toPromise();

    }

    async addFeature(feature: Feature) {
        return await this.ApiService.post(this.API_URL + 'AddFeature', feature).toPromise();

    }
    async updateFeature(feature: Feature) {
        return await this.ApiService.put(this.API_URL + 'UpdateFeature', feature).toPromise();

    }

    async deletFeature(id) {
        return await this.ApiService.delete(this.API_URL + 'DeleteFeature/' + id).toPromise();
    }


    async getModules() {
        return await this.ApiService.get(this.API_URL + 'GetModules').toPromise();
    }


    async addModule(module: Module) {
        return await this.ApiService.post(this.API_URL + 'AddModule', module).toPromise();
    }

    async updateModule(module: Module) {
        return await this.ApiService.put(this.API_URL + 'UpdateModule', module).toPromise();
    }

    async deletModule(id) {
        return await this.ApiService.delete(this.API_URL + 'DeleteModule/' + id).toPromise();

    }
    //for module

    async testCall() {
        return await this.ApiService.get('https://jsonplaceholder.typicode.com/posts').toPromise();
    }


    async GetmyModulesWithFeatures() {
        return await this.ApiService.get(this.API_URL + 'GetModulesWithFeatures').toPromise();
    }

}