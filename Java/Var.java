import java.nio.file.Path;

public class Var {
  public static void main(String[] args) {
    var msg = "this is a msg";
    var i = 45;
    var path = Path.of("Primitive.java");
    System.out.println(path.toString());
    String s = "this is a message longer than 8 bytes enough to avoid string optimization.";
    String b = new String(s);
    System.out.println(b instanceof String);
    System.out.println(s.hashCode() + " -> " + b.hashCode());
  }
}
