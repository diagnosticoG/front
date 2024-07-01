import { Component, ContentChildren, Input, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { MetaDataColumna } from '../interfaces/metaDataColumna.interface';
import { MatColumnDef, MatTable } from '@angular/material/table';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  @Input() datos: any;
  @Input() metaDataColumnas!: MetaDataColumna[];

  @ContentChildren(MatColumnDef, { descendants: true }) columnasDef!: QueryList<MatColumnDef>;
  @ViewChild(MatTable, { static: true }) tabla!: MatTable<any>;
  listaCampos: string[] = [];

  ngOnChanges(cambios: SimpleChanges) {
    if (cambios['metaDataColumnas']) {
      this.listaCampos = this.metaDataColumnas.map((x) => x.campo);
    }
  }

  ngAfterContentInit() {
    if (!this.columnasDef) { return; }
    this.columnasDef.forEach(columnaDef => {
      this.listaCampos.push(columnaDef.name);
      this.tabla.addColumnDef(columnaDef);
    });
  }
}
