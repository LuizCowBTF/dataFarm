import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MapService } from '../../../map/map.service';
import { FarmInsertComponent } from '../farms/farm-insert/farm-insert.component';

@Component({
    selector: 'app-menu-actions',
    templateUrl: './menu-actions.component.html',
    styleUrls: ['./menu-actions.component.scss']
})
export class MenuActionsComponent {

    constructor(
        private mapService: MapService,
        public dialog: MatDialog
    ) {}

    openDashboard() {
        console.log('Open Dashboard');
        console.log(`idField: ${this.mapService.activeField}`);

        this.dialog.open(FarmInsertComponent, {
            width: '900px',
            height: '550px',
            disableClose: true
        });
    }

    deleteField() {
        console.log('Delete Field');
        console.log(`idField: ${this.mapService.activeField}`);

        return this.mapService.deleteDemoField();
    }

}
