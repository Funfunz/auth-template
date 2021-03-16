import { Router } from 'express'
import passport from 'passport'

const router = Router()

const FRONTEND_URL = process.env.FRONTEND_URL as string

router.get('/login',
  (req, res, next) => {
    passport.authenticate('azuread-openidconnect', { 
      failureRedirect: req.url.split('?')[0]
    })(req, res, next)
  },
  (req, res) => {
    res.redirect(`${FRONTEND_URL}?loginError`)
  }
)
 
router.post('/callback',
  (req, res, next) => {
    passport.authenticate('azuread-openidconnect', { 
      failureRedirect: req.url.split('/callback')[0] + '/login'
    })(req, res, next)
  },
  (req, res, next) => {
    return req.session?.regenerate((err: any) => {
      if (err) {
        return next(err)
      } else if (req.session) {
        req.session.passport = req.session.passport
        req.session?.save(next)
      }
    })
  },
  (req, res) => { 
    res.redirect(FRONTEND_URL)
  }
)
 
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect(FRONTEND_URL)
})

export default router
