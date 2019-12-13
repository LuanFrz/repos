import { HomelazyComponent } from './../../components/homelazy/homelazy.component';
import { HeaderComponent } from './../../components/header/header.component';
import { FooterComponent } from './../../components/footer/footer.component';
import { LazyloadingModule } from './lazyloading.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomelazyComponent, children: [
    {
      path: 'header',
      component: HeaderComponent
    },{
      path: 'footer',
      component: FooterComponent
    }
  ]}
];

@NgModule({
  declarations: [HomelazyComponent, HeaderComponent, FooterComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule {}
