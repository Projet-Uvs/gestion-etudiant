import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { LoginPage } from './pages/login/login.page';
import { HomePageModule } from './home/home.module';
import { LoginPageModule } from './pages/login/login.module';
import { AdminPage } from './pages/admin/admin.page';
import { AdminPageModule } from './pages/admin/admin.module';
import { ListPageModule } from './pages/list/list.module';
import { AddPageModule } from './pages/add/add.module';
import { EditPageModule } from './pages/edit/edit.module';
import { DeletePageModule } from './pages/delete/delete.module';
import { ListPage } from './pages/list/list.page';
import { DeletePage } from './pages/delete/delete.page';
import { EditPage } from './pages/edit/edit.page';
import { AddPage } from './pages/add/add.page';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    HomePage,
    LoginPage,
    AdminPage,
    ListPage,
    AddPage,
    EditPage,
    DeletePage
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule, 
    HomePageModule,
    LoginPageModule,
    AdminPageModule,
    ListPageModule,
    AddPageModule,
    EditPageModule,
    DeletePageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
