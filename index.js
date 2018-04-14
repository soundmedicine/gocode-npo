const apiUrl = 'https://data.colorado.gov/resource/p3jp-z4tq.json'
const npoList = document.querySelector('.npoList')

fetch(apiUrl) 
    .then((response) => response.json())
    .then(function(data) {
        console.log(data)

        let npos = data.forEach(function(dataObject) {
            // highToLow(dataObject)
            
            const newUl = document.createElement('ul')
            const npoName = document.createElement('li')
            const revLi = document.createElement('li')
            const expLi = document.createElement('li')
            const coverage = document.createElement('li') 
        
            newUl.setAttribute('class', 'npoUl')
            npoList.appendChild(newUl)
            
            npoName.textContent = dataObject.name
            revLi.textContent = 'Total Revenue = $' + dataObject.revenuetotal
            expLi.textContent = 'Total Expenses = $' + dataObject.expensestotal
            coverage.textContent = 'Percentage of Budget = ' + parseInt((dataObject.expensestotal / dataObject.revenuetotal) * 100) + '%'

            newUl.appendChild(npoName)
            newUl.appendChild(revLi)
            newUl.appendChild(expLi)
            newUl.appendChild(coverage)
            })
        })

    .catch(function(err) {
        console.log(err.message)
    })