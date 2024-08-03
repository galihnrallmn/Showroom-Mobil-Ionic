import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController,LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-merek-tambah',
  templateUrl: './merek-tambah.page.html',
  styleUrls: ['./merek-tambah.page.scss'],
})
export class MerekTambahPage implements OnInit {
  namamerek: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiservice: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) { }

  ngOnInit() {
    console.log('cek fungsi halaman');
  }

  addMerek() {
  let url = this._apiservice.apiURL() + "/create_merek.php";
  Http.request({
    method: "POST",
    url: url,
    headers: { "Content-type": "applications/json" },
    data: {
      namamerek: this.namamerek,
    },
  }).then((data) => {
    this.namamerek = '';
    this.alertController.create({
      header: 'Notifikasi',
      message: 'Berhasil menambahkan data',
      buttons: ['OK'],
    }).then(res => {
      res.present();
    });
    this.router.navigateByUrl('/merek');
  }, (error) => {
    this.alertController.create({
      header: 'Notifikasi',
      message: 'Gagal menambahkan data',
      buttons: ['OK'],
    }).then(res => {
      res.present();
    });
  });
}

}
