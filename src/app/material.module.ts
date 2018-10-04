import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material';
import { FormsModule } from '@angular/forms';  
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

@NgModule({
    imports: [MatExpansionModule, MatButtonModule, MatProgressBarModule, MatCardModule, MatTabsModule, MatDialogModule,
        MatSnackBarModule, MatSelectModule, MatExpansionModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatIconModule
    , MatFormFieldModule, MatGridListModule, MatListModule],
    exports: [MatExpansionModule, MatButtonModule, MatProgressBarModule, MatCardModule, MatTabsModule, MatDialogModule,
        MatSnackBarModule, MatSelectModule, MatExpansionModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatIconModule
    , MatFormFieldModule, MatGridListModule, MatListModule],
})
export class MaterialModule { }