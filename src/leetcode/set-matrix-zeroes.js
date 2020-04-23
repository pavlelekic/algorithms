
export default class Solution {
    constructor(matrix) {
        this.matrix = matrix;
        console.log('Input:');
        this.logMatrix();
    }

    findFirstRowWithZeroes() {
        for (let row = 0; row < this.matrix.length; row++) {
            for (let col = 0; col < this.matrix[0].length; col++) {
                if (this.matrix[row][col] === 0) {
                    return row;
                }
            }
        }
    }

    markAllColumnsContainingZeros(rowIndexWithColumnFlags) {
        for (let row = 0; row < this.matrix.length; row++) {
            for (let col = 0; col < this.matrix[0].length; col++) {
                if (this.matrix[row][col] === 0) {
                    this.matrix[rowIndexWithColumnFlags][col] = 0;
                }
            }
        }
    }

    logMatrix() {
        console.log(JSON.stringify(this.matrix));
    }

    setZerosToAllColumnsContainingZeros(rowIndexWithColumnFlags) {
        for (let row = 0; row < this.matrix.length; row++) {
            for (let col = 0; col < this.matrix[0].length; col++) {
                if (this.matrix[rowIndexWithColumnFlags][col] === 0) {
                    this.matrix[row][col] === 0;
                }
            }
        }
    }

    setZerosForRow(rowIndex) {
        for (let c = 0; c < this.matrix[0].length; c++) {
            this.matrix[rowIndex][c] = 0;
        }
    }

    setMatrixZeroes = () => {
        let rowIndexWithColumnFlags = this.findFirstRowWithZeroes();
        this.markAllColumnsContainingZeros(rowIndexWithColumnFlags);
        console.log({rowIndexWithColumnFlags});
        this.logMatrix();

        for (let row = 0; row < this.matrix.length; row++) {
            for (let col = 0; col < this.matrix[0].length; col++) {
                if (this.matrix[row][col] === 0) {
                    for (let c = 0; c < this.matrix[0].length; c++) {
                        this.matrix[row][c] = this.matrix[rowIndexWithColumnFlags][c];
                        this.matrix[rowIndexWithColumnFlags][c] = 0;
                        rowIndexWithColumnFlags = row;
                    }
                    row++;
                }
            }
        }

        this.setZerosToAllColumnsContainingZeros(rowIndexWithColumnFlags);
        this.setZerosForRow(rowIndexWithColumnFlags);

        console.log("Finished");
        this.logMatrix();
    }
}
