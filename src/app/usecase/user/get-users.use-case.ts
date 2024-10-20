import { Injectable } from "@angular/core";
import { UserRepository } from "../../infrastructure/user/user.repository";
import { UserResponse } from "../../entity/user.response";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GetUsersUseCase {
    constructor(private userRepository: UserRepository) {}

    execute(page: number): Observable<UserResponse> {
        return this.userRepository.getUsers(page);
    }
}   