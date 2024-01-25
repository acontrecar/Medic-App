import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: "",
                loadChildren: () => 
                    import("./routes/auth/auth.routes").then((r) => r.AUTH_ROUTES)
            }
        ]
    },
    {
        path: 'medic',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => 
                    import("./routes/medic.routes").then((r) => r.MEDIC_ROUTES)
            }
        ]
    }
];
