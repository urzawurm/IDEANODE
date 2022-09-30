export default function ensureAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash(`error_msg`,`Not Authirized`);
    res.redirect(`/users/login`);
}
