const num = Number(prompt('Введіть число'));

function fibcycle(n) {
    let a = 1,
        b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
document.write('Фібоначі цикл : ' + fibcycle(num));
document.write('<br>');
document.write('<br>');

function fibmas(x) {
    let mas = [1, 1];
    for (let i = 2; i < x; i++) {
        mas[i] = mas[i - 1] + mas[i - 2];
    }
    return mas[x - 1];
}
document.write('Фібоначі масив :' + fibmas(num));
document.write('<br>');
document.write('<br>');

function fibrec(n) {
    return n <= 1 ? n : fibrec(n - 1) + fibrec(n - 2);
}
document.write('Фібоначі рекурсія :' +fibrec(num));
