$(document).ready(function(){
    $('#calculator').on('submit', function(event){
        event.preventDefault();
        var values = {};
        $.each($('#calculator').serializeArray(), function(i, field){
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
    for(i = 0; i < entry.length; i++){
        var person = entry[i];
        expense += parseInt(person.salary/12);
        console.log(person);
        listEntries(person);
    }

function listEntries(person){
    $('.container').append('<p>' + person.Name + ' ' + person.IDNumber + ' ' + person.jobtitle + ' ' +
     '$' + person.salary + ' per year </p> <button class="delete">Delete Entry</button>');
}

function removeEntry(){
    expense -= $(this).parseInt(person.salary/12);
    $(this).parent().remove();
}
    $('.totals').text("Here is the total of everyone's monthly salaries: " + expense);
    $('.container').on('click', '.delete', removeEntry);
}
