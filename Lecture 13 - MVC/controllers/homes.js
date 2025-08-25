exports.getAddHome = (req, res, next)=>{
  res.render('addHome', {pageTitle : 'Add Home', currentPage : 'addHome'})
    // res.sendFile(path.join(rootDir, 'views', 'addHome.html'))
}