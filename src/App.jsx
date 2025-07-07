import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Core Layout
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// General Pages
import Home from './pages/Home';
import About from './pages/About';
import Training from './pages/Training';
import FallTeams from './pages/FallTeams';
import SpringTeams from './pages/SpringTeams';
import WinterProgramming from './pages/WinterProgramming';
import Tournaments from './pages/Tournaments';
import TryoutsClosed from './pages/TryoutsClosed';
import Sponsorship from './pages/Sponsorship';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

// Auth Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import TryoutRegister from './pages/TryoutRegister';
import AdminDashboard from './pages/AdminDashboard';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import CheckEmail from './pages/CheckEmail';
import EmailVerificationNotice from './pages/EmailVerificationNotice';
import EmailVerificationSuccess from './pages/EmailVerificationSuccess';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentCancelled from './pages/PaymentCancelled';

// Legal stuff
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Protected Route Wrapper
import ProtectedRoute from './components/ProtectedRoute';

// Fall Team Subpages
import Fall13UBoys from './pages/FallTeams/13u-boys';
import Fall15UBoys from './pages/FallTeams/15u-boys';
import Fall16UBoys from './pages/FallTeams/16u-boys';
import Fall17UBoys from './pages/FallTeams/17u-boys';
import Fall18UBoys from './pages/FallTeams/18u-boys';
import Fall15UGirls from './pages/FallTeams/15u-girls';
import Fall16UGirls from './pages/FallTeams/17u-girls';

// Spring Team Subpages
import Spring13UBoys from './pages/SpringTeams/13u-boys';
import Spring15UBoys from './pages/SpringTeams/15u-boys';
import Spring16UBoys from './pages/SpringTeams/16u-boys';
import Spring17UBoys from './pages/SpringTeams/17u-boys';
import Spring18UBoys from './pages/SpringTeams/18u-boys';
import Spring15UGirls from './pages/SpringTeams/15u-girls';
import Spring16UGirls from './pages/SpringTeams/17u-girls';

function EmailVerificationNoticeWrapper() {
  const location = useLocation();
  const email = location.state?.email;

  return email ? (
    <EmailVerificationNotice email={email} />
  ) : (
    <p>Missing email. Please <a href="/register">register again</a>.</p>
  );
}

function AppWrapper() {
  const location = useLocation();
  const path = location.pathname;

  const shouldShowFooter =
    path.startsWith('/about') ||
    path.startsWith('/FallTeams') ||
    path.startsWith('/SpringTeams') ||
    path.startsWith('/WinterProgramming') ||
    path.startsWith('/Training') ||
    path.startsWith('/Tournaments') ||
    path.startsWith('/sponsorship') ||
    path.startsWith('/testimonials') ||
    path.startsWith('/contact');

  return (
    <>
      <NavBar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Training" element={<Training />} />
          <Route path="/FallTeams" element={<FallTeams />} />
          <Route path="/SpringTeams" element={<SpringTeams />} />
          <Route path="/WinterProgramming" element={<WinterProgramming />} />
          <Route path="/Tournaments" element={<Tournaments />} />
          <Route path="/TryoutsClosed" element={<TryoutsClosed />} />

          {/* Fall Team Subpages */}
          <Route path="/FallTeams/13u-boys" element={<Fall13UBoys />} />
          <Route path="/FallTeams/15u-boys" element={<Fall15UBoys />} />
          <Route path="/FallTeams/16u-boys" element={<Fall16UBoys />} />
          <Route path="/FallTeams/17u-boys" element={<Fall17UBoys />} />
          <Route path="/FallTeams/18u-boys" element={<Fall18UBoys />} />
          <Route path="/FallTeams/15u-girls" element={<Fall15UGirls />} />
          <Route path="/FallTeams/16u-girls" element={<Fall16UGirls />} />

          {/* Spring Team Subpages */}
          <Route path="/SpringTeams/13u-boys" element={<Spring13UBoys />} />
          <Route path="/SpringTeams/15u-boys" element={<Spring15UBoys />} />
          <Route path="/SpringTeams/16u-boys" element={<Spring16UBoys />} />
          <Route path="/SpringTeams/17u-boys" element={<Spring17UBoys />} />
          <Route path="/SpringTeams/18u-boys" element={<Spring18UBoys />} />
          <Route path="/SpringTeams/15u-girls" element={<Spring15UGirls />} />
          <Route path="/SpringTeams/16u-girls" element={<Spring16UGirls />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/check-email" element={<CheckEmail />} />
          <Route path="/verify-notice" element={<EmailVerificationNoticeWrapper />} />
          <Route path="/email-confirmed" element={<EmailVerificationSuccess />} />

          {/* Legal */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* Payment */}
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/cancelled" element={<PaymentCancelled />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tryout"
            element={
              <ProtectedRoute>
                <TryoutRegister />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AnimatePresence>

      {shouldShowFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
