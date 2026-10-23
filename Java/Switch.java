public class Switch {
  public static void main(String[] args) {
    enum Days {
      MONDAY,
      TUESDAY,
      WEDNESDAY,
      THURSDAY,
      FRIDAY,
      SATURDAY,
      SUNDAY
    };
    Days d = Days.SATURDAY;
    String day =
        switch (d) {
          case SATURDAY, SUNDAY -> "Holyday";
          case TUESDAY, FRIDAY -> "More Work";
          case MONDAY, WEDNESDAY -> "High Motivation";
          case THURSDAY -> "TEACHERS DAY";
          default -> "INVALID DAY";
        };
    System.out.println(day);
  }
}
