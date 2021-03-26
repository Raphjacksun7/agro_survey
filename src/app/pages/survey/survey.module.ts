import { NgModule } from '@angular/core';

import { SurveyRoutingModule } from './survey-routing.module';

import { SurveyComponent } from './survey.component';

import { IconsProviderModule } from '../../icons-provider.module';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@NgModule({
  imports: [
    SurveyRoutingModule,
    IconsProviderModule,
    NzTypographyModule,
    NzListModule,
    NzLayoutModule,
    NzGridModule,
    NzButtonModule,
    NzInputModule,
    NzRadioModule
  ],
  declarations: [SurveyComponent],
  exports: [SurveyComponent]
})
export class SurveyModule { }
