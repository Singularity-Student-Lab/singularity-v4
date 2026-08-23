"use client";

import { useEffect, useRef, useState } from "react";

const BODY_HTML = `
  <!-- Atmospheric Scanlines & Film Grain Overlay -->
  <div class="tv-dots"></div>

  <!-- Hamburger Mobile Close -->
  <div data-w-id="91953398-20e1-8cca-2bd1-effc568176e2" class="fixed-close-button">
    <div data-is-ix2-target="1" class="lottie-x" data-w-id="91953398-20e1-8cca-2bd1-effc568176e3"
      data-animation-type="lottie" data-src="/js/hamburger-20animation.json" data-loop="1" data-direction="1"
      data-autoplay="0" data-renderer="svg" data-default-duration="0" data-duration="0" data-loading="eager"
      data-ix2-initial-state="25"></div>
  </div>

  <!-- Mobile Menu Drawer -->
  <div class="menu-wrapper">
    <div class="navigation-wrapper">
      <div class="navigation-content">
        <div class="menu-item _01"><a href="/" class="button-with-line w-inline-block">
            <div class="button-text-wrapper">
              <div class="button-text">Home</div>
              <div class="button-text">Home</div>
            </div>
            <div class="button-line-first">
              <div class="button-line-overlay"></div>
            </div>
          </a></div>
        <div class="menu-item _02"><a href="/about" class="button-with-line w-inline-block">
            <div class="button-text-wrapper">
              <div class="button-text">About</div>
              <div class="button-text">About</div>
            </div>
            <div class="button-line-first">
              <div class="button-line-overlay"></div>
            </div>
          </a></div>
        <div class="menu-item _03"><a href="/labs/chitra-darshan" aria-current="page" class="button-with-line w-inline-block w--current">
            <div class="button-text-wrapper">
              <div class="button-text">Labs</div>
              <div class="button-text">Labs</div>
            </div>
            <div class="button-line-first">
              <div class="button-line-overlay"></div>
            </div>
          </a></div>
        <div class="menu-item _05"><a href="/contact/contact-1" class="button-with-line w-inline-block">
            <div class="button-text-wrapper">
              <div class="button-text">Contact</div>
              <div class="button-text">Contact</div>
            </div>
            <div class="button-line-first">
              <div class="button-line-overlay"></div>
            </div>
          </a></div>
        <div class="margin-20">
          <div class="social-menu-wrapper">
            <div class="social-content for-footer">
              <a href="https://www.instagram.com/thesingularity.srmap" target="_blank" rel="noopener noreferrer"
                class="social-wrapper w-inline-block" title="Instagram">
                <img width="18" loading="lazy" alt="Instagram" src="/images/instagram-icon.webp" class="social-icon" />
                <img width="18" loading="lazy" alt="Instagram" src="/images/instagram-icon.webp" class="social-icon" />
              </a>
              <a href="https://www.linkedin.com/company/singularity-student-lab-srmap/"
                target="_blank" rel="noopener noreferrer" class="social-wrapper w-inline-block" title="LinkedIn">
                <img width="18" loading="lazy" alt="LinkedIn" src="/images/linkedin-icon.svg" class="social-icon second" />
                <img width="18" loading="lazy" alt="LinkedIn" src="/images/linkedin-icon.svg" class="social-icon second" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="Top" class="main-hero">
    <!-- Sticky Header / Navbar -->
    <div data-w-id="62bf61a9-91ad-d080-59a9-9d0bda0e906f" class="sticky-element">
      <div data-w-id="00cdae18-38ec-1b3e-ec88-656f2336553d" data-animation="default" data-collapse="medium"
        data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
        <a href="/" id="w-node-_00cdae18-38ec-1b3e-ec88-656f2336553e-2336553d" class="logo-first w-inline-block">
          <img src="/images/singularity_logo.webp" alt="Singularity" class="nav-brand-icon" />
          <p class="top-text logo">SINGULARITY</p>
        </a>

        <div id="w-node-_00cdae18-38ec-1b3e-ec88-656f23365540-2336553d" class="make-grid hide-mobile">
          <nav role="navigation" class="nav-menu first w-nav-menu">
            <a href="/about" data-wf--button-arrow--variant="dark" class="button-link w-inline-block">
              <div class="social-circle-small"><img width="256" loading="lazy" alt="" src="/images/circle.webp" class="nav-arrow-move" /></div>
              <div class="navigation-text-main" style="text-transform: uppercase;">ABOUT US</div>
            </a>
            <a href="/join" data-wf--button-arrow--variant="dark" class="button-link w-inline-block">
              <div class="social-circle-small"><img width="256" loading="lazy" alt="" src="/images/circle.webp" class="nav-arrow-move" /></div>
              <div class="navigation-text-main" style="text-transform: uppercase;">JOIN</div>
            </a>
          </nav>
        </div>

        <div id="w-node-_00cdae18-38ec-1b3e-ec88-656f23365547-2336553d" class="last-part">
          <div class="menu-button w-nav-button"><div class="w-icon-nav-menu"></div></div>
        </div>
      </div>
    </div>

    <!-- 1. LAB 03 HERO: SPATIAL COMPUTING & XR CANVAS -->
    <div id="Hero" class="spatial-hero-wrapper">
      
      <!-- Interactive WebGL Liquid Shader Background Canvas -->
      <div data-us-project-src="singularityProjectData" class="absolute-effect hero-webgl-canvas"></div>

      <!-- Accent Color Ambient Spatial Glow (#EC4899) -->
      <div class="spatial-ambient-glow"></div>

      <!-- Spatial HUD Markers -->
      <div class="spatial-hud-marker-tl">+ SPATIAL HUD // FOV 110&deg;</div>
      <div class="spatial-hud-marker-tr">[ 03 / 07 &bull; XR CANVAS ]</div>

      <!-- Main Content -->
      <div class="spatial-content-container">
        
        <!-- Levitating Spatial Emblem -->
        <div class="spatial-emblem-cluster">
          <img
            src="https://res.cloudinary.com/djtemmctt/image/upload/v1771104005/singularity_new_logo_knedxr.png"
            alt="Chitra Darshan Lab"
            class="spatial-floating-emblem"
          />
        </div>

        <!-- Overline Tag -->
        <div class="spatial-tag-bar">
          <span class="spatial-tag-index">03 / 07</span>
          <span class="spatial-tag-bullet">&bull;</span>
          <span class="spatial-tag-field">GAME DEVELOPMENT &bull; AR &bull; VR &bull; MIXED REALITY</span>
        </div>

        <!-- Lab Main Title -->
        <h1 class="about-title effect split-reveal spatial-main-heading">
          Chitra Darshan Lab
        </h1>

        <!-- Meaning & Vision Statement -->
        <div class="spatial-vision-wrap">
          <p class="spatial-vision-text">
            <strong>Chitra Darshan Lab</strong>, meaning <em>'vision through imagery'</em> in Sanskrit, is the AR, VR, MR, and Game Development division of the Singularity Student Research Lab at SRM University AP. It's where imagination meets immersion — students craft virtual worlds, interactive experiences, and mixed reality applications that blur the line between the real and the digital.
          </p>
        </div>

      </div>

      <!-- Bottom Status Bar -->
      <div class="container-bottom hero-bottom-bar">
        <div class="bottom-grid _2 hero-bottom-grid">
          <div>
            <p class="top-text big">DOMAIN <span class="lighter-color" style="color: #F472B6;">/ SPATIAL COMPUTING &amp; XR</span></p>
          </div>
          <div class="hide-mobile">
            <p class="top-text big hero-domain-tags">UNREAL ENGINE &bull; UNITY &bull; ARKIT &bull; SHADER ARCHITECTURE</p>
          </div>
          <div class="hero-scroll-explore">
            <p class="top-text"><span class="_w-logo arrow">W</span> &nbsp;Spatial Charter</p>
          </div>
        </div>
      </div>

    </div>

    <!-- MAIN CONTENT -->
    <div class="section-content" style="position: relative;">

      <!-- 2. MISSION & IMMERSIVE PILLARS -->
      <section id="Mission" class="editorial-section">
        <div class="editorial-container">
          
          <div class="editorial-split-layout" data-scroll-fade>
            <!-- Left Header -->
            <div class="editorial-left-col">
              <p class="section-top-label" style="color: #F472B6;">01 // IMMERSIVE CHARTER</p>
              <h2 class="about-title effect split-reveal section-title-heading">
                Spatial<br class="hide-mobile-break" />Vision
              </h2>
            </div>

            <!-- Right Content -->
            <div class="editorial-right-col">
              
              <div class="editorial-statement-block">
                <div class="statement-overline">
                  <span class="statement-index">03</span>
                  <span class="statement-tag" style="color: #F472B6;">EXPANDED REALITY</span>
                </div>
                <h3 class="editorial-quote-text">
                  &ldquo;To revolutionize interactive entertainment and spatial computing through cutting-edge research in game mechanics, immersive technologies, and human-computer interaction. We are committed to pushing the boundaries of creativity and technology, building experiences that educate, entertain, and inspire the next generation of digital creators.&rdquo;
                </h3>
              </div>

              <!-- 3 Spatial Pillars (Open Columns, No Boxes) -->
              <div class="spatial-pillars-grid">
                <div class="spatial-pillar-col">
                  <span class="spatial-pillar-num">01. INTERACTION</span>
                  <h4 class="spatial-pillar-title">Spatial Computing &amp; XR</h4>
                  <p class="spatial-pillar-desc">Engineering mixed reality spatial interfaces, hand-tracking kinematics, and haptic feedback systems.</p>
                </div>
                <div class="spatial-pillar-col">
                  <span class="spatial-pillar-num">02. WORLDBUILDING</span>
                  <h4 class="spatial-pillar-title">Next-Gen Realtime 3D</h4>
                  <p class="spatial-pillar-desc">Pioneering real-time global illumination, procedural shaders, and complex game physics simulations.</p>
                </div>
                <div class="spatial-pillar-col">
                  <span class="spatial-pillar-num">03. IMMERSION</span>
                  <h4 class="spatial-pillar-title">Interactive Storytelling</h4>
                  <p class="spatial-pillar-desc">Creating meaningful gamified learning simulations and interactive virtual reality narratives.</p>
                </div>
              </div>

            </div>
          </div>

          <!-- Metric Numbers Row -->
          <div class="editorial-metrics-row" data-scroll-fade>
            <div class="metric-cell">
              <div class="metric-big-num" style="color: #F472B6;">03</div>
              <p class="metric-desc">Lab Identifier</p>
            </div>
            <div class="metric-cell">
              <div class="metric-big-num">02</div>
              <p class="metric-desc">Executives</p>
            </div>
            <div class="metric-cell">
              <div class="metric-big-num">XR</div>
              <p class="metric-desc">Core Medium</p>
            </div>
            <div class="metric-cell">
              <div class="metric-big-num">100%</div>
              <p class="metric-desc">Student Built</p>
            </div>
          </div>

        </div>
      </section>

      <!-- 3. TEAM SECTION (Executives) -->
      <section id="Team" class="editorial-section">
        <div class="editorial-container">
          
          <div class="editorial-split-layout" data-scroll-fade style="margin-bottom: 4rem;">
            <!-- Left Header -->
            <div class="editorial-left-col">
              <p class="section-top-label" style="color: #F472B6;">02 // LAB TEAM</p>
              <h2 class="about-title effect split-reveal section-title-heading">
                Lab<br class="hide-mobile-break" />Team
              </h2>
            </div>

            <!-- Right Content: 2 Studio Leads -->
            <div class="editorial-right-col">
              
              <div class="editorial-leader-row">
                <p class="leader-category-tag" style="color: #F472B6;">LAB EXECUTIVES (2)</p>
                
                <div class="executives-grid">
                  <!-- Lead 1: Pranav Sikka -->
                  <div class="executive-card">
                    <img
                      src="https://res.cloudinary.com/dtlder1hw/image/upload/v1787073655/team/pranav.png"
                      alt="Pranav Sikka"
                      class="executive-avatar"
                      style="border-color: rgba(244, 114, 182, 0.4);"
                      loading="lazy"
                    />
                    <div class="executive-info">
                      <h3 class="executive-name">Pranav Sikka</h3>
                      <p class="executive-role" style="color: #F9A8D4;">Executive</p>
                      <div class="executive-links">
                        <a href="https://github.com/PRANAV-SIKKA" target="_blank" rel="noopener noreferrer" class="editorial-dot-link">
                          <div class="social-circle-small" style="background: #F472B6;"></div>
                          <span>GitHub &nearr;</span>
                        </a>
                        <a href="https://www.linkedin.com/in/pranav-sikka-2736b4287" target="_blank" rel="noopener noreferrer" class="editorial-dot-link">
                          <div class="social-circle-small" style="background: #F472B6;"></div>
                          <span>LinkedIn &nearr;</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <!-- Lead 2: Shambo Chakraborty -->
                  <div class="executive-card">
                    <img
                      src="https://res.cloudinary.com/dtlder1hw/image/upload/v1787073656/team/shambo.png"
                      alt="Shambo Chakraborty"
                      class="executive-avatar"
                      style="border-color: rgba(244, 114, 182, 0.4);"
                      loading="lazy"
                    />
                    <div class="executive-info">
                      <h3 class="executive-name">Shambo Chakraborty</h3>
                      <p class="executive-role" style="color: #F9A8D4;">Executive</p>
                      <div class="executive-links">
                        <a href="https://github.com/Shamb0" target="_blank" rel="noopener noreferrer" class="editorial-dot-link">
                          <div class="social-circle-small" style="background: #F472B6;"></div>
                          <span>GitHub &nearr;</span>
                        </a>
                        <a href="https://www.linkedin.com/in/shamb0" target="_blank" rel="noopener noreferrer" class="editorial-dot-link">
                          <div class="social-circle-small" style="background: #F472B6;"></div>
                          <span>LinkedIn &nearr;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

    </div>

    <!-- 4. FOOTER -->
    <div class="footer footer-responsive">
      <div class="container footer-container-responsive">
        <div class="footer-grid-responsive">
          <div class="footer-left">
            <p class="top-text footer-col-label">CONTACT US</p>
            <div class="margin-20">
              <h2 class="about-title effect small footer-address-text">
                Singularity Lab<br />
                SR - 209, Academic Block, SRM AP<br />
                Amaravati, AP 522240
              </h2>
            </div>
            <div class="margin-20">
              <a href="tel:+918632343000" class="footer-link-plain">
                <h2 class="about-title effect small footer-contact-link">+91 863 234 3000</h2>
              </a>
            </div>
            <div class="margin-20">
              <a href="mailto:singularitylab@srmap.edu.in" class="footer-link-plain">
                <h2 class="about-title effect small footer-contact-link">singularitylab@srmap.edu.in</h2>
              </a>
            </div>
          </div>

          <div class="footer-left">
            <p class="top-text footer-col-label">QUICK LINKS</p>
            <div class="margin-20 flx-ft footer-links-stack">
              <a href="/" class="footer-quick-link">
                <span class="footer-quick-dot"></span>
                <span class="footer-quick-text">Home</span>
              </a>
              <a href="/about" class="footer-quick-link">
                <span class="footer-quick-dot"></span>
                <span class="footer-quick-text">About Lab</span>
              </a>
              <a href="/join" class="footer-quick-link">
                <span class="footer-quick-dot"></span>
                <span class="footer-quick-text">Join Us</span>
              </a>
              <a href="/#labs" class="footer-quick-link">
                <span class="footer-quick-dot"></span>
                <span class="footer-quick-text">Our Labs</span>
              </a>
            </div>
          </div>

          <div class="footer-left">
            <p class="top-text footer-col-label">SOCIAL</p>
            <div class="margin-20">
              <div class="social-menu-wrapper footer-socials-row">
                <a href="https://www.instagram.com/thesingularity.srmap" target="_blank" rel="noopener noreferrer" class="social-wrapper w-inline-block footer-social-btn" title="Instagram">
                  <img width="22" loading="lazy" alt="Instagram" src="/images/instagram-icon.webp" class="social-icon" />
                </a>
                <a href="https://www.linkedin.com/company/singularity-student-lab-srmap/" target="_blank" rel="noopener noreferrer" class="social-wrapper w-inline-block footer-social-btn" title="LinkedIn">
                  <img width="22" loading="lazy" alt="LinkedIn" src="/images/linkedin-icon.svg" class="social-icon" />
                </a>
              </div>
            </div>
            <div class="margin-40 footer-copy-wrap">
              <p class="p-footer footer-copy-text">© 2026 Singularity Student Lab<br/>SRM University-AP</p>
            </div>
          </div>
        </div>

        <div class="singularity-footer-wrap">
          <h1 class="singularity-footer-wordmark">SINGULARITY</h1>
        </div>
      </div>
    </div>
  </div>
`;

