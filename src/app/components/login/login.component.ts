import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formLogin:FormGroup; 
  loading = false;

  constructor( private fb:FormBuilder, private _snackBar: MatSnackBar) { 
    this.formLogin = this.fb.group({
      user : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar(){
    const user = this.formLogin.value.user;
    const password = this.formLogin.value.password;
    console.log(user);
    console.log(password);
    
    if(user == "jovatope" && password == "admin123"){
      // Redirect to Dashboard
      this.fakeLoading();
      this.formLogin.reset();
    }
    else{
      // Show error messagew
      this.errorMessage();
    }
    
  }

  errorMessage(){
    this._snackBar.open('Usuario y/o contraseña inválido', '',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading(){
    this.loading=true;
    setTimeout(() => {
      // Redirect to dashboard

     this.loading = false; 
    }, 2000);
  }

}
