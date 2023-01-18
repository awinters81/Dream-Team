const createTeam = team => {

    // I'll create the manager html first and if it works, I'll model the inter and engineer html after it.

    const createManager = manager => {
       
        return `

        <div>
        <div>
            <h2>${manager.pullName()}</h2>
            <h3>${manager.pullPosition()}</h3>
        </div>
        <div>
            <ul>
               
            <li>ID: ${manager.pullCard()}</li>

            <li>Phone: ${manager.pullPhone()}</li?
                
            <li>Email:
                 <a href="mailto:${manager.pullEmail()}">}</a>
             </li>
                
             <li>
             Office: ${manager.pull()}
             </li>
            
             </ul>
        </div>
    </div>
        `;

    };

   
// This should be the same for all three if it works...

    const html = [];

    html.push(team
    
    // I feel like I'm missing something here, but I have no idea what it is yet..

        (employee => employee.pullPosition() === "Manager")
        (manager => createManager(manager))
    );

    return html.join("");

}

// this should show me the entire page.

module.exports = team => {

    return `
    
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Dream Team</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div>
        <div>
            <h1>The Dream Team</h1>
        </div>
    </div>
    
    <br>
    
    <div>
        <div>
            ${createTeam(team)}
        </div>
    </div>

</body>
</html>
    `;
};
