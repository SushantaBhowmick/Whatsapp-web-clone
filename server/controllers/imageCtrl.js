import mongoose from "mongoose"
import grid from 'gridfs-stream'

const url ='http://localhost:4000/api'

let gfs, gridfsBucket;
const conn = mongoose.connection

conn.once('open',()=>{
    gridfsBucket=new mongoose.mongo.GridFSBucket(conn.db,{
        bucketName:'fs'
    });
    gfs=grid(conn.db,mongoose.mongo)
    gfs.collection('fs')
})


export const uploadFile=async(req,res)=>{
    try {
        if(!req.file){
            return res.status(404).json('File not found')
        }
        const imageUrl =`${url}/file/${req.file.filename}`
        res.status(201).json({
            success:true,
            msg:"Image uploaded successfully",
            imageUrl
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
          });
    }
}

export const getImage=async(req,res)=>{
    try {
       
        const file = await gfs.files.findOne({filename:req.params.filename})
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(res);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
          });
    }
}

export const getImages=async(req,res)=>{
    try {
       
        const files = await gfs.files.find().toArray();
        if (!files || files.length === 0) {
            return res.status(404).json({
                success: false,
                msg: 'No images found',
            });
        }
        const fileNames = files.map((file) => file.filename);
        res.json({
            success: true,
            files: fileNames,
        });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
          });
    }
}
