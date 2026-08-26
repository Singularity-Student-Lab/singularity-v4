"use client";

import { useEffect, useRef, useState } from "react";
import { loadScript } from "@/lib/load-script";

const BODY_HTML = `
  <div data-w-id="91953398-20e1-8cca-2bd1-effc568176e2" class="fixed-close-button" role="button" aria-label="Close navigation menu" tabindex="0">
    <div data-is-ix2-target="1" class="lottie-x" data-w-id="91953398-20e1-8cca-2bd1-effc568176e3"
      data-animation-type="lottie" data-src="/js/hamburger-animation.json" data-loop="1" data-direction="1"
      data-autoplay="0" data-renderer="svg" data-default-duration="0" data-duration="0" data-loading="eager"
      data-ix2-initial-state="25"></div>
  </div>
  <div class="menu-wrapper" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
    <div class="navigation-wrapper">
      <div class="navigation-content">
        <div class="menu-item _01"><a href="/" class="button-with-line w-inline-block" aria-label="Navigate to Home">
            <div class="button-text-wrapper">
              <div class="button-text">Home</div>
            </div>
            <div class="button-line-first">
              <div class="button-line-overlay"></div>
            </div>
          </a></div>
        <div class="menu-item _02"><a href="/about" class="button-with-line w-inline-block" aria-label="Navigate to About Us">
            <div class="button-text-wrapper">
              <div class="button-text">About</div>
            </div>
            <div class="button-line-first">
              <div class="button-line-overlay"></div>
            </div>
          </a></div>
        <div class="menu-item _05"><a href="/join" class="button-with-line w-inline-block" aria-label="Navigate to Join Lab">
            <div class="button-text-wrapper">
              <div class="button-text">Join</div>
            </div>
            <div class="button-line-first">
              <div class="button-line-overlay"></div>
            </div>
          </a></div>
        <div class="margin-20">
          <div class="social-menu-wrapper">
            <div class="social-content for-footer">
              <a href="https://www.instagram.com/thesingularity.srmap" target="_blank" rel="noopener noreferrer"
                class="social-wrapper w-inline-block" title="Instagram" aria-label="Visit Singularity on Instagram">
                <img width="18" height="18" loading="lazy" decoding="async" alt="Instagram logo" src="/images/instagram-icon.webp" class="social-icon" />
              </a>
              <a href="https://www.linkedin.com/company/singularity-student-lab-srmap/" target="_blank" rel="noopener noreferrer"
                class="social-wrapper w-inline-block" title="LinkedIn" aria-label="Visit Singularity on LinkedIn">
                <img width="18" height="18" loading="lazy" decoding="async" alt="LinkedIn logo" src="/images/linkedin-icon.svg" class="social-icon second" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="Top" class="main-hero">
    <div data-w-id="62bf61a9-91ad-d080-59a9-9d0bda0e906f" class="sticky-element">
      <div data-w-id="00cdae18-38ec-1b3e-ec88-656f2336553d" data-animation="default" data-collapse="medium"
        data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
        <a href="/" id="w-node-_00cdae18-38ec-1b3e-ec88-656f2336553e-2336553d" aria-current="page" class="logo-first w-inline-block w--current" aria-label="Singularity Home">
          <img src="/images/singularity_logo.webp" width="34" height="34" alt="Singularity emblem" class="nav-brand-icon" />
          <p class="top-text logo">SINGULARITY</p>
        </a>

        <div id="w-node-_00cdae18-38ec-1b3e-ec88-656f23365540-2336553d" class="make-grid hide-mobile">
          <nav role="navigation" aria-label="Main Navigation" class="nav-menu first w-nav-menu">
            <a href="/about" data-wf--button-arrow--variant="dark" class="button-link w-inline-block" aria-label="About Us">
              <div class="social-circle-small"><img width="256" height="256" loading="lazy" decoding="async" alt="" src="/images/circle.webp" class="nav-arrow-move" /></div>
              <div class="navigation-text-main" style="text-transform: uppercase;">ABOUT US</div>
            </a>
            <a href="/join" data-wf--button-arrow--variant="dark" class="button-link w-inline-block" aria-label="Join Singularity Lab">
              <div class="social-circle-small"><img width="256" height="256" loading="lazy" decoding="async" alt="" src="/images/circle.webp" class="nav-arrow-move" /></div>
              <div class="navigation-text-main" style="text-transform: uppercase;">JOIN</div>
            </a>
          </nav>
        </div>

        <div id="w-node-_00cdae18-38ec-1b3e-ec88-656f23365547-2336553d" class="last-part">
          <div class="menu-button w-nav-button" role="button" aria-label="Open navigation menu" aria-expanded="false" tabindex="0">
            <div class="w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="top-main">
      <div class="hero">
        <div class="container down nm">
          <div class="right-studio-text">
            <img src="/images/singularity_scene-1-.png" width="1232" height="403" alt="Singularity Student Lab"
              sizes="(max-width: 1919px) 100vw, 1232px"
              srcset="/images/singularity_scene-1-p-500.png 500w, /images/singularity_scene-1-p-800.png 800w, /images/singularity_scene-1-p-1080.png 1080w, /images/singularity_scene-1-.png 1996w"
              class="logo-main" fetchpriority="high" />
            <div class="max-w-center _300">
              <h2 class="about-title small">We explore, build, and innovate through research, engineering, and deep technology.</h2>
            </div>
          </div>
        </div>
        <div data-w-id="fa34d70a-0972-fc85-5e22-95a787cde496" class="container-bottom">
          <div class="bottom-grid _2">
            <div id="w-node-_00bfeab6-765b-29fd-be56-e5a7f1043c12-4bb988f6">
              <div class="location-wrapper">
                <p class="top-text big">featured labs <span class="lighter-color">/07</span></p>
              </div>
            </div>
            <div id="w-node-fa34d70a-0972-fc85-5e22-95a787cde49d-4bb988f6" class="hide-mobile">
              <div>
                <p data-w-id="7d6a555a-05ed-39ec-57f9-8e9d996d0738" style="opacity:0" class="top-text big">AI &amp; Robotics<br /></p>
                <p data-w-id="7d6a555a-05ed-39ec-57f9-8e9d996d073b" style="opacity:0" class="top-text big">Deep Tech<br /></p>
                <p data-w-id="7d6a555a-05ed-39ec-57f9-8e9d996d073e" style="opacity:0" class="top-text big">Software &amp; Systems<br /></p>
                <p data-w-id="7d6a555a-05ed-39ec-57f9-8e9d996d0741" style="opacity:0" class="top-text big">Hardware R&amp;D<br /></p>
                <p data-w-id="7d6a555a-05ed-39ec-57f9-8e9d996d0744" style="opacity:0" class="top-text big">Innovation<br /></p>
              </div>
            </div>
            <div id="w-node-_035bf225-78a0-b289-1586-9a8fd9c74b9f-4bb988f6">
              <p class="top-text"><span class="_w-logo arrow">W</span>  Scroll to explore</p>
            </div>
          </div>
        </div>
        <div data-us-project-src="singularityProjectData" class="absolute-effect"></div>
      </div>
    </div>
    <div data-w-id="2c75e975-8645-c1b5-d51e-88781d3693c8" class="section-content">
      <div class="work-banner style-3 page-content">
        <div class="line-left-wrapper w-hidden-small w-hidden-tiny">
          <a href="#First" class="menu-link-block w-inline-block" aria-label="Scroll to Lab 01">
            <div style="opacity:0" class="menu-item-text">01</div>
            <div class="menu-line"></div>
          </a>
          <a href="#Second" class="menu-link-block w-inline-block" aria-label="Scroll to Lab 02">
            <div style="opacity:0" class="menu-item-text">02</div>
            <div class="menu-line"></div>
          </a>
          <a href="#Third" class="menu-link-block w-inline-block" aria-label="Scroll to Lab 03">
            <div style="opacity:0" class="menu-item-text">03</div>
            <div class="menu-line"></div>
          </a>
          <a href="#Fourth" class="menu-link-block w-inline-block" aria-label="Scroll to Lab 04">
            <div style="opacity:0" class="menu-item-text">04</div>
            <div class="menu-line"></div>
          </a>
          <a href="#Fifth" class="menu-link-block w-inline-block" aria-label="Scroll to Lab 05">
            <div style="opacity:0" class="menu-item-text">05</div>
            <div class="menu-line"></div>
          </a>
          <a href="#Sixth" class="menu-link-block w-inline-block" aria-label="Scroll to Lab 06">
            <div style="opacity:0" class="menu-item-text">06</div>
            <div class="menu-line"></div>
          </a>
          <a href="#Seventh" class="menu-link-block w-inline-block" aria-label="Scroll to Lab 07">
            <div style="opacity:0" class="menu-item-text">07</div>
            <div class="menu-line"></div>
          </a>
        </div>

        <div id="First" class="project-big-parallax">
          <div class="w-dyn-list">
            <div role="list" class="w-dyn-items">
              <div role="listitem" class="project-full-item w-dyn-item">
                <a href="/labs/prajna-kritrima" class="work-wrapper-main w-inline-block" aria-label="Explore Prajna Kritrima Lab - AI/ML & GenAI">
                  <div class="circle-center">
                    <img src="/images/aiml_lab_bg.jpg" width="1920" height="1080" loading="lazy" decoding="async" alt="Prajna Kritrima Lab Artificial Intelligence Research" class="work-photo-first" />
                  </div>
                  <div class="work-overlay first half"></div>
                  <div class="view-more">Explore Lab</div>
                  <div data-w-id="351e57d5-6072-8036-a947-608cfdeae359" class="work-text-wrapper">
                    <h2 class="work-text">Prajna Kritrima Lab</h2>
                    <div class="txt-flex">
                      <p class="top-text">AI/ML & GenAI</p>
                      <p class="top-text">&bull;</p>
                      <p class="top-text">Lab 01</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="Second" class="project-big-parallax">
          <div class="w-dyn-list">
            <div role="list" class="w-dyn-items">
              <div role="listitem" class="project-full-item w-dyn-item">
                <a href="/labs/aanu-tattva" class="work-wrapper-main w-inline-block" aria-label="Explore Aanu Tattva Lab - Quantum Computing">
                  <div class="circle-center">
                    <img src="/images/quantum_lab_bg.jpg" width="1920" height="1080" loading="lazy" decoding="async" alt="Aanu Tattva Lab Quantum Computing Research" class="work-photo-first" />
                  </div>
                  <div class="work-overlay first half"></div>
                  <div class="view-more">Explore Lab</div>
                  <div data-w-id="9f58a389-38f5-d1df-d057-c11a01f8c673" class="work-text-wrapper">
                    <h2 class="work-text">Aanu Tattva Lab</h2>
                    <div class="txt-flex">
                      <p class="top-text">Quantum Computing</p>
                      <p class="top-text">&bull;</p>
                      <p class="top-text">Lab 02</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="Third" class="project-big-parallax">
          <div class="w-dyn-list">
            <div role="list" class="w-dyn-items">
              <div role="listitem" class="project-full-item w-dyn-item">
                <a href="/labs/chitra-darshan" class="work-wrapper-main w-inline-block" aria-label="Explore Chitra Darshan Lab - AR/VR & Game Dev">
                  <div class="circle-center">
                    <img src="/images/gamedev_lab_bg.png" width="1920" height="1080" loading="lazy" decoding="async" alt="Chitra Darshan Lab Spatial Computing and Game Development" class="work-photo-first" />
                  </div>
                  <div class="work-overlay first half"></div>
                  <div class="view-more">Explore Lab</div>
                  <div data-w-id="4087aa29-ac7d-f7a2-c538-546571bef595" class="work-text-wrapper">
                    <h2 class="work-text">Chitra Darshan Lab</h2>
                    <div class="txt-flex">
                      <p class="top-text">AR/VR & Game Dev</p>
                      <p class="top-text">&bull;</p>
                      <p class="top-text">Lab 03</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="Fourth" class="project-big-parallax">
          <div class="w-dyn-list">
            <div role="list" class="w-dyn-items">
              <div role="listitem" class="project-full-item w-dyn-item">
                <a href="/labs/varahamihira" class="work-wrapper-main w-inline-block" aria-label="Explore Varahamihira Lab - Cybersecurity & Blockchain">
                  <div class="circle-center">
                    <img src="/images/cybersec_lab_bg.png" width="1920" height="1080" loading="lazy" decoding="async" alt="Varahamihira Lab Cybersecurity and Cryptography Research" class="work-photo-first" />
                  </div>
                  <div class="work-overlay first half"></div>
                  <div class="view-more">Explore Lab</div>
                  <div data-w-id="aaa22f73-7a8c-4fc3-cb2b-0e3beb7a3b94" class="work-text-wrapper">
                    <h2 class="work-text">Varahamihira Lab</h2>
                    <div class="txt-flex">
                      <p class="top-text">Cybersecurity & Blockchain</p>
                      <p class="top-text">&bull;</p>
                      <p class="top-text">Lab 04</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="Fifth" class="project-big-parallax">
          <div class="w-dyn-list">
            <div role="list" class="w-dyn-items">
              <div role="listitem" class="project-full-item w-dyn-item">
                <a href="/labs/bhaskaracharya" class="work-wrapper-main w-inline-block" aria-label="Explore Bhaskaracharya Lab - Cloud & Web Systems">
                  <div class="circle-center">
                    <img src="/images/cloud_lab_bg.jpg" width="1920" height="1080" loading="lazy" decoding="async" alt="Bhaskaracharya Lab Cloud Architecture and Distributed Systems" class="work-photo-first" />
                  </div>
                  <div class="work-overlay first half"></div>
                  <div class="view-more">Explore Lab</div>
                  <div data-w-id="bhask-9821-4fc3-cb2b-0e3beb7a3b95" class="work-text-wrapper">
                    <h2 class="work-text">Bhaskaracharya Lab</h2>
                    <div class="txt-flex">
                      <p class="top-text">Cloud & Web Systems</p>
                      <p class="top-text">&bull;</p>
                      <p class="top-text">Lab 05</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="Sixth" class="project-big-parallax">
          <div class="w-dyn-list">
            <div role="list" class="w-dyn-items">
              <div role="listitem" class="project-full-item w-dyn-item">
                <a href="/labs/agastya" class="work-wrapper-main w-inline-block" aria-label="Explore Agastya Lab - Robotics & Embedded IoT">
                  <div class="circle-center">
                    <img src="/images/iot_lab_bg.jpg" width="1920" height="1080" loading="lazy" decoding="async" alt="Agastya Lab Robotics, Autonomous Hardware and Embedded Systems" class="work-photo-first" />
                  </div>
                  <div class="work-overlay first half"></div>
                  <div class="view-more">Explore Lab</div>
                  <div data-w-id="agast-7712-4fc3-cb2b-0e3beb7a3b96" class="work-text-wrapper">
                    <h2 class="work-text">Agastya Lab</h2>
                    <div class="txt-flex">
                      <p class="top-text">Robotics & Embedded IoT</p>
                      <p class="top-text">&bull;</p>
                      <p class="top-text">Lab 06</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="Seventh" class="project-big-parallax">
          <div class="w-dyn-list">
            <div role="list" class="w-dyn-items">
              <div role="listitem" class="project-full-item w-dyn-item">
                <a href="/labs/navya-vigyan" class="work-wrapper-main w-inline-block" aria-label="Explore Navya Vigyan Lab - Interdisciplinary Tech">
                  <div class="circle-center">
                    <img src="/images/interdisciplinary_lab_bg.jpg" width="1920" height="1080" loading="lazy" decoding="async" alt="Navya Vigyan Lab Interdisciplinary Science and Cross-Domain Research" class="work-photo-first" />
                  </div>
                  <div class="work-overlay first half"></div>
                  <div class="view-more">Explore Lab</div>
                  <div data-w-id="navya-3389-4fc3-cb2b-0e3beb7a3b97" class="work-text-wrapper">
                    <h2 class="work-text">Navya Vigyan Lab</h2>
                    <div class="txt-flex">
                      <p class="top-text">Interdisciplinary Tech</p>
                      <p class="top-text">&bull;</p>
                      <p class="top-text">Lab 07</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="section double">
        <div class="container">
          <div class="grid-goals">
            <div class="max-w-center left">
              <h2 data-w-id="e3a3f7fb-e766-d0aa-b107-460abdcaa337" class="h1 effect second">Built by students.<br />Driven by research.</h2>
              <div class="max-w-center lf">
                <p data-w-id="e3a3f7fb-e766-d0aa-b107-460abdcaa33a" class="about-title effect small">
                  From fundamental theory to live deployment — we innovate across all 7 research disciplines at SRM University-AP.</p>
              </div>
            </div>
            <div class="big-typography-marquee-wrap" aria-label="Research disciplines and laboratory marquee">
              <div class="marquee-track-row">
                <div class="marquee-track-inner move-left">
                  <span class="marquee-bold-text">ARTIFICIAL INTELLIGENCE <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text">QUANTUM COMPUTING <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text">ASTROPHYSICS <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text">ROBOTICS &amp; IOT <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text">DEEP TECHNOLOGY <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text">CLOUD SYSTEMS <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text">NANOTECHNOLOGY <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text">ARTIFICIAL INTELLIGENCE <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text">QUANTUM COMPUTING <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text">ASTROPHYSICS <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text">ROBOTICS &amp; IOT <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text">DEEP TECHNOLOGY <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text">CLOUD SYSTEMS <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text">NANOTECHNOLOGY <span class="marquee-dot">•</span></span>
                </div>
              </div>

              <div class="marquee-track-row">
                <div class="marquee-track-inner move-right">
                  <span class="marquee-bold-text text-outline">PRAJNA KRITRIMA <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text text-outline">AANU TATTVA <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text text-outline">CHITRA DARSHAN <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text text-outline">VARAHAMIHIRA <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text text-outline">BHASKARACHARYA <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text text-outline">AGASTYA <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text text-outline">NAVYA VIGYAN <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text text-outline">PRAJNA KRITRIMA <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text text-outline">AANU TATTVA <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text text-outline">CHITRA DARSHAN <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text text-outline">VARAHAMIHIRA <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text text-outline">BHASKARACHARYA <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text text-outline">AGASTYA <span class="marquee-dot">•</span></span>
                  <span class="marquee-bold-text text-outline">NAVYA VIGYAN <span class="marquee-dot">•</span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="margin-100">
            <div data-w-id="a0960034-c8d1-d137-9f08-7b4be3fdd731" class="snapshot-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 2rem; text-align: center;">
              <div class="journey-number-wrap" style="display: flex; flex-direction: column; align-items: center;">
                <div class="clean-metric-num" style="font-family: var(--font-tech); font-size: clamp(2.8rem, 5.5vw, 5.5rem); font-weight: 700; line-height: 1; color: #ffffff; letter-spacing: -0.01em; margin-bottom: 0.8rem;">07</div>
                <p class="p-fun" style="font-family: var(--font-body); font-size: 0.95rem; color: rgba(255,255,255,0.85); margin: 0;">Research Labs</p>
              </div>

              <div class="journey-number-wrap" style="display: flex; flex-direction: column; align-items: center;">
                <div class="clean-metric-num" style="font-family: var(--font-tech); font-size: clamp(2.8rem, 5.5vw, 5.5rem); font-weight: 700; line-height: 1; color: #ffffff; letter-spacing: -0.01em; margin-bottom: 0.8rem;">25+</div>
                <p class="p-fun" style="font-family: var(--font-body); font-size: 0.95rem; color: rgba(255,255,255,0.85); margin: 0;">Student Researchers</p>
              </div>

              <div class="journey-number-wrap" style="display: flex; flex-direction: column; align-items: center;">
                <div class="clean-metric-num" style="font-family: var(--font-tech); font-size: clamp(2.8rem, 5.5vw, 5.5rem); font-weight: 700; line-height: 1; color: #ffffff; letter-spacing: -0.01em; margin-bottom: 0.8rem;">14+</div>
                <p class="p-fun" style="font-family: var(--font-body); font-size: 0.95rem; color: rgba(255,255,255,0.85); margin: 0;">Flagship Projects</p>
              </div>

              <div class="journey-number-wrap" style="display: flex; flex-direction: column; align-items: center;">
                <div class="clean-metric-num" style="font-family: var(--font-tech); font-size: clamp(2.8rem, 5.5vw, 5.5rem); font-weight: 700; line-height: 1; color: #ffffff; letter-spacing: -0.01em; margin-bottom: 0.8rem;">20+</div>
                <p class="p-fun" style="font-family: var(--font-body); font-size: 0.95rem; color: rgba(255,255,255,0.85); margin: 0;">Open Repositories</p>
              </div>

              <div class="journey-number-wrap" style="display: flex; flex-direction: column; align-items: center;">
                <div class="clean-metric-num" style="font-family: var(--font-tech); font-size: clamp(2.8rem, 5.5vw, 5.5rem); font-weight: 700; line-height: 1; color: #ffffff; letter-spacing: -0.01em; margin-bottom: 0.8rem;">100%</div>
                <p class="p-fun" style="font-family: var(--font-body); font-size: 0.95rem; color: rgba(255,255,255,0.85); margin: 0;">Student Driven</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer" style="padding-top: 6rem; padding-bottom: 2rem;" role="contentinfo">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 4rem; margin-bottom: 6rem;">
            <div class="footer-left">
              <p class="top-text" style="color: rgba(255,255,255,0.75); font-size: 0.85rem; letter-spacing: 2px;">CONTACT US</p>
              <div class="margin-20">
                <h2 class="about-title effect small" style="font-family: var(--font--second-font); font-size: 1.2rem; line-height: 1.6; color: #fff;">
                  Singularity Lab<br />
                  SR - 209, Academic Block, SRM AP<br />
                  Amaravati, AP 522240
                </h2>
              </div>
              <div class="margin-20">
                <a href="mailto:contact@thesingularity.in" style="text-decoration: none;" aria-label="Email Singularity Lab">
                  <p class="p-chat" style="color: rgba(255,255,255,0.92); font-size: 1.1rem; font-family: var(--font--second-font); letter-spacing: 1px;">contact@thesingularity.in</p>
                </a>
              </div>
              <div class="margin-20" style="margin-top: 2rem;">
                <div class="social-content for-footer" style="display: flex; gap: 1rem;">
                  <a href="https://www.instagram.com/thesingularity.srmap" target="_blank" rel="noopener noreferrer"
                    class="social-wrapper w-inline-block" title="Instagram" aria-label="Singularity on Instagram" style="width: 40px; height: 40px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center;">
                    <img width="16" height="16" loading="lazy" decoding="async" alt="Instagram logo" src="/images/instagram-icon.webp" class="social-icon" />
                  </a>
                  <a href="https://www.linkedin.com/company/singularity-student-lab-srmap/" target="_blank" rel="noopener noreferrer"
                    class="social-wrapper w-inline-block" title="LinkedIn" aria-label="Singularity on LinkedIn" style="width: 40px; height: 40px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center;">
                    <img width="16" height="16" loading="lazy" decoding="async" alt="LinkedIn logo" src="/images/linkedin-icon.svg" class="social-icon second" />
                  </a>
                </div>
              </div>
            </div>

            <div class="footer-right" style="display: flex; flex-direction: column; justify-content: flex-start;">
              <p class="top-text" style="color: rgba(255,255,255,0.75); font-size: 0.85rem; letter-spacing: 2px; margin-bottom: 1.5rem;">QUICK LINKS</p>
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <a href="/about" class="button-link w-inline-block" aria-label="Learn about Singularity" style="text-decoration: none; display: flex; align-items: center; gap: 0.75rem;">
                  <div class="social-circle-small" style="width: 8px; height: 8px; border-radius: 50%; background-color: #fff;"></div>
                  <div class="navigation-text-main" style="text-transform: uppercase; font-size: 1.2rem; color: #fff; font-family: var(--font--second-font);">ABOUT US</div>
                </a>
                <a href="/join" class="button-link w-inline-block" aria-label="Join Singularity Lab" style="text-decoration: none; display: flex; align-items: center; gap: 0.75rem;">
                  <div class="social-circle-small" style="width: 8px; height: 8px; border-radius: 50%; background-color: #fff;"></div>
                  <div class="navigation-text-main" style="text-transform: uppercase; font-size: 1.2rem; color: #fff; font-family: var(--font--second-font);">JOIN THE LAB</div>
                </a>
              </div>
            </div>
          </div>

          <div class="singularity-footer-wrap">
            <div class="singularity-emblem-holder">
              <div class="singularity-emblem-glow"></div>
              <img src="/images/singularity_logo.webp" width="140" height="140" loading="lazy" decoding="async" alt="Singularity Emblem" class="singularity-footer-emblem" />
            </div>
            <h1 class="singularity-footer-wordmark">SINGULARITY</h1>
          </div>

          <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.25rem;">
            <p class="top-text" style="color: rgba(255,255,255,0.5); font-size: 0.75rem; margin: 0;">&copy; ${new Date().getFullYear()} SINGULARITY STUDENT RESEARCH LAB. ALL RIGHTS RESERVED.</p>
            <p class="top-text footer-creator-mark" style="color: rgba(255,255,255,0.4); font-size: 0.75rem; margin: 0; letter-spacing: 0.02em;">
              Created by <a href="/labs/bhaskaracharya" class="footer-credit-link" style="color: rgba(255,255,255,0.55); text-decoration: none;">Bhaskaracharya Lab</a> (<a href="https://github.com/YUVRAJ-SINGH-3178" target="_blank" rel="noopener noreferrer" class="footer-credit-link" style="color: rgba(255,255,255,0.55); text-decoration: none;">Yuvraj Singh</a>)
            </p>
            <p class="top-text" style="color: rgba(255,255,255,0.5); font-size: 0.75rem; margin: 0;">SRM UNIVERSITY-AP, AMARAVATI</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
`;

