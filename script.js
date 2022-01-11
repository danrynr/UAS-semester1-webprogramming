var dataSet = [
    ["1356895487621549", "Daniel", "Jalan Kencana"],
    ["1434534535355285", "John", "Puri Indah Kencana"],
    ["1346485419853841", "Samuel", "Simpang Lima"],
    ["6485623185215123", "Brown", "Cirebon Ring Road"],
    ["7941512346481231", "Tonny", "Jalan Kencana"],
    ["8941232487621549", "Lisa", "Bukit Golf"],
    ["5642315315831253", "Toby", "Green Hills"],
    ["4242895487621549", "Don", "Jalan Kencana"],
    ["2543435434343343", "Mira", "Puri Indah Kencana"],
    ["6767676768252543", "Manuel", "Simpang Lima"],
    ["5439725255833688", "Joseph", "Cirebon Ring Road"],
    ["1457725356455654", "Wan", "Jalan Kencana"],
    ["5467835578654654", "Bruno", "Bukit Golf"],
    ["6546754373548764", "Wann", "Green Hills"],
];

$(document).ready(function() {
    $('#data-table').DataTable({
        data: dataSet,
        columns: [
            { title: "NIK" },
            { title: "Nama" },
            { title: "Alamat" }
        ]
    });
});

$(function() {
    $("form[name='myForm'").validate({
        errorClass: "error fail-alert",
        validClass: "valid success-alert",
        rules: {
            nik: {
                required: true,
                minlength: 16,
                maxlength: 16
            },
            name: "required",
            message: "required"
        },
        messages: {
            nik: {
                required: "Please enter a valid NIK (16 digits)",
                minlength: "Please enter a valid NIK (yours is less than 16 digits)",
                maxlength: "Please enter a valid NIK (yours is more than 16 digits)"
            },
            name: "Please enter a subject",
            message: "Please enter a message"
        },
        submitHandler: function(form) {
            alert("Success!");
            form.clear();
        }
    });
});



