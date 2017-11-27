app.get('/loadMore', function(req,res){
    var news = [];
    var len = 5;
    var idx = req.query.index;
    for (var i=0; i<len; i++) {
      news.push('内容'+(parseInt(idx)+i));
    }
  
      res.send({
        status: 0,
        data: news
      });
  });