export interface IBoxCoord {
    boxIndex: number;
    cellIndex: number;
}

export interface IRowCoord {
    rowIndex: number;
    colIndex: number;
}

/**
 * 矩阵和数组相关工具
 */

class MatrixToolkit {
    static makeRow (): number[];
    static makeRow<T> (v: T): T[];
    static makeRow (v: any = 0): any[] {
        const array: Array<number> = new Array(9);
        array.fill(v);
        return array;
    }
    

    static makeMatrix (): number[][];
    static makeMatrix<T> (v: T): T[][];
    static makeMatrix (v: any = 0): any[][] {
        // const array = new Array(9);
        // array.fill(makeRow(v));
        // return array;
        // return Array.from({ length: 9 }).map(() => makeRow(v));
        return Array.from({ length: 9 }, () => this.makeRow(v));
    }
    
    // const a = makeMatrix();
    // a[1][2] = 2;
    // console.log(a);
    
    /**
     * 洗牌算法 
     */
    static shuffle<T> (array: T[]): T[] {
        let endIndex = array.length -2;
        for (let i = 0; i <= endIndex; i++) {
            let j = i + Math.floor(Math.random() * (array.length - i));
            [array[i], array[j]] = [array[j], array[i]];    
        }
        return array;
    }


    // const a = Array.from({ length: 9 }, (v, i) => i);
    // console.log(shuffle(a));

    /**
     * 检测指定位置是否可以填写数字 n
     */
    static checkFillable (matrix: number[][], n: number, rowIndex: number, colIndex: number): boolean {
        const row = matrix[rowIndex];
        const column = this.makeRow().map((v,i) => matrix[i][colIndex]);
        const { boxIndex } = boxTookit.convertToBoxIndex(rowIndex, colIndex);
        const box = boxTookit.getBoxCells(matrix, boxIndex);
        for (let i = 0; i < 9; i++) {
            if (row[i] === n || column[i] === n || box[i] === n) return false;
        }
        return true;
    }

};

/**
 * 宫坐标系工具
 */

const  boxTookit = {
    convertToBoxIndex (rowIndex: number, colIndex: number): IBoxCoord {
        return {
            boxIndex: Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3),
            cellIndex: rowIndex % 3 * 3 + colIndex % 3
        }
    },

    convertFromBoxIndex (boxIndex: number, cellIndex: number): IRowCoord {
        return {
            rowIndex: Math.floor(boxIndex / 3) * 3 + Math.floor(cellIndex / 3),
            colIndex: boxIndex % 3 * 3 + cellIndex % 3
        }
    },

    getBoxCells (matrix: number[][], boxIndex: number): number[] {
        const startRowIndex = Math.floor(boxIndex / 3) * 3;
        const startColIndex = boxIndex % 3 * 3;
        const result: number[] = [];
        for (let cellIndex = 0; cellIndex < 9; cellIndex++) {
            const rowIndex = startRowIndex + Math.floor(cellIndex / 3);
            const colIndex = startColIndex + cellIndex % 3;
            result.push(matrix[rowIndex][colIndex]);
        }
        return result;
    }
};

// 工具集
export class Toolkit {
    /**
     * 矩阵和数组相关工具
     */
    static get matrix (): typeof MatrixToolkit {
        return MatrixToolkit;
    }

    /**
     * 宫坐标系工具
     */
    static get box () {
        return boxTookit;
    }
}

export default Toolkit;
