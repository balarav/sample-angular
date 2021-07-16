import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  firstNameControl = new FormControl('', [Validators.required]);
  lastNameControl = new FormControl('');

  // firstName: string = '';
  // lastName: string = '';
  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  submitForm() {
    
    if(this.firstNameControl.invalid){
      alert('not valid');
      return;
    }
    var newObj = {'fname' :this.firstNameControl.value, 'lname': this.lastNameControl.value};
    console.log(newObj);
    this.router.navigate([''])
  }
}
