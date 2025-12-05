import React, { useEffect, useRef, useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            ref={modalRef}
            className="relative w-full max-w-lg overflow-hidden bg-brand-gray border border-gray-700 rounded-2xl shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl font-display font-bold text-brand-yellow mb-2">Register Now</h2>
                  <p className="text-gray-300 mb-6 text-sm">Join India's fastest growing trading community.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">First Name</label>
                        <input required type="text" className="w-full bg-brand-dark border border-gray-700 rounded-lg p-3 text-white focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all" placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">Last Name</label>
                        <input required type="text" className="w-full bg-brand-dark border border-gray-700 rounded-lg p-3 text-white focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all" placeholder="Doe" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1">Email Address</label>
                      <input required type="email" className="w-full bg-brand-dark border border-gray-700 rounded-lg p-3 text-white focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all" placeholder="john@example.com" />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1">Mobile / WhatsApp</label>
                      <input required type="tel" className="w-full bg-brand-dark border border-gray-700 rounded-lg p-3 text-white focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all" placeholder="+91 98765 43210" />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1">Location</label>
                      <input required type="text" className="w-full bg-brand-dark border border-gray-700 rounded-lg p-3 text-white focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all" placeholder="Hyderabad, India" />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-yellow text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition-colors mt-4"
                    >
                      SUBMIT
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-500"
                  >
                    <CheckCircle size={32} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Registration Successful!</h3>
                  <p className="text-gray-400">Our team will contact you shortly.</p>
                  <button
                    onClick={handleClose}
                    className="mt-6 text-brand-yellow hover:underline"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
