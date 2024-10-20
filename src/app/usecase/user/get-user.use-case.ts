import { Injectable } from "@angular/core";
import { UserRepository } from "../../infrastructure/user/user.repository";
import { Observable } from "rxjs";
import { DataResponse } from "../../entity/data.reponse.entity";

@Injectable({
    providedIn: 'root'
})
export class GetUserUseCase {
    constructor(private userRepository: UserRepository) {}

    execute(id: number): Observable<DataResponse> {
        return this.userRepository.getUserById(id);
    }
}