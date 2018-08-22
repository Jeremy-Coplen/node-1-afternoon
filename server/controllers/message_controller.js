let messages = []
let id = 0

module.exports = {
    read: (req, res) => {
        res.status(200).send(messages)
    },

    create: (req, res) => {
        const {text, time} = req.body
        const message = {
            id,
            text,
            time
        }
        messages.push(message)
        id++
        res.status(200).send(messages)
    },

    update: (req, res) => {
        const {text, time} = req.body
        let messageID = null
        messages.forEach((message, index) => {
            if(message.id === Number(req.params.id)) {
                messageID = index
            }
        })
        messages[messageID] = {
            id: messages[messageID].id,
            text: text || messages[messageID].text,
            time: time || messages[messageID].time
        }
        res.status(200).send(messages)
    },

    delete: (req, res) => {
        messages.forEach((message, index) => {
            if(message.id === Number(req.params.id)) {
                messages.splice(index, 1)
            }
        })
        res.status(200).send(messages)
    }
}