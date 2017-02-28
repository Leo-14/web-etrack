import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { StudentsComponent }  from './students/students.component';
import { StudentComponent }  from './students/student.component';
import { AddStudentComponent }  from './students/add_student';
import { HomeComponent }  from './home/home.component';
import { LoginComponent }  from './login/login.component';
import { SessionsComponent } from './sessions/sessions.component';
import { AddSessionComponent } from './sessions/add_session';
import { AttendancesComponent } from './attendances/attendances.component';
import { AttendanceComponent } from './attendances/attendance.component';
import { SessionComponent } from './sessions/session.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { FacultyComponent } from './faculties/faculty.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentComponent } from './departments/department.component';
import { SemestersComponent } from './semesters/semesters.component';
import { SemesterComponent } from './semesters/semester.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageComponent } from './messages/message.component';
import { AddMessageComponent } from './messages/add_message';
import { SettingsComponent } from './settings/settings.component';
import { SettingComponent } from './settings/setting.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { StatisticComponent } from './statistiques/statistic.component';

const appRoutes: Routes = [

//defaut routing
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

// login
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },

// home
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },

// students
  {
    path: 'students',
    component: StudentsComponent,
    data: { title: 'students List' }
  },
  {
    path: 'student/new',
    component: AddStudentComponent,
    data: { title: 'New Student'}
  },
  {
    path: 'students/:id',
    component: StudentComponent,
    data: { title: 'Student'}
  },


// sessions
  {
    path: 'sessions',
    component: SessionsComponent,
    data: { title: 'Login' }
  },
  {
    path: 'sessions/:id',
    component: SessionComponent,
    data: { title: 'Session'}
  },
  {
    path: 'session/new',
    component: AddSessionComponent,
    data: { title: 'New Session'}
  },

// attendances
{
  path: 'attendances',
  component: AttendancesComponent,
  data: { title: 'Attendances' }
},
{
  path: 'attendances/:id',
  component: AttendanceComponent,
  data: { title: 'Attendance' }
},

// faculties
{
  path: 'faculties',
  component: FacultiesComponent,
  data: { title: 'Faculties' }
},
{
  path: 'faculties/new',
  component: FacultyComponent,
  data: { title: 'Faculty' }
},

// department
{
  path: 'departments',
  component: DepartmentsComponent,
  data: { title: 'Departments' }
},
{
  path: 'departments/new',
  component: DepartmentComponent,
  data: { title: 'Department' }
},

// semesters
{
  path: 'semesters',
  component: SemestersComponent,
  data: { title: 'Semesters' }
},
{
  path: 'semesters/:id',
  component: SemesterComponent,
  data: { title: 'Semesters' }
},

// messages
{
  path: 'messages',
  component: MessagesComponent,
  data: { title: 'Messages' }
},
{
  path: 'messages/:id',
  component: MessageComponent,
  data: { title: 'Message' }
},
  {
    path: 'message/new',
    component: AddMessageComponent,
    data: { title: 'New Message'}
  },

// settings
{
  path: 'settings',
  component: SettingsComponent,
  data: { title: 'Settings' }
},
{
  path: 'settings/:id',
  component: SettingComponent,
  data: { title: 'Setting' }
},

// statistiques
{
  path: 'statistiques',
  component: StatistiquesComponent,
  data: { title: 'Statistiques' }
},
{
  path: 'statistiques/:id',
  component: StatisticComponent,
  data: { title: 'Statistique' }
}

  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],

  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent,
    HomeComponent,
    LoginComponent,
    SessionsComponent,
    SessionComponent,
    AttendancesComponent,
    AttendanceComponent,
    FacultiesComponent,
    FacultyComponent,
    DepartmentsComponent,
    DepartmentComponent,
    SemestersComponent,
    SemesterComponent,
    MessagesComponent,
    MessageComponent,
    SettingsComponent,
    SettingComponent,
    StatistiquesComponent,
    StatisticComponent,
    AddSessionComponent,
    AddStudentComponent,
    AddMessageComponent
  ],

  bootstrap:    [
    AppComponent,
    StudentsComponent,
    StudentComponent,
    HomeComponent,
    LoginComponent,
    SessionsComponent,
    SessionComponent,
    AttendancesComponent,
    AttendanceComponent,
    FacultiesComponent,
    FacultyComponent,
    DepartmentsComponent,
    DepartmentComponent,
    SemestersComponent,
    SemesterComponent,
    MessagesComponent,
    MessageComponent,
    SettingsComponent,
    SettingComponent,
    StatistiquesComponent,
    StatisticComponent,
    AddSessionComponent,
    AddStudentComponent,
    AddMessageComponent
  ]

})
export class AppModule { }
