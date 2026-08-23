"use client";

import { useEffect, useRef, useState } from "react";

const BODY_HTML = `
  <div data-w-id="91953398-20e1-8cca-2bd1-effc568176e2" class="fixed-close-button">
    <div data-is-ix2-target="1" class="lottie-x" data-w-id="91953398-20e1-8cca-2bd1-effc568176e3"
      data-animation-type="lottie" data-src="js/hamburger-20animation.json" data-loop="1" data-direction="1"
      data-autoplay="0" data-renderer="svg" data-default-duration="0" data-duration="0" data-loading="eager"
      data-ix2-initial-state="25"></div>
  </div>
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
        <div class="menu-item _03"><a href="/work/work-1" class="button-with-line w-inline-block">
            <div class="button-text-wrapper">
              <div class="button-text">Work</div>
              <div class="button-text">work</div>
            </div>
            <div class="button-line-first">
              <div class="button-line-overlay"></div>
            </div>
          </a></div>
        <div class="menu-item _05"><a href="/contact/contact-1" class="button-with-line w-inline-block">
            <div class="button-text-wrapper">
              <div class="button-text">contact</div>
              <div class="button-text">contact</div>
            </div>
            <div class="button-line-first">
              <div class="button-line-overlay"></div>
            </div>
          </a></div>
        <div class="margin-20">
          <div class="social-menu-wrapper">
            <div class="social-content for-footer"><a href="https://www.instagram.com/thesingularity.srmap" target="_blank"
                class="social-wrapper w-inline-block" title="Instagram"><img width="18" loading="lazy" alt="Instagram"
                  src="images/instagram-20-5-.webp" class="social-icon" /><img width="18" loading="lazy" alt="Instagram"
                  src="images/instagram-20-5-.webp" class="social-icon" /></a><a href="https://www.linkedin.com/company/singularity-student-lab-srmap/"
                target="_blank" class="social-wrapper w-inline-block" title="LinkedIn"><img width="18" loading="lazy" alt="LinkedIn"
                  src="images/linkedin-icon.svg" class="social-icon second" /><img width="18" loading="lazy" alt="LinkedIn"
                  src="images/linkedin-icon.svg" class="social-icon second" /></a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="Top" class="main-hero">
    <div data-w-id="62bf61a9-91ad-d080-59a9-9d0bda0e906f" class="sticky-element">
      <div data-w-id="00cdae18-38ec-1b3e-ec88-656f2336553d" data-animation="default" data-collapse="medium"
        data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
        <!-- Logo -->
        <a href="/" id="w-node-_00cdae18-38ec-1b3e-ec88-656f2336553e-2336553d" aria-current="page" class="logo-first w-inline-block w--current">
          <img src="images/singularity_logo.webp" alt="Singularity" class="nav-brand-icon" />
          <p class="top-text logo">SINGULARITY</p>
        </a>

        <!-- Right Links -->
        <div id="w-node-_00cdae18-38ec-1b3e-ec88-656f23365540-2336553d" class="make-grid hide-mobile">
          <nav role="navigation" class="nav-menu first w-nav-menu">
            <a href="/about" data-wf--button-arrow--variant="dark" class="button-link w-inline-block">
              <div class="social-circle-small"><img width="256" loading="lazy" alt="" src="images/circle.webp" class="nav-arrow-move" /></div>
              <div class="navigation-text-main" style="text-transform: uppercase;">ABOUT US</div>
            </a>
            <a href="/join" data-wf--button-arrow--variant="dark" class="button-link w-inline-block">
              <div class="social-circle-small"><img width="256" loading="lazy" alt="" src="images/circle.webp" class="nav-arrow-move" /></div>
              <div class="navigation-text-main" style="text-transform: uppercase;">JOIN</div>
            </a>
          </nav>
        </div>

        <div id="w-node-_00cdae18-38ec-1b3e-ec88-656f23365547-2336553d" class="last-part"><div class="menu-button w-nav-button"><div class="w-icon-nav-menu"></div></div></div>
      </div>
    </div>
    <div class="top-main">
      <div class="hero">
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
        <div class="container down nm">
          <div class="right-studio-text"><img src="images/singularity_scene-1-.png" loading="lazy" width="1232"
              sizes="(max-width: 1919px) 100vw, 1232px" alt=""
              srcset="images/singularity_scene-1-p-500.png 500w, images/singularity_scene-1-p-800.png 800w, images/singularity_scene-1-p-1080.png 1080w, images/singularity_scene-1-.png 1996w"
              class="logo-main" />
            <div class="max-w-center _300">
              <h2
                data-wf-target="[[[&quot;697344b93b0e03014bb988f6&quot;,&quot;acdba564-5114-c746-a53b-a772c0bc1daf&quot;],[]]]"
                class="about-title small">We explore, build, and innovate through research, engineering, and deep technology.</h2>
            </div>
          </div>
        </div>
        <div data-us-project-src="singularityProjectData" class="absolute-effect"></div>
      </div>
    </div>
    <div data-w-id="2c75e975-8645-c1b5-d51e-88781d3693c8"  class="section-content">
      <div class="work-banner style-3 page-content">
<div class="line-left-wrapper w-hidden-small w-hidden-tiny">
          <a href="#First" class="menu-link-block w-inline-block">
            <div style="opacity:0" class="menu-item-text">01</div>
            <div class="menu-line"></div>
          </a>
          <a href="#Second" class="menu-link-block w-inline-block">
            <div style="opacity:0" class="menu-item-text">02</div>
            <div class="menu-line"></div>
          </a>
          <a href="#Third" class="menu-link-block w-inline-block">
            <div style="opacity:0" class="menu-item-text">03</div>
            <div class="menu-line"></div>
          </a>
          <a href="#Fourth" class="menu-link-block w-inline-block">
            <div style="opacity:0" class="menu-item-text">04</div>
            <div class="menu-line"></div>
          </a>
          <a href="#Fifth" class="menu-link-block w-inline-block">
            <div style="opacity:0" class="menu-item-text">05</div>
            <div class="menu-line"></div>
          </a>
          <a href="#Sixth" class="menu-link-block w-inline-block">
            <div style="opacity:0" class="menu-item-text">06</div>
            <div class="menu-line"></div>
          </a>
          <a href="#Seventh" class="menu-link-block w-inline-block">
            <div style="opacity:0" class="menu-item-text">07</div>
            <div class="menu-line"></div>
          </a>
        </div>

        <div id="First" class="project-big-parallax">
          <div class="w-dyn-list">
            <div role="list" class="w-dyn-items">
              <div role="listitem" class="project-full-item w-dyn-item"><a href="/labs/prajna-kritrima"
                  class="work-wrapper-main w-inline-block">
                  <div class="circle-center">
                    <img src="images/aiml_lab_bg.jpg" alt="Prajna Kritrima Lab" class="work-photo-first" />
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
                </a></div>
            </div>
          </div>
        </div>
        <div id="Second" class="project-big-parallax">
          <div class="w-dyn-list">
            <div role="list" class="w-dyn-items">
              <div role="listitem" class="project-full-item w-dyn-item"><a href="/labs/aanu-tattva"
                  class="work-wrapper-main w-inline-block">
                  <div class="circle-center">
                    <img src="images/quantum_lab_bg.jpg" alt="Aanu Tattva Lab" class="work-photo-first" />
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
                </a></div>
            </div>
          </div>
        </div>
        <div id="Third" class="project-big-parallax">
          <div class="w-dyn-list">
            <div role="list" class="w-dyn-items">
              <div role="listitem" class="project-full-item w-dyn-item"><a href="/labs/chitra-darshan"
                  class="work-wrapper-main w-inline-block">
                  <div class="circle-center">
                    <img src="images/gamedev_lab_bg.png" alt="Chitra Darshan Lab" class="work-photo-first" />
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
                </a></div>
            </div>
          </div>
        </div>
        <div id="Fourth" class="project-big-parallax">
          <div class="w-dyn-list">
            <div role="list" class="w-dyn-items">
              <div role="listitem" class="project-full-item w-dyn-item"><a href="/labs/varahamihira"
                  class="work-wrapper-main w-inline-block">
                  <div class="circle-center">
                    <img src="images/cybersec_lab_bg.png" alt="Varahamihira Lab" class="work-photo-first" />
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
                </a></div>
            </div>
          </div>
        </div>
        <div id="Fifth" class="project-big-parallax">
          <div class="w-dyn-list">
            <div role="list" class="w-dyn-items">
              <div role="listitem" class="project-full-item w-dyn-item"><a href="/labs/bhaskaracharya"
                  class="work-wrapper-main w-inline-block">
                  <div class="circle-center">
                    <img src="images/cloud_lab_bg.jpg" alt="Bhaskaracharya Lab" class="work-photo-first" />
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
                </a></div>
            </div>
          </div>
        </div>
        <div id="Sixth" class="project-big-parallax">
          <div class="w-dyn-list">
            <div role="list" class="w-dyn-items">
              <div role="listitem" class="project-full-item w-dyn-item"><a href="/labs/agastya"
                  class="work-wrapper-main w-inline-block">
                  <div class="circle-center">
                    <img src="images/iot_lab_bg.jpg" alt="Agastya Lab" class="work-photo-first" />
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
                </a></div>
            </div>
          </div>
        </div>
        <div id="Seventh" class="project-big-parallax">
          <div class="w-dyn-list">
            <div role="list" class="w-dyn-items">
              <div role="listitem" class="project-full-item w-dyn-item"><a href="/labs/navya-vigyan"
                  class="work-wrapper-main w-inline-block">
                  <div class="circle-center">
                    <img src="images/interdisciplinary_lab_bg.jpg" alt="Navya Vigyan Lab" class="work-photo-first" />
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
                </a></div>
            </div>
          </div>
        </div>
      </div>
      <!-- SINGULARITY COLLABORATION & RESEARCH METRICS SECTION -->
      <section class="section double">
        <div class="container">
          <div class="grid-goals">
            <div class="max-w-center left">
              <h2 data-w-id="e3a3f7fb-e766-d0aa-b107-460abdcaa337" class="h1 effect second" style="font-family: var(--font-heading); font-size: clamp(2.2rem, 4.2vw, 3.8rem); font-weight: 700; line-height: 1.1; text-transform: uppercase; word-break: keep-all; overflow-wrap: normal; white-space: normal; letter-spacing: -0.01em;">Built by students.<br />Driven by research.</h2>
              <div class="max-w-center lf">
                <p data-w-id="e3a3f7fb-e766-d0aa-b107-460abdcaa33a" class="about-title effect small" style="font-family: var(--font-body); font-size: clamp(0.95rem, 1.25vw, 1.15rem); line-height: 1.65; color: rgba(255, 255, 255, 0.85); font-weight: 300;">
                  From fundamental theory to live deployment — we innovate across all 7 research disciplines at SRM University-AP.</p>
              </div>
            </div>
            <div class="grid-goal">
              <div data-w-id="360a5edb-c801-0266-9048-5867023afedb" class="goal-card white">
                <div class="time-top">
                  <p class="p-chat">SR-209 Lab &bull; 23:42<br /></p>
                </div>
                <div class="flex-chat">
                  <div class="bubble-first _01 absolute"><img src="images/three-dots.svg" loading="lazy" width="30"
                      alt="" /></div>
                  <div class="bubble-first _02">
                    <p class="p-chat white">Hey team! How is the neural training run? 🧠<br /></p>
                  </div>
                </div>
                <div class="flex-chat">
                  <div class="bubble-first _03">
                    <p class="p-chat white">Prajna Kritrima model converged — 99.4% accuracy! ⚡<br /></p>
                  </div>
                </div>
                <div class="flex-chat">
                  <div class="bubble-first _04">
                    <p class="p-chat white">LoRa mesh node from Agastya is transmitting across campus 📡<br /></p>
                  </div>
                </div>
                <div class="time-top add-top">
                  <p style="-webkit-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
                    class="p-chat _01">SR-209 Lab &bull; 23:45<br /></p>
                </div>
                <div class="flex-chat right">
                  <div class="bubble-first _05 green absolute"><img src="images/three-dots.svg" loading="lazy"
                      width="30" alt="" /></div>
                  <div class="bubble-first _06 green">
                    <p class="p-chat white">Deploying to the Bhaskaracharya cloud cluster now 🔥<br /></p>
                  </div>
                </div>
                <div class="flex-chat right">
                  <div class="bubble-first _07 green">
                    <p class="p-chat white">All 7 research labs synchronized.<br /></p>
                  </div>
                </div>
                <div class="flex-chat">
                  <div class="bubble-first _08">
                    <p class="p-chat white">Singularity is live! 🚀<br /></p>
                  </div>
                </div>
              </div>
              <div class="photo-wrapper"><img loading="lazy" src="images/group-discussion-scene.webp" alt="Singularity Research Team"
                  class="work-photo-first" /></div>
            </div>
          </div>
          <div class="margin-100">
            <div data-w-id="a0960034-c8d1-d137-9f08-7b4be3fdd731" class="snapshot-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 2rem; text-align: center;">
              
              <!-- Metric 1: 07 Research Labs -->
              <div class="journey-number-wrap" style="display: flex; flex-direction: column; align-items: center;">
                <div class="clean-metric-num" style="font-family: var(--font-tech); font-size: clamp(2.8rem, 5.5vw, 5.5rem); font-weight: 700; line-height: 1; color: #ffffff; letter-spacing: -0.01em; margin-bottom: 0.8rem;">07</div>
                <p class="p-fun" style="font-family: var(--font-body); font-size: 0.95rem; color: rgba(255,255,255,0.7); margin: 0;">Research Labs</p>
              </div>

              <!-- Metric 2: 25+ Student Researchers -->
              <div class="journey-number-wrap" style="display: flex; flex-direction: column; align-items: center;">
                <div class="clean-metric-num" style="font-family: var(--font-tech); font-size: clamp(2.8rem, 5.5vw, 5.5rem); font-weight: 700; line-height: 1; color: #ffffff; letter-spacing: -0.01em; margin-bottom: 0.8rem;">25+</div>
                <p class="p-fun" style="font-family: var(--font-body); font-size: 0.95rem; color: rgba(255,255,255,0.7); margin: 0;">Student Researchers</p>
              </div>

              <!-- Metric 3: 14+ Flagship Projects -->
              <div class="journey-number-wrap" style="display: flex; flex-direction: column; align-items: center;">
                <div class="clean-metric-num" style="font-family: var(--font-tech); font-size: clamp(2.8rem, 5.5vw, 5.5rem); font-weight: 700; line-height: 1; color: #ffffff; letter-spacing: -0.01em; margin-bottom: 0.8rem;">14+</div>
                <p class="p-fun" style="font-family: var(--font-body); font-size: 0.95rem; color: rgba(255,255,255,0.7); margin: 0;">Flagship Projects</p>
              </div>

              <!-- Metric 4: 20+ Open Repositories -->
              <div class="journey-number-wrap" style="display: flex; flex-direction: column; align-items: center;">
                <div class="clean-metric-num" style="font-family: var(--font-tech); font-size: clamp(2.8rem, 5.5vw, 5.5rem); font-weight: 700; line-height: 1; color: #ffffff; letter-spacing: -0.01em; margin-bottom: 0.8rem;">20+</div>
                <p class="p-fun" style="font-family: var(--font-body); font-size: 0.95rem; color: rgba(255,255,255,0.7); margin: 0;">Open Repositories</p>
              </div>

              <!-- Metric 5: 100% Student Driven -->
              <div class="journey-number-wrap" style="display: flex; flex-direction: column; align-items: center;">
                <div class="clean-metric-num" style="font-family: var(--font-tech); font-size: clamp(2.8rem, 5.5vw, 5.5rem); font-weight: 700; line-height: 1; color: #ffffff; letter-spacing: -0.01em; margin-bottom: 0.8rem;">100%</div>
                <p class="p-fun" style="font-family: var(--font-body); font-size: 0.95rem; color: rgba(255,255,255,0.7); margin: 0;">Student Driven</p>
              </div>
            </div>
          </div>
        </div>
      </section><div class="footer" style="padding-top: 6rem; padding-bottom: 2rem;">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 4rem; margin-bottom: 6rem;">
            <!-- Left Column: Contact -->
            <div class="footer-left">
              <p class="top-text" style="color: rgba(255,255,255,0.5); font-size: 0.85rem; letter-spacing: 2px;">CONTACT US</p>
              <div class="margin-20">
                <h2 class="about-title effect small" style="font-family: var(--font--second-font); font-size: 1.2rem; line-height: 1.6; color: #fff;">
                  Singularity Lab<br />
                  SR - 209, Academic Block, SRM AP<br />
                  Amaravati, AP 522240
                </h2>
              </div>
              <div class="margin-20">
                <a href="tel:+918632343000" style="text-decoration: none;">
                  <h2 class="about-title effect small" style="font-family: var(--font--second-font); font-size: 1.2rem; color: #fff; transition: opacity 0.3s ease;">+91 863 234 3000</h2>
                </a>
              </div>
              <div class="margin-20">
                <a href="mailto:singularitylab@srmap.edu.in" style="text-decoration: none;">
                  <h2 class="about-title effect small" style="font-family: var(--font--second-font); font-size: 1.2rem; color: #fff; transition: opacity 0.3s ease;">singularitylab@srmap.edu.in</h2>
                </a>
              </div>
            </div>

            <!-- Middle Column: Quick Links -->
            <div class="footer-left">
              <p class="top-text" style="color: rgba(255,255,255,0.5); font-size: 0.85rem; letter-spacing: 2px;">QUICK LINKS</p>
              <div class="margin-20 flx-ft" style="display: flex; flex-direction: column; gap: 1.2rem;">
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

            <!-- Right Column: Socials & Copyright -->
            <div class="footer-left">
              <p class="top-text" style="color: rgba(255,255,255,0.5); font-size: 0.85rem; letter-spacing: 2px;">SOCIAL</p>
              <div class="margin-20">
                <div class="social-menu-wrapper" style="display: flex; gap: 1rem;">
                  <a href="https://www.instagram.com/thesingularity.srmap" target="_blank" class="social-wrapper w-inline-block" title="Instagram" style="opacity: 0.8; transition: opacity 0.3s ease; width: 50px; height: 50px; border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <img width="22" loading="lazy" alt="Instagram" src="images/instagram-20-5-.webp" class="social-icon" />
                  </a>
                  <a href="https://www.linkedin.com/company/singularity-student-lab-srmap/" target="_blank" class="social-wrapper w-inline-block" title="LinkedIn" style="opacity: 0.8; transition: opacity 0.3s ease; width: 50px; height: 50px; border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <img width="22" loading="lazy" alt="LinkedIn" src="images/linkedin-icon.svg" class="social-icon" />
                  </a>
                </div>
              </div>
              <div class="margin-40" style="margin-top: 4rem;">
                <p class="p-footer" style="color: rgba(255,255,255,0.6); font-size: 1rem; line-height: 1.5;">© 2026 Singularity Student Lab<br/>SRM University-AP</p>
              </div>
            </div>
          </div>

<style>
.footer-left a:hover h2 { opacity: 0.7 !important; }
.footer-left .button-link:hover { transform: translateX(10px) !important; }
.footer-left .social-wrapper:hover { opacity: 1 !important; border-color: rgba(255,255,255,0.5) !important; }
</style>
          <!-- The HUGE Singularity Wordmark -->
          <div class="singularity-footer-wrap">
            <h1 class="singularity-footer-wordmark">SINGULARITY</h1>
          </div>
          
        </div>
      </div>
<div class="absolute-main"></div>
  </div>

  
  
  
  
  
  
  
  <!-- Lenis setup -->
  

  
  
`;

