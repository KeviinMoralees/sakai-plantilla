import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        SharedModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
