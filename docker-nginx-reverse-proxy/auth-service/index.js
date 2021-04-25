const express = require('express')

const app = express()

app.get('/', (req, res) => res.json({ code: 200, message: 'Welcome..' }))

const PORT = process.env.PORT ?? 8080

app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`))
