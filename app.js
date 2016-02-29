$(document).ready(function(){
    $('#calculator').on('submit', function(event){
        event.preventDefault();
        var values = {};
        $.each($('#calculator').serializeArray(), function(i, feild){
            values[field.name] = field.value;
        });
        $('#calculator').find('input[type=text]').val('');
        entry.push(values);
        allSalaries();
    });
});
var entry = [];

function allSalaries(){
    var expense = 0;
    for(var i = 0; i < entry.length; i++){
        var person = entry[i];
        expense += parseInt(person.salary/12);
    }


function listEntries(){
    $('.container').append('<p></p>');
    var $el = $('container').children().last();

    $el.append('.container').text(person.name + ' ' + person.IDNumber + ' ' + person.jobtitle + ' ' +
    '$' + person.salary + ' per year').append('<button class="delete">Delete Entry</button>');
}

listEntries()

function removeEntry(){
    expense -= $(this).parseInt(person.salary/12);
    $(this).parent().remove();
}




    $('.totals').text("Here is the total of everyone's monthly salaries: " + expense);
}
