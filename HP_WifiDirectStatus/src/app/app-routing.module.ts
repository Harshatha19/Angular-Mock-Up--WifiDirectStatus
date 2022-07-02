import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hp', loadChildren: () => import('./main-components/main-components.module')
      .then(mod => mod.MainComponentsModule)
  },
  { path: '', redirectTo: 'hp', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
