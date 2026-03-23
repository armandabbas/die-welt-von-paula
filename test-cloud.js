const fs = require('fs');

async function test() {
  const file = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAACklEQVR4nGP6zwAAyQCdG2wDjgAAAABJRU5ErkJggg==', 'base64');
  const fd = new FormData();
  fd.append('file', new Blob([file]));
  fd.append('upload_preset', 'paulas-welt');

  const r = await fetch('https://api.cloudinary.com/v1_1/dqqfhnesy/image/upload', {
    method: 'POST',
    body: fd
  });

  const j = await r.json();
  console.log(j);
}

test();
