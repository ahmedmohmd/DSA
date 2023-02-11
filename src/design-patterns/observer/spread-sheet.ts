import DataSource from "./data-source";
import Observer from "./observer";

class SpreadSheet implements Observer {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  public update(): void {
    console.log("Spreadsheet updated: ", this.dataSource.getValue);
  }
}

export default SpreadSheet;
