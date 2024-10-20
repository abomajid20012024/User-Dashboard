import { Component, OnInit } from '@angular/core';
import { GetUsersUseCase } from '../../../../usecase/user/get-users.use-case';
import { Data } from '../../../../entity/user.entity';
import { UserResponse } from '../../../../entity/user.response';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { UserProfileDialogComponent } from '../user-profile-dialog/user-profile-dialog.component';
import { DataResponse } from '../../../../entity/data.reponse.entity';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit {

  constructor(
    private getUsersUseCase: GetUsersUseCase,
    private router: Router,
    private dialog: MatDialog
  ) {}
  loading: boolean = true;
  users?: UserResponse;
  currentPage: number = 1;
  totalPages: number = 1;
  tempUsers?: UserResponse;
  ngOnInit(): void {
    if(!this.users) {
      this.loadUsers();
    }
  }

  /**
   * Loads users for the current page.
   * Uses the GetUsersUseCase to fetch users, updates the component's state,
   * and stores a temporary copy of the users for search functionality.
   */
  loadUsers(): void {
    this.loading = true;
    this.getUsersUseCase.execute(this.currentPage).pipe(
      tap((users) => {
        this.users = users;
        this.totalPages = users.total_pages;
      })
    ).subscribe({
      complete: () => {
        this.loading = false;
        console.log('Users fetching completed');
        console.log(this.users);
        this.tempUsers = this.users;  
      }
    });
  }

  /**
   * Changes the current page and loads users for that page.
   * @param page The page number to change to.
   */
  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadUsers();
  }

  /**
   * Moves to the next page if available and loads users for that page.
   */
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadUsers();
    }
  }

  /**
   * Moves to the previous page if available and loads users for that page.
   * Note: The condition `!this.users` might need to be reviewed as it prevents
   * going to the previous page if users are already loaded.
   */
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUsers();
    }
  }

  searchValue: string = '';

  /**
   * Handles the search functionality for users.
   * Filters users based on the search value, checking first name, last name, and email.
   * If no results are found in the current users, it searches in the temporary users list.
   * If the search value is empty, it restores the original user list.
   */
  onSearch() {
    if (this.searchValue.trim() !== '') {
      let filteredUsers = this.users!.data.filter(user => 
        user.first_name.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        user.last_name.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchValue.toLowerCase())
      );

      if (filteredUsers.length === 0 && this.tempUsers) {
        filteredUsers = this.tempUsers.data.filter(user => 
          user.first_name.toLowerCase().includes(this.searchValue.toLowerCase()) ||
          user.last_name.toLowerCase().includes(this.searchValue.toLowerCase()) ||
          user.email.toLowerCase().includes(this.searchValue.toLowerCase())
        );
      }

      this.users = {
        ...this.users!,
        data: filteredUsers
      };
    } else {
      this.users = this.tempUsers;
    }
  }
  openUserProfileDialog(user: Data): void {
    const dialogRef = this.dialog.open(UserProfileDialogComponent, {
      data: user 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed');

    });
  }
}
