import React, { useEffect } from 'react';
import { X, ExternalLink, Award, CheckCircle2, Calendar, FileText } from 'lucide-react';

export default function CertificateModal({ certificate, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0f111a] border border-pink-500/30 rounded-3xl shadow-[0_0_50px_rgba(244,63,94,0.25)] overflow-hidden z-10">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-pink-500/15 bg-[#141824]/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-pink-400">Verified Credential</span>
                <span className="inline-flex items-center text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3 mr-1" /> Authenticated
                </span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide">{certificate.title}</h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-pink-300 hover:text-white bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/20 rounded-xl transition"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Full Resolution
            </a>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display Area */}
        <div className="overflow-y-auto p-4 sm:p-6 flex flex-col items-center gap-4 bg-[#0a0c12]">
          <div className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 max-h-[60vh] flex items-center justify-center">
            <img
              src={certificate.image}
              alt={`${certificate.title} Certificate`}
              className="w-auto h-auto max-h-[58vh] max-w-full object-contain rounded-xl"
            />
          </div>

          {/* Metadata pill container */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="bg-[#121522] border border-white/5 rounded-2xl p-3.5 flex items-center gap-3">
              <FileText className="w-4 h-4 text-pink-400 shrink-0" />
              <div>
                <p className="text-[11px] text-gray-400">Issuing Organization</p>
                <p className="text-sm font-semibold text-gray-100">{certificate.issuer}</p>
              </div>
            </div>

            <div className="bg-[#121522] border border-white/5 rounded-2xl p-3.5 flex items-center gap-3">
              <Calendar className="w-4 h-4 text-purple-400 shrink-0" />
              <div>
                <p className="text-[11px] text-gray-400">Tenure / Completion</p>
                <p className="text-sm font-semibold text-gray-100">{certificate.dates || '2026'}</p>
              </div>
            </div>

            <div className="bg-[#121522] border border-white/5 rounded-2xl p-3.5 flex items-center gap-3">
              <Award className="w-4 h-4 text-cyan-400 shrink-0" />
              <div>
                <p className="text-[11px] text-gray-400">Designation Awarded</p>
                <p className="text-sm font-semibold text-gray-100">{certificate.role || 'Intern'}</p>
              </div>
            </div>
          </div>

          {certificate.docDetails && (
            <p className="text-xs text-gray-400 text-center font-mono">
              {certificate.docDetails}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
