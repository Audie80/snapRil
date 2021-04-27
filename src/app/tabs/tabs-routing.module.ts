import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'connection',
        loadChildren: () =>
          import('../connection/connection.module').then(
            (m) => m.ConnectionPageModule
          ),
      },
      {
        path: 'photos',
        loadChildren: () =>
          import('../photo-gallery/photo-gallery.module').then(
            (m) => m.PhotoGalleryPageModule
          ),
      },
      {
        path: 'messages',
        loadChildren: () =>
          import('../inbox/inbox.module').then((m) => m.InboxPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/connection',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/connection',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
