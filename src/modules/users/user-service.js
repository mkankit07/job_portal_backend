const userQueries=require("./user-queries")
const response=require("../../commons/response")
const bcrypt=require("bcrypt")
const {generateToken}= require("../../utils/helper")


const registerUser=async(data)=>{
    const existUser=await userQueries.findUserByEmail(data.email)
    if(existUser){
        return  response(409, "User already exists")
    }
    data.password=bcrypt.hashSync(data.password,10)
    await userQueries.saveUser(data)
    return response(201,"user created successfully")
}

const loginUser=async(data)=>{
    const user=await userQueries.findUserByEmail(data.email)
    if(!user){
        return response(203,"Invalid email or password")
    }
    const isPassword=bcrypt.compareSync(data.password,user.password)
    if(isPassword){
        const {_id,name,email}=user._doc||user
        token=generateToken({id:_id,name})
        return response(200,"login successful",{token,id:_id,name,email})
    }
    return response(203,"Invalid email or password")
}

const forgetPassword=async(data)=>{
    const user=await userQueries.findUserByEmail(data.email)
    if(!user){
        return response(404,"user not found")
    }
    const password=bcrypt.hashSync(data.password,10)
    await userQueries.findOneAndUpdate({email:data.email},{password})
    return response(200,"password updated successfully")
}

const userService= {
    registerUser,
    loginUser,
    forgetPassword
}

module.exports=userService