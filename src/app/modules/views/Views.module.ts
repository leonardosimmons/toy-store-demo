import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent
  ],
  exports: [
    LayoutComponent,
    NavbarComponent
  ]
})
export class ViewsModule { }
