function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const imagem = document.querySelector("#profile img")
    
  
  if(html.classList.contains('light')) {
    imagem.setAttribute('src', './assents/avatar-light.png')

  } else {
    imagem.setAttribute('src', './assents/avatar.png')
  }
} 

alert(
  "Venha comemorar meu aniversário no dia 04 de março! Confirme sua presença e deixe de frescura."
)





