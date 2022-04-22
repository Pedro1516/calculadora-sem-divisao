const tela = document.querySelector('#tela')
const btnigual = document.querySelector('.igualdade')
const btnnum = document.querySelectorAll('.num')
const btnop = document.querySelectorAll('.operador')


btnnum.forEach((item, i) => {
    item.addEventListener('click', () => {
        tela.innerText += item.value
      })
})

btnop.forEach((item, i) => {
  item.addEventListener('click', () => {
    if(tela.innerText.length > 0){
    expressao.push(Number(tela.innerText))
    expressao.push(item.value)
    tela.innerText = ''
  }
  })
})

btnigual.addEventListener('click', () => {
  if(tela.innerText.length > 0){
    expressao.push(Number(tela.innerText))
    tela.innerText = ''

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


var expressao = []
var estado = false

/*
inputs[0].addEventListener('click', () => {
      tela.innerText += 1
      estado = false
})

inputs[1].addEventListener('click', () => {
  tela.innerText += 2
  estado = false
})

inputs[2].addEventListener('click', () => {
  tela.innerText += 3
  estado = false
})

inputs[4].addEventListener('click', () => {
  tela.innerText += 4
  estado = false
})

inputs[5].addEventListener('click', () => {
      tela.innerText += 5
      estado = false
})

inputs[6].addEventListener('click', () => {
  tela.innerText += 6
  estado = false
})



inputs[8].addEventListener('click', () => {
  tela.innerText += 7
  estado = false
})

inputs[9].addEventListener('click', () => {
  tela.innerText += 8
  estado = false
})

inputs[10].addEventListener('click', () => {
  tela.innerText += 9
  estado = false
})

inputs[12].addEventListener('click', () => {
  tela.innerText += 0
  estado = false
})




inputs[3].addEventListener('click', () => {
  if(tela.innerText.length > 0){
    soma.push(Number(tela.innerText))
    tela.innerText = ''
  }
  estado = true
})

inputs[15].addEventListener('click', () => {
    soma.push(Number(tela.innerText))
    let res = 0
    soma.forEach(e => {
      res += e
    })
     tela.innerText = res
     soma = []
})
*/
