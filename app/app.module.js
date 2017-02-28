"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var students_component_1 = require('./students/students.component');
var student_component_1 = require('./students/student.component');
var add_student_1 = require('./students/add_student');
var home_component_1 = require('./home/home.component');
var login_component_1 = require('./login/login.component');
var sessions_component_1 = require('./sessions/sessions.component');
var add_session_1 = require('./sessions/add_session');
var attendances_component_1 = require('./attendances/attendances.component');
var attendance_component_1 = require('./attendances/attendance.component');
var session_component_1 = require('./sessions/session.component');
var faculties_component_1 = require('./faculties/faculties.component');
var faculty_component_1 = require('./faculties/faculty.component');
var departments_component_1 = require('./departments/departments.component');
var department_component_1 = require('./departments/department.component');
var semesters_component_1 = require('./semesters/semesters.component');
var semester_component_1 = require('./semesters/semester.component');
var messages_component_1 = require('./messages/messages.component');
var message_component_1 = require('./messages/message.component');
var add_message_1 = require('./messages/add_message');
var settings_component_1 = require('./settings/settings.component');
var setting_component_1 = require('./settings/setting.component');
var statistiques_component_1 = require('./statistiques/statistiques.component');
var statistic_component_1 = require('./statistiques/statistic.component');
var appRoutes = [
    //defaut routing
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    // login
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        data: { title: 'Login' }
    },
    // home
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        data: { title: 'Home' }
    },
    // students
    {
        path: 'students',
        component: students_component_1.StudentsComponent,
        data: { title: 'students List' }
    },
    {
        path: 'student/new',
        component: add_student_1.AddStudentComponent,
        data: { title: 'New Student' }
    },
    {
        path: 'students/:id',
        component: student_component_1.StudentComponent,
        data: { title: 'Student' }
    },
    // sessions
    {
        path: 'sessions',
        component: sessions_component_1.SessionsComponent,
        data: { title: 'Login' }
    },
    {
        path: 'sessions/:id',
        component: session_component_1.SessionComponent,
        data: { title: 'Session' }
    },
    {
        path: 'session/new',
        component: add_session_1.AddSessionComponent,
        data: { title: 'New Session' }
    },
    // attendances
    {
        path: 'attendances',
        component: attendances_component_1.AttendancesComponent,
        data: { title: 'Attendances' }
    },
    {
        path: 'attendances/:id',
        component: attendance_component_1.AttendanceComponent,
        data: { title: 'Attendance' }
    },
    // faculties
    {
        path: 'faculties',
        component: faculties_component_1.FacultiesComponent,
        data: { title: 'Faculties' }
    },
    {
        path: 'faculties/new',
        component: faculty_component_1.FacultyComponent,
        data: { title: 'Faculty' }
    },
    // department
    {
        path: 'departments',
        component: departments_component_1.DepartmentsComponent,
        data: { title: 'Departments' }
    },
    {
        path: 'departments/new',
        component: department_component_1.DepartmentComponent,
        data: { title: 'Department' }
    },
    // semesters
    {
        path: 'semesters',
        component: semesters_component_1.SemestersComponent,
        data: { title: 'Semesters' }
    },
    {
        path: 'semesters/:id',
        component: semester_component_1.SemesterComponent,
        data: { title: 'Semesters' }
    },
    // messages
    {
        path: 'messages',
        component: messages_component_1.MessagesComponent,
        data: { title: 'Messages' }
    },
    {
        path: 'messages/:id',
        component: message_component_1.MessageComponent,
        data: { title: 'Message' }
    },
    {
        path: 'message/new',
        component: add_message_1.AddMessageComponent,
        data: { title: 'New Message' }
    },
    // settings
    {
        path: 'settings',
        component: settings_component_1.SettingsComponent,
        data: { title: 'Settings' }
    },
    {
        path: 'settings/:id',
        component: setting_component_1.SettingComponent,
        data: { title: 'Setting' }
    },
    // statistiques
    {
        path: 'statistiques',
        component: statistiques_component_1.StatistiquesComponent,
        data: { title: 'Statistiques' }
    },
    {
        path: 'statistiques/:id',
        component: statistic_component_1.StatisticComponent,
        data: { title: 'Statistique' }
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                http_1.HttpModule,
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(appRoutes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                students_component_1.StudentsComponent,
                student_component_1.StudentComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                sessions_component_1.SessionsComponent,
                session_component_1.SessionComponent,
                attendances_component_1.AttendancesComponent,
                attendance_component_1.AttendanceComponent,
                faculties_component_1.FacultiesComponent,
                faculty_component_1.FacultyComponent,
                departments_component_1.DepartmentsComponent,
                department_component_1.DepartmentComponent,
                semesters_component_1.SemestersComponent,
                semester_component_1.SemesterComponent,
                messages_component_1.MessagesComponent,
                message_component_1.MessageComponent,
                settings_component_1.SettingsComponent,
                setting_component_1.SettingComponent,
                statistiques_component_1.StatistiquesComponent,
                statistic_component_1.StatisticComponent,
                add_session_1.AddSessionComponent,
                add_student_1.AddStudentComponent,
                add_message_1.AddMessageComponent
            ],
            bootstrap: [
                app_component_1.AppComponent,
                students_component_1.StudentsComponent,
                student_component_1.StudentComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                sessions_component_1.SessionsComponent,
                session_component_1.SessionComponent,
                attendances_component_1.AttendancesComponent,
                attendance_component_1.AttendanceComponent,
                faculties_component_1.FacultiesComponent,
                faculty_component_1.FacultyComponent,
                departments_component_1.DepartmentsComponent,
                department_component_1.DepartmentComponent,
                semesters_component_1.SemestersComponent,
                semester_component_1.SemesterComponent,
                messages_component_1.MessagesComponent,
                message_component_1.MessageComponent,
                settings_component_1.SettingsComponent,
                setting_component_1.SettingComponent,
                statistiques_component_1.StatistiquesComponent,
                statistic_component_1.StatisticComponent,
                add_session_1.AddSessionComponent,
                add_student_1.AddStudentComponent,
                add_message_1.AddMessageComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map