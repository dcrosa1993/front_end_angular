import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDevicesComponent } from './components/devices/list-devices/list-devices.component';
import { AddDevicesComponent } from './components/devices/add-devices/add-devices.component';
import { EditDevicesComponent } from './components/devices/edit-devices/edit-devices.component';
import { FormsModule } from '@angular/forms';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListDevicesComponent,
    AddDevicesComponent,
    EditDevicesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, GraphQLModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
