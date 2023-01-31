import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './application/application.component';
import { ApplicationInterceptor } from './core/application/interceptor/application.interceptor';
import { ChartBarComponent } from './main/components/charts/chart-bar/chart-bar.component';
import { ChartLineComponent } from './main/components/charts/chart-line/chart-line.component';
import { ChartPieComponent } from './main/components/charts/chart-pie/chart-pie.component';
import { FarmInsertComponent } from './main/components/farms/farm-insert/farm-insert.component';
import { HeaderComponent } from './main/components/header/header.component';
import { MenuActionsComponent } from './main/components/menu-actions/menu-actions.component';
import { DialogAuthComponent } from './main/dialogs/dialog-auth/dialog-auth.component';
import { SubmissionComponent } from './main/submission/submission.component';
import { MapComponent } from './map/map.component';
import { MaterialModule } from './material/material.module';

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        ApplicationComponent,
        MenuActionsComponent,
        HeaderComponent,
        DialogAuthComponent,
        SubmissionComponent,
        FarmInsertComponent,
        ChartLineComponent,
        ChartBarComponent,
        ChartPieComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LeafletModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule,
        NgChartsModule,
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: ApplicationInterceptor,
        multi: true,
    },],
    bootstrap: [AppComponent]
})
export class AppModule {
}
