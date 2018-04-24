const path = require('path');
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
  res.send(`
    <form action="/upload" enctype="multipart/form-data" method="post">
      <input type="file" name="foo" /><br /><br />
      <input type="submit" value="Upload" />
    </form>
  `);
});

app.post('/upload', (req, res) => {
  if (!req.files) return res.status(400).send('No files were uploaded!');

  const { foo } = req.files;
  const uploadTo = `uploads/${foo.name}`;

  foo.mv(uploadTo, (err) => {
    if (err) return res.status(500).send(err);

    res.send(`File uploaded to <a href="${uploadTo}">${uploadTo}</a>`);
  });
});

app.listen(8080, () => {
  console.log('Server listening on port 8080!');
});
