document.addEventListener('DOMContentLoaded', function() {
    const version = document.querySelectorAll('.version-item');

    version.forEach(function(item) {
        item.addEventListener('click', function (){
            version.forEach(function(item) {
                item.classList.remove("activ");
            });
            item.classList.add('activ');
        });
    });   
});

    