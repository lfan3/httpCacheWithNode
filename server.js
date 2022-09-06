// Copyright 2018 Google LLC.
// SPDX-License-Identifier: Apache-2.0

const express = require('express');
const app = express();

app.use(express.static('public',{
  etag:true,
  lastModified:true,
  setHeaders: (res, path)=>{
    const hashRegExp =  new RegExp('\\.[0-9a-f]{3}\\.');
      
    if(path.endsWith('.html')){
      res.setHeader("Cache-Control","no-cache");
    }else if (hashRegExp.test(path)){
      res.setHeader("Cache-Control","max-age:31536000");
    }
  }
}));
// app.use(express.static('public'));
const listener = app.listen(4444, function() {
  console.log('Your server is running on port ' + listener.address().port);
});
