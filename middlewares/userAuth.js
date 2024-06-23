const userAuth = (req, res, next) => {
    let { user } = req.cookies
    if(user) {
        next()
    } else {
        return res.redirect('/login')
    }
}

module.exports = userAuth