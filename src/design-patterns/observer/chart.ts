import DataSource from "./data-source";
import Observer from "./observer";

class Chart implements Observer {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  public update(): void {
    console.log("Chart updated: ", this.dataSource.getValue);
  }
}

export default Chart;
