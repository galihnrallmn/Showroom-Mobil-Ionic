import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController,LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-mobil-tambah',
  templateUrl: './mobil-tambah.page.html',
  styleUrls: ['./mobil-tambah.page.scss'],
})
export class MobilTambahPage implements OnInit {
  idmerek: any;
  namamobil: any;
  tahun: any;
  tranmisi: any;
  merek: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiservice: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) {
    this.getMerek();
  }

  ngOnInit() {
    console.log('cek fungsi halaman');
  }

  getMerek() {
    this._apiservice.getMerek().subscribe((res: any) => {
      console.log("sukses", res);
      this.merek = res;
    });
  }

  addMobil(){
    let url = this._apiservice.apiURL() + "/create_mobil.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-type": "applications/json" },
      data: {
        idmerek: this.idmerek,
        namamobil: this.namamobil,
        tahun: this.tahun,
        tranmisi: this.tranmisi
      },
    }).then((data)=>{
      this.idmerek = '';
      this.namamobil = '';
      this.tahun = '';
      this.tranmisi = '';
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil menambahkan data mobil',
        buttons: ['OK'],
      }).then(res=>{
        res.present();
      });
      this.router.navigateByUrl('/mobil');
    }, (error)=> {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal menambahkan data mobil',
        buttons: ['OK'],
      }).then(res=>{
        res.present();
      });
    })
  }

}
