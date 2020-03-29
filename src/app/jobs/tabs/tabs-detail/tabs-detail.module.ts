import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsDetailPageRoutingModule } from './tabs-detail-routing.module';

import { TabsDetailPage } from './tabs-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsDetailPageRoutingModule
  ],
  declarations: [TabsDetailPage]
})
export class TabsDetailPageModule {}
