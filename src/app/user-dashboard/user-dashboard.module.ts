import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeftNagivationPaneComponent} from "./left-nagivation-pane/left-nagivation-pane.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import { TopMenuComponent } from './top-menu/top-menu.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import { ApiReferenceComponent } from './api-reference/api-reference.component';
import {MatTableModule} from "@angular/material/table";
import { OverviewComponent } from './overview/overview.component';


@NgModule({
  declarations: [
    LeftNagivationPaneComponent,
    TopMenuComponent,
    ApiReferenceComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    MatTableModule
  ],
  exports: [
    LeftNagivationPaneComponent,
  ]
})
export class UserDashboardModule { }

