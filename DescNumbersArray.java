import java.util.Arrays;

public class DescNumbersArray {
    public static void main(String[] args) {
        double[] originalMassive = { 3.2, 2.7, 7.0, 1.8, 3.45, 9.07 };
        double[] massive = myDescSort(originalMassive);
        System.out.println("Original array: " + Arrays.toString(originalMassive));
        System.out.println("Descendant array: " + Arrays.toString(massive));
    }

    public static double[] myDescSort(double[] inputArray) {
        double[] array = inputArray.clone();
        int n = array.length;
        // Two elements are compared
        // Selection sort algorithm used
        for (int i = 0; i < n - 1; i++) {
            int maxIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (array[j] > array[maxIndex]) {
                    maxIndex = j;
                }
            }
            double temp = array[maxIndex];
            array[maxIndex] = array[i];
            array[i] = temp;
        }
        return array;
    }
}
