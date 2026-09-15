import { Phone, MapPin, Clock, AlertCircle, Instagram } from 'lucide-react';
import { CLINIC_PHONE_DISPLAY, CLINIC_HOURS, CLINIC_CITY, createWhatsAppLink, EMERGENCY_WA_MESSAGE } from '../data/clinicData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0A2540] text-slate-200 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Location & Hours */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#00BFFF]" />
            <span className="font-medium">{CLINIC_CITY}</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-[#00BFFF]" />
            <span className="font-medium">{CLINIC_HOURS}</span>
          </div>

          <a
            href="https://www.instagram.com/odontologia_miranda/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-300 hover:text-pink-400 transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
            <span>@odontologia_miranda</span>
          </a>
        </div>

        {/* Right: Phone & Emergency link */}
        <div className="flex items-center gap-5">
          <a
            href={`tel:${CLINIC_PHONE_DISPLAY.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 hover:text-[#00BFFF] transition-colors font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-[#00BFFF]" />
            <span>{CLINIC_PHONE_DISPLAY}</span>
          </a>

          <div className="h-3 w-px bg-white/20" />

          <a
            href={createWhatsAppLink(EMERGENCY_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-rose-400 hover:text-rose-300 font-bold uppercase tracking-wider text-[11px] group"
          >
            <AlertCircle className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
            <span className="group-hover:underline">Urgencias Dentales 24/7</span>
          </a>
        </div>

      </div>
    </div>
  );
};
