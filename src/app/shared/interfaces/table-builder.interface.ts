import { ITableDetail } from '../tables/table-detail';
import { IColumnDescriptor } from '../tables/column-descriptor.interface';

export class TableBuilderComponent {
  columnsToDisplay: string[] = [];
  itemsForGenTable: ITableDetail[] = [];
  generateTableBuilder<T>(itemList: T[]) {
    for (const item of itemList) {
      let itemTable: ITableDetail = {
        columns: [],
      };
      let itemColumns: IColumnDescriptor[] = [];
      let index: number = 0;
      for (var prop in item) {
        if (Object.prototype.hasOwnProperty.call(item, prop as string)) {
          // do stuff

          if (this.columnsToDisplay.indexOf(prop) > -1) {
            let column: IColumnDescriptor = {
              itemName: '',
              itemValue: '',
              sortNumber: index,
              isHyperLink: false,
            };
            column.itemName = prop;
            column.itemValue = (item[prop] as unknown) as string;
            column.sortNumber = index++;
            if (prop === 'name') column.isHyperLink = true;
            itemColumns.push(column);
          }
        }
      }
      itemTable.columns = itemColumns;
      this.itemsForGenTable.push(itemTable);
    }
  }
}
