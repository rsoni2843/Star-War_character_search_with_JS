

async function showDeatils(){
    let name = localStorage.getItem("name") ; 
    // console.log(name)

    const url = `https://swapi.dev/api/people/?search=${name}`
    // console.log(url)

    let res = await fetch(url) ; 
    let data = await res.json() ; 
    // console.log(data.results) ; 
    appendData(data.results)




}
function appendData(data){
    console.log(data) ; 
    let container2 = document.getElementById("container2") ; 

    data.forEach(function(el,i){
        // console.log(el.name) ;
        let h1 = document.createElement("h1") ; 
        h1.innerText = el.name ; 
        console.log(h1)
        let div = document.createElement("div") ; 
        div.setAttribute("id","flexdiv") ;

        // div1 for 1st box Data

        let div1 = document.createElement("div")
        let h2 = document.createElement("h2") ; 
        
        h2.innerText = "Personal Info" ;
        let birth = document.createElement("p") ; 
        birth.innerText = "Birth-Year : "+el.birth_year ; 
        let gender = document.createElement("p") ;
        gender.innerText = "Gender : "+el.gender ; 
        let height = document.createElement("p") ;
        height.innerText = "Height : "+el.height ; 

        //div2 for 2nd box data
        let div2 = document.createElement("div")
        let h2_2 = document.createElement("h2") ;
        h2_2.innerText = "Anatomy" ; 
        let eyeColor = document.createElement("p") ; 
        eyeColor.innerText = "Eye-Color : "+el.eye_color ; 
        let mass = document.createElement("p") ; 
        mass.innerText ="Mass : "+ el.mass ; 
        let hairColor = document.createElement("p") ; 
        hairColor.innerText = "Hair-Color : "+el.hair_color ;
        let buttonAttr= document.createElement("a") ; 
        buttonAttr.href = "./index.html"

        let button = document.createElement("button") ; 
        button.innerText = "Go Back"
        
        button.setAttribute("id","backButton") ; 
        buttonAttr.append(button)
        div1.append(h2,birth,gender,height) ;
        div2.append(h2_2,eyeColor,mass,hairColor)
        div.append(div1,div2) ; 
        container2.append(h1,div,buttonAttr)






    })



}

showDeatils() ; 