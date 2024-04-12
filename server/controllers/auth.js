import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import {createError} from '../utils/error.js'
import jwt from "jsonwebtoken";



export const register = async (req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser=new User({
        ...req.body,
        password:hash,
        })  
        await newUser.save()
        console.log(newUser)
        res.status(200).send("user registered");
    } 
catch (error) {
        next(error)
}
}

export const login = async (req, res, next) => {
    console.log('dataa ',req.body)
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) return next(createError(404, "User not found!"));
      
      const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!isPasswordCorrect)
        return next(res.status(404).json("Wrong password or username!"));

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT
          );

    const {password,isAdmin,...otherDetails} = user._doc
      res
      .cookie("access_token", token, {
        httpOnly: true,
      }).status(200).json({...otherDetails})
      console.log({...otherDetails})
      }
      catch(err){
        next(err)
      }
    }  