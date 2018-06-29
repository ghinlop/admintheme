
$(document).ready(function () {
    
})

function product_filter() {
    let _search = $('[gh-filter]').val().toUpperCase();
    let _iTarget = $('[gh-filter]').attr('gh-filter');
    let items_arr = $(_iTarget).find('[gh-item]')
    for (let i = 0; i < items_arr.length; i++) {
        let _txt = $(items_arr[i]).text().toUpperCase().indexOf(_search);
        if (_txt > -1) {
            $(items_arr[i]).parent().parent().removeClass('d-none').addClass('d-block')
        } else {
            $(items_arr[i]).parent().parent().removeClass('d-block').addClass('d-none')
        }
    }
}

var ctx = document.getElementById("testChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

function _log(val) {
    console.log(val);
}