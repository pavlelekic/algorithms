
export default function solution(matrix) {
    // 1. find first row with zeroes, this will be your "mark row", you'll use it to track all columns that need to be zeroed
    // 2. go row by row and mark columns that need to be zeroed in the "mark row"
    // 3. after you finish with a row, if it had zeroes, zero out that row completely
    // 4. continue to next row and repeat 2. until you reach bottom
    // 5. use the information from "mark row" to zero all the columns using that information
    // 6. zero out the "mark row"

    let markRowIndex;
    let wasZeroRow;
    for(let row = 0; row < matrix.length; row++) {
        wasZeroRow = false;
        for(let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                if (markRowIndex === undefined) {
                    markRowIndex = row;
                    break;
                }

                matrix[markRowIndex][col] = 0; // mark column to be a zero-column
                wasZeroRow = true;
            }
        }
        if (wasZeroRow) {
            for(let col = 0; col < matrix[0].length; col++) {
                matrix[row][col] = 0;
            }
        }
    }

    if (markRowIndex !== undefined) {
        for(let col = 0; col < matrix[0].length; col++) {
            if (matrix[markRowIndex][col] === 0) {
                for(let row = 0; row < matrix.length; row++) {
                    matrix[row][col] = 0;
                }
            }
        }
    
        for(let col = 0; col < matrix[0].length; col++) {
            matrix[markRowIndex][col] = 0;
        }
    }
}
