import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   model: any = {};
   @Output() cancelRegistration = new EventEmitter();

  constructor(private authservice: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
      this.authservice.register(this.model).subscribe(() => {
          this.alertify.success('Registration successful');
      }, error => {
          this.alertify.error(error);
      });
  }

  cancel() {
      this.cancelRegistration.emit(false);
  }

}
