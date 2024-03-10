require("dotenv").config()
const jwt =require("jsonwebtoken")
const response=require("../commons/response")

module.exports=async(req,res,next)=>{
    let token = "";
    if (!req.headers.authorization) {
      return res.status(401).json(response(401,"Unauthorized"));
    }
    try{
      if (req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
      } else {
        token = req.headers.authorization;
      }
      const decoded = await jwt.verify(token, process.env.SECRET_KEY);
      res.local = decoded;
      next();
    }catch(e){
      res.status(401).json(response(401,"Unauthorized"));
    }
}