const {Router} = require("express")
const router = Router()
const webpush = require("../wp")
const {join} = require("path")

router.get("/",(req, res)=>{
  res.send("index.html")
})
router.post("/subscribe",(req, res)=>{
  const pushSub = req.body;
  console.log(req.body);
  const payload = JSON.stringify({
    title: "suscription",
    message: "sussccefuly"
  })
  webpush.sendNotification(pushSub, payload)
})
router.get("/sendmessage",(req, res)=>{
  res.sendFile(join(__dirname,"../public/form.html"))
})

router.post("/sendmessage",(req, res)=>{
  const {msg, subscription} = req.body;
  console.log(req.body);
  const payload = JSON.stringify({
    title: "suscription",
    msg: msg
  })
  webpush.sendNotification(subscription, payload)
})
module.exports = router