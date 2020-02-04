const list = async (req,res) => {
    const photos = await Photo.find({}).exec();
        res.json(photos);
}

const createPhoto = async  (req, res) => {
    const ph = new Photo({
        url: req.body.url,
        sort: req.body.sort
    });
    await ph.save();
        res.json({ message:"photo created" });
}
const deletePhoto = async (req, res) => {
    await Photo.deleteOne({_id: req.params.photoId}).exec();
          res.json({ message:"photo deleted" });


}
const getOne = async (req, res) => {
    const photo = await Photo.findById(req.params.photoId).exec();
         return res.json(photo);

}

const updatePhoto = async (req, res ) => {
    await Photo.updateOne({ _id: req.params.photoId } , {
        url:req.body.url,
        sort:req.body.sort
        }).exec();
        res.json({ message: "photo updated" });

}


module.exports = {
    list,
    createPhoto,
    deletePhoto,
    getOne,
    updatePhoto,

}
