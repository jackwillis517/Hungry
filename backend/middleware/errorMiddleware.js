const errorHandler = (err, req, res, next) => {
    // Checks if the status code is already set, if set it to 500
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)

    // Respond with a json error message, return the call stack if
    // NODE_ENV in the .env file is not in production.
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = {errorHandler}