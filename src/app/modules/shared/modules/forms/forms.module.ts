import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorsModule } from '../form-errors/form-errors.module';


@NgModule({
  imports: [FormErrorsModule, ReactiveFormsModule],
})
export class FormsModule {}
