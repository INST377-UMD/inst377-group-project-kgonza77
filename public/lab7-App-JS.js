async function getCustomers(){
    console.log('Obtaining Customer')
    var host = window.location.origin;    
    console.log('Host:', host)

    var test = await fetch(`${host}/customers`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        } 
    })
    .then((res) => {
        console.log(res)
        const element = document.getElementById('errorBox')
        if (element){
            element.remove();
        }

        console.log('Status:', res.status)
        if(res.status != 200 && res.status != 304) {
            throw new Error(JSON.stringify(res.json()));
        } 
        return res.json()
    })
    //REquesting data from the API
    .then((res) => {
        console.log(res);
        const element = document.getElementById("customerInfo");
        if (element){
            element.remove();
        }

        //Creating table
        var table = document.createElement('table');
        table.setAttribute('id', 'customerInfo');
        
        var tableRow = document.createElement('tr');
        var tableHeader1 = document.createElement('th');
        tableHeader1.innerHTML = "First Name";
        tableRow.appendChild(tableHeader1);

        var tableHeader2 = document.createElement('th');
        tableHeader2.innerHTML = "Last Name";
        tableRow.appendChild(tableHeader2);

        var tableHeader3 = document.createElement('th');
        tableHeader3.innerHTML = "State";
        tableRow.appendChild(tableHeader3);

        table.appendChild(tableRow)
        document.body.appendChild(table)

        for (i = 0; i < res.length; i++){
            var customerRow = document.createElement('tr');
            var customerFirstName = document.createElement('td');
            var customerLastName = document.createElement('td');
            var customerState = document.createElement('td');

            customerFirstName.innerHTML = res[i].cust_first_name;
            customerLastName.innerHTML = res[i].cust_last_name;
            customerState.innerHTML = res[i].cust_state;

            customerRow.appendChild(customerFirstName);
            customerRow.appendChild(customerLastName);
            customerRow.appendChild(customerState);

            table.appendChild(customerRow);
        }

    }) 
    .catch((error) => {
        console.log('Catch Error message:', JSON.parse(error.message));
        //Creating element to diplay error
        var errorDiv = document.createElement('div');
        errorDiv.setAttribute('class','errorBox');
        errorDiv.setAttribute('id', 'errorBox');

        var h1 = document.createElement('h1');
        h1.innerHTML = `Error Ocurred! `;

        var p = document.createElement('p');
        p.innerHTML = `${JSON.parse(error.message).message}`;

        errorDiv.appendChild(h1);
        errorDiv.appendChild(p);
        document.body.appendChild(errorDiv);
    })
}

async function addCustomer(){
    console.log('Creating Customer')

    var host = window.location.origin;    
    var test = await fetch(`${host}/add-customer`, {
        method: 'POST',
        body: JSON.stringify({
            "firstName": `${document.getElementById('firstName').value}`,
            "lastName": `${document.getElementById('lastName').value}`,
            "state": `${document.getElementById('state').value}`
        }),
        headers: {
            "Content-Type": "application/json"
        } 
    })
    await getCustomers();
}
window.onload = getCustomers;