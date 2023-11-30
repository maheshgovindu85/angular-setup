import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AdminAuthGuard } from './shared/guards/admin-auth.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { AdminDashboardWrapperComponent } from './shared/layouts/admin-dashboard/admin-wrapper/admin-wrapper.component';
import { CustomerDashboardWrapperComponent } from './shared/layouts/customer-dashboard/customer-wrapper/customer-wrapper.component';
import { StaticWrapperComponent } from './shared/layouts/static/wrapper/static-wrapper.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: StaticWrapperComponent,
    children: [
      { path: 'home', loadChildren: () => import('./modules/static/home/home.module').then(m => m.HomeModule) },
      { path: 'adminlogin', loadChildren: () => import('./modules/static/adminlogin/adminlogin.module').then(m => m.AdminLoginModule) },
      { path: 'changepassword/:id', loadChildren: () => import('./modules/static/changepassword/changepassword.module').then(m => m.ChangepasswordModule) },
      { path: 'userchangepassword/:id', loadChildren: () => import('./modules/static/userchangepassword/userchangepassword.module').then(m => m.UserChangepasswordModule) },
      { path: 'userforgetpassword/:id', loadChildren: () => import('./modules/static/userforgetpassword/userforgetpassword.module').then(m => m.UserForgotPasswordModule) },
      { path: 'candidateViaLink/:batchUdId', loadChildren: () => import('./modules/static/candidateViaLink/candidateViaLink.module').then(m => m.CandidateViaLinkModule) },
      { path: 'openLink/:token/:batchUdId/:assessmentUdId', loadChildren: () => import('./modules/static/candidateopenlink/candidateopenlink.module').then(m => m.CandidateOpenLinkModule) },
      { path: 'individualLink/:batchUdId/:assessmentUdId/:candidateID/:token', loadChildren: () => import('./modules/static/candidateindividuallink/candidateindividuallink.module').then(m => m.CandidateIndividualLinkModule) },
    ],
  },
  {
    path: 'user',
    component: CustomerDashboardWrapperComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('./modules/user/userdashboard/userdashboard.module').then(m => m.UserDashboardModule), canActivate: [AuthGuard] },
      // { path: 'myprofile', loadChildren: () => import('./modules/user/usermyprofile/usermyprofile.module').then(m => m.UserMyProfileModule) },
      { path: 'assessment/:batchUdId/:candBatchAssessUdId', loadChildren: () => import('./modules/user/userassessment/userassessment.module').then(m => m.UserAssessmentModule) },
      
      { path: 'peer-assessment/:udId/:batchUdId/:BatchAssessUdId/:candBatchAssessUdId', loadChildren: () => import('./modules/user/peerassessment/peerassessment.module').then(m => m.PeerAssessmentModule) },
      
      { path: 'assessment/belbin/:batchUdId/:candBatchAssessUdId', loadChildren: () => import('./modules/user/userassessment-belbin/userassessment.module').then(m => m.UserAssessmentModule), canActivate: [AuthGuard] },
    
    ],
  },
  {
    path: 'admin',
    component: AdminDashboardWrapperComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('./modules/admin/admindashboard/admindashboard.module').then(m => m.AdminDashboardModule), canActivate: [AdminAuthGuard] },
      { path: 'myprofile', loadChildren: () => import('./modules/admin/adminmyprofile/adminmyprofile.module').then(m => m.AdminMyProfileModule), canActivate: [AdminAuthGuard] },
      { path: 'management', loadChildren: () => import('./modules/admin/adminmanagement/adminmanagement.module').then(m => m.AdminManagementModule), canActivate: [AdminAuthGuard] },
      { path: 'candidates', loadChildren: () => import('./modules/admin/admincandidates/admincandidates.module').then(m => m.AdminCandidatesModule), canActivate: [AdminAuthGuard] },
      { path: 'batch', loadChildren: () => import('./modules/admin/adminbatch/adminbatch.module').then(m => m.AdminBatchModule), canActivate: [AdminAuthGuard] },
      { path: 'assessment', loadChildren: () => import('./modules/admin/adminassessment/adminassessment.module').then(m => m.AdminAssessmentModule), canActivate: [AdminAuthGuard] },
      { path: 'assessmentdetail/:udId', loadChildren: () => import('./modules/admin/adminassessmentdetail/adminassessmentdetail.module').then(m => m.AdminAssessmentDetailModule), canActivate: [AdminAuthGuard] },
      { path: 'addbatch', loadChildren: () => import('./modules/admin/addbatch/addbatch.module').then(m => m.AddBatchModule), canActivate: [AdminAuthGuard] },
      { path: 'editbatch/:udId', loadChildren: () => import('./modules/admin/addbatch/addbatch.module').then(m => m.AddBatchModule), canActivate: [AdminAuthGuard] },
      { path: 'admindetails/:udId', loadChildren: () => import('./modules/admin/admindetails/admindetails.module').then(m => m.AdminDetailsModule), canActivate: [AdminAuthGuard] },
      { path: 'batchdetails/:udId', loadChildren: () => import('./modules/admin/batchdetails/batchdetails.module').then(m => m.BatchDetailsModule), canActivate: [AdminAuthGuard] },
      { path: 'detailbatchreport/:udId', loadChildren: () => import('./modules/admin/detailbatchreport/detailbatchreport.module').then(m => m.DetailBatchReportModule), canActivate: [AdminAuthGuard] },
      { path: 'candidatedetails/:udId', loadChildren: () => import('./modules/admin/candidatedetails/candidatedetails.module').then(m => m.CandidateDetailsModule), canActivate: [AdminAuthGuard] },
      { path: 'notifications', loadChildren: () => import('./modules/admin/adminnotifications/adminnotifications.module').then(m => m.AdminNotificationsModule), canActivate: [AdminAuthGuard] },
      // { path: 'detailbatchreport', loadChildren: () => import('./modules/admin/detailbatchreport/detailbatchreport.module').then(m => m.DetailBatchReportModule), canActivate: [AdminAuthGuard] },

    ],
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
