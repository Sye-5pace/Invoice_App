import { Injectable } from '@angular/core';
import { ToggleService } from './toggle.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService extends ToggleService{
  private openDeleteModal = new BehaviorSubject<boolean>(true);
  private openCreateModal = new BehaviorSubject<boolean>(false);

  openCreateModal$ = this.openCreateModal.asObservable();
  openDeleteModal$ = this.openDeleteModal.asObservable();

  constructor() {
    super();
  }

  toggle(): void{
    this.isActive = !this.isActive;
  }

  showCreateModal(): void {
    this.openCreateModal.next(true);
  }

  hideCreateModal(): void {
    this.openCreateModal.next(false);
  }

  showDeleteModal(): void {
    this.openDeleteModal.next(true);
  }

  hideDeleteModal(): void {
    this.openDeleteModal.next(false);
  }
}
