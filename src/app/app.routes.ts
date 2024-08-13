import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PagesComponent } from './pages/pages.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
    { 
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'portfolio',
        component: PagesComponent,
        children: [
            {
                path: "projects",
                component: ProjectsComponent
            }
        ]
    }
];
