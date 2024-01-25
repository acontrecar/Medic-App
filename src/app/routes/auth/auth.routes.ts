import { Routes } from "@angular/router"
import { LoginComponent } from "../../core/components/auth/login/login.component"
import { RegisterComponent } from "../../core/components/auth/register/register.component"

export const AUTH_ROUTES: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    }
]