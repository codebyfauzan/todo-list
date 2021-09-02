document.addEventListener('DOMContentLoaded', function() {

    const todoForm = document.getElementById('todo-form');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTodo();
    });

    const todos = document.getElementById('todos')
    todos.addEventListener('click', function(event) {
        if (event.target.type == 'checkbox') {
            if(event.target.checked) {
                event.target.nextElementSibling.classList.add('done');
                event.target.parentElement.parentElement.classList.remove('active');
                event.target.parentElement.parentElement.classList.add('completed');
                console.log(event.target.nextElementSibling);
            } else {
                event.target.nextElementSibling.classList.remove('done');
                event.target.parentElement.parentElement.classList.add('active');
                event.target.parentElement.parentElement.classList.remove('completed');
            }
        }

        if(event.target.className == 'remove') {
            event.target.parentElement.remove();
        }
    })

    $( ".js-example-basic-single" ).change(function() {
        const category = $('.js-example-basic-single option:selected').text();
        if(category === 'Active') {
            $('.completed').css('display', 'none');
            $('.active').css('display', 'flex');
        } if (category === 'Completed') {
            $('.active').css('display', 'none');
            $('.completed').css('display', 'flex');
        }  if (category == 'All') {
            $('.completed').css('display', 'flex');
            $('.active').css('display', 'flex');
        }
    });
   
    
});