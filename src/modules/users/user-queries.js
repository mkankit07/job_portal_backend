const userModel=require("./user-model")

const findUserByEmail=async(email)=>{
    return userModel.findOne({email})
}

const saveUser = async(payload)=>{
    return await userModel.create(payload)
}

const findOneAndUpdate=async(options,payload)=>{
    return await userModel.findOneAndUpdate({...options ,...payload});
}

const userQueries={
    findUserByEmail,
    saveUser,
    findOneAndUpdate
}
module.exports =userQueries