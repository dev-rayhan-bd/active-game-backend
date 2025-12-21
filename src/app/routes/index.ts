import { Router } from 'express';
import { AuthRoutes } from '../../modules/Auth/auth.routes';
import { UserRoutes } from '../../modules/User/user.routes';
import privacyPolicyRouter from '../../modules/PrivacyPolicy/privacyPolicy.routes';
import termsRouter from '../../modules/Terms/terms.route';
import { FaqRoutes } from '../../modules/FAQ/faq.routes';
import aboutRouter from '../../modules/about/about.route';




const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route:AuthRoutes
  },
  {
    path: '/user',
    route:UserRoutes
  },
  {
    path: '/about',
    route:aboutRouter
  },
  {
    path: '/privacy',
    route:privacyPolicyRouter
  },
  {
    path: '/terms',
    route:termsRouter
  },
  {
    path: '/faq',
    route:FaqRoutes
  },
 

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
