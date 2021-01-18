import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./pages/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'delete',
    loadChildren: () => import('./pages/delete/delete.module').then( m => m.DeletePageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./pages/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'remove-list',
    loadChildren: () => import('./pages/remove-list/remove-list.module').then( m => m.RemoveListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
