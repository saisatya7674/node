// const express = require('express');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const assetsFolderPath = path.join(__dirname, 'assets');

// app.get('/documents', (req, res) => {
//   fs.readdir(assetsFolderPath, (err, files) => {
//     if (err) {
//       console.error('Error reading assets folder:', err);
//       res.status(500).send('Internal Server Error');
//       return;
//     }

//     // Filter out directories, if any
//     const documents = files.filter(file => {
//       const filePath = path.join(assetsFolderPath, file);
//       return fs.statSync(filePath).isFile();
//     });

//     res.json(documents);
//   });
// });

// const port = 8000;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
