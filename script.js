function add(){
    const houseNumber = document.querySelector("#number").value
    const neighborhood = document.querySelector("#neighborhood").value
    const city = document.querySelector("#city").value
    const houseArea = document.querySelector("#area").value

    const list = document.querySelector("#list")
    
    const listItem = document.createElement("li")

    listItem.innerText = `${houseNumber} - ${neighborhood} - ${city} - ${houseArea}³`

    const counter = list.childElementCount+1
    listItem.setAttribute("id", counter)

    const removeButton = document.createElement("button")

    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "remove(this)")

    
    listItem.append(removeButton)

    list.append(listItem)

}

function remove(item){
    const currentItem = item.parentNode
    currentItem.remove()
}



