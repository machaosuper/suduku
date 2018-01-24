// 处理弹出面板

export class PopupNumbers {

    private _$panel;
    private _$targetCell;

    constructor ($panel) {
        this._$panel = $panel.hide().removeClass('hidden');
        this._$panel.on('click', 'span', e => {
            const $span = $(e.target);
            const $cell = this._$targetCell;
        
            // mark1，mark2 回填样式
            if ($span.hasClass('mark1')) {
                // 回填样式
                if ($cell.hasClass('mark1')) {
                    $cell.removeClass('mark1')
                } else {
                    $cell.removeClass('mark2')
                        .addClass('mark1')
                }
            } else if ($span.hasClass('mark2')) {
                // 回填样式
                if ($cell.hasClass('mark2')) {
                    $cell.removeClass('mark2')
                } else {
                    $cell.removeClass('mark1')
                        .addClass('mark2')
                }
            } else if ($span.hasClass('empty')) {
                // 取消数字填写， 取消mark
                $cell.text(0).addClass('empty').removeClass('mark1 mark2');
            } else {
                // 1-9 会填数字
                $cell.removeClass('empty').text($span.text());    
            }

            this.hide();

        });
    }

    popup ($cell) {
        this._$targetCell = $cell;
        const { left, top } = $cell.position();
        this._$panel
            .css({
                left: `${left}px`,
                top: `${top}px`
            })
            .show();
    }

    hide () {
        this._$panel.hide();
    }
};

export default PopupNumbers;
