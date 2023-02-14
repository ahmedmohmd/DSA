import Group from "./group";
import Shape from "./shape";

class Main {
  public static render(): void {
    // Group One
    const group1 = new Group();
    group1.add(new Shape("Circle"));
    group1.add(new Shape("Rectangle"));

    // Group Two
    const group2 = new Group();
    group2.add(new Shape("Trangle"));
    group2.add(new Shape("Line"));
    group1.add(group2);

    // Render Method
    group1.render();
  }
}

export default Main;
