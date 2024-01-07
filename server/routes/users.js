import express from "express";
import { updateUser,deleteUser,getUser,getUsers } from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('User page')
})


router.get("/checkauthentication", verifyToken, (req,res,next)=>{
      res.send("hello user, you are logged in")
    })

router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
  res.send("hello user, you are logged in and you can delete your account")
})

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
  res.send("hello admin, you are logged in and you can delete all accounts")
})

router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyAdmin, getUser);

// //GET ALL
router.get("/", verifyAdmin, getUsers);
// router.post('/',register)
// router.post('/login',login)
export default router