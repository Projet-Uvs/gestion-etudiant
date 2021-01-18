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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdatePage } from './pages/update/update.page';
import { UpdatePageModule } from './pages/update/update.module';
import { RemoveListPage } from './pages/remove-list/remove-list.page';
import { RemoveListPageModule } from './pages/remove-list/remove-list.module';
import { FilterPipe } from './pipes/filter.pipe';
import { PipesModule } from './pipes/pipe.module';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    HomePage,
    LoginPage,
    AdminPage,
    ListPage,
    AddPage,
    EditPage,
    DeletePage,
    UpdatePage, 
    RemoveListPage
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
    DeletePageModule,
    HttpClientModule,
    FormsModule,
    UpdatePageModule,
    RemoveListPageModule,
    PipesModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports:[FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
