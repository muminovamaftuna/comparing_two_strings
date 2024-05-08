function сравнитьСтроки() {
    let строка1 = document.getElementById('строка1').value;
    let строка2 = document.getElementById('строка2').value;
    let различия = '';

    for (let i = 0; i < Math.max(строка1.length, строка2.length); i++) {
        if (строка1[i] !== строка2[i]) {
            if (строка1[i] !== undefined) {
                различия += `Символ в строке 1 на позиции ${i}: '${строка1[i]}'<br>`;
            }
            if (строка2[i] !== undefined) {
                различия += `Символ в строке 2 на позиции ${i}: '${строка2[i]}'<br>`;
            }
        }
    }

    let результат = document.getElementById('результат');
    if (различия === '') {
        результат.innerHTML = 'Строки идентичны.';
    } else {
        результат.innerHTML = 'Различия между строками:<br>' + различия;
    }
}