import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { ToastController } from '@ionic/angular';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-mobil-edit',
  templateUrl: './mobil-edit.page.html',
  styleUrls: ['./mobil-edit.page.scss'],
})
export class MobilEditPage implements OnInit {
  idmobil: any;
  idmerek: any;
  namamobil: any;
  tahun: any;
  tranmisi: any;
  merek: any;
  mobil: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiservice: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
    private toastControler: ToastController,
  ) {
    this.route.params.subscribe((param: any) => {
      this.idmobil = param.idmobil;
      console.log(this.idmobil)
      this.getOneMobil(this.idmobil);
      this.getMobil();
      this.getMerek();
    });
  }
  async presetToast(message : any, color: string = 'success'){
    const toast = await this.toastControler.create({
      message : message,
      duration : 1500,
      position : 'bottom',
      color: color
    });

    await toast.present();
}

  ngOnInit() {
    console.log('cek fungsi halaman');
  }

  getOneMobil(idmobil: any) {
  this._apiservice.getOneMobil(idmobil).subscribe((res: any) => {
    console.log("Sukses", res);
    let mobil = res[0];
    this.idmerek = mobil.idmerek;
    this.namamobil = mobil.namamobil;
    this.tahun = mobil.tahun;
    this.tranmisi = mobil.tranmisi;
  }, (err: any) => {
    console.log("error", err);
  });
}

  updateMobil(){
    let data = {
      idmerek : this.idmerek,
      namamobil : this.namamobil,
      tahun : this.tahun,
      tranmisi : this.tranmisi,
    };
    this._apiservice.updateMobil(this.idmobil, data).subscribe((res : any) => {
      console.log("Success", res);
      this.presetToast('Berhasil Merubah Data Mobil', 'success');
      this.router.navigateByUrl('/mobil');
    }, (err : any) => {
      console.log("Error", err);
      this.presetToast('Gagal Merubah Data', 'danger');
    });
  }

  getMobil() {
    this._apiservice.getMobil().subscribe(
      (res: any) => {
        console.log('Sukses', res);
        this.mobil = res;
      },
      (error: any) => {
        console.log("Gagal", error);
      }
    );
  }

  getMerek() {
    this._apiservice.getMerek().subscribe((res: any) => {
      console.log("sukses", res);
      this.merek = res;
    });
  }
}
