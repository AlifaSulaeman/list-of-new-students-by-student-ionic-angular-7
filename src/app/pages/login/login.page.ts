import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  npm: string = '';
  email: string = '';
  showPassword: boolean = false;

  constructor(private router: Router) { }

  login() {
    const data = {
      npm: this.npm,
      email: this.email
    };

    axios.post('https://praktikum-cpanel-unbin.com/API_Alif/uas_s3/login.php', data)
      .then(response => {
        const result = response.data;
        if (result.status === 'success') {
          this.router.navigate(['home']);
        } else {
          console.error(result.message);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  ngOnInit() {
  }
}
