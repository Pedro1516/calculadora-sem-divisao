const tela = document.querySelector('#tela')
const btnigual = document.querySelector('.igualdade')
const btnTrocaSinal = document.querySelector('.trocaSinal')
const btnponto = document.querySelector('.btnponto')
const btnnum = document.querySelectorAll('.num')
const btnop = document.querySelectorAll('.operador')


var expressao = []
var estado = false


btnnum.forEach((item, i) => {
    item.addEventListener('click', () => {
        tela.innerText += item.value
      })
})

btnop.forEach((item, i) => {
  item.addEventListener('click', () => {
    if(tela.innerText.length > 0 && !estado){
    expressao.push(Number(tela.innerText))
    expressao.push(item.value)
    tela.innerText = ''
  }
  else if(estado){
    expressao.push(item.value)
    tela.innerText = ''
  }
  })
})

btnponto.addEventListener('click', () => {
  if(tela.innerText.length == 0){return}

  for(i = 0; i < tela.innerText; i++){
    if(tela.innerText[i] == '.'){return}
  }

  tela.innerText += '.'
})

btnTrocaSinal.addEventListener('click', () => {
  if(tela.innerText == 0){return}
  if(expressao.length == 1){
    expressao[0] *= -1
   }
  tela.innerText = Number(tela.innerText) * -1
})

btnigual.addEventListener('click', () => {
  if(tela.innerText.length > 0 && expressao.length >= 2){
    expressao.push(Number(tela.innerText))
    tela.innerText = ''
    estado = true

    let cp = 0
    let cs = 0
    while(cp < expressao.length){
      while(cs < expressao.length) {
        expressao.forEach((e, i) => {
          if(e == 'x'){
            const mult = expressao[i -1] * expressao[i + 1]
             expressao[i -1] = mult
             expressao.splice(i , 2)
          }
        })
        cs++
      }

      expressao.forEach((e, i) => {
        if(e == '+'){
         const soma = expressao[i -1] + expressao[i + 1]
         expressao[i -1] = soma
         expressao.splice(i , 2)
       }

       if(e == '-'){
        const sub = expressao[i -1] - expressao[i + 1]
        expressao[i -1] = sub
        expressao.splice(i , 2)
      }
      })
      cp++
    }
    tela.innerText = expressao[0]
  }
})