const HEAD_STYLES = `
    .singularity-emblem-holder {
      position: relative;
      margin-bottom: 2rem;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }

    .singularity-emblem-glow {
      position: absolute;
      width: 220px;
      height: 220px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(0, 0, 0, 0) 75%);
      border-radius: 50%;
      pointer-events: none;
      animation: singularityGlowPulse 4s ease-in-out infinite alternate;
    }

    @keyframes singularityGlowPulse {
      0% { transform: scale(0.85); opacity: 0.5; }
      100% { transform: scale(1.25); opacity: 0.95; }
    }

    .singularity-3d-emblem {
      width: clamp(110px, 14vw, 190px);
      height: auto;
      display: block;
      filter: drop-shadow(0 0 25px rgba(255, 255, 255, 0.35)) drop-shadow(0 15px 35px rgba(0, 0, 0, 0.9));
      animation: singularityFloat 6s ease-in-out infinite;
      user-select: none;
      pointer-events: none;
    }

    @keyframes singularityFloat {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(1deg); }
    }

    .singularity-footer-wrap {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 3rem 0 1.5rem 0;
      user-select: none;
    }

    .singularity-footer-emblem {
      width: clamp(80px, 10vw, 140px);
      height: auto;
      margin-bottom: -1rem;
      filter: drop-shadow(0 0 25px rgba(255, 255, 255, 0.3));
      opacity: 0.95;
    }

    .singularity-footer-wordmark {
      font-family: var(--font-heading) !important;
      font-size: clamp(1.8rem, 8vw, 7rem) !important;
      font-weight: 700 !important;
      line-height: 1 !important;
      letter-spacing: 0.02em !important;
      text-transform: uppercase !important;
      color: #ffffff !important;
      margin: 0 !important;
      text-align: center !important;
      white-space: nowrap !important;
      word-break: keep-all !important;
      overflow-wrap: normal !important;
      max-width: 100% !important;
      display: block !important;
    }

    .logo-first {
      display: inline-flex !important;
      align-items: center !important;
      text-decoration: none !important;
      gap: 10px !important;
    }

    .nav-brand-icon {
      width: 24px !important;
      height: 24px !important;
      object-fit: contain;
      margin: 0 !important;
      filter: drop-shadow(0 0 8px rgba(255,255,255,0.45));
      vertical-align: middle;
      display: inline-block;
      transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .top-text.logo {
      font-family: var(--font-tech) !important;
      font-size: 1.05rem !important;
      font-weight: 600 !important;
      letter-spacing: 2px !important;
      line-height: 1 !important;
      color: #ffffff !important;
      margin: 0 !important;
    }

    .logo-first:hover .nav-brand-icon {
      transform: rotate(12deg) scale(1.1);
    }
  
    .left-nav-links a:hover .navigation-text-main { opacity: 0.7; }

    @media (min-width: 992px) {
      .sticky-element {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        transform: none !important;
        z-index: 999 !important;
        background: transparent !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
        border: none !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        padding: 0 !important;
        pointer-events: none !important;
      }
      .navbar {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        width: 100% !important;
        max-width: 100% !important;
        padding: 24px 3% !important;
        box-sizing: border-box !important;
        height: auto !important;
        min-height: auto !important;
        background: transparent !important;
        pointer-events: auto !important;
      }
      .make-grid.hide-mobile {
        display: flex !important;
        margin-left: auto !important;
      }
      .nav-menu.first.w-nav-menu {
        display: flex !important;
        flex-direction: row !important;
        gap: 1.85rem !important;
        align-items: center !important;
        justify-content: flex-end !important;
      }
    }
    @media (max-width: 991px) {
      .menu-button,
      .w-nav-button {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 28px !important;
        height: 28px !important;
        min-width: 28px !important;
        padding: 0 !important;
        cursor: pointer !important;
        background: rgba(255, 255, 255, 0.1) !important;
        border: none !important;
        border-radius: 50% !important;
        box-shadow: none !important;
        outline: none !important;
        transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease !important;
      }
      .menu-button:active,
      .w-nav-button:active {
        transform: scale(0.9) !important;
        background: rgba(255, 255, 255, 0.22) !important;
        border: none !important;
      }
      .menu-button .w-icon-nav-menu {
        font-size: 13px !important;
        color: #ffffff !important;
        line-height: 1 !important;
      }
      .sticky-element {
        position: fixed !important;
        top: 8px !important;
        left: 12px !important;
        right: 12px !important;
        width: auto !important;
        max-width: calc(100% - 24px) !important;
        margin: 0 auto !important;
        z-index: 99999 !important;
        background: rgba(10, 12, 18, 0.28) !important;
        backdrop-filter: blur(20px) saturate(180%) !important;
        -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
        border: none !important;
        border-radius: 9999px !important;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35) !important;
        padding: 0.35rem 0.85rem !important;
        pointer-events: auto !important;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
      }
      .navbar {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        width: 100% !important;
        padding: 0 !important;
        background: transparent !important;
        border: none !important;
      }
      .navbar .logo-first {
        display: inline-flex !important;
        align-items: center !important;
        gap: 6px !important;
        text-decoration: none !important;
      }
      .navbar .nav-brand-icon {
        width: 20px !important;
        height: 20px !important;
        margin-right: 0 !important;
        filter: drop-shadow(0 0 8px rgba(255,255,255,0.5)) !important;
      }
      .navbar .top-text.logo {
        font-size: 0.82rem !important;
        letter-spacing: 1.5px !important;
        font-weight: 700 !important;
        line-height: 1 !important;
      }
      .make-grid.hide-mobile,
      .nav-menu.first.w-nav-menu {
        display: none !important;
      }
      .main-hero {
        min-height: auto !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: flex-start !important;
        position: relative !important;
        overflow: visible !important;
        padding-top: 56px !important;
        padding-bottom: 0 !important;
      }
      .top-main {
        position: relative !important;
        z-index: 4 !important;
        width: 100% !important;
        flex: none !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: flex-start !important;
        overflow: hidden !important;
      }
      .hero {
        position: relative !important;
        min-height: auto !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: flex-start !important;
        align-items: center !important;
        padding: 1.5rem 0 0.5rem 0 !important;
        gap: 1.25rem !important;
      }
      .container.down.nm {
        position: relative !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        margin: 0 auto !important;
        padding: 1.25rem 1.25rem 0.5rem 1.25rem !important;
        z-index: 5 !important;
        text-align: center !important;
      }
      .container-bottom {
        position: relative !important;
        bottom: auto !important;
        margin-top: 0.5rem !important;
        padding: 0.5rem 1.25rem !important;
        width: 100% !important;
        z-index: 6 !important;
      }
      .section-content {
        overflow: visible !important;
        position: relative !important;
      }
      .work-banner.style-3 {
        margin-top: 0 !important;
        padding: 1rem 1.25rem 3.5rem 1.25rem !important;
        display: block !important;
        position: relative !important;
        overflow: visible !important;
      }
      .project-big-parallax {
        position: -webkit-sticky !important;
        position: sticky !important;
        top: clamp(68px, 10vh, 78px) !important;
        height: clamp(500px, 78svh, 660px) !important;
        min-height: 480px !important;
        margin-bottom: 2.5rem !important;
        border-radius: 24px !important;
        overflow: hidden !important;
        background-color: #0b0e12 !important;
        border: 1px solid rgba(255, 255, 255, 0.14) !important;
        border-top: 1px solid rgba(255, 255, 255, 0.25) !important;
        box-shadow: 0 -14px 35px rgba(0, 0, 0, 0.8), 0 25px 50px rgba(0, 0, 0, 0.95) !important;
        opacity: 1 !important;
        visibility: visible !important;
        will-change: transform;
        transform: translate3d(0, 0, 0);
        -webkit-transform: translate3d(0, 0, 0);
      }
      #First.project-big-parallax, .project-big-parallax:nth-of-type(1) { z-index: 10 !important; }
      #Second.project-big-parallax, .project-big-parallax:nth-of-type(2) { z-index: 11 !important; }
      #Third.project-big-parallax, .project-big-parallax:nth-of-type(3) { z-index: 12 !important; }
      #Fourth.project-big-parallax, .project-big-parallax:nth-of-type(4) { z-index: 13 !important; }
      #Fifth.project-big-parallax, .project-big-parallax:nth-of-type(5) { z-index: 14 !important; }
      #Sixth.project-big-parallax, .project-big-parallax:nth-of-type(6) { z-index: 15 !important; }
      #Seventh.project-big-parallax, .project-big-parallax:nth-of-type(7) { z-index: 16 !important; }
      .project-big-parallax:last-child { margin-bottom: 3.5rem !important; }

      .project-big-parallax .view-more,
      .view-more {
        position: absolute !important;
        top: 1.25rem !important;
        right: 1.25rem !important;
        width: auto !important;
        min-width: 120px !important;
        max-width: fit-content !important;
        height: auto !important;
        min-height: 32px !important;
        box-sizing: border-box !important;
        z-index: 4 !important;
        background: rgba(255, 255, 255, 0.16) !important;
        backdrop-filter: blur(14px) !important;
        -webkit-backdrop-filter: blur(14px) !important;
        border: 1px solid rgba(255, 255, 255, 0.35) !important;
        color: #ffffff !important;
        font-family: var(--font-tech, 'Michroma', sans-serif) !important;
        font-size: 0.72rem !important;
        font-weight: 600 !important;
        letter-spacing: 0.08em !important;
        text-transform: uppercase !important;
        white-space: nowrap !important;
        word-break: keep-all !important;
        overflow-wrap: normal !important;
        padding: 0.45rem 1.15rem !important;
        border-radius: 9999px !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        text-align: center !important;
        line-height: 1 !important;
        opacity: 1 !important;
        visibility: visible !important;
        overflow: visible !important;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4) !important;
        pointer-events: none !important;
      }

      /* Centered Mobile Footer */
      .footer {
        padding: 3.5rem 1.25rem 2rem 1.25rem !important;
        text-align: center !important;
      }
      .footer .container {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        text-align: center !important;
      }
      .footer .container > div:first-child,
      .footer div[style*="grid-template-columns"],
      .footer .grid-footer {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        text-align: center !important;
        gap: 2.5rem !important;
        margin-bottom: 3.5rem !important;
        width: 100% !important;
      }
      .footer-left,
      .footer-right,
      .footer-col {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        text-align: center !important;
        width: 100% !important;
        max-width: 480px !important;
        margin: 0 auto !important;
      }
      .footer-left .about-title.effect.small,
      .footer-left .about-title,
      .footer-left .p-chat,
      .footer-right .top-text,
      .footer-left .top-text {
        text-align: center !important;
      }
      .social-content.for-footer,
      .social-menu-wrapper {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        margin: 0 auto !important;
        gap: 1rem !important;
      }
      .footer-right > div,
      .footer-links-wrap {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        width: 100% !important;
      }
      .footer-right .button-link,
      .footer-quick-link {
        justify-content: center !important;
        align-items: center !important;
        text-align: center !important;
      }
      .singularity-footer-wrap {
        width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 2rem 0.5rem 1.5rem 0.5rem !important;
        text-align: center !important;
        overflow: visible !important;
      }
      .singularity-footer-wordmark {
        font-family: var(--font-heading) !important;
        font-size: clamp(1.6rem, 7.8vw, 3.8rem) !important;
        font-weight: 700 !important;
        line-height: 1 !important;
        letter-spacing: 0.02em !important;
        text-transform: uppercase !important;
        color: #ffffff !important;
        margin: 0 !important;
        text-align: center !important;
        white-space: nowrap !important;
        word-break: keep-all !important;
        overflow-wrap: normal !important;
        max-width: 100% !important;
        display: block !important;
      }
      .singularity-footer-emblem {
        width: clamp(70px, 16vw, 110px) !important;
        margin-bottom: -0.5rem !important;
      }
      .footer div[style*="border-top"] {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        text-align: center !important;
        gap: 0.6rem !important;
        width: 100% !important;
        padding-top: 1.5rem !important;
      }
      .footer div[style*="border-top"] p {
        text-align: center !important;
        margin: 0 !important;
      }
    }
    .footer-credit-link {
      transition: color 0.2s ease !important;
      display: inline !important;
    }
    .footer-credit-link:hover {
      color: rgba(255, 255, 255, 0.95) !important;
      text-decoration: underline !important;
      text-underline-offset: 2px !important;
    }
    /* =========================================================
       BIG TYPOGRAPHY DUAL INFINITE MARQUEE
       ========================================================= */
    .big-typography-marquee-wrap {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      padding: 1.85rem 0;
      position: relative;
      overflow: hidden;
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.06);
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.45);
      -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, transparent 100%);
      mask-image: linear-gradient(90deg, transparent 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, transparent 100%);
    }

    .marquee-track-row {
      display: flex;
      width: 100%;
      overflow: hidden;
      user-select: none;
    }

    .marquee-track-inner {
      display: flex;
      flex-shrink: 0;
      gap: 1.5rem;
      align-items: center;
      will-change: transform;
    }

    .marquee-track-inner.move-left {
      animation: marqueeScrollLeft 26s linear infinite;
    }

    .marquee-track-inner.move-right {
      animation: marqueeScrollRight 30s linear infinite;
    }

    .big-typography-marquee-wrap:hover .marquee-track-inner {
      animation-play-state: paused;
    }

    @keyframes marqueeScrollLeft {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    @keyframes marqueeScrollRight {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }

    .marquee-bold-text {
      font-family: 'Oswald', var(--font-heading), -apple-system, sans-serif !important;
      font-size: clamp(2.2rem, 5.2vw, 4.8rem) !important;
      font-weight: 700 !important;
      line-height: 1 !important;
      text-transform: uppercase !important;
      color: #ffffff !important;
      white-space: nowrap !important;
      letter-spacing: -0.01em !important;
      display: inline-flex !important;
      align-items: center !important;
      gap: 1.5rem !important;
    }

    .marquee-bold-text.text-outline {
      color: transparent !important;
      -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.65) !important;
      transition: all 0.3s ease !important;
    }

    .marquee-bold-text.text-outline:hover {
      color: #ffffff !important;
      -webkit-text-stroke: 1.5px #ffffff !important;
    }

    .marquee-dot {
      color: #60a5fa !important;
      -webkit-text-stroke: 0 !important;
      font-size: 0.7em !important;
      vertical-align: middle !important;
      display: inline-block !important;
      opacity: 0.85 !important;
    }
  `;

