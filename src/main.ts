import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]),
    /*importProvidersFrom([
      BrowserAnimationsModule
    ])*/
    provideAnimations()
  ]
}).then();
