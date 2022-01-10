var moment = require("moment");

function formatDate(dateString) {
    console.log(moment(dateString).format("DD/MM/YYYY"));
}

formatDate("2020-02-27")

function calculateAge(dateString) {
    console.log(moment(dateString).fromNow());
}

calculateAge("2000-02-15")