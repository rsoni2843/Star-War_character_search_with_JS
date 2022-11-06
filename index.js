// https://swapi.dev/api/people/?search=r2 ; 
let id ; 

async function getData(){
    let query = document.getElementById("query").value ; 
    let url = `https://swapi.dev/api/people/?search=${query}`
    
    let res = await fetch(url) ;  
    let data = await res.json() ; 
    // console.log(data)
    // console.log(data.results) ; 
    // appendData(data.results)
    return data.results ; 
}

function appendData(data){
    let container = document.getElementById("result") ;
    // console.log(data) ; 
    let input = document.querySelector("input") ; 
    container.innerHTML = null ; 
    data.forEach(function(el){
        let anchor = document.createElement("a") ; 
        anchor.setAttribute("href","target.html")
        let div = document.createElement("div") ; 
        div.setAttribute("id","charRow")
        let p = document.createElement("h3")
        p.style.color = "white" ; 
        p.setAttribute("class","charName") ; 
        p.addEventListener("click",function(){
            // console.log(this.innerText) ; 
            let charName = this.innerText ; 
            localStorage.setItem("name",charName) ; 

        })
        let birth = document.createElement("p") ;
        birth.setAttribute("class","birth") 
        birth.innerText = el.birth_year ; 

        p.innerText = el.name ; 
        // console.log(p)
        div.append(p,birth)
        anchor.append(div) ; 
        // console.log(el.height)
        container.append(anchor)
    })
}


async function main(){
    let data = await getData() ; 
    appendData(data)
}


function debouncing(func,delay){
    if(id){
        clearTimeout(id) ; 
    }
   id =  setTimeout(function(){
        func() ; 
    },delay)
}






 