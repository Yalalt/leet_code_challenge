import java.util.Arrays;
import java.util.Scanner;

public class MultipleArray {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.println("2 mor massive-iin utga oruulna uu." +
                    "\nToo taslalaar tusgaarlan oruulna." +
                    "(zai awahgvi bichne)\nexample:\nOrolt (mor 1): 2,3,4\nOrolt (mor 2): 8,4,3");

            System.out.print("Orolt (mor 1): ");
            String input1 = scanner.nextLine();

            System.out.print("\nOrolt (mor 2): ");
            String input2 = scanner.nextLine();

            int[] array1 = Arrays.stream(input1.split(",")).mapToInt(Integer::parseInt).toArray();
            int[] array2 = Arrays.stream(input2.split(",")).mapToInt(Integer::parseInt).toArray();

            if (array1.length != array2.length) {
                throw new Exception("Massive oroltiin toonuud tentsvv toonii elementtei baih!");
            }

            int[] result = new int[array1.length];
            for (int i = 0; i < array1.length; i++) {
                result[i] = array1[i] * array2[i];
            }

            System.out.print("\nMassive urjiber ni: ");
            System.out.println(Arrays.toString(result));

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return;
        } finally {
            scanner.close();
        }
    }
}