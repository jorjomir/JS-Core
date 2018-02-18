function table(n){
    let html = '<table border="1">\n';
    html += '<tr><th>x</th>';
    for (let i = 1; i <= n; i++) {
        html += `<th>${i}</th>`
    }
    html += '</tr>\n';
    for(let i = 1; i <= n; i++) {
        html += '<tr>';
        html += `<th>${i}</th>`;
        for (let j = i; j <= n*i; j+=i) {
            html += `<td>${j}</td>`
        }
        html += '</tr>\n';
    }
    html += '</table>';
    console.log(html)
}