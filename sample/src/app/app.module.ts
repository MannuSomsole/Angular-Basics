import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonServiceService } from './common-service.service';
import { AppRoutingModule } from "./app-routing.module";
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorDirective } from './directives/error.directive';
import { ChildComponent } from './child/child.component';
import { DetailsComponent } from './home/details/details.component';
import { InfoDirective } from './directives/info.directive';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { QuickViewComponent } from './quick-view/quick-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertsComponent } from './alerts/alerts.component';
import { PaneDirective } from './directives/pane.directive';
import { CustomPipe } from './custom.pipe';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './home/home/home-routing.module';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorDirective,
    ChildComponent,
    DetailsComponent,
    InfoDirective,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductDetailsComponent,
    QuickViewComponent,
    DashboardComponent,
    AlertsComponent,
    PaneDirective,
    CustomPipe,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule,
    HttpModule
  ],
  providers: [CommonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
