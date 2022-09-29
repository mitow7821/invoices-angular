import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('../features/details/details.module').then((m) => m.DetailsModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
