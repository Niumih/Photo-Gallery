const { Router } = require('express');
const uploadMiddleware = require('../middleware/MulterMiddleware');
const UploadModel = require('../models/UploadModel');

const router = Router();

router.get("/get", async (req, res) => {
    const allPhotos = await UploadModel.find().sort({ createdAt: -1 });
    res.status(200).send(allPhotos);
});

router.post("/save", uploadMiddleware.single("photo"), (req, res) => {
    const photo = req.file.filename;

    UploadModel.create({ photo })
        .then((data) => {
            console.log("Uploaded Successfully");
            console.log(data);
            res.send(data);
        })
        .catch((err) => console.log(err));
});

module.exports = router;
