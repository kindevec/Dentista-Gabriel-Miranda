import { DesktopView } from './desktop/DesktopView';
import { MobileView } from './mobile/MobileView';
import { DentalMaskDefinitions } from './components/DentalMaskDefinitions';
import { useIsMobile } from './hooks/useIsMobile';

export default function App() {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Centralized SVG Mask Definitions */}
      <DentalMaskDefinitions />

      {/* Renderizado Exclusivo y Desacoplado (Evita colisiones de IDs y asegura navegación móvil instantánea) */}
      {isMobile ? <MobileView /> : <DesktopView />}
    </>
  );
}
