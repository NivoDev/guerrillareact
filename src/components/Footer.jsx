import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaSpotify,
  FaItunesNote,
} from "react-icons/fa";
import { GrInstagram, GrYoutube } from "react-icons/gr";
import "../styles/footer.css";
import NewsletterSignup from './NewsletterSignup';

export const Footer = () => {
  return (
    <Foot>
      <Divider aria-hidden="true" />
      <SocialsLabel>Find us</SocialsLabel>
      <Socials>
        <Social href="https://www.facebook.com/guerrillamusicofficial" target="_blank" aria-label="Facebook">
          <FaFacebookF />
        </Social>
        <Social href="https://www.instagram.com/guerrillatrance" target="_blank" aria-label="Instagram">
          <GrInstagram />
        </Social>
        <Social href="https://www.youtube.com/channel/UC7L3nLa8wIVy8hPHAWap_9w" target="_blank" aria-label="YouTube">
          <GrYoutube />
        </Social>
        <Social href="https://www.nutekrecords.com/nutek/guerilla.php" target="_blank" aria-label="Nutek Records">
          <svg
            className="nutekLogo"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="30pt"
            height="30pt"
            viewBox="0 0 581.000000 473.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,473.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <path d="M2700 4593 c-427 -43 -851 -226 -1195 -516 -228 -192 -441 -467 -564 -729 -101 -215 -167 -428 -192 -623 -20 -152 -17 -563 4 -700 56 -357 211 -706 444 -995 143 -178 367 -383 563 -514 190 -128 499 -257 735 -306 128 -26 512 -38 720 -21 437 34 908 259 1259 600 298 290 492 605 596 969 275 958 -95 1955 -926 2499 -266 174 -557 282 -882 327 -103 15 -453 20 -562 9z m540 -63 c341 -34 711 -187 1015 -419 80 -61 261 -237 346 -337 164 -194 317 -461 398 -696 79 -232 111 -430 111 -696 0 -406 -94 -749 -299 -1086 -337 -555 -868 -931 -1476 -1042 -120 -22 -524 -31 -666 -15 -229 26 -439 87 -654 190 -226 108 -423 249 -606 431 -298 298 -493 649 -578 1042 -51 237 -54 699 -6 931 90 436 295 804 627 1122 333 320 690 493 1193 576 89 15 147 18 300 14 105 -3 237 -9 295 -15z" />
              <path d="M2665 4104 c-113 -20 -273 -68 -385 -116 -531 -225 -897 -669 -1032 -1248 -19 -84 -22 -123 -22 -345 0 -277 12 -362 75 -542 93 -264 212 -462 405 -671 l89 -96 5 765 5 764 28 90 c58 188 147 343 276 478 225 237 515 361 841 361 149 0 220 -11 355 -55 349 -112 620 -386 745 -754 40 -118 47 -234 55 -940 3 -297 8 -574 11 -615 l6 -75 50 55 c154 171 242 298 328 470 60 121 122 299 145 421 38 205 36 515 -5 699 -149 670 -656 1181 -1325 1335 -146 34 -506 45 -650 19z" />
              <path d="M2310 2969 c-70 -89 -100 -137 -140 -222 -77 -169 -72 -114 -74 -856 l-1 -666 23 -80 c35 -120 84 -204 178 -303 131 -140 268 -223 425 -258 104 -23 358 -24 454 0 78 19 235 90 292 132 134 100 220 200 278 327 56 122 57 131 53 852 -5 741 -1 698 -83 870 -43 89 -109 188 -157 233 l-25 22 -6 -541 c-4 -298 -7 -684 -7 -857 l0 -314 -52 -101 c-67 -131 -156 -223 -272 -282 l-79 -40 -152 -3 c-175 -4 -206 4 -324 82 -95 63 -173 152 -223 255 l-41 84 -6 853 c-4 469 -9 856 -13 859 -3 4 -25 -17 -48 -46z" />
            </g>
          </svg>
        </Social>
        <Social href="https://open.spotify.com/artist/1M3dLhsbP7HfxUHCxNCQq6" target="_blank" aria-label="Spotify">
          <FaSpotify />
        </Social>
        <Social href="https://music.apple.com/il/artist/guerrilla/305147041" target="_blank" aria-label="Apple Music">
          <FaItunesNote />
        </Social>
        <Social href="https://twitter.com/GuerrilaTrance" target="_blank" aria-label="X / Twitter">
          <FaTwitter />
        </Social>
      </Socials>
      <NewsletterSignup />
      <Copyright>
        <p>
          © {new Date().getFullYear()} <a href="/">Guerrilla</a> — Carved by the kick. All rights reserved.
        </p>
      </Copyright>
    </Foot>
  );
};

const Foot = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.5rem 2rem 2.5rem;
  margin-top: 4rem;
  z-index: 11;
  background:
    radial-gradient(80% 100% at 50% 0%, rgba(102, 126, 234, 0.18), transparent 65%),
    linear-gradient(180deg, transparent 0%, rgba(10, 9, 28, 0.85) 50%, rgba(10, 9, 28, 0.95) 100%);
  overflow: hidden;
`;

const Divider = styled.div`
  width: 220px;
  height: 14px;
  margin: 0 auto 2rem;
  background:
    radial-gradient(circle at 50% 50%, var(--saffron) 0 3px, transparent 4px),
    linear-gradient(90deg, transparent 0, rgba(167, 139, 250, 0.55) 14%, rgba(167, 139, 250, 0.55) 86%, transparent 100%);
  background-repeat: no-repeat;
  background-position: center, center;
  background-size: 14px 14px, 100% 1.5px;
`;

const SocialsLabel = styled.p`
  margin: 0 0 1rem;
  font-family: var(--font-display);
  font-size: 0.72rem;
  letter-spacing: 0.45em;
  text-transform: uppercase;
  color: var(--sand-muted);
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 2.5rem;
`;

const Social = styled.a`
  color: var(--sand);
  padding: 0.7rem;
  font-size: 1.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: color 0.3s ease, transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    color: var(--saffron);
    background: rgba(167, 139, 250, 0.08);
    transform: translateY(-3px);
    box-shadow: 0 0 24px rgba(167, 139, 250, 0.3);
  }
`;

const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  p {
    font-family: var(--font-accent);
    font-style: italic;
    font-size: 0.95rem;
    color: var(--sand-muted);
    margin: 0;
    letter-spacing: 0.03em;
  }
  a {
    color: var(--saffron);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
  }
  a:hover { color: var(--bone); }
`;
