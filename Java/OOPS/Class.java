class Calculator {
  private int totalMethods = 1;

  public int add(int a, int b) {
    return a + b;
  }

  public int getMethods() {
    return this.totalMethods;
  }
}

class Computer {
  public String getMePen(int money) {
    return money / 10 + " Pen";
  }
}

public class Class {
  public static void main(String[] args) {
    Calculator c = new Calculator();
    Computer computer = new Computer();
    System.out.println(computer.getMePen(11));
    System.out.println(c.add(45, 45));
    System.out.println(c.getMethods());
  }
}
