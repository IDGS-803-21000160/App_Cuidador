import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFormComponent } from './main-form/main-form.component';
import { PrivacyNoticeComponent } from './components/privacy-notice/privacy-notice.component';
import { RequirementsComponent } from './components/requirements/requirements.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: MainFormComponent,
    children: [
      { path: '', redirectTo: 'form', pathMatch: 'full' },
      {
        path: 'InfoPrivacy',
        component: PrivacyNoticeComponent,
      },
      {
        path: 'requeriments',
        component: RequirementsComponent,
      },
      {
        path: 'form',
        component: FormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamiliarRoutingModule {}
