import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home.component';
import { DetailsComponent } from '../details/details.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ProductComponent} from '../../product/product.component';

const homeRoutes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    children: [
      {
        
            path: 'd',
            component: DashboardComponent
          
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