const PROJECT_DATA = `{
  "history": [
    {
      "breakpoints": [],
      "aspectRatio": 3.1078886310904874,
      "userDownsample": 1,
      "states": {
        "appear": [],
        "scroll": [],
        "hover": [],
        "mousemove": []
      },
      "effects": [],
      "anchorPoint": "center",
      "mouseMomentum": 1,
      "mask": 0,
      "maskDepthLayer": 1,
      "layerType": "text",
      "width": 1,
      "widthMode": "relative",
      "height": 403.48611862236226,
      "heightMode": "fixed",
      "left": 0.5,
      "top": 0.35,
      "rotation": 0,
      "fontSize": 0.3,
      "lineHeight": 0.9097360178173752,
      "letterSpacing": 0.015,
      "fontFamily": "Humane",
      "fontStyle": "regular",
      "fontWeight": "400",
      "textAlign": "center",
      "textContent": "SINGULARITY",
      "fill": [
        "#FFFFFF"
      ],
      "fontSizeMode": "relative",
      "noTextAsHtml": false,
      "fontCSS": {
        "family": "Humane",
        "src": "https://assets.unicorn.studio/fonts/studio_picks/Humane%202.0%2FHumane-Regular.ttf"
      },
      "compiledFragmentShaders": [
        "#version 300 es\\nprecision highp float;\\nin vec2 vTextureCoord;\\nin vec3 vVertexPosition;uniform vec2 uMousePos;\\nuniform sampler2D uTexture;const float STEPS = 24.0;\\nconst float PI = 3.1415926;out vec4 fragColor;vec4 getNormalOutput(vec4 color, vec4 background) {\\nreturn mix(background, color + background * (1.0 - color.a), 1.0000);\\n}vec4 getOutputByMode(vec4 color, vec4 background) {\\nreturn getNormalOutput(color, background);\\n}void main() {\\nvec2 uv = vTextureCoord;\\nvec2 pos = vec2(0);pos = mix(vec2(0), (uMousePos - 0.5), 0.0000);uv -= pos;vec4 background = vec4(0);\\nvec4 color = texture(uTexture, uv);vec4 col = getOutputByMode(color, background);fragColor = col;\\n}"
      ],
      "compiledVertexShaders": [
        "#version 300 es\\nprecision highp float;in vec3 aVertexPosition;\\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\\nuniform mat4 uPMatrix;\\nuniform mat4 uTextureMatrix;\\nuniform vec2 uMousePos;out vec2 vTextureCoord;\\nout vec3 vVertexPosition;void main() {\\nfloat angleX = uMousePos.y * 0.5 - 0.25;\\nfloat angleY = (1.-uMousePos.x) * 0.5 - 0.25;mat4 rotateX = mat4(1.0, 0.0, 0.0, 0.0,\\n0.0, cos(angleX), -sin(angleX), 0.0,\\n0.0, sin(angleX), cos(angleX), 0.0,\\n0.0, 0.0, 0.0, 1.0);\\nmat4 rotateY = mat4(cos(angleY), 0.0, sin(angleY), 0.0,\\n0.0, 1.0, 0.0, 0.0,\\n-sin(angleY), 0.0, cos(angleY), 0.0,\\n0.0, 0.0, 0.0, 1.0);mat4 rotationMatrix = rotateX * rotateY;\\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\\nvVertexPosition = (rotationMatrix * vec4(aVertexPosition, 1.0)).xyz;\\nvTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\\n}"
      ],
      "data": {
        "uniforms": {}
      },
      "id": "text",
      "windowWidth": 1232
    },
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
        "#version 300 es\\nprecision mediump float;in vec3 vVertexPosition;\\nin vec2 vTextureCoord;\\nin float zPos;uniform sampler2D uTexture;float random(vec2 seed) {\\nreturn fract(sin(dot(seed.xy, vec2(12.9898, 78.233))) * 43758.5453);\\n}out vec4 fragColor;\\nvoid main() {\\nvec2 uv = vTextureCoord;\\nvec4 color = texture(uTexture, uv);float intensity = 1.0000 * 0.5;float rad = (0.9990 - 0.25) * -2. * 3.14159;\\nvec2 rotatedLightPosition = vec2(cos(rad), sin(rad));\\nvec3 lightPosition = vec3(vec2(0.5) * rotatedLightPosition * 2., 1.0);float diff = max(dot(normalize(vVertexPosition), lightPosition), 0.0);\\ncolor.rgb += (diff * intensity - intensity);float dither = (random(gl_FragCoord.xy) - 0.5) / 255.0;\\ncolor.rgb += dither;\\nfragColor = color;}"
      ],
      "compiledVertexShaders": [
        "#version 300 es\\nprecision mediump float;in vec3 aVertexPosition;\\nin vec2 aTextureCoord;out vec2 vTextureCoord;\\nout vec3 vVertexPosition;\\nout float zPos;uniform sampler2D uCustomTexture;\\nuniform vec2 uMousePos;\\nuniform vec2 uResolution;float ease (int easingFunc, float t) {\\nreturn t < 0.5 ? 2.0 * t * t : -1.0 + (4.0 - 2.0 * t) * t;\\n}float bezier(float t) {\\nreturn ease(3, t);\\n}mat2 rot(float a) {\\nreturn mat2(cos(a),-sin(a),sin(a),cos(a));\\n}vec3 bulge(vec3 pos) {\\nvec2 aspectRatio = vec2(uResolution.x/uResolution.y, 1);\\nvec2 mousePosAdjusted = mix((vec2(0.5, 0.5) - 0.5) * 2., (uMousePos - 0.5) * 2., 1.0000);\\nvec2 skew = vec2(0.5000, 1. - 0.5000);\\nmat2 rotation = rot(0.6210 * 2. * 3.14159);float dist = distance(pos.xy * aspectRatio * rotation * skew, mousePosAdjusted * aspectRatio * rotation * skew);float t = max(0., 1. - dist/0.3000);\\nfloat bulge = bezier(t) * (0.2500 - 0.5);float luma = dot(texture(uCustomTexture, (pos.xy + 1.) * 0.5).rgb, vec3(0.299, 0.587, 0.114));bulge += luma * bezier(t) * 0.0000;\\nbulge = min(1., bulge);pos.xy += bulge * pos.xy;\\npos.z -= bulge;\\nreturn pos;\\n}void main() {\\nvec3 pos = bulge(aVertexPosition);\\nvec3 pos_dx = bulge(aVertexPosition + vec3(0.01, 0.0, 0.0));\\nvec3 pos_dy = bulge(aVertexPosition + vec3(0.0, 0.01, 0.0));\\nvec3 dx = pos_dx - pos;\\nvec3 dy = pos_dy - pos;\\nvec3 normal = normalize(cross(dx, dy));vVertexPosition = normal;zPos = pos.z;gl_Position = vec4(pos, 1.0);\\nvTextureCoord = aTextureCoord;\\n}"
      ],
      "data": {
        "depth": true,
        "uniforms": {},
        "isBackground": false,
        "heightSegments": 128,
        "widthSegments": 128
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
        "#version 300 es\\nprecision mediump float;in vec3 aVertexPosition;\\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\\nuniform mat4 uPMatrix;\\nuniform mat4 uTextureMatrix;out vec2 vTextureCoord;\\nout vec3 vVertexPosition;void main() {\\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\\nvTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\\n}",
        "#version 300 es\\nprecision mediump float;in vec3 aVertexPosition;\\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\\nuniform mat4 uPMatrix;out vec2 vTextureCoord;\\nout vec3 vVertexPosition;void main() {\\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\\nvTextureCoord = aTextureCoord;\\n}"
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
    "dpi": 1,
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
  "/js/lenis.min.js",
  "/js/unicornStudio.umd.js",
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let rafId: number | undefined;
    let resizeHandler: (() => void) | null = null;

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

      const scheduleTask = (fn: () => void) => {
        if ('requestIdleCallback' in window) {
          (window as any).requestIdleCallback(fn, { timeout: 1500 });
        } else {
          setTimeout(fn, 50);
        }
      };

      scheduleTask(() => {
                if ((window as any).__lenisInstance) {
          try {
            (window as any).__lenisInstance.destroy();
          } catch (e) {}
        }

        if (typeof (window as any).Lenis !== 'undefined') {
          const lenis = new (window as any).Lenis({
            duration: 0.9,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            syncTouch: false,
            touchMultiplier: 1,
            wheelMultiplier: 1,
            autoResize: true,
            prevent: (node: HTMLElement) => {
              return node?.closest?.('.menu-wrapper') !== null || node?.closest?.('[data-lenis-prevent]') !== null;
            }
          });
          (window as any).__lenisInstance = lenis;

          function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
          }
          rafId = requestAnimationFrame(raf);
        }

                if ((window as any).UnicornStudio && (window as any).UnicornStudio.init) {
          (window as any).UnicornStudio.init();
          let resizeTimer: any;
          resizeHandler = function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
              if ((window as any).UnicornStudio && (window as any).UnicornStudio.init) {
                (window as any).UnicornStudio.init();
              }
            }, 100);
          };
          window.addEventListener("resize", resizeHandler, { passive: true });
        }
      });
    })();

    return () => {
      styleEl.remove();
      dataScript.remove();
      if (rafId) cancelAnimationFrame(rafId);
      if ((window as any).__lenisInstance) {
        try { (window as any).__lenisInstance.destroy(); } catch (e) {}
        (window as any).__lenisInstance = null;
      }
      if (resizeHandler) window.removeEventListener("resize", resizeHandler);
      if ((window as any).ScrollTrigger) {
        (window as any).ScrollTrigger.getAll().forEach((t: any) => t.kill());
      }
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <main
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: BODY_HTML }}
    />
  );
}
