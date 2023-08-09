import { Router } from 'express';
import passport from 'passport';
const router = Router();
const FRONTEND_URL = process.env.FRONTEND_URL;
router.get('/login', passport.authenticate('oauth2'));
router.get('/login/callback', passport.authenticate('oauth2', { failureRedirect: '/login' }), function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});
router.get('/logout', (req, res) => {
    req.logout({ keepSessionInfo: false }, (error) => {
        if (error) {
            console.log(error);
        }
    });
    res.redirect(FRONTEND_URL);
});
export default router;
