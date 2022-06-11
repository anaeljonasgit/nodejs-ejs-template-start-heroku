module.exports = {
    server: {
        port: process.env.PORT || 3000
    },

    database: {
        mongodb: process.env.MONGODB_DATABASE_URL || ''
    }
};