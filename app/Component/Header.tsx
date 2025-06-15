'use client'
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Check authentication status from localStorage on component mount
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, [pathname]); // Re-check when route changes

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    router.push('/');
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Track Shipment', href: '/track' },
    { name: 'Book Shipment', href: '/book' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 10, stiffness: 100 }}
      className="w-full top-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="flex-shrink-0 flex items-center"
          >
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                TransVioGlobal
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex space-x-1"
            >
              {navItems.map((item) => (
                <motion.li key={item.name} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 text-white/90 hover:text-cyan-300 font-medium transition-colors text-sm rounded-lg hover:bg-white/5 ${isActive(item.href) ? 'text-cyan-300' : ''}`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <motion.span 
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>

          {/* Auth Buttons - Desktop */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:flex items-center space-x-3 ml-6"
          >
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/dashboard"
                  className="flex items-center text-cyan-300 hover:text-cyan-200"
                >
                  <FaUserCircle className="mr-2" />
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 border border-red-400/30 text-red-300 rounded-lg hover:bg-red-500/10 transition-all font-medium text-sm hover:border-red-300/50 flex items-center"
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 border border-cyan-400/30 text-cyan-300 rounded-lg hover:bg-white/5 transition-all font-medium text-sm hover:border-cyan-300/50"
                >
                  Login
                </Link>
                <Link
                  href="/login?action=signup"
                  className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:shadow-cyan-400/20 transition-all font-medium text-sm shadow-md hover:shadow-lg"
                >
                  Sign Up
                </Link>
              </>
            )}
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-cyan-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="lg:hidden overflow-hidden"
          >
            <motion.div 
              className="px-4 pb-4 bg-white/5 backdrop-blur-xl border-t border-white/10"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="pt-2 space-y-1"
              >
                {navItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-3 rounded-lg hover:bg-white/5 transition-all font-medium ${isActive(item.href) ? 'text-cyan-300 bg-white/10' : 'text-white/90 hover:text-cyan-300'}`}
                      onClick={toggleMenu}
                    >
                      <div className="flex items-center">
                        {item.name}
                        {isActive(item.href) && (
                          <motion.span 
                            layoutId="mobileActiveIndicator"
                            className="ml-2 w-2 h-2 bg-cyan-400 rounded-full"
                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              
              {isAuthenticated ? (
                <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                 
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center px-4 py-2 border border-red-400/30 text-red-300 rounded-lg hover:bg-red-500/10 transition-all font-medium text-sm"
                  >
                    <FaSignOutAlt className="mr-2" />
                    Logout
                  </button>
                </div>
              ) : (
                <motion.div 
                  className="mt-4 pt-4 border-t border-white/10 flex space-x-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href="/login"
                    className="flex-1 px-4 py-2 text-center border border-cyan-400/30 text-cyan-300 rounded-lg hover:bg-white/5 transition-all font-medium text-sm"
                    onClick={toggleMenu}
                  >
                    Login
                  </Link>
                  <Link
                    href="/login?action=signup"
                    className="flex-1 px-4 py-2 text-center bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:shadow-cyan-400/20 transition-all font-medium text-sm shadow-md"
                    onClick={toggleMenu}
                  >
                    Sign Up
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;