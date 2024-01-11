import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-pendaftaran',
  templateUrl: './pendaftaran.page.html',
  styleUrls: ['./pendaftaran.page.scss'],
})
export class PendaftaranPage implements OnInit {
  public nama: any = "";
  public jenis_kelamin: any = "";
  public no_hp: any = "";
  public email: any = "";
  public asal_sekolah: any = "";
  public program_studi: any = "";
  public jenjang: any = "";
  public kelas: any = "";
  public info_kampus: any = "";

  constructor(
    public toastCtrl: ToastController,
  ) {}

  ngOnInit() {}

  async addData() {
    const formData = new FormData();

    formData.append('nama', this.nama);
    formData.append('jenis_kelamin', this.jenis_kelamin);
    formData.append('no_hp', this.no_hp);
    formData.append('email', this.email);
    formData.append('asal_sekolah', this.asal_sekolah);
    formData.append('program_studi', this.program_studi);
    formData.append('jenjang', this.jenjang);
    formData.append('kelas', this.kelas);
    formData.append('info_kampus', this.info_kampus);

    console.log(formData);

    if (
      this.nama == "" ||
      this.jenis_kelamin == "" ||
      this.no_hp == "" ||
      this.email == "" ||
      this.asal_sekolah == "" ||
      this.program_studi == "" ||
      this.jenjang == "" ||
      this.kelas == "" ||
      this.info_kampus == ""
    ) {
      const toast = await this.toastCtrl.create({
        message: 'Lengkapi Data Pendaftaran',
        duration: 2000,
        color: 'danger',
      });
      toast.present();
    } else {
      try {
        
        const res = await axios.post('https://praktikum-cpanel-unbin.com/API_Alif/uas_s3/insert.php', formData);
        console.log(res.data);

        if (res.data.error === false && res.data.hasil === "Data Berhasil Disimpan") {
          const toast = await this.toastCtrl.create({
            message: 'Data berhasil ditambahkan',
            duration: 2000,
            color: 'success',
          });
          toast.present();
        } else {
          const toast = await this.toastCtrl.create({
            message: 'Data Berhasil Ditambahkan',
            duration: 2000,
            color: 'success',
          });
          toast.present();
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
}
