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
  MAT_DIALOG_DATA,
  MatSnackBarModule,
  MatProgressSpinnerModule
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
import { SecureLoginComponent } from './secure-login/secure-login.component';
import { LoginComponent } from './login/login.component';
import { DataInputComponent } from './data-input/data-input.component';
import { AuthGuard } from './guards/auth-guard.service';
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
    ContactComponent,
    SecureLoginComponent,
    LoginComponent,
    DataInputComponent,
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
    MatSnackBarModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot([
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
      },
      {
        path: 'secure',
        component: SecureLoginComponent,
        children: [
          {path: '', redirectTo: 'login', pathMatch: 'full'},
          {path: 'login', component: LoginComponent},
          {path: 'data', component: DataInputComponent, canActivate: [AuthGuard]},
        ]
      },
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: '/home', pathMatch: 'full'
      }
    ]),
  ],
  entryComponents: [
    DialogArticleComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
