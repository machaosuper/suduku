// 生成数独游戏

// 1.生成完成的解决方案： Generator
// 2.随机去除部分数据：按比例

// const Generator = require('./generator');
import Generator from './generator';


export default class Sudoku {
    solutionMatrix;
    puzzleMatrix;

    constructor () {
        // 生成完成的解决方案
        const generator = new Generator();
        generator.generate();
        this.solutionMatrix = generator.matrix;
    }

    make (level = 5) {
        // const shouldRid = Math.random() * 9 < level;
        // 生成迷盘
        this.puzzleMatrix = this.solutionMatrix.map(row => row.map(cell => {
            return Math.random() * 9 < level ? 0 : cell;
        }))
    }
}