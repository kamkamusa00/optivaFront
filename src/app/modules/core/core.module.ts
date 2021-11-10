import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorManagerService } from './services/error-manager/error-manager.service';
import { UrlInterceptor } from './interceptors/urI.interceptor';
import { AppStoreModule } from '@store/store.module';

@NgModule({
  imports: [HttpClientModule, AppStoreModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true,
    },
    ErrorManagerService,
  ],
})
export class CoreModule {}
