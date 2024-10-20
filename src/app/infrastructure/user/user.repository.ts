import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserResponse } from "../../entity/user.response";
import { DataResponse } from "../../entity/data.reponse.entity";

@Injectable({
    providedIn: 'root'
})
export class UserRepository {
    private apiUrl = 'https://reqres.in/api/users';

    constructor(private http: HttpClient) {}

    getUsers(page: number): Observable<UserResponse> {
        return this.http.get<UserResponse>(`${this.apiUrl}?page=${page}`);
    }
    getUserById(id: number): Observable<DataResponse> {
        return this.http.get<DataResponse>(`${this.apiUrl}/${id}`);
    }
}