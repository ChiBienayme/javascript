//01 - Format

// var mydate = new Date('2022-01-06'); //aaaa-mm-jj
// console.log(mydate.toLocaleDateString());//jj/mm/aaaa
 

function formatDate(date) {
    var d = new Date(date),
        year = d.getFullYear(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(); 

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('/');
}
 
console.log(formatDate('2022-07-26'));

