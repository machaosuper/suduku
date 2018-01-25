/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 矩阵和数组相关工具
 */

var MatrixToolkit = function () {
    function MatrixToolkit() {
        _classCallCheck(this, MatrixToolkit);
    }

    _createClass(MatrixToolkit, null, [{
        key: "makeRow",
        value: function makeRow() {
            var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            var array = new Array(9);
            array.fill(v);
            return array;
        }
    }, {
        key: "makeMatrix",
        value: function makeMatrix() {
            var _this = this;

            var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            // const array = new Array(9);
            // array.fill(makeRow(v));
            // return array;
            // return Array.from({ length: 9 }).map(() => makeRow(v));
            return Array.from({ length: 9 }, function () {
                return _this.makeRow(v);
            });
        }
        // const a = makeMatrix();
        // a[1][2] = 2;
        // console.log(a);
        /**
         * 洗牌算法
         */

    }, {
        key: "shuffle",
        value: function shuffle(array) {
            var endIndex = array.length - 2;
            for (var i = 0; i <= endIndex; i++) {
                var j = i + Math.floor(Math.random() * (array.length - i));
                var _ref = [array[j], array[i]];
                array[i] = _ref[0];
                array[j] = _ref[1];
            }
            return array;
        }
        // const a = Array.from({ length: 9 }, (v, i) => i);
        // console.log(shuffle(a));
        /**
         * 检测指定位置是否可以填写数字 n
         */

    }, {
        key: "checkFillable",
        value: function checkFillable(matrix, n, rowIndex, colIndex) {
            var row = matrix[rowIndex];
            var column = this.makeRow().map(function (v, i) {
                return matrix[i][colIndex];
            });

            var _boxTookit$convertToB = boxTookit.convertToBoxIndex(rowIndex, colIndex),
                boxIndex = _boxTookit$convertToB.boxIndex;

            var box = boxTookit.getBoxCells(matrix, boxIndex);
            for (var i = 0; i < 9; i++) {
                if (row[i] === n || column[i] === n || box[i] === n) return false;
            }
            return true;
        }
    }]);

    return MatrixToolkit;
}();

;
/**
 * 宫坐标系工具
 */
var boxTookit = {
    convertToBoxIndex: function convertToBoxIndex(rowIndex, colIndex) {
        return {
            boxIndex: Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3),
            cellIndex: rowIndex % 3 * 3 + colIndex % 3
        };
    },
    convertFromBoxIndex: function convertFromBoxIndex(boxIndex, cellIndex) {
        return {
            rowIndex: Math.floor(boxIndex / 3) * 3 + Math.floor(cellIndex / 3),
            colIndex: boxIndex % 3 * 3 + cellIndex % 3
        };
    },
    getBoxCells: function getBoxCells(matrix, boxIndex) {
        var startRowIndex = Math.floor(boxIndex / 3) * 3;
        var startColIndex = boxIndex % 3 * 3;
        var result = [];
        for (var cellIndex = 0; cellIndex < 9; cellIndex++) {
            var rowIndex = startRowIndex + Math.floor(cellIndex / 3);
            var colIndex = startColIndex + cellIndex % 3;
            result.push(matrix[rowIndex][colIndex]);
        }
        return result;
    }
};
// 工具集

var Toolkit = function () {
    function Toolkit() {
        _classCallCheck(this, Toolkit);
    }

    _createClass(Toolkit, null, [{
        key: "matrix",

        /**
         * 矩阵和数组相关工具
         */
        get: function get() {
            return MatrixToolkit;
        }
        /**
         * 宫坐标系工具
         */

    }, {
        key: "box",
        get: function get() {
            return boxTookit;
        }
    }]);

    return Toolkit;
}();

exports.Toolkit = Toolkit;
exports.default = Toolkit;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// const Grid = require('./ui/grid')
// const PopupNumbers = require('./ui/popupnumbers')

