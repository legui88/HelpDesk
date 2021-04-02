const { express } = require ('express')

const { sequelize, ticket } = require('./models')

const app = express()
app.use(express.json())

app.post('/ticket', async(req, res) => {
    const { date, user, secure_code } = req.body

    try {
        const ticket = await ticket.create({ date, user, secure_code})

        return res.json(ticket)
    }catch(err){
        console.log(err)
        return res.statut(500).json(err)
    }
})

app.listen({ port:5000 }, async () => {
    console.log('server up on http:/localhost:5000')
    await sequelize.sync({ force:true })
    console.log('database sync!!!')

})
    
