export default function ensureAuthenticated(req,res,next){
  if(req.isAuthenticated() && res.locals.user.isAdmin){
      return next();
  }
  req.flash(`error_msg`,`Not Authirized`);
  res.redirect('/');
}