const HEAD_STYLES = `
    @media (min-width:992px) {
      html.w-mod-js:not(.w-mod-ix) [data-w-id="62bf61a9-91ad-d080-59a9-9d0bda0e906f"] {
        opacity: 0;
      }

      html.w-mod-js:not(.w-mod-ix) [data-w-id="fa34d70a-0972-fc85-5e22-95a787cde496"] {
        opacity: 0;
      }

      html.w-mod-js:not(.w-mod-ix) [data-w-id="5133389f-a6ab-567c-a30e-eba9454d9470"] {
        opacity: 0;
      }

      html.w-mod-js:not(.w-mod-ix) [data-w-id="351e57d5-6072-8036-a947-608cfdeae359"] {
        opacity: 0;
      }

      html.w-mod-js:not(.w-mod-ix) [data-w-id="9f58a389-38f5-d1df-d057-c11a01f8c673"] {
        opacity: 0;
      }

      html.w-mod-js:not(.w-mod-ix) [data-w-id="4087aa29-ac7d-f7a2-c538-546571bef595"] {
        opacity: 0;
      }

      html.w-mod-js:not(.w-mod-ix) [data-w-id="aaa22f73-7a8c-4fc3-cb2b-0e3beb7a3b94"] {
        opacity: 0;
      }

      html.w-mod-js:not(.w-mod-ix) [data-w-id="fdaebbe9-d2fe-bacc-d7a3-f8bc717aea30"] {
        opacity: 0;
      }
    }
      .container.down.nm {
      top: clamp(14vh, 18vh, 22vh) !important;
    }

    .right-studio-text {
      grid-row-gap: 2.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
      position: relative;
      z-index: 5;
    }

    .max-w-center._300 {
      max-width: 520px;
      margin: 2rem auto 0 auto;
      text-align: center;
      position: relative;
      z-index: 10;
    }

    .max-w-center._300 .about-title.small {
      font-size: clamp(0.95rem, 1.25vw, 1.2rem);
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.85);
      font-weight: 400;
      letter-spacing: -0.01em;
      text-align: center;
      margin: 0;
    }

  

    html.w-mod-js:not(.w-mod-ix3) :is(.testimonials-section, [data-wf-target*='["697344b93b0e03014bb988f6","acdba564-5114-c746-a53b-a772c0bc1daf"]'], [data-wf-target*='["697344b93b0e03014bb988f6","22be040a-0b57-5058-5772-5dd92eb3fd4a"]']) {
      visibility: hidden !important;
    }
  

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
      font-family: var(--font-heading);
      font-size: clamp(2.5rem, 8.5vw, 8.5rem);
      font-weight: 700;
      line-height: 0.9;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      color: #ffffff;
      margin: 0;
      text-align: center;
      white-space: nowrap;
    }

    .nav-brand-icon {
      width: 22px;
      height: 22px;
      object-fit: contain;
      margin-right: 8px;
      filter: drop-shadow(0 0 8px rgba(255,255,255,0.4));
      vertical-align: middle;
      display: inline-block;
      transition: transform 0.3s ease;
    }

    .logo-first:hover .nav-brand-icon {
      transform: rotate(15deg) scale(1.15);
    }
  

.left-nav-links a:hover .navigation-text-main { opacity: 0.7; }


@media (min-width: 992px) {
  .nav-menu.first.w-nav-menu { display: flex !important; flex-direction: row; gap: 1rem; align-items: center; justify-content: flex-end; }
}
@media (max-width: 991px) {
  .nav-menu.first.w-nav-menu { display: none !important; }
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
    "dpi": 1.5,
    "scale": 1,
    "includeLogo": false,
    "isProduction": false,
    "freePlan": false
  },
  "version": "2.0.4",
  "id": "rr40leL2y23o0QnzrPWs"
}`;

