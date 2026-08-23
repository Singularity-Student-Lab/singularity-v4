"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";

type MobileNavigator = Navigator & {
  userAgentData?: { mobile?: boolean };
};

function isPhone() {
  const navigatorWithHints = navigator as MobileNavigator;

  if (navigatorWithHints.userAgentData?.mobile) return true;

  return /Android.*Mobile|iPhone|iPod|IEMobile|Opera Mini|Mobile/i.test(
    navigator.userAgent,
  );
}

const subscribeToPhoneDetection = () => () => {};

export default function MobileDeviceGate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const phoneDetected = useSyncExternalStore(
    subscribeToPhoneDetection,
    isPhone,
    () => false,
  );

  return (
    <div className={phoneDetected ? "device-gate phone-detected" : "device-gate"}>
      <div className="desktop-experience" aria-hidden={phoneDetected}>
        {children}
      </div>

      <main className="device-compatibility-notice" role="alert">
        <Image
          className="device-compatibility-logo"
          src="/images/singularity_logo.webp"
          alt="Singularity"
          width={44}
          height={44}
          priority
        />
        <div className="device-compatibility-mark" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="16" y="8" width="32" height="48" rx="5" stroke="currentColor" strokeWidth="3" />
            <path d="M26 16H38M29 48H35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M11 11L53 53" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
        <p className="device-compatibility-eyebrow">SINGULARITY</p>
        <h1>Our mobile experience is under construction.</h1>
        <p>
          We’re currently building Singularity for mobile. Until then, please use a desktop or laptop browser for the full experience.
        </p>
      </main>
    </div>
  );
}
