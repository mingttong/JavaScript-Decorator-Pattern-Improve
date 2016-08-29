/**
 * Created by lenovo on 2016/8/29.
 */
console.log('###########################################');
console.log('装饰者模式改进');
console.log('请看下方显示内容：');

var decorator = function (ipt, type, fn) {
    // 获取事件源
    var input = document.getElementById(ipt);
    // 若事件源已经绑定事件
    if (input['on' + type] === 'function') {
        // 缓存事件源原有回调函数
        var oldEvent = input['on' + type];
        // 为事件源定义新的事件
        input['on' + type] = function () {
            // 事件源原有回调函数
            oldEvent();
            // 执行事件源新增回调函数
            fn();
        }
    } else {
        // 事件源未绑定事件，直接为事件源添加新增回调函数
        input['on' + type] = fn;
    }
    // 做其他事情
    console.log('成功！');
};

var input = document.getElementById('input');
input.onclick = function () {
    console.log('original event');
};

// 给输入框添加onclick事件
decorator('input', 'click', function () {
    console.log('new onclick event');
});
// 给输入框添加onfocus事件
decorator('input', 'focus', function () {
    console.log('new onfocus event');
});
// 给输入框添加onchange事件
decorator('input', 'change', function () {
    console.log('new onchange event');
});
