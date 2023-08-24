// error handaller middleware has to be in the end of all routes
const notFoundHandaler =(_req,_res,next)=>{
  const error = new Error(' Resource Not Found');
  error.status = 404;
  next(error)
}

const errorHandaler = (error,_req,res,_next)=>{
  if(error.status){
    return res.status(error.status).json({
      message: error.message
    })
  }
  res.status(500).json({message: 'Something Went Wrong',})
};

 module.exports = {
  notFoundHandaler,errorHandaler
 }