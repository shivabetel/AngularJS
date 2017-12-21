import { NgModule } from "@angular/core";
import { 
     RouterModule, 
     Routes
    } from "@angular/router";
import { MyvoucherComponent } from "./voucher/myvoucher/myvoucher.component";
import { ViewvoucherComponent } from "./voucher/viewvoucher/viewvoucher.component";
import { BuyvoucherComponent } from "./voucher/buyvoucher/buyvoucher.component";

const appRoutes: Routes = [
   { path: '', redirectTo: 'myVouchers',  pathMatch:'full'},
   {path: 'myVouchers', component: MyvoucherComponent, children: [
       {path: '', redirectTo: 'viewVoucher', pathMatch: 'full'},
       {path: 'viewVoucher', component: ViewvoucherComponent},
       {path: 'buyVoucher', component: BuyvoucherComponent}
   ]
   }
]

@NgModule({
   imports: [ RouterModule.forRoot(appRoutes) ],
   exports: [ RouterModule ]
})
export class RoutingModule{

}