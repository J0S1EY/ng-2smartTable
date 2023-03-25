import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  @Input() data: any
  @Output() onCancel = new EventEmitter()
  @Output() onDelete = new EventEmitter()
  delete=false

  constructor(private route: Router) { }

  ngOnInit(): void {

  }

  cancel() {
    this.onCancel.emit()
  }

  deleteUser() {
    this.onDelete.emit(this.data)
    this.delete=true
    this.route.navigateByUrl('')
    

  }

}