const HEAD_STYLES = `
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    max-width: 100%;
    overflow-x: hidden;
  }

  body {
    background-color: #000000;
    color: #ffffff;
  }

  /* =========================================================
     LAB 03 // CHITRA DARSHAN: SPATIAL XR VIEWPORT CANVAS
     ========================================================= */
  ::selection {
    background: rgba(236, 72, 153, 0.4);
    color: #ffffff;
  }

  .tv-dots {
    z-index: 99;
    opacity: .04;
    pointer-events: none;
    background-image: url("/images/dots.gif");
    background-position: 50%;
    background-size: auto;
    width: 100%;
    position: fixed;
    inset: 0%;
  }

  /* HERO SECTION (SPATIAL XR CANVAS) */
  .spatial-hero-wrapper {
    position: relative;
    min-height: 90vh;
    min-height: 90dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: #000000;
    padding: clamp(90px, 14vh, 140px) clamp(1rem, 3vw, 2.5rem) 2rem clamp(1rem, 3vw, 2.5rem);
  }

  .hero-webgl-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
  }

  .spatial-ambient-glow {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: clamp(340px, 50vw, 680px);
    height: clamp(340px, 50vw, 680px);
    background: radial-gradient(circle, rgba(236, 72, 153, 0.28) 0%, rgba(236, 72, 153, 0.05) 50%, transparent 75%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 2;
    filter: blur(25px);
    animation: spatialDepthPulse 6s ease-in-out infinite alternate;
  }

  @keyframes spatialDepthPulse {
    0% { transform: translate(-50%, -50%) scale(0.85); opacity: 0.6; }
    100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.95; }
  }

  .spatial-hud-marker-tl, .spatial-hud-marker-tr {
    position: absolute;
    font-family: var(--font--second-font);
    font-size: 0.72rem;
    letter-spacing: 2px;
    color: rgba(236, 72, 153, 0.55);
    z-index: 6;
  }
  .spatial-hud-marker-tl { top: clamp(85px, 12vh, 110px); left: clamp(1.2rem, 3vw, 3rem); }
  .spatial-hud-marker-tr { top: clamp(85px, 12vh, 110px); right: clamp(1.2rem, 3vw, 3rem); }

  .spatial-content-container {
    position: relative;
    z-index: 10;
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .spatial-emblem-cluster {
    position: relative;
    margin-bottom: 1.5rem;
  }

  .spatial-floating-emblem {
    width: clamp(85px, 11vw, 125px);
    height: auto;
    filter: drop-shadow(0 0 30px rgba(236, 72, 153, 0.6)) drop-shadow(0 15px 40px rgba(0, 0, 0, 0.95));
    animation: spatialTiltFloat 7s ease-in-out infinite alternate;
  }

  @keyframes spatialTiltFloat {
    0% { transform: perspective(600px) rotateY(-8deg) translateY(0px); }
    100% { transform: perspective(600px) rotateY(8deg) translateY(-14px); }
  }

  .spatial-tag-bar {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    font-family: var(--font--second-font);
    font-size: 0.82rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }

  .spatial-tag-index {
    color: #F472B6;
    font-weight: 700;
  }

  .spatial-tag-bullet {
    color: rgba(255, 255, 255, 0.3);
  }

  .spatial-tag-field {
    font-family: var(--font-body);
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.8rem;
    font-weight: 400;
  }

  /* Word Spacing and Typography */
  .split-reveal {
    word-spacing: normal;
  }
  .split-reveal .split-word,
  .split-reveal > div {
    display: inline-block !important;
    margin-right: 0.16em !important;
  }
  .split-reveal .split-word:last-child,
  .split-reveal > div:last-child {
    margin-right: 0 !important;
  }

  .spatial-main-heading {
    font-family: var(--font-heading);
    font-size: clamp(2rem, 4.8vw, 4.4rem);
    font-weight: 700;
    line-height: 1.05;
    text-transform: uppercase;
    letter-spacing: -0.01em !important;
    margin: 0 0 1.5rem 0;
    color: #ffffff;
    word-break: keep-all;
    overflow-wrap: normal;
    white-space: normal;
    text-shadow: 0 0 40px rgba(236, 72, 153, 0.25);
  }

  .spatial-vision-wrap {
    max-width: 740px;
    border-top: 1px solid rgba(236, 72, 153, 0.3);
    border-bottom: 1px solid rgba(236, 72, 153, 0.3);
    padding: clamp(1.2rem, 2.5vw, 1.8rem) 1rem;
    margin: 0 auto;
  }

  .spatial-vision-text {
    font-family: var(--font-body);
    font-size: clamp(0.95rem, 1.25vw, 1.15rem);
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.88);
    font-weight: 300;
    margin: 0;
  }

  .hero-bottom-bar {
    z-index: 10;
    position: relative;
    margin-top: 3rem;
    padding-bottom: 0.5rem;
    width: 100%;
  }

  .hero-bottom-grid {
    max-width: 1400px;
    margin: 0 auto;
  }

  .hero-domain-tags {
    opacity: 0.7;
    font-size: clamp(0.75rem, 0.9vw, 0.85rem);
    letter-spacing: 2px;
  }

  .hero-scroll-explore {
    text-align: right;
  }

  /* EDITORIAL SECTION & CONTAINER */
  .editorial-section {
    background-color: #000000;
    position: relative;
    padding: clamp(5rem, 8vw, 9rem) 0;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .editorial-container {
    max-width: 1320px;
    width: 100%;
    margin: 0 auto;
    padding: 0 clamp(1.2rem, 4vw, 3rem);
  }

  .editorial-split-layout {
    display: grid;
    grid-template-columns: 340px 1fr;
    gap: clamp(2.5rem, 5vw, 4.5rem);
    align-items: flex-start;
  }

  .editorial-left-col {
    position: sticky;
    top: 100px;
  }

  .section-top-label {
    font-size: clamp(0.75rem, 0.9vw, 0.85rem);
    letter-spacing: 3px;
    margin-bottom: 0.8rem;
    text-transform: uppercase;
    font-weight: 500;
  }

  .section-title-heading {
    font-family: var(--font-heading);
    font-size: clamp(1.8rem, 3.2vw, 3.2rem);
    text-transform: uppercase;
    color: #ffffff;
    line-height: 1.05;
    margin: 0;
    letter-spacing: -0.01em !important;
    word-break: keep-all;
  }

  .editorial-right-col {
    display: flex;
    flex-direction: column;
    gap: clamp(2.2rem, 4vw, 3.5rem);
  }

  .editorial-statement-block {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .statement-overline {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .statement-index {
    font-family: var(--font--second-font);
    font-size: 1.1rem;
    font-weight: 700;
    color: #ffffff;
    opacity: 0.4;
  }

  .statement-tag {
    font-size: 0.85rem;
    letter-spacing: 3px;
    font-weight: 600;
  }

  .editorial-quote-text {
    font-family: var(--font-display);
    font-size: clamp(1.15rem, 1.6vw, 1.6rem);
    line-height: 1.7;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.95);
    margin: 0;
    letter-spacing: 0.01em;
  }

  /* 3 Spatial Pillars (Open Columns, No Boxes) */
  .spatial-pillars-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
    margin-top: 1.5rem;
  }

  .spatial-pillar-col {
    padding-top: 1.2rem;
    border-top: 1px solid rgba(244, 114, 182, 0.4);
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .spatial-pillar-num {
    font-family: var(--font--second-font);
    font-size: 0.76rem;
    letter-spacing: 2px;
    color: #F472B6;
    font-weight: 600;
    display: block;
  }

  .spatial-pillar-title {
    font-family: var(--font--second-font);
    font-size: 1.15rem;
    text-transform: uppercase;
    color: #ffffff;
    margin: 0;
  }

  .spatial-pillar-desc {
    font-family: var(--font-body);
    font-size: 0.9rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
    font-weight: 300;
  }

  /* METRICS ROW */
  .editorial-metrics-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    margin-top: clamp(4rem, 6vw, 6rem);
    padding: clamp(2rem, 3.5vw, 3rem) 0;
  }

  .metric-cell {
    padding: 0 clamp(0.8rem, 1.8vw, 1.5rem);
    border-right: 1px solid rgba(255, 255, 255, 0.08);
  }

  .metric-cell:last-child {
    border-right: none;
  }

  .metric-big-num {
    font-family: var(--font--second-font);
    font-size: clamp(2.4rem, 4.2vw, 4.5rem);
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .metric-desc {
    color: rgba(255, 255, 255, 0.6);
    font-size: clamp(0.75rem, 0.9vw, 0.85rem);
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin: 0;
    font-weight: 500;
  }

  /* EXECUTIVES (Open Layout, No Boxes) */
  .editorial-leader-row {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .leader-category-tag {
    font-size: 0.8rem;
    letter-spacing: 3px;
    font-weight: 600;
    margin: 0;
    text-transform: uppercase;
  }

  .executives-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: clamp(2rem, 3.5vw, 3.5rem);
  }

  .executive-card {
    display: flex;
    align-items: center;
    gap: clamp(1.2rem, 2vw, 1.8rem);
  }

  .executive-avatar {
    width: clamp(85px, 10vw, 115px);
    height: clamp(85px, 10vw, 115px);
    border-radius: 8px;
    object-fit: cover;
    object-position: center top;
    border: 1px solid rgba(244, 114, 182, 0.4);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.7);
    flex-shrink: 0;
  }

  .executive-info {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .executive-name {
    font-family: var(--font--second-font);
    font-size: clamp(1.7rem, 2.4vw, 2.3rem);
    color: #ffffff;
    text-transform: uppercase;
    line-height: 1.05;
    margin: 0;
  }

  .executive-role {
    font-family: var(--font-body);
    font-size: 0.95rem;
    font-weight: 400;
    margin: 0 0 0.5rem 0;
  }

  .executive-links {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    flex-wrap: wrap;
  }

  .editorial-dot-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.85rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 500;
    transition: color 0.3s ease, transform 0.3s ease;
  }

  .editorial-dot-link:hover {
    color: #F472B6;
    transform: translateX(4px);
  }

  .editorial-dot-link .social-circle-small {
    width: 6px;
    height: 6px;
    background: #F472B6;
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* FOOTER */
  .footer-responsive {
    padding-top: clamp(4rem, 7vw, 7rem);
    padding-bottom: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .footer-container-responsive {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 clamp(1.2rem, 4vw, 3rem);
  }

  .footer-grid-responsive {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: clamp(3rem, 6vw, 6rem);
  }

  .footer-col-label {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85rem;
    letter-spacing: 2px;
  }

  .footer-address-text {
    font-family: var(--font--second-font);
    font-size: 1.2rem;
    line-height: 1.6;
    color: #ffffff;
  }

  .footer-link-plain {
    text-decoration: none;
  }

  .footer-contact-link {
    font-family: var(--font--second-font);
    font-size: 1.2rem;
    color: #ffffff;
    transition: opacity 0.3s ease;
  }

  .footer-links-stack {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .footer-nav-item {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    transition: transform 0.3s ease;
  }

  .footer-nav-text {
    color: #ffffff;
    font-size: 1.15rem;
    text-transform: uppercase;
  }

  .footer-socials-row {
    display: flex;
    gap: 1rem;
  }

  .footer-social-btn {
    opacity: 0.8;
    transition: opacity 0.3s ease, border-color 0.3s ease;
    width: 50px;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-copy-wrap {
    margin-top: clamp(2rem, 4vw, 4rem);
  }

  .footer-copy-text {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .singularity-footer-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: clamp(2rem, 4vw, 3rem) 0 1.5rem 0;
    user-select: none;
    overflow: visible;
  }

  .singularity-footer-wordmark {
    font-family: var(--font-heading);
    font-size: clamp(2.5rem, 8.5vw, 8.5rem);
    font-weight: 700;
    line-height: 0.9;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: #ffffff;
    margin: 0 auto;
    text-align: center;
    white-space: nowrap;
    max-width: 100%;
    text-shadow: 0 0 50px rgba(255, 255, 255, 0.15);
  }

  .logo-first {
    display: inline-flex !important;
    align-items: center !important;
    text-decoration: none !important;
  }

  .nav-brand-icon {
    width: 34px !important;
    height: 34px !important;
    object-fit: contain;
    margin-right: 12px !important;
    filter: drop-shadow(0 0 10px rgba(255,255,255,0.45));
    vertical-align: middle;
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .top-text.logo {
    font-family: var(--font-tech) !important;
    font-size: clamp(1.25rem, 1.8vw, 1.55rem) !important;
    font-weight: 700 !important;
    letter-spacing: 3px !important;
    line-height: 1 !important;
    color: #ffffff !important;
    margin: 0 !important;
  }

  .logo-first:hover .nav-brand-icon {
    transform: rotate(12deg) scale(1.12);
  }

  /* MEDIA QUERIES */
  @media (min-width: 992px) {
    .nav-menu.first.w-nav-menu {
      display: flex !important;
      flex-direction: row;
      gap: 1rem;
      align-items: center;
      justify-content: flex-end;
    }
  }

  @media (max-width: 991px) {
    .nav-menu.first.w-nav-menu {
      display: none !important;
    }

    .editorial-split-layout {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .editorial-left-col {
      position: static;
    }
  }

  @media (max-width: 767px) {
    .hide-mobile-break {
      display: none;
    }

    .editorial-metrics-row {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem 0;
    }

    .metric-cell:nth-child(2) {
      border-right: none;
    }
  }

  @media (max-width: 479px) {
    .editorial-metrics-row {
      grid-template-columns: 1fr;
      gap: 1.8rem;
    }

    .metric-cell {
      border-right: none;
      padding: 0;
    }
  }
`;

