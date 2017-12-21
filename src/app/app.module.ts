import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyvoucherComponent } from './voucher/myvoucher/myvoucher.component';
import { RoutingModule } from './app-routing.module';
import { ViewvoucherComponent } from './voucher/viewvoucher/viewvoucher.component';
import { BuyvoucherComponent } from './voucher/buyvoucher/buyvoucher.component';
import { VoucherHistoryComponent } from './voucher/voucher-history/voucher-history.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { HttpModule } from '@angular/http';
import { BaseHttpService } from './services/common/base-http.service';
import { BaseService } from './services/common/baseService.service';
import { ViewVoucherService } from './services/voucher/http/view-voucher.service';
import { VoucherService } from './services/voucher/voucher.service';


@NgModule({
  declarations: [
    AppComponent,
    MyvoucherComponent,
    ViewvoucherComponent,
    BuyvoucherComponent,
    VoucherHistoryComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule
  ],
  providers: [BaseHttpService, BaseService, ViewVoucherService, VoucherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
