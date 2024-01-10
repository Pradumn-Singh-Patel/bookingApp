import User from '../models/User.js'

export const updateUser= async(req,res,next)=>{
    try {
        const updatedUser = await User.findByIdAndUpdate(req.param.id,{$set : req.body},{new : true});
        res.status(200).json(updatedUser)
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async (req,res,next)=>{
    try {
        const deletedUser = await User.findByIdAndDelete(req.param.id)
        res.status(200).json(deletedUser)
    } catch (error) {
        next(error)
    }
}

export const getUser = async (req,res,next)=>{
    try {
        const user = User.findById(req.param.id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

export const getUsers = async (req,res,next)=>{
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }