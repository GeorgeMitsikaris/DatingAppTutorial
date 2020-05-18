import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   model: any = {};
   @Output() cancelRegistration = new EventEmitter();

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  register() {
      this.authservice.register(this.model).subscribe(() => {
          console.log('Registration successful');
      }, error => {
          console.log(error);
      });
  }

  cancel() {
      this.cancelRegistration.emit(false);
  }

}
