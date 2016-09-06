page = {
    writePageContent: function (total, pageNum, pageSize, pagebar) {
        if(total < 1){
            $("#"+pagebar).html("无数据");
            return;
        }
        pageNum = pageNum + 1;
        var num = 0;
        if (total % pageSize > 0) {
            num = parseInt(total / pageSize + 1);
        } else {
            num = parseInt(total / pageSize);
        }
        var htmlContent = "<p class='pagebar_numlist'>";
        htmlContent += "<span><em>每页显示</em><input type='text' maxlength='2' id='pageSize' name='pageSize' value='" + pageSize + "'/><em>条</em>";
        //htmlContent += "<a class='e-confirm-btn' style='cursor: pointer'>确定</a></span>&nbsp;";
        htmlContent += "<a class='pagebar_numlist_first e-first-page' title='首页' href='javascript:void(0)'>&nbsp;首页&nbsp;</a>";
        htmlContent += "<a title='上一页' class='g-pageprev e-up-page' href='javascript:void(0);' >&nbsp;</a>";
        var begin = 1, end = num;
        if (num > 5 && (pageNum + 4) <= num) {
            begin = pageNum < 3 ? 1 : pageNum - 2;
            end = begin + 4;
        } else {
            if (num <= 5) {
                begin = 1;
            } else {
                begin = num - 4;
            }
        }
        if (begin > 1) {
            htmlContent += "<a>...</a>";
        }
        for (var i = begin; i <= end; i++) {
            if (pageNum == i) {
                htmlContent += "<span class='pagebar_numlist_current'>" + i + "</span>";
            } else {
                htmlContent += "<a title='第" + i + "页' href='javascript:void(0);' class='e-pagenum'>" + i + "</a>";
            }
        }
        if (end < num) {
            htmlContent += "<a>...</a>";
        }
        htmlContent += "<a title='下一页' class='g-pagenext e-next-page' href='javascript:void(0);'>&nbsp;</a>";
        htmlContent += "<a class='pagebar_numlist_last e-last-page' title='尾页' href='javascript:void(0);'>&nbsp;尾页&nbsp;</a>&nbsp;&nbsp;";
        htmlContent += "<span><em>共" + total + "条</em>&nbsp;&nbsp;";
        htmlContent += "<span><em>第</em><input type='text' name='pageIndex' value='" + (total == 0 ? 1 : pageNum) + "' id='pageIndex'/><em>页</em>";
        //htmlContent += "<a class='e-turn-btn' style='cursor: pointer'>跳转</a></span>";
        htmlContent += "<input name='totalPageNum' id='totalPageNum' value='" + num + "' type='hidden'/>";
        htmlContent += "</p>";
        $("#" + pagebar).html(htmlContent);
    },
    bundlingEvent: function (callback) {
        /*//跳转
        $('.g-pagebar').on('click', '.e-turn-btn', function () {
            var pageNum = $('#pageIndex').val();
            var totalPageNum = $('#totalPageNum').val();
            if (parseInt(pageNum) > parseInt(totalPageNum)) {
                pageNum = totalPageNum;
            }
            $('#pageIndex').val(pageNum);
            callback();
        });
        //确定
        $('.g-pagebar').on('click', '.e-confirm-btn', function () {
            $('#pageIndex').val(1);
            callback();
        });*/
        //点击页码
        $('.g-pagebar').on('click', '.e-pagenum', function () {
            pageSize = $('#pageSize').val();
            var pageNum = $(this).text();
            $('#pageIndex').val(pageNum);
            callback();
        });
        //首页
        $('.g-pagebar').on('click', '.e-first-page', function () {
            $('#pageIndex').val(1);
            callback();
        });
        //尾页
        $('.g-pagebar').on('click', '.e-last-page', function () {
            var pageNum = $('#totalPageNum').val();
            $('#pageIndex').val(pageNum);
            callback();
        });
        //下一页
        $('.g-pagebar').on('click', '.e-next-page', function () {
            var pageSize = $('#pageSize').val();
            var totalPageNum = $('#totalPageNum').val();
            var currPageNum = $('.pagebar_numlist_current').text();
            var pageNum = parseInt(currPageNum) + 1 > totalPageNum ? totalPageNum : parseInt(currPageNum) + 1;
            if (isNaN(pageNum)) {
                pageNum = 1;
            }
            $('#pageIndex').val(pageNum);
            callback();
        });
        //上一页
        $('.g-pagebar').on('click', '.e-up-page', function () {
            var pageSize = $('#pageSize').val();
            var currPageNum = $('.pagebar_numlist_current').text();
            var pageNum = currPageNum - 1 < 1 ? 1 : currPageNum - 1;
            if (isNaN(pageNum)) {
                pageNum = 1;
            }
            $('#pageIndex').val(pageNum);
            callback();
        });
        $('.g-pagebar').delegate('#pageSize', 'onkeypress', '', function (event) {
            alert("1111");
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode == '13') {
                $('#pageIndex').val(1);
                callback();
            }
        });

        var oInput = $('.g-pagebar')[0];
        oInput.onkeypress = function (ev) {
            var ev = ev || window.event;
            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '13') {
                var taget = ev.target || ev.srcElement;
                if (taget.id == 'pageIndex') {
                    var pageNum = $('#pageIndex').val();
                    var totalPageNum = $('#totalPageNum').val();
                    if (parseInt(pageNum) > parseInt(totalPageNum)) {
                        pageNum = totalPageNum;
                    }
                    $('#pageIndex').val(pageNum);
                    callback();
                } else if (taget.id == 'pageSize') {
                    $('#pageIndex').val(1);
                    callback();
                }
            }
        }
    },
    clear: function (pagebar) {
        $("#" + pagebar).empty();
    }
}