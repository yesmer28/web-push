const webpush = require("web-push")
const vapidKeyPub = "BKl-a66AvLGNRDYfigPvvUWu4Q3Yyx2JoWfINw_CDSRXEEZqsnGGUS0YmFhjxsjVk9PDSVM_ipV6zmoiJJuqDMQ"
const vapidKeyPriv = "w-Z-kzWShhevBCDwJQiGwvH21lRqcY-3iMdlLGEZkmI"

webpush.setVapidDetails("mailto: castrillorodriguez28@gmail.com", vapidKeyPub, vapidKeyPriv)

module.exports = webpush
// Public Key

// Private Key: