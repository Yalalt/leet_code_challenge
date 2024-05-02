import java.util.HashMap;

class RansomeNote {
    public boolean canConstruct(String ransomeNote, String magazine) {
        HashMap<Character, Integer> magazineLetters = new HashMap<>();

        for (int i = 0; i < magazine.length(); i++) {
            char letter = magazine.charAt(i);

            int countLetter = magazineLetters.getOrDefault(letter, 0);
            magazineLetters.put(letter, countLetter + 1);
        }

        for ( int j = 0; j < ransomeNote.length(); j++) {
            char noteLetter = ransomeNote.charAt(j);

            int counter = magazineLetters.getOrDefault(noteLetter, 0);

            if(counter == 0) {
                return false;
            }

            magazineLetters.put(noteLetter, counter - 1);
        }
        return true;
    }
}