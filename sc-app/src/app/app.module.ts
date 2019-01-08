import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatSidenavModule,
  MatTabsModule,
  MatTableModule,
  MatListModule,
  MatDialogModule,
  MAT_DIALOG_DATA
} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { YoutubePlayerModule } from 'ngx-youtube-player';

import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { ScrollComponent } from './navigation/scroll/scroll.component';
import { SociologyComponent } from './sociology/sociology.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DialogArticleComponent } from './dialogs/dialog-article/dialog-article.component';
import { SrilankaComponent } from './srilanka/srilanka.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    ScrollComponent,
    SociologyComponent,
    DialogArticleComponent,
    SrilankaComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatExpansionModule,
    HttpClientModule,
    MatSidenavModule,
    MatTabsModule,
    MatTableModule,
    MatListModule,
    NgxPaginationModule,
    MatDialogModule,
    YoutubePlayerModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: '/home', pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'sociology',
        component: SociologyComponent
      },
      {
        path: 'srilanka',
        component: SrilankaComponent
      },
      {
        path: 'contactus',
        component: ContactComponent
      }
    ])
  ],
  entryComponents: [
    DialogArticleComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