const PROJECT_DATA = `{
  "history": [
    {
      "breakpoints": [],
      "visible": true,
      "aspectRatio": 1,
      "userDownsample": 1,
      "layerType": "effect",
      "type": "bulge",
      "usesPingPong": false,
      "texture": false,
      "trackMouse": 1,
      "trackAxes": "xy",
      "mouseMomentum": 1,
      "animating": false,
      "isMask": 0,
      "compiledFragmentShaders": [
        "#version 300 es\\nprecision mediump float;in vec3 vVertexPosition;\\nin vec2 vTextureCoord;\\nin float zPos;uniform sampler2D uTexture;float random(vec2 seed) {\\nreturn fract(sin(dot(seed.xy, vec2(12.9898, 78.233))) * 43758.5453);\\n}out vec4 fragColor;\\nvoid main() {\\nvec2 uv = vTextureCoord;\\nvec4 color = texture(uTexture, uv);float intensity = 1.0000 * 0.5;float rad = (0.9990 - 0.25) * -2. * 3.14159;\\nvec2 rotatedLightPosition = vec2(cos(rad));\\nvec3 lightPosition = vec3(vec2(0.5) * rotatedLightPosition * 2., 1.0);float diff = max(dot(normalize(vVertexPosition), lightPosition), 0.0);\\ncolor.rgb += (diff * intensity - intensity);float dither = (random(gl_FragCoord.xy) - 0.5) / 255.0;\\ncolor.rgb += dither;\\nfragColor = color;}"
      ],
      "compiledVertexShaders": [
        "#version 300 es\\nprecision mediump float;in vec3 aVertexPosition;\\nin vec2 aTextureCoord;out vec2 vTextureCoord;\\nout vec3 vVertexPosition;\\nout float zPos;uniform sampler2D uCustomTexture;\\nuniform vec2 uMousePos;\\nuniform vec2 uResolution;float ease (int easingFunc, float t) {\\nreturn t < 0.5 ? 2.0 * t * t : -1.0 + (4.0 - 2.0 * t) * t;\\n}float bezier(float t) {\\nreturn ease(3, t);\\n}mat2 rot(float a) {\\nreturn mat2(cos(a),-sin(a),sin(a),cos(a));\\n}vec3 bulge(vec3 pos) {\\nvec2 aspectRatio = vec2(uResolution.x/uResolution.y, 1);\\nvec2 mousePosAdjusted = mix((vec2(0.5, 0.5) - 0.5) * 2., (uMousePos - 0.5) * 2., 1.0000);\\nvec2 skew = vec2(0.5000, 1. - 0.5000);\\nmat2 rotation = rot(0.6210 * 2. * 3.14159);float dist = distance(pos.xy * aspectRatio * rotation * skew, mousePosAdjusted * aspectRatio * rotation * skew);float t = max(0., 1. - dist/0.3000);\\nfloat bulge = bezier(t) * (0.2500 - 0.5);float luma = dot(texture(uCustomTexture, (pos.xy + 1.) * 0.5).rgb, vec3(0.299, 0.587, 0.114));bulge += luma * bezier(t) * 0.0000;\\nbulge = min(1., bulge);pos.xy += bulge * pos.xy;\\npos.z -= bulge;\\nreturn pos;\\n}void main() {\\nvec3 pos = bulge(aVertexPosition);\\nvec3 pos_dx = bulge(aVertexPosition + vec3(0.01, 0.0, 0.0));\\nvec3 pos_dy = bulge(aVertexPosition + vec3(0.0, 0.01, 0.0));\\nvec3 dx = pos_dx - pos;\\nvec3 dy = pos_dy - pos;\\nvec3 normal = normalize(cross(dx, dy));vVertexPosition = normal;zPos = pos.z;gl_Position = vec4(pos, 1.0);\\nvTextureCoord = aTextureCoord;\\n}"
      ],
      "data": {
        "depth": true,
        "uniforms": {},
        "isBackground": false,
        "heightSegments": 500,
        "widthSegments": 500
      },
      "id": "bulge_/_pinch"
    },
    {
      "breakpoints": [],
      "visible": true,
      "aspectRatio": 1,
      "userDownsample": 1,
      "layerType": "effect",
      "type": "mouseDraw",
      "usesPingPong": true,
      "trackMouse": 0,
      "trackAxes": "xy",
      "mouseMomentum": 0,
      "texture": false,
      "animating": false,
      "isMask": 0,
      "compiledFragmentShaders": [
        "#version 300 es\\nprecision highp float;\\nprecision highp int;in vec2 vTextureCoord;\\nin vec3 vVertexPosition;uniform sampler2D uTexture;\\nuniform sampler2D uPingPongTexture;\\nvec3 blend (int blendMode, vec3 src, vec3 dst) {\\nreturn src + dst;\\n}uvec2 pcg2d(uvec2 v) {\\nv = v * 1664525u + 1013904223u;\\nv.x += v.y * v.y * 1664525u + 1013904223u;\\nv.y += v.x * v.x * 1664525u + 1013904223u;\\nv ^= v >> 16;\\nv.x += v.y * v.y * 1664525u + 1013904223u;\\nv.y += v.x * v.x * 1664525u + 1013904223u;\\nreturn v;\\n}float randFibo(vec2 p) {\\nuvec2 v = floatBitsToUint(p);\\nv = pcg2d(v);\\nuint r = v.x ^ v.y;\\nreturn float(r) / float(0xffffffffu);\\n}const float PI = 3.1415926;out vec4 fragColor;vec3 rgb2hsv(vec3 c) {\\nvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\\nvec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\\nvec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));float d = q.x - min(q.w, q.y);\\nfloat e = 1.0e-10;\\nreturn vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\\n}vec2 angleToDir(float angle) {\\nfloat rad = angle * 2.0 * PI;\\nreturn vec2(cos(rad), sin(rad));\\n}void main() {\\nvec2 uv = vTextureCoord;\\nvec2 pingpongUv = uv;vec3 mouseRgb = texture(uPingPongTexture, pingpongUv).rgb;\\nvec3 mouseTrail = rgb2hsv(mouseRgb);\\nfloat angle = mouseTrail.x;\\nfloat strength = mouseTrail.z * (1.0000 * 5.0);vec2 direction = angleToDir(angle);vec4 bg = texture(uTexture, uv - (direction * 0.1 * strength * 0.0000));\\nvec4 color = vec4(0,0,0,1);color.rgb = vec3(strength * mix(mouseRgb, vec3(0, 0, 0), 0.5000));\\nfloat dither = (randFibo(gl_FragCoord.xy) - 0.5) / 255.0;if(1 > 0) {\\nvec3 blendedRgb = blend(1, color.rgb + dither, bg.rgb);\\nfragColor = vec4(mix(bg.rgb, blendedRgb, mouseTrail.z), 1.0);\\n} else {\\nfragColor = mix(bg, color, mouseTrail.z);\\n}\\n}",
        "#version 300 es\\nprecision highp float;in vec3 vVertexPosition;\\nin vec2 vTextureCoord;uniform sampler2D uPingPongTexture;\\nuniform vec2 uPreviousMousePos;\\nuniform float uTime;uniform vec2 uMousePos;\\nuniform vec2 uResolution;const float PI = 3.1415926;\\nconst float TWOPI = 6.2831852;out vec4 fragColor;vec3 hsv2rgb(vec3 c) {\\nvec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\\nvec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\\nreturn c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\\n}vec3 rgb2hsv(vec3 c) {\\nvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\\nvec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\\nvec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));float d = q.x - min(q.w, q.y);\\nfloat e = 1.0e-10;\\nreturn vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\\n}mat2 rot(float a) {\\nreturn mat2(cos(a), -sin(a), sin(a), cos(a));\\n}vec2 angleToDir(float angle) {\\nfloat rad = angle * 2.0 * PI;\\nreturn vec2(cos(rad), sin(rad));\\n}vec2 liquify(vec2 st, vec2 dir) {\\nfloat aspectRatio = uResolution.x / uResolution.y;\\nst.x *= aspectRatio;\\nfloat amplitude = 0.0025;\\nfloat freq = 6.;\\nfor (float i = 1.0; i <= 5.0; i++) {\\nst = st * rot(i / 5.0 * PI * 2.0);\\nst += vec2(\\namplitude * cos(i * freq * st.y + uTime * 0.02 * dir.x),\\namplitude * sin(i * freq * st.x + uTime * 0.02 * dir.y)\\n);\\n}\\nst.x /= aspectRatio;\\nreturn st;\\n}vec3 calculateTrailContribution(vec2 mousePos, vec2 prevMousePos, vec2 uv, vec2 correctedUv, float aspectRatio, float radius) {\\nvec2 dir = (mousePos - prevMousePos) * vec2(aspectRatio, 1.0);\\nfloat angle = atan(dir.y, dir.x);\\nif (angle < 0.0) angle += TWOPI;\\nvec2 mouseVec = mousePos - prevMousePos;\\nfloat mouseLen = length(mouseVec);\\nvec2 mouseDir = mouseLen > 0.0 ? mouseVec / mouseLen : vec2(0.0);\\nvec2 posToUv = (correctedUv - prevMousePos) * vec2(aspectRatio, 1.0);\\nfloat projection = clamp(dot(posToUv, mouseDir * vec2(aspectRatio, 1.0)), 0.0, mouseLen * aspectRatio);\\nvec2 closestPoint = prevMousePos * vec2(aspectRatio, 1.0) + mouseDir * vec2(aspectRatio, 1.0) * projection;\\nfloat distanceToLine = distance(correctedUv, closestPoint);\\nfloat s = (1.0 + radius)/(distanceToLine + radius) * radius;\\nvec3 color = vec3(angle / TWOPI, 1.0, 1.0);\\nvec3 pointColor = hsv2rgb(color);\\npointColor = pow(pointColor, vec3(2.2));\\nfloat intensity = pow(s, 10.0 * (1. - 0.3000 + 0.1));\\nreturn pointColor * intensity;\\n}void main() {\\nfloat aspectRatio = uResolution.x / uResolution.y;\\nvec2 uv = vTextureCoord;\\nvec2 correctedUv = (uv) * vec2(aspectRatio, 1.0);vec3 lastFrameColor = texture(uPingPongTexture, uv).rgb;\\nvec3 lastFrameColorGamma = pow(lastFrameColor, vec3(2.2));\\nvec3 hsv = rgb2hsv(lastFrameColor);\\nvec3 hsvGamma = rgb2hsv(lastFrameColorGamma);\\nvec2 prevDir = angleToDir(hsv.x);\\nfloat prevStrength = hsvGamma.z;\\nvec2 dir = (uMousePos - uPreviousMousePos) * vec2(aspectRatio, 1.0);\\nfloat dist = length(dir);\\nfloat blurAmount = 0.03 * prevStrength;\\nuv = uv - prevDir * blurAmount;\\nuv = mix(uv, liquify(uv - prevDir * 0.005, prevDir), (1. - prevStrength) * 0.2300);\\nlastFrameColor = texture(uPingPongTexture, uv).rgb;\\nlastFrameColor = pow(lastFrameColor, vec3(2.2));\\nint numPoints = int(max(12.0, dist * 24.0));\\nfloat speedFactor = clamp(dist, 0.7, 1.3);\\nfloat radius = mix(0.1, 0.7, 0.3100 * speedFactor);\\nvec3 trailColor = vec3(0.0);\\nint iter = min(numPoints, 24);\\nfor (int i = 0; i <= iter; i++) {\\nfloat t = float(i) / float(numPoints);\\nvec2 interpPos = mix(uPreviousMousePos, uMousePos, t);\\nvec2 prevInterpPos = i > 0 ? mix(uPreviousMousePos, uMousePos, float(i-1) / float(numPoints)) : uPreviousMousePos;\\ntrailColor += calculateTrailContribution(interpPos, prevInterpPos, uv, correctedUv, aspectRatio, radius);\\n}\\ntrailColor = trailColor / float(min(numPoints, 50) + 1);\\nvec3 blurredLastFrame = vec3(0.0);\\nfloat clampedDist = clamp(length(trailColor) * dist, 0.0, 1.0);\\nfloat blurRadius = 0.005;\\nblurredLastFrame += pow(texture(uPingPongTexture, uv + vec2(blurRadius, 0.0)).rgb, vec3(2.2)) * 0.2;\\nblurredLastFrame += pow(texture(uPingPongTexture, uv + vec2(-blurRadius, 0.0)).rgb, vec3(2.2)) * 0.2;\\nblurredLastFrame += pow(texture(uPingPongTexture, uv + vec2(0.0, blurRadius)).rgb, vec3(2.2)) * 0.2;\\nblurredLastFrame += pow(texture(uPingPongTexture, uv + vec2(0.0, -blurRadius)).rgb, vec3(2.2)) * 0.2;\\nblurredLastFrame += lastFrameColor * 0.2;\\nblurredLastFrame *= pow(0.8000, 0.2);\\nvec3 draw = mix(blurredLastFrame, trailColor, clampedDist);\\ndraw = pow(draw, vec3(1.0/2.2));\\ndraw.r = max(0.0, draw.r - 0.01);\\ndraw.g = max(0.0, draw.g - 0.01);\\ndraw.b = max(0.0, draw.b - 0.01);\\nfragColor = vec4(draw, 1.0);\\n}"
      ],
      "compiledVertexShaders": [
        "#version 300 es\\nprecision highp float;in vec3 aVertexPosition;\\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\\nuniform mat4 uPMatrix;\\nuniform mat4 uTextureMatrix;out vec2 vTextureCoord;\\nout vec3 vVertexPosition;void main() {\\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\\nvTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\\n}",
        "#version 300 es\\nprecision highp float;in vec3 aVertexPosition;\\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\\nuniform mat4 uPMatrix;out vec2 vTextureCoord;\\nout vec3 vVertexPosition;void main() {\\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\\nvTextureCoord = aTextureCoord;\\n}"
      ],
      "data": {
        "depth": false,
        "uniforms": {},
        "isBackground": false
      },
      "id": "mouse_draw"
    }
  ],
  "options": {
    "name": "SINGULARITY",
    "fps": 60,
    "dpi": 1.5,
    "scale": 1,
    "includeLogo": false,
    "isProduction": false,
    "freePlan": false
  },
  "version": "2.0.4",
  "id": "rr40leL2y23o0QnzrPWs"
}`;

