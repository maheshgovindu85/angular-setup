import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './side-bar.component';
import { AuthGuard } from 'src/app/PMT_Core/Authentication/Guard/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: SideBarComponent,

},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideBarRoutingModule { }
