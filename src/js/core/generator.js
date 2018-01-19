// 生成数组解决方案
const Toolkit = require('./toolkit');

class Generator {

    generate () {

        this.matrix = Toolkit.matrix.makeMatrix();

        for (let n = 1; n <= 9; n++) {
            this.fillNumber(n);
        }

    }

    fillNumber (n) {
        this.fillRow(n, 0);
    }

    fillRow (n, rowIndex) {
        if (rowIndex > 8) {
            return true;
        }

        const row = this.matrix[rowIndex];
        for (let i; i < 9; i++) {
            const colIndex = i;
            // 如果这个位置已经有值，跳过
            if (row[colIndex]) {
                continue;
            }

            // 检查这个位置是否可以填 n
            if (!Toolkit.matrix.checkFillable()) {
                continue;                
            }

            row[colIndex] = n;
            // 去下一行填写 n，如果没填进去， 就继续需找当前行下一个位置
            if (!this.fillRow(n, rowIndex + 1)) {
                row[colIndex] = 0;
                continue;
            };

            return true;
        }

        return false;
        
    }
}