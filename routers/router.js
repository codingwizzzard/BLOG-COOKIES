const { Router } = require("express")
const { indexPage, add, addPage, editData, deleteData, viewtbl, login, loginPage, logout, getData, signupPage, signup} = require("../controllers/controller")
const upload = require("../middlewares/multer")
const userAuth = require("../middlewares/userAuth")

const router = Router()

router.get('/', userAuth, indexPage)
router.get('/add', add)
router.post('/add', upload, addPage)
router.get('/editData/:id', editData)
router.get('/viewtbl', viewtbl)
router.get('/deleteData/:id', deleteData)

router.get('/signup', signupPage)
router.post('/signup', signup)
router.get('/login', loginPage)
router.post('/login', login)
router.get('/logout', logout)
router.get('/getData', getData)

module.exports = router