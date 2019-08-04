/**
 * @fileOverview contains middleware that authorise admin previlages only
 * @author Eucossa
 * @version 0.0.1
 */
const Users = require('../models/users')

 module.exports =async (req,res,next)=>{
     try {
         const {_id } = req.user;
         const currentUser = await Users.findOne({_id});
         if (currentUser.role === 'normal') return res.status(401).send('ACCESS DENIED');
         next()
     } catch (error) {
         next(error)
     }
 }