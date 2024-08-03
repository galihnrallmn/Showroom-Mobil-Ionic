import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('./mobil/mobil.module').then(m=>m.MobilPageModule),
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'mobil',
    loadChildren: () => import('./mobil/mobil.module').then( m => m.MobilPageModule)
  },
  {
    path: 'mobil-tambah',
    loadChildren: () => import('./mobil-tambah/mobil-tambah.module').then( m => m.MobilTambahPageModule)
  },
  {
    path: 'mobil-edit/:idmobil',
    loadChildren: () => import('./mobil-edit/mobil-edit.module').then( m => m.MobilEditPageModule)
  },
  {
    path: 'merek',
    loadChildren: () => import('./merek/merek.module').then( m => m.MerekPageModule)
  },
  {
    path: 'merek-tambah',
    loadChildren: () => import('./merek-tambah/merek-tambah.module').then( m => m.MerekTambahPageModule)
  },
  {
    path: 'merek-edit/:idmerek',
    loadChildren: () => import('./merek-edit/merek-edit.module').then( m => m.MerekEditPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
