const request = require('request');

request('https://www.githubstatus.com/',  { json: true }, (err, res, body) => {
    const operations = body.components;

    const gitStatus = operations.filter(operation => {
        if (
                operation.name === 'Git Operations' || 
                operation.name === 'API Requests' || 
                operation.name === 'Issues' || 
                operation.name === 'Pull Requests' ||
                operation.name === 'GitHub Actions' || 
                operation.name === 'GitHub Packages' || 
                operation.name === 'GitHub Pages' 
            ){
            return (
                operation
            )
        }
    })
    
    const div = document.getElementsByClassName('git-status-bar')

    /*
    const p = document.createElement('p')
    p.setAttribute('class', 'operation-status')
    p.textContent = gitStatus[0].status
    div[0].appendChild(p)
    */

    for (let i = 0; i <= gitStatus.length - 2; i++){
        const p = document.createElement('p')
        p.setAttribute('class', 'operation-status')
        p.textContent = gitStatus[i].status
        div[i].appendChild(p)
    }

});