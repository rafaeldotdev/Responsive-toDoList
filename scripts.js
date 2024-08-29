const form = document.querySelector("form")
const compras = document.getElementById("compras")
const inputAdd = document.getElementById("input-add-item")
const warningBtn = document.getElementById("warningBtn")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const ul = document.createElement("ul")
  const li = document.createElement("li")
  li.classList.add("formListWrapper")
  li.classList.add("input-wrapper")
  li.classList.add("checkbox-wrapper")

  const input = document.createElement("input")
  input.type = "checkbox"
  const checkbox_img = document.createElement("div")
  checkbox_img.classList.add("checkbox-img")

  const label = document.createElement("label")
  label.textContent = inputAdd.value
  const trashButton = document.createElement("div")
  trashButton.classList.add("trashButton")

  //criando arvore
  li.append(input,checkbox_img ,label, trashButton)
  ul.append(li)

  compras.append(ul)

  trashButton.addEventListener("click", () => {
    const warningNotification = document.getElementById("warningBtn")
    warningNotification.classList.remove("displayNone")
    const divPai = trashButton.parentElement
    divPai.remove()
  })

  warningBtn.addEventListener("click", () => {
    const warningNotification = document.getElementById("warningBtn")
    warningNotification.classList.add("displayNone")
  })
})
