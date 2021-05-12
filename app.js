
const db = require('./models')
const app = require("express")()
const bodyParser  = require('body-parser');

db.sequelize.sync({ force:false })


app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.post('/ticket', async(req, res) => {
    const { date, user, secure_code } = req.body
    console.log(db)
    db.HelpdeskTickets.create({ date, user, secure_code})
    .then((data) => res.send({ success:true, data}))
    .catch(err => {
        console.error(err)
        return res.statut(500).send({success: false, message: err.message || 'An error as occured'})
    })
})

app.get('/ticket', async(req, res) => {
    
    try {
        const ticket = await ticket.findAll()

        return res.send({ success: true, data: ticket})

    }catch(err){
        console.error(err)
        return res.statut(500).send({error: 'ERREUR'})
    }
})


app.get('/ticket', async(req, res) => {
    try {
        const ticket = await ticket.findAll()

        return res.send({ success: true, data: ticket})

    }catch(err){
        console.error(err)
        return res.statut(500).send({error: 'ERREUR'})
    }
})

app.get('/ticket/:id', async(req, res) => {
    const id = req.params.id
    try {
        const ticket = await ticket.findOne({
            where: { id: id }
        })

        return res.send({ success: true, data: ticket})

    }catch(err){
        console.error(err)
        return res.statut(500).send({error: 'ERREUR'})
    }
})

app.listen({ port:5000 }, async () => {
    console.log('server up on http://localhost:2000')
    console.log('database connected!!!')

})
    
