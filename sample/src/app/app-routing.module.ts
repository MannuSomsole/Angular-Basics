import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './home/details/details.component';
import { ProductComponent} from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageComponent } from './message/message.component';
const appRoutes: Routes = [
    {
      path: '', 
      redirectTo: 'messages', 
      pathMatch: 'full'
    },{
      path: 'details',
      component: DetailsComponent
    },{
      path: 'products',
      component: ProductComponent
    }, {
      path: 'dashboard',
      component: DashboardComponent
    }, {
      path: 'home',
      component: HomeComponent
    }, {
      path: 'messages',
      component: MessageComponent
    }
    
   // { path: 'products', component: ProductsComponent},
    //{ path: 'dashboard', component: DashboardComponent}
    /* { path: '',   redirectTo: '/heroes' }, */
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes
      )
    ],
    /*imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: false } // <-- debugging purposes only
      )
    ], */
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}