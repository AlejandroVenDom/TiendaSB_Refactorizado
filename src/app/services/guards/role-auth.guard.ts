import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UseStateService } from '../auth/use-state.service';



export const roleAuthGuard: CanActivateFn = (route, state) => {
  
  const roleUser = inject(UseStateService);
  const router = inject(Router);
  const role = roleUser.getRole();

  if(role === 'CLIENT'){
    router.navigate(['/']);
    return false;
  }
  
  return true;
};
