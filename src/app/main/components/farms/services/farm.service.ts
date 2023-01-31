import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { first, take, tap, throwError } from "rxjs";

import { Farm } from "../farm.model";
import { Field } from "../field.model";
import { Dashboard } from "../dashboard.model";

@Injectable({
  providedIn: "root",
})
export class FarmService {
  private readonly baseUrlFarm = 'https://job.datafarm.app/api/api/farm';
  private readonly baseUrlField = 'https://job.datafarm.app/api/api/field/{idField}';
  private readonly baseUrlDash = 'https://job.datafarm.app/api/api/field/{idField}/dashboard';

  constructor(private http: HttpClient) {}

  //** PEGANDO FAZENDA === FARMS */

  getFarm() {
    return this.http.get<Farm[]>(this.baseUrlFarm).pipe(first(), tap(console.log));
  }

  //** PEGANDO CAMPOS === FIELDS */

  getField() {
    return this.http.get<Field[]>(this.baseUrlField).pipe(first(), tap(console.log));
  }

  putField() {
    return this.http.put<Field>(this.baseUrlField, Field).pipe(take(1));
  }

  /**  PEGANDO DADOS DASHBOARD === FIELDS/DASHBOARDS  */

  getFieldDashboard() {
    return this.http.get<Dashboard[]>(this.baseUrlDash).pipe(first(), tap(console.log));
  }

  //** TRATAMENTO DE ERROS */

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error("Ocorreu um erro!:", error.error);
    } else {
      console.error(
        `Backend retornou códig ${error.status}, que: `,
        error.error
      );
    }
    return throwError(
      () => new Error("Occoreu um erro. Favor tente mais tarde.")
    );
  }
}
