import { X, Download } from 'lucide-react';
import { usePWAInstall } from '@/hooks/use-pwa-install';

export const PWAInstallBanner = () => {
  const { canInstall, handleInstall, handleDismiss, showPrompt } = usePWAInstall();

  if (!canInstall || !showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm bg-charcoal text-white rounded-lg shadow-xl p-4 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Download className="w-5 h-5 text-bronze" />
            <h3 className="font-semibold">Install Plywood Home</h3>
          </div>
          <p className="text-sm text-gray-300">
            Install our app to access it offline and get quick access from your home screen.
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
          aria-label="Dismiss"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <button
        onClick={handleInstall}
        className="w-full mt-3 bg-bronze hover:bg-amber-700 text-white font-medium py-2 px-4 rounded transition-colors"
      >
        Install App
      </button>
    </div>
  );
};
