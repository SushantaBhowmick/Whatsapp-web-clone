

export const uploadFile=async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
          });
    }
}