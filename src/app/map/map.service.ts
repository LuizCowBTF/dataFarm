import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DemoFeature, MapData } from './map.model';
import { Feature } from "geojson";
import * as L from 'leaflet';
import { PathOptions } from "leaflet";
import { throwError } from 'rxjs/internal/observable/throwError';


@Injectable({
    providedIn: 'root'
})
export class MapService {

    // @ts-ignore
    private _map: MapData;

    public activeField: string | undefined;

    constructor() {
    }

    public get map(): MapData {
        if (this._map == null) {throw 'map is undefined'}
        return this._map;
    }

    public set map(basemap: MapData) {
        this._map = basemap;
    }

    /**
     * The feature is a geometry with properties, this geometry can be polygons or points.
     */
    insertFeature(feature: Feature | Feature[], style?: PathOptions): void {

        if (!Array.isArray(feature)) {
            feature = [feature];
        }

        if (style == undefined) {
            style = {
                stroke: true,
                color: '#ffffff',
                fillColor: '#000000',
                fillOpacity: 0.2}
        }

        L.geoJSON(feature, {
            style: style
        }).addTo(this._map)
    }

    deleteFeature(feature: Feature | Feature[], style?: PathOptions): void {
        L.geoJSON(feature, {
            style: style
        }).onRemove
    }

    insertDemoField() {
        this.insertFeature(DemoFeature);
        this.activeField = DemoFeature.properties?.['idField'];
    }

    deleteDemoField(){
        this.deleteFeature(DemoFeature);
        this.activeField = DemoFeature.properties?.['idField'];
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          console.error('Ocorreu um erro!:', error.error);
        } else {
          console.error(
            `Backend retornou códig ${error.status}, que: `, error.error);
        }
        return throwError(() => new Error('Occoreu um erro. Favor tente mais tarde.'));
      }
}
