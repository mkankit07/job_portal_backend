const express = require('express');
const authenticate = require("../middleware/authentication")
const userRoutes=require("../modules/users/user-routes")
const jobRoutes=require("../modules/jobs/job-routes")
const bookMarkRoutes=require("../modules/bookmarks/bookmark-routes")
const mediaRoutes=require("../modules/media/media-routes")
const applyJobRoutes=require("../modules/applies-job/apply-job-routes")

const mainRoutes=express.Router()

mainRoutes.use("/user",userRoutes)
mainRoutes.use("/job",authenticate,jobRoutes)
mainRoutes.use("/bookmark",authenticate,bookMarkRoutes)
mainRoutes.use("/media",authenticate,mediaRoutes)
mainRoutes.use("/apply-job",authenticate,applyJobRoutes)
module.exports=mainRoutes