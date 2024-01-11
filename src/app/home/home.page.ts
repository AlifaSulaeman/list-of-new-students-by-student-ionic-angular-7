import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public data: any =[];
  public email: any = "";

  constructor(private router: Router) {
    this.getData();
  }
async getData(){
  try{
    const res = await axios.get('https://praktikum-cpanel-unbin.com/API_Alif/uas_s3/get_users.php');
    this.data = res.data;
    this.data = this.data;
  }catch(err){
    console.log(err);
  }
}
}
