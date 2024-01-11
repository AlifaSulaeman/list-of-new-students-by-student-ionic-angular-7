import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {Router} from '@angular/router';
@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
  public namaData: any = [];
  public id: any = "";
  public nama: any = "";
  public status: any = "";
  public password: any = "";
  public data: any = [];

  constructor(private router: Router) {
    this.getData();
  }

  async getData() {
    try {
      const res = await axios.get('https://praktikum-cpanel-unbin.com/API_Alif/uas_s3/get_data.php');
      this.namaData = res.data.data;
      this.data = this.namaData; 
      console.log(this.namaData);
    } catch (err) {
      console.log(err);
    }
  }

  ngOnInit() {
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    console.log('Query:', query);
    console.log('All Data:', this.namaData);
    this.data = this.namaData.filter((d: any) => d.id.toLowerCase().includes(query));
    this.data = this.namaData.filter((d: any) => d.nama.toLowerCase().includes(query));
    console.log('Filtered Data:', this.data);
  }
  navigateToFeePage() {
    console.log('Navigating to Fee Page');
    this.router.navigate(['/fee']);
  }
}