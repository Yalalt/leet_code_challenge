public class LengthLastwordJava {
    public int lengthOfLastWord(String s) {
        s = s.trim(); 
        int length = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            if (s.charAt(i) == ' ') {
                break;
            } else {
                length++;
            }
        }
        
        return length;
    }

    public static void main(String[] args) {
        LengthLastwordJava solution = new LengthLastwordJava();

        // Test cases
        String s1 = "Hello World";
        System.out.println("Test case 1: " + s1);
        System.out.println(solution.lengthOfLastWord(s1));  // Output: 5

        String s2 = "   fly me   to   the moon  ";
        System.out.println("Test case 2: " + s2);
        System.out.println(solution.lengthOfLastWord(s2));  // Output: 4

        String s3 = "luffy is still joyboy";
        System.out.println("Test case 3: " + s3);
        System.out.println(solution.lengthOfLastWord(s3));  // Output: 6
    }
}
