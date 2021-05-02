let configValue = require("./config.json")

module.exports = {
    getDbConnectionString: function () {
        return `mongodb+srv://${configValue.username}:${configValue.password}@clustertutorial.3v3l6.mongodb.net/note_todos?retryWrites=true&w=majority `
    }
}