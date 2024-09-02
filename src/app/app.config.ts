import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { reducer } from './stores/invoice/reducer';
import { InvoiceEffect } from './stores/invoice/effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideEffects(InvoiceEffect), provideStore(), provideState({
    name:'invoice', reducer: reducer
  }),
  provideHttpClient()
]
};
