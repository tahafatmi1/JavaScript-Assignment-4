

var userInput = prompt("Enter a number:");

var number = parseInt(userInput);

 
    if (!isNaN(number)) {
        
        document.write('<table>');
        document.write('<tr><th>Multiplicand</th><th>Multiplier</th><th>Result</th></tr>');

        for (var i = 1; i <= 10; i++) {
            var result = number * i;
            document.write('<tr><td>' + number + '</td><td>' + i + '</td><td>' + result + '</td></tr>');
        }

        document.write('</table>');
    } else {
    
        document.write('<p style="color: red;">Invalid input. Please enter a valid number.</p>');
    }

    // Factorial
    var num = 5;
    var factorial = 1;
    var j = 1;

    while (i <= num) {
        factorial *= j;
        j++;
    }

    document.write('<p>The factorial of ' + num + ' (' + num + '!) is: ' + factorial + '</p>');