// External scripts to load in order (head scripts first, then body scripts)
const HEAD_SCRIPTS = [
  "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js",
  "https://unpkg.com/lenis@1.3.4/dist/lenis.min.js",
  "/js/unicornStudio.umd.js",
];

const BODY_SCRIPTS = [
  "/js/jquery.js?site=697344b93b0e03014bb98903",
  "/js/webflow.schunk.f2efb3c5440a81cf.js",
  "/js/webflow.schunk.e660ac82af0c6ce9.js",
  "/js/webflow.schunk.dac51c455b7e76af.js",
  "/js/webflow-script.js",
  "/js/gsap.min.js",
  "/js/splittext.min.js",
  "/js/scrolltrigger.min.js",
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

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // First effect: just flip mounted to true (triggers client-only render)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Second effect: once HTML is in the DOM, inject styles and load scripts
  useEffect(() => {
    if (!mounted) return;

    // 1. Inject styles into head
    const styleEl = document.createElement("style");
    styleEl.textContent = HEAD_STYLES;
    document.head.appendChild(styleEl);

    // 2. Inject singularityProjectData into head
    const dataScript = document.createElement("script");
    dataScript.id = "singularityProjectData";
    dataScript.type = "application/json";
    dataScript.textContent = PROJECT_DATA;
    document.head.appendChild(dataScript);

    // 3. Load head scripts first (WebFont, Lenis, UnicornStudio)
    (async () => {
      for (const src of HEAD_SCRIPTS) {
        await loadScript(src);
      }

      // Initialize WebFont after it's loaded
      if ((window as any).WebFont) {
        (window as any).WebFont.load({
          google: {
            families: ["Instrument Sans:400,500,600,700", "Michroma", "Oswald:300,400,500,600,700"]
          }
        });
      }

      // 4. Load jQuery first
      await loadScript("/js/jquery.js?site=697344b93b0e03014bb98903");

      // Hold jQuery ready so chunk ready handlers don't fire until ALL chunks are loaded
      (window as any).jQuery.holdReady(true);

      // Load all Webflow chunks (they register modules but won't fire ready handlers yet)
      await loadScript("/js/webflow.schunk.f2efb3c5440a81cf.js");
      await loadScript("/js/webflow.schunk.e660ac82af0c6ce9.js");
      await loadScript("/js/webflow.schunk.dac51c455b7e76af.js");
      await loadScript("/js/webflow-script.js");

      // Load GSAP suite
      await loadScript("/js/gsap.min.js");
      await loadScript("/js/splittext.min.js");
      await loadScript("/js/scrolltrigger.min.js");

      // NOW release jQuery ready — all chunks are loaded and their modules are defined
      (window as any).jQuery.holdReady(false);

      // Force Webflow to initialize on the newly loaded DOM
      if ((window as any).Webflow) {
        (window as any).Webflow.destroy();
        (window as any).Webflow.ready();
        const ix2 = (window as any).Webflow.require('ix2');
        if (ix2) ix2.init();
        
        // Dispatch synthetic events to trigger Webflow's "Page Load" animations
        document.dispatchEvent(new Event('readystatechange'));
        window.dispatchEvent(new Event('load'));
      }

      // 5. After all external scripts, run inline scripts
      const inlineScripts: (() => Promise<void>)[] = [
      () => new Promise<void>((resolve) => { const s = document.createElement("script"); s.textContent = `(function(){// Initialize Lenis
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
      wheelMultiplier: 1,
      infinite: false,
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);})();`; document.body.appendChild(s); resolve(); }),
      () => new Promise<void>((resolve) => { const s = document.createElement("script"); s.textContent = `(function(){
        if (window.UnicornStudio && window.UnicornStudio.init) {
          UnicornStudio.init();
          var resizeTimer;
          window.addEventListener("resize", function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
              if (window.UnicornStudio && window.UnicornStudio.init) {
                UnicornStudio.init();
              }
            }, 100);
          });
        }
      })();`; document.body.appendChild(s); resolve(); }),
      () => new Promise<void>((resolve) => { const s = document.createElement("script"); s.textContent = `(function(){
      const modal = document.querySelector(".modal");
      const closeBtn = document.querySelector(".remove-modal");
      const overlay = document.querySelector(".blur-overlay");

      if (modal) {
        if (!localStorage.getItem("modalShown")) {
          modal.style.display = "flex";
        } else {
          modal.style.display = "none";
        }
      }

      function closeModal() {
        if (modal) {
          modal.style.display = "none";
          localStorage.setItem("modalShown", "true");
        }
      }

      if (closeBtn) closeBtn.addEventListener("click", closeModal);
      if (overlay) overlay.addEventListener("click", closeModal);
    })();`; document.body.appendChild(s); resolve(); }),
      ];

      for (const fn of inlineScripts) {
        await fn();
      }
    })();

    return () => {
      // Cleanup
      styleEl.remove();
      dataScript.remove();
    };
  }, [mounted]);

  // Return null during SSR to avoid hydration mismatch entirely
  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: BODY_HTML }}
    />
  );
}

