const apiUrl = 'https://data.colorado.gov/resource/p3jp-z4tq.json'
const npoList = document.querySelector('.npoList')

// function highToLow(arr) {
//     arr.sort(function(a, b) {
//         return b - a
//     })
// }

fetch(apiUrl) 
    .then((response) => response.json())
    .then(function(data) {
        console.log(data) 
        
        // highToLow(data)

        let npos = data.forEach(function(dataObject) {
        
            
            const newUl = document.createElement('ul')
            const npoName = document.createElement('li')
            const revLi = document.createElement('li')
            const expLi = document.createElement('li')
            const coverage = document.createElement('li')
            const website = document.createElement('a')
            

            newUl.setAttribute('class', 'npoUl')
            npoList.appendChild(newUl)
            
            npoName.textContent = dataObject.name
            revLi.textContent = 'Total Revenue = $' + dataObject.revenuetotal
            expLi.textContent = 'Total Expenses = $' + dataObject.expensestotal
            coverage.textContent = 'Percentage of Budget = ' + parseInt((dataObject.expensestotal / dataObject.revenuetotal) * 100) + '%'
            website.setAttribute('href', dataObject.website)
            website.textContent = dataObject.website
            

            newUl.appendChild(npoName)
            newUl.appendChild(revLi)
            newUl.appendChild(expLi)
            newUl.appendChild(coverage)
            newUl.appendChild(website)
            })
        })

    .catch(function(err) {
        console.log(err.message)
    })