import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './error/error.component';
import { DetailspComponent } from './product/detailsp/detailsp.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'product',
    pathMatch: 'full'
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'detail/:id',
    component: DetailspComponent
  },
  {
    path: '**',
    component: ErrorComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
