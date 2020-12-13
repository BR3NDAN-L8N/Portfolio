import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MATERIAL
import { AngularMaterialModule } from './modules/angular-material.module';

//  LOCAL STORAGE
import { UserSessionStorageService } from "./services/webstorage.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectMoreInfoComponent } from './components/project-more-info/project-more-info.component';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        NavBarComponent,
        AboutComponent,
        ProjectsComponent,
        ProjectCardComponent,
        ProjectMoreInfoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularMaterialModule
    ],
    providers: [
        UserSessionStorageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
