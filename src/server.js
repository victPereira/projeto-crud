const express = require ('express')
const { rmSync } = require('fs')
const path = require('path')

const app = express()

//Definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Definindo os arquivos publicos
app.use(express.static(path.join(__dirname,'public')))

//Habilita server para receber dados via post (formulario)
app.use(express.urlencoded({extended:true}))

//Rotas
app.get('/', (req,res) => {
    res.render('index',{
        title: 'Titulo teste'
    })
})

//404 error (not found)
app.use((req, res) => {
    res.send('Página não encontrada')
})


//executando o servidor
const port = process.env.port || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))

