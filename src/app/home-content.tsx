"use client";

import { HeroSection } from "@/components/HeroSection";
import { DramaGrid } from "@/components/DramaGrid";
import { useForYouDramas } from "@/hooks/useDramas";
import Script from "next/script";

export default function HomeContent() {
  const { data: dramas, isLoading, error } = useForYouDramas();

  return (
    <main className="min-h-screen">
      <HeroSection
        title="Untuk Kamu"
        description="Drama pilihan yang dipersonalisasi khusus untukmu. Temukan cerita seru yang sesuai selera!"
        icon="sparkles"
      />

      {/* Adsterra Popunder */}
      <Script
        src="https://pl28927026.effectivegatecpm.com/77/1e/c9/771ec912067311718ae16a11f5ff1ba0.js"
        strategy="afterInteractive"
      />

      <div className="container mx-auto px-4 pb-12">
        {error && (
          <div className="text-center py-12">
            <p className="text-destructive">Gagal memuat drama. Silakan coba lagi.</p>
          </div>
        )}

        <DramaGrid dramas={dramas} isLoading={isLoading} />
      </div>
    </main>
  );
}