Object.defineProperty(exports, "__esModule", { value: true });
var grid_1 = __webpack_require__(2);
var popupnumbers_1 = __webpack_require__(6);
var grid = new grid_1.default($('#container'));
grid.build();
grid.layout();
var popupNumbers = new popupnumbers_1.default($('#popupNumbers'));
grid.bindPopup(popupNumbers);
$('#check').on('click', function (e) {
    if (grid.check()) {
        alert('成功');
    }
});
$('#reset').on('click', function (e) {
    grid.reset();
});
$('#clear').on('click', function (e) {
    grid.clear();
});
$('#rebuild').on('click', function (e) {
    grid.rebuild();
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 生成九宫格

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var sudoku_1 = __webpack_require__(3);
var checker_1 = __webpack_require__(5);

var Grid = function () {
    function Grid(container) {
        _classCallCheck(this, Grid);

        this._$container = container;
    }

    _createClass(Grid, [{
        key: "build",
        value: function build() {
            // const matrix = Toolkit.matrix.makeMatrix();
            // const generator = new Generator();
            // generator.generate()
            // const matrix = generator.matrix;
            var sudoku = new sudoku_1.default();
            sudoku.make();
            var matrix = sudoku.puzzleMatrix;
            // const matrix = sudoku.solutionMatrix;
            var rowGroupClasses = ['row_g_top', 'row_g_middle', 'row_g_bottom'];
            var colGroupClasses = ['col_g_left', 'col_g_center', 'col_g_right'];
            var $cells = matrix.map(function (rowValues) {
                return rowValues.map(function (cellValue, colIndex) {
                    return $('<span>').addClass(colGroupClasses[colIndex % 3]).addClass(cellValue ? 'fixed' : 'empty').text(cellValue);
                });
            });
            var $divArray = $cells.map(function ($spanArray, rowIndex) {
                return $('<div>').addClass('row').addClass(rowGroupClasses[rowIndex % 3]).append($spanArray);
            });
            this._$container.append($divArray);
        }
    }, {
        key: "layout",
        value: function layout() {
            var width = $('span:first', this._$container).width();
            $('span', this._$container).height(width).css({
                'line-height': width + "px",
                'font-size': width < 32 ? width / 2 + "px" : ''
            });
        }
    }, {
        key: "bindPopup",
        value: function bindPopup(popupNumbers) {
            this._$container.on('click', 'span', function (e) {
                var $cell = $(e.target);
                if ($cell.is('.fixed')) {
                    return;
                }
                popupNumbers.popup($cell);
            });
        }
        /**
         * 重建新的迷盘
         */

    }, {
        key: "rebuild",
        value: function rebuild() {
            this._$container.empty();
            this.build();
            this.layout();
        }
        /**
         * 检测用户解密的结果， 成功则进行提示， 失败显示错误
         */

    }, {
        key: "check",
        value: function check() {
            // 获取需要检测的数据
            var data = this._$container.children().map(function (rowIndex, div) {
                return $(div).children().map(function (colIndex, span) {
                    return parseInt($(span).text()) || 0;
                });
            }).toArray().map(function ($data) {
                return $data.toArray();
            });
            var checker = new checker_1.default(data);
            if (checker.check()) {
                return true;
            }
            // 检查不成功，进行标记
            var marks = checker.matrixMarks;
            this._$container.children().each(function (rowIndex, div) {
                $(div).children().each(function (colIndex, span) {
                    var $span = $(span);
                    if ($span.is('.fixed') || marks[rowIndex][colIndex]) {
                        $span.removeClass('error');
                    } else {
                        $span.addClass('error');
                    }
                });
            });
        }
        /**
         * 重置当前迷盘到初始状态
         */

    }, {
        key: "reset",
        value: function reset() {
            this._$container.children().find('span:not(.fixed)').removeClass('error mark1 mark2').addClass('empty').text(0);
        }
        /**
         * 清除错误标记
         */

    }, {
        key: "clear",
        value: function clear() {
            this._$container.children().find('span.error').removeClass('error');
        }
    }]);

    return Grid;
}();

exports.Grid = Grid;
exports.default = Grid;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 生成数独游戏

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
// 1.生成完成的解决方案： Generator
// 2.随机去除部分数据：按比例
// const Generator = require('./generator');
var generator_1 = __webpack_require__(4);

var Sudoku = function () {
    function Sudoku() {
        _classCallCheck(this, Sudoku);

        // 生成完成的解决方案
        var generator = new generator_1.default();
        generator.generate();
        this.solutionMatrix = generator.matrix;
    }

    _createClass(Sudoku, [{
        key: "make",
        value: function make() {
            var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

            // const shouldRid = Math.random() * 9 < level;
            // 生成迷盘
            this.puzzleMatrix = this.solutionMatrix.map(function (row) {
                return row.map(function (cell) {
                    return Math.random() * 9 < level ? 0 : cell;
                });
            });
        }
    }]);

    return Sudoku;
}();

exports.default = Sudoku;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
// 生成数组解决方案
var toolkit_1 = __webpack_require__(0);
// const Toolkit = require('./toolkit');

var Generator = function () {
    function Generator() {
        _classCallCheck(this, Generator);
    }

    _createClass(Generator, [{
        key: "generate",
        value: function generate() {
            while (!this.intermalGenerate()) {
                // to
                console.warn('try again');
            }
        }
    }, {
        key: "intermalGenerate",
        value: function intermalGenerate() {
            this.matrix = toolkit_1.default.matrix.makeMatrix();
            this.orders = toolkit_1.default.matrix.makeMatrix().map(function (row) {
                return row.map(function (v, i) {
                    return i;
                });
            }).map(function (row) {
                return toolkit_1.default.matrix.shuffle(row);
            });
            for (var n = 1; n <= 9; n++) {
                if (!this.fillNumber(n)) {
                    return false;
                }
            }
            return true;
        }
    }, {
        key: "fillNumber",
        value: function fillNumber(n) {
            return this.fillRow(n, 0);
        }
    }, {
        key: "fillRow",
        value: function fillRow(n, rowIndex) {
            if (rowIndex > 8) {
                return true;
            }
            var row = this.matrix[rowIndex];
            // 随机选着列
            var orders = this.orders[rowIndex];
            for (var i = 0; i < 9; i++) {
                var colIndex = orders[i];
                // 如果这个位置已经有值，跳过
                if (row[colIndex]) {
                    continue;
                }
                // 检查这个位置是否可以填 n
                if (!toolkit_1.default.matrix.checkFillable(this.matrix, n, rowIndex, colIndex)) {
                    continue;
                }
                row[colIndex] = n;
                // 去下一行填写 n，如果没填进去， 就继续需找当前行下一个位置
                if (!this.fillRow(n, rowIndex + 1)) {
                    row[colIndex] = 0;
                    continue;
                }
                ;
                return true;
            }
            return false;
        }
    }]);

    return Generator;
}();

exports.default = Generator;
// const generator = new Generator();
// generator.generate()
// console.log(generator.matrix)

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 检查数独

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
function checkArray(array) {
    var length = array.length;
    var marks = new Array(length);
    marks.fill(true);
    for (var i = 0; i < length - 1; i++) {
        if (!marks[i]) {
            continue;
        }
        var v = array[i];
        // 是否有效 0-无效
        if (!v) {
            marks[i] = false;
            continue;
        }
        // 是否有重复：i+1 ~ 9，是否和i位置重复
        for (var j = i + 1; j < length; j++) {
            if (v === array[j]) {
                marks[i] = marks[j] = false;
            }
        }
    }
    return marks;
}
// console.log(checkArray([1, 2, 3, 4, 4, 5, 7, 4, 9]));
// const Toolkit = require('./toolkit');
var toolkit_1 = __webpack_require__(0);
// 输入：matrix，用户完成数独数据，9X9
// 处理：对matrix 行、列、宫进行检查， 并填写marks
// 输出：检查是否成功、marks

var Checker = function () {
    function Checker(matrix) {
        _classCallCheck(this, Checker);

        this._success = false;
        this._matrix = matrix;
        this._matrixMarks = toolkit_1.default.matrix.makeMatrix(true);
    }

    _createClass(Checker, [{
        key: "check",
        value: function check() {
            this.checkRows();
            this.checkCols();
            this.checkBoxes();
            // 检查是否成功
            this._success = this._matrixMarks.every(function (row) {
                return row.every(function (mark) {
                    return mark;
                });
            });
            return this._success;
        }
    }, {
        key: "checkRows",
        value: function checkRows() {
            for (var rowIndex = 0; rowIndex < 9; rowIndex++) {
                var row = this._matrix[rowIndex];
                var marks = checkArray(row);
                for (var colIndex = 0; colIndex < marks.length; colIndex++) {
                    if (!marks[colIndex]) {
                        this._matrixMarks[rowIndex][colIndex] = false;
                    }
                }
            }
        }
    }, {
        key: "checkCols",
        value: function checkCols() {
            for (var colIndex = 0; colIndex < 9; colIndex++) {
                var col = [];
                for (var rowIndex = 0; rowIndex < 9; rowIndex++) {
                    col[rowIndex] = this._matrix[rowIndex][colIndex];
                }
                var marks = checkArray(col);
                for (var _rowIndex = 0; _rowIndex < marks.length; _rowIndex++) {
                    if (!marks[_rowIndex]) {
                        this._matrixMarks[_rowIndex][colIndex] = false;
                    }
                }
            }
        }
    }, {
        key: "checkBoxes",
        value: function checkBoxes() {
            for (var boxIndex = 0; boxIndex < 9; boxIndex++) {
                var box = toolkit_1.default.box.getBoxCells(this._matrix, boxIndex);
                var marks = checkArray(box);
                for (var cellIndex = 0; cellIndex < marks.length; cellIndex++) {
                    if (!marks[cellIndex]) {
                        var _toolkit_1$default$bo = toolkit_1.default.box.convertFromBoxIndex(boxIndex, cellIndex),
                            rowIndex = _toolkit_1$default$bo.rowIndex,
                            colIndex = _toolkit_1$default$bo.colIndex;

                        this._matrixMarks[rowIndex][colIndex] = false;
                    }
                }
            }
        }
    }, {
        key: "matrixMarks",
        get: function get() {
            return this._matrixMarks;
        }
    }, {
        key: "isSuccess",
        get: function get() {
            return this._success;
        }
    }]);

    return Checker;
}();

exports.default = Checker;
// const Generator = require('./generator');
// const generator = new Generator();
// generator.generate();
// const matrix = generator.matrix;
// const checker = new Checker(matrix);
// checker.check();
// console.log('check result', checker.check());
// console.log(checker.matrixMarks)
// matrix[1][1] = 0;
// matrix[2][3] = matrix[2][5] = 5;
// const checker2 = new Checker(matrix);
// checker.check();
// console.log('check result', checker2.check());
// console.log(checker2.matrixMarks)

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 处理弹出面板

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var PopupNumbers = function () {
    function PopupNumbers($panel) {
        var _this = this;

        _classCallCheck(this, PopupNumbers);

        this._$panel = $panel.hide().removeClass('hidden');
        this._$panel.on('click', 'span', function (e) {
            var $span = $(e.target);
            var $cell = _this._$targetCell;
            // mark1，mark2 回填样式
            if ($span.hasClass('mark1')) {
                // 回填样式
                if ($cell.hasClass('mark1')) {
                    $cell.removeClass('mark1');
                } else {
                    $cell.removeClass('mark2').addClass('mark1');
                }
            } else if ($span.hasClass('mark2')) {
                // 回填样式
                if ($cell.hasClass('mark2')) {
                    $cell.removeClass('mark2');
                } else {
                    $cell.removeClass('mark1').addClass('mark2');
                }
            } else if ($span.hasClass('empty')) {
                // 取消数字填写， 取消mark
                $cell.text(0).addClass('empty').removeClass('mark1 mark2');
            } else {
                // 1-9 会填数字
                $cell.removeClass('empty').text($span.text());
            }
            _this.hide();
        });
    }

    _createClass(PopupNumbers, [{
        key: "popup",
        value: function popup($cell) {
            this._$targetCell = $cell;

            var _$cell$position = $cell.position(),
                left = _$cell$position.left,
                top = _$cell$position.top;

            this._$panel.css({
                left: left + "px",
                top: top + "px"
            }).show();
        }
    }, {
        key: "hide",
        value: function hide() {
            this._$panel.hide();
        }
    }]);

    return PopupNumbers;
}();

exports.PopupNumbers = PopupNumbers;
;
exports.default = PopupNumbers;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map