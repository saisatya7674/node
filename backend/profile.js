
const { error } = require("console");
const express = require("express");
const fileUpload = require("express-fileupload");
const expressFileUpload = require('express-fileupload')
const path = require('path');
const fs = require('fs');

const assetsFolder = path.join(__dirname,'assets')

const router = express.Router();

router.use(fileUpload())

// Upload file
router.post('/file/upload', (req,res) =>{
    const { avatar } = req.files;
   try {
    avatar.mv(path.join(assetsFolder,avatar.name));
    res.status(200).json({ message: 'ok' })
   } catch (e) {
        res.status(500).json({message: e.message})
   }
});

// Get list of documents
router.get('/file/list', (req, res) => {
  fs.readdir(assetsFolder, (err, files) => {
    if (err) {
      console.error('Error reading assets folder:', err);
      res.status(500).json({ message: 'Internal Server Error' });
      return;
    }

    // Filter out directories, if any
    const documents = files.filter(file => {
      const filePath = path.join(assetsFolder, file);
      return fs.statSync(filePath).isFile();
    });

    res.json(documents);
  });
});

module.exports = router;
