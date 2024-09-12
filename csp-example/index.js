const express = require("express")

const helmet = require("helmet")

const app = express()

app.use(helmet.contentSecurityPolicy({
    directives:{
        "scriptSrc": ["self"],
        //...
    }
}))

app.get("/", (req,  res) => {
    res.end("Hello from nodejs")
})

app.listen(4000, () => {

})