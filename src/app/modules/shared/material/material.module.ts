import { CdkStepperModule } from '@angular/cdk/stepper'
import { CdkTableModule } from '@angular/cdk/table'
import { CdkTreeModule } from '@angular/cdk/tree'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatSortModule } from '@angular/material/sort'
import { MatStepperModule } from '@angular/material/stepper'
import { MatTableModule } from '@angular/material/table'
import { MatTabsModule } from '@angular/material/tabs'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatTreeModule } from '@angular/material/tree'
import { CdkAccordionModule } from '@angular/cdk/accordion'
import { MatSidenavModule } from '@angular/material/sidenav'
import {A11yModule} from '@angular/cdk/a11y'
import {OverlayModule} from '@angular/cdk/overlay'
import {PortalModule} from '@angular/cdk/portal'

@NgModule({
  exports: [
    CdkStepperModule,
    A11yModule,
    CdkTableModule,
    CdkAccordionModule,
    MatSidenavModule,
    CdkTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    OverlayModule,
    PortalModule,
    MatTooltipModule,
    MatTreeModule,
  ]
})
export class MaterialModule { }
