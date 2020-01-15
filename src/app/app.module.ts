import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AcademicsComponent } from './academics/academics.component';
import { RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule } from '@angular/material';
import { HighschoolbooklistComponent } from './highschoolbooklist/highschoolbooklist.component';
import { MaterialModule } from './material/material.module';
import { EngineerComponent } from './engineer/engineer.component';
import { EngineerlistComponent } from './engineerlist/engineerlist.component';
import { FictionComponent } from './fiction/fiction.component';
import { FictionlistComponent } from './fictionlist/fictionlist.component';
import { NonfictionComponent } from './nonfiction/nonfiction.component';
import { NonfictionlistComponent } from './nonfictionlist/nonfictionlist.component';
import { KidsComponent } from './kids/kids.component';
import { KidlistComponent } from './kidlist/kidlist.component';
import { NonAcademicsComponent } from './non-academics/non-academics.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { UniversitybooklistComponent } from './universitybooklist/universitybooklist.component';
import { NonfictionbooklistComponent } from './nonfictionbooklist/nonfictionbooklist.component';
import { FictionbooklistComponent } from './fictionbooklist/fictionbooklist.component';
import { RomancelistComponent } from './romancelist/romancelist.component';
import { ScifilistComponent } from './scifilist/scifilist.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    AcademicsComponent,
    AboutusComponent,
    HighschoolbooklistComponent,
    EngineerComponent,
    EngineerlistComponent,
    FictionComponent,
    FictionlistComponent,
    NonfictionComponent,
    NonfictionlistComponent,
    KidsComponent,
    KidlistComponent,
    NonAcademicsComponent,
    ContactusComponent,
    FooterComponent,
    UniversitybooklistComponent,
    NonfictionbooklistComponent,
    FictionbooklistComponent,
    RomancelistComponent,
    ScifilistComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MaterialModule,
    RouterModule.forRoot([
      {path:'' , component:FirstpageComponent},
      {path: 'academics', component:AcademicsComponent},
      {path: 'highschoollist', component:HighschoolbooklistComponent},
      {path: 'engineer', component:EngineerComponent},
      {path: 'enginnerlist', component:EngineerlistComponent},
      {path: 'fiction', component:FictionComponent},
      {path: 'nonfiction', component:NonfictionComponent},
      {path: 'scifi', component:KidsComponent},
      {path: 'rom', component:KidlistComponent},
      {path: 'nonacademics', component:NonAcademicsComponent},
      {path: 'aboutus', component:AboutusComponent},
      {path: 'contactus', component:ContactusComponent},
      {path: 'universitybooklist', component:UniversitybooklistComponent},
      {path: 'fictionbooklist', component:FictionbooklistComponent},
      {path: 'nonfictionbooklist', component:NonfictionbooklistComponent},
      {path: 'firstpage' , component:FirstpageComponent},
      {path: 'romancelist', component:RomancelistComponent},
      {path: 'scifilist', component:ScifilistComponent}



     
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
