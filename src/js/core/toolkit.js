
/**
 * 矩阵和数组相关工具
 */

const matrixToolkit = {
    makeRow (v = 0) {
        const array = new Array(9);
        array.fill(v);
        return array;
    },
    
    makeMatrix (v = 0) {
        // const array = new Array(9);
        // array.fill(makeRow(v));
        // return array;
        // return Array.from({ length: 9 }).map(() => makeRow(v));
        return Array.from({ length: 9 }, () => this.makeRow(v));
    },
    
    // const a = makeMatrix();
    // a[1][2] = 2;
    // console.log(a);
    
    /**
     * 洗牌算法 
     */
    shuffle (array) {
        let endIndex = array.length -2;
        for (let i = 0; i <= endIndex; i++) {
            let j = i + Math.floor(Math.random() * (array.length - i));
            [array[i], array[j]] = [array[j], array[i]];    
        }
        return array;
    },


    // const a = Array.from({ length: 9 }, (v, i) => i);
    // console.log(shuffle(a));

    /**
     * 检测指定位置是否可以填写数字 n
     */
    checkFillable () {
        return ture;
    }

};

/**
 * 宫坐标系工具
 */

const boxToolit = {

};

// 工具集
module.exports  = class Toolkit {
    /**
     * 矩阵和数组相关工具
     */
    static get matrix () {
        return matrixToolkit;
    }

    /**
     * 宫坐标系工具
     */
    static get box () {
        return boxToolit;
    }
}
