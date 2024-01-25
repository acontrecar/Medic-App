import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth/auth-layout/auth-layout.component';

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
    }
];
