let state = false;

const clock = (ms) => setInterval(function () {
    state = !state;
    return component.update();
}, ms);

let interval = clock();

component.onClick(function(renderObj) {
    const num = prompt("Clock Interval (ms)");

    if (!isNaN(Number(num)) && Number(num) >= 1) {
        clearInterval(interval)
        interval = clock(Number(num));
    }
});

component.setComputeFn(function (inputs) {
    return [state];
});