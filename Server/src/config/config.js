module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || '2019followingVideos',
        user: process.env.DB_USER || '2019follwingvideos',
        password: process.env.DB_PASS || '2019followingvideos',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.DB_HOST || 'localhost',
            storage: './2019followingvideos.sqlite',
            operatorsAliases: false
        }
    }
}
