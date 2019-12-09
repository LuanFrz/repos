var x = 0;
while ( x < 1000) {
    setTimeout(() => {
        fetch('http://localhost:3003/users').then(function(response) {
            console.log(response + "Testing ")
        }, function(error) {
            console.log("BOOM!")
        });
    }, 1);
    x++
}