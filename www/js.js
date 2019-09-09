window.addEventListener("orientationchange", function () {
    console.log('test');
    if (window.innerWidth > window.innerHeight) {
        document.getElementById('container').style.width = window.innerHeight + 'px';
        document.getElementById('container').style.height = '100vh';
    } else {
        document.getElementById('container').style.height = window.innerWidth + 'px';
        document.getElementById('container').style.width = window.innerWidth + 'px';
    }
}, false);
// dashboard
if (window.innerWidth > window.innerHeight) {
    document.getElementById('container').style.width = window.innerHeight + 'px';
    document.getElementById('container').style.height = '100vh';
} else {
    document.getElementById('container').style.height = window.innerWidth + 'px';
    document.getElementById('container').style.width = window.innerWidth + 'px';
}
// main code
var arr_ttc = [0,0,0,0,0,0,0,0,0];
var value = 0;
let count = 0;

var container = document.getElementById('container');
container.onclick = function (e) {
    var e = e || event;
    var target = e.target || e.srcElement;
    for (let i = 0; i < container.children.length; i++) {
        if (container.children[i] == target && arr_ttc[i] == 0) {
            if (value == 4) {
                count += 1;
                value = 1;
                container.children[i].classList.add("tac");
                container.children[i].classList.add("tac" + '_' + (i+1));
            } else {
                count += 1;
                value = 4;
                container.children[i].classList.add("tic");
                container.children[i].classList.add("tic" + '_' + (i+1));
            }
            if (count == 9) {
                arr_null();
                for (let i = 0; i < container.children.length; i++) {
                    container.children[i].className = ' ';
                }
                document.getElementById('win_state').style.display = '';
            } else {arr_ttc[i] = value;}
        }
    }
    var variant_01 = arr_ttc[0] + arr_ttc[1] + arr_ttc[2];
    var variant_02 = arr_ttc[3] + arr_ttc[4] + arr_ttc[5];
    var variant_03 = arr_ttc[6] + arr_ttc[7] + arr_ttc[8];
    var variant_04 = arr_ttc[0] + arr_ttc[3] + arr_ttc[6];
    var variant_05 = arr_ttc[1] + arr_ttc[4] + arr_ttc[7];
    var variant_06 = arr_ttc[2] + arr_ttc[5] + arr_ttc[8];
    var variant_07 = arr_ttc[0] + arr_ttc[4] + arr_ttc[8];
    var variant_08 = arr_ttc[2] + arr_ttc[4] + arr_ttc[6];

    if (variant_01 == 3) {win_0()}
    if (variant_02 == 3) {win_0()}
    if (variant_03 == 3) {win_0()}
    if (variant_04 == 3) {win_0()}
    if (variant_05 == 3) {win_0()}
    if (variant_06 == 3) {win_0()}
    if (variant_07 == 3) {win_0()}
    if (variant_08 == 3) {win_0()}

    if (variant_01 == 12) {win_x()}
    if (variant_02 == 12) {win_x()}
    if (variant_03 == 12) {win_x()}
    if (variant_04 == 12) {win_x()}
    if (variant_05 == 12) {win_x()}
    if (variant_06 == 12) {win_x()}
    if (variant_07 == 12) {win_x()}
    if (variant_08 == 12) {win_x()}
    
    function win_x() {
        console.log('win: X');
        document.getElementById('win_state').style.display = 'block';
        document.getElementById('numWin').innerHTML = '1';
        setTimeout(hide_win, 1500);
        function hide_win() {
            for (let i = 0; i < container.children.length; i++) {
                container.children[i].className = '';
            }
            document.getElementById('win_state').style.display = '';
            document.getElementById('numWin').innerHTML = ' ';
        }     
        arr_null();     
    }
    function win_0() {
       console.log('win: 0');
        document.getElementById('win_state').style.display = 'block';
        document.getElementById('numWin').innerHTML = '2';
        setTimeout(hide_win, 1500);
        function hide_win() {
            for (let i = 0; i < container.children.length; i++) {
                container.children[i].className = ' ';
            }
            document.getElementById('win_state').style.display = '';
            document.getElementById('numWin').innerHTML = ' ';
        }     
        arr_null();
    }
}
function arr_null() {
    for (let i = 0; i < arr_ttc.length; i++) {
        arr_ttc[i] = 0;
    }
    reset_counters()
}
function reset_counters() {
    count = 0;
    value = 0;
}

