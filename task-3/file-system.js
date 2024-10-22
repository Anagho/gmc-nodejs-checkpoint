// File system
import fs from 'fs'; 

// Create welcome.txt file
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('Welcome text has been created.');

    // Read welcome.txt file
    fs.readFile('welcome.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
});