const HEAD_SCRIPTS = [
  "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js",
  "https://unpkg.com/lenis@1.3.4/dist/lenis.min.js",
  "/js/unicornStudio.umd.js",
];

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

export default function ChitraDarshanLabPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const styleEl = document.createElement("style");
    styleEl.textContent = HEAD_STYLES;
    document.head.appendChild(styleEl);

    const dataScript = document.createElement("script");
    dataScript.id = "singularityProjectData";
    dataScript.type = "application/json";
    dataScript.textContent = PROJECT_DATA;
    document.head.appendChild(dataScript);

    (async () => {
      for (const src of HEAD_SCRIPTS) {
        await loadScript(src);
      }

      if ((window as any).WebFont) {
        (window as any).WebFont.load({
          google: {
            families: ["Instrument Sans:400,500,600,700", "Michroma", "Oswald:300,400,500,600,700"]
          }
        });
      }

      await loadScript("/js/jquery.js?site=697344b93b0e03014bb98903");
      (window as any).jQuery.holdReady(true);

      await loadScript("/js/runtime-core.js");
      await loadScript("/js/runtime-interactions.js");
      await loadScript("/js/runtime-vendor.js");
      await loadScript("/js/singularity-core.js");

      await loadScript("/js/gsap.min.js");
      await loadScript("/js/splittext.min.js");
      await loadScript("/js/scrolltrigger.min.js");

      (window as any).jQuery.holdReady(false);

      if ((window as any).Webflow) {
        (window as any).Webflow.destroy();
        (window as any).Webflow.ready();
        const ix2 = (window as any).Webflow.require('ix2');
        if (ix2) ix2.init();
        
        document.dispatchEvent(new Event('readystatechange'));
        window.dispatchEvent(new Event('load'));
      }

      if ((window as any).UnicornStudio && (window as any).UnicornStudio.init) {
        (window as any).UnicornStudio.init();
        let resizeTimer: any;
        window.addEventListener("resize", function() {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(function() {
            if ((window as any).UnicornStudio && (window as any).UnicornStudio.init) {
              (window as any).UnicornStudio.init();
            }
          }, 100);
        });
      }

      if ((window as any).Lenis) {
        const lenis = new (window as any).Lenis({
          smooth: true,
          lerp: 0.1,
          wheelMultiplier: 1,
          infinite: false,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }

      if ((window as any).gsap && (window as any).ScrollTrigger) {
        const gsap = (window as any).gsap;
        const ScrollTrigger = (window as any).ScrollTrigger;
        const SplitText = (window as any).SplitText;
        gsap.registerPlugin(ScrollTrigger);

        if (SplitText) {
          const splitTitles = document.querySelectorAll(".split-reveal");
          splitTitles.forEach((title) => {
            try {
              const split = new SplitText(title, { type: "words,chars", wordsClass: "split-word" });
              gsap.from(split.chars, {
                opacity: 0,
                y: 40,
                rotateX: -45,
                stagger: 0.02,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: title,
                  start: "top 88%",
                  toggleActions: "play none none none"
                }
              });
            } catch (e) {
              gsap.fromTo(title, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
            }
          });
        }

        const fadeElements = document.querySelectorAll("[data-scroll-fade]");
        fadeElements.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none"
              }
            }
          );
        });
      }

    })();

    return () => {
      styleEl.remove();
      dataScript.remove();
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: BODY_HTML }}
    />
  );
}
