import React from "react";
import { Helmet } from "react-helmet";
import { FaPlay } from "react-icons/fa";
import styled from "styled-components";
import Title from "./Title";

export const Music = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Guerrilla - Music</title>
        <meta
          name="description"
          content="Check out guerrilla's music on your favorite platform."
        />
      </Helmet>
      <Title>Releases</Title>
      <MusicGrid>
        <MusicCard>
          <Link
            href="https://www.nutekrecords.com/nutek/geronimo_and_guerrilla_-_create.php"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-Ie4vrm72Gc9UwTjS-1Y1trw-t500x500.png"
                alt="Create Ft. Geronimo"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>Create Ft. Geronimo</MusicTitle>
              <MusicDate>21 Mar 2025</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="Create Ft. Geronimo"
              src="https://open.spotify.com/embed/track/2qGJceUMrhkNSj1yMlJaWy"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://soundcloud.com/guerrillatrance/its-a-monster-remix"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-9xRyQb314iB4OHCo-qASVgA-t500x500.png"
                alt="It's a monster"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>Rising Dust - It's a monster (Guerrilla Remix)</MusicTitle>
              <MusicDate>19 Feb 2025</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe 
              width="100%" 
              height="80" 
              scrolling="no" 
              frameBorder="no" 
              allow="autoplay" 
              title="It's a monster (Guerrilla Remix) - SoundCloud Player"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2037953716&color=%23ff5500&inverse=false&auto_play=false&show_user=true"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://nutekrecords.com/nutek/supernova.php"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-FaEo7Xt2HKuBsjwm-l7c08A-t500x500.png"
                alt="Supernova"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>Supernova</MusicTitle>
              <MusicDate>24 May 2024</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="Supernova"
              src="https://open.spotify.com/embed/track/3LZQl9DJCcpX3uTcec8dGX"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://distrokid.com/hyperfollow/guerrilla/wellerman"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-7naTQBWzte5ooDfk-Liz9WA-t500x500.png"
                alt="Wellerman remix"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>Wellerman</MusicTitle>
              <MusicDate>31 Mar 2024</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="Wellerman"
              src="https://open.spotify.com/embed/track/5kEGGVhaqGQ3O6PpgkKchP"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://fanlink.to/NUEP294"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-v1GV21tlAONvlIRV-5k8KCQ-t500x500.jpg"
                alt="time-goddess"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>Time Goddess</MusicTitle>
              <MusicDate>23 Feb 2024</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="Time Goddess"
              src="https://open.spotify.com/embed/track/0d2aUo7MsGM7IxwNM8TyQE"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://nutekrecords.com/nutek/guerrilla_and_gk_music_-_kryptonite.php"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-JxOpMRrO8U9Y6NPM-8cTukw-t500x500.jpg"
                alt="kryptonite-feat-gkmusic"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>Kryptonite (Feat. GK Music)</MusicTitle>
              <MusicDate>27 Oct 2023</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="Kryptonite (Feat. GK Music)"
              src="https://open.spotify.com/embed/track/2zHVGorDUDoDibuRep1ikc"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://nutekrecords.com/nutek/king_of_the_north_-_guerrilla_rmx.php"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://nutekrecords.com/releases/NUEP262_xb.jpg"
                alt="king-of-the-north-guerrilla-remix"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>P.R.O.G & AIRESIS - King of the north (Guerrilla Remix)</MusicTitle>
              <MusicDate>3 Feb 2023</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="King of the north (Guerrilla Remix)"
              src="https://open.spotify.com/embed/track/3OH8XcAYNtCJaQjzOTrzga"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://nutekrecords.com/nutek/guerrilla_-_boom_-_p.r.o.g._remix.php"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-wNbzQxQfb1l4SWb2-Hd410Q-t500x500.jpg"
                alt="guerrilla-boom-prog-remix"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>Boom (P.R.O.G Remix)</MusicTitle>
              <MusicDate>6 Jan 2023</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="Boom (P.R.O.G Remix)"
              src="https://open.spotify.com/embed/track/1GGW1VVrplWyphWbNlL9gi"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://nutekrecords.com/nutek/la_vida.php"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-IEuYESzEzaM5Itth-7IwwyA-t500x500.jpg"
                alt="la_vida"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>La Vida</MusicTitle>
              <MusicDate>16 Sep 2022</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="La Vida"
              src="https://open.spotify.com/embed/track/5ASZkRalVQrOhsKJ4N6YYc"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://nutekrecords.com/nutek/anarchy.php"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-pQ9p9q2zLi3mxkyQ-aLzFSA-t500x500.jpg"
                alt="anarchy"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>Anarchy EP</MusicTitle>
              <MusicDate>2 Feb 2022</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="Anarchy EP"
              src="https://open.spotify.com/embed/album/38o0KoGicmTC8Emg1dDyac?utm_source=generator"
              width="100%"
              height="158"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://nutekrecords.com/nutek/genetics.php"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-c8mJLHnrWATRqGKf-nBjiFw-t500x500.jpg"
                alt="genetics-album"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>Genetics - Album</MusicTitle>
              <MusicDate>02 July 2021</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="Genetics Album"
              src="https://open.spotify.com/embed/album/7nDu2Gbic4w1SJK9xQuNkO?utm_source=generator"
              width="100%"
              height="158"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://distrokid.com/hyperfollow/guerrilla/prophecy"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-HjjCimXzSPNCbQBj-B1YYSw-t500x500.jpg"
                alt="prophecy"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>Prophecy</MusicTitle>
              <MusicDate>12 Oct 2020</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="Prophecy"
              src="https://open.spotify.com/embed/track/2JKeuzEejAoXyWUpewmmRt"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://nutekrecords.com/nutek/guerrilla_-_boom.php"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-IkSy7D1qCs4Ee33o-NpGR0g-t500x500.jpg"
                alt="boom"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>Boom</MusicTitle>
              <MusicDate>12 Oct 2020</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="Boom"
              src="https://open.spotify.com/embed/track/5jqgeFJJkCE5oG1rYQynK3"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://www.nutekrecords.com/nutek/bliss_-_the_mutation_challenge.php"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-UuiRQ5USIqrqc1zc-g9jJlQ-t500x500.jpg"
                alt="my-lsd"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>BLiSS - My LSD Song (Guerrilla Remix)</MusicTitle>
              <MusicDate>21 Sep 2020</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="My-LSD-Song"
              src="https://open.spotify.com/embed/track/3OiojVDHQMqrOtj7qboyx1"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://www.nutekrecords.com/nutek/painkiller_-_flam_n_co_(guerilla_remix).php"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-vIoE4ZYzEHBz8uDF-Ut96tw-t500x500.jpg"
                alt="flamenco"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>Painkiller - Flam & co (Guerrilla Remix)</MusicTitle>
              <MusicDate>06 Jul 2020</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="Flamenco"
              src="https://open.spotify.com/embed/track/0rPxlj3WjQ75GWmPPJPsat"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://nutekrecords.com/nutek/guerrilla_-_into_the_future.php"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-GENRSZWb8GTdhOKs-WMSQiQ-t500x500.jpg"
                alt="into-the-future"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>Into The Future</MusicTitle>
              <MusicDate>30 Mar 2020</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="Into-The-Future"
              src="https://open.spotify.com/embed/track/5lmNgxhqAtWzMAmrwTPbQV"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://nutekrecords.com/nutek/azax_-_azax_remixed.php"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-S37qoyXeBZ7Ptrl7-gwn1eA-t500x500.jpg"
                alt="azax-remix"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>Azax - The Beast (Guerrilla Remix)</MusicTitle>
              <MusicDate>17 Feb 2020</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="The-Beast"
              src="https://open.spotify.com/embed/track/7g3uiRJVaemWMd2Fuqo8RD"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://distrokid.com/hyperfollow/guerrilla/stardust-feat-formation"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-000640539271-no70cz-t500x500.jpg"
                alt="stardust"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>Stardust (Ft. Formation)</MusicTitle>
              <MusicDate>20 Nov 2019</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="Stardust"
              src="https://open.spotify.com/embed/track/2Dcjox08TAnNzGMEt9fi2H"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://www.nutekrecords.com/nutek/guerrilla_-_te_quiero.php"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-000598321364-ttxhs2-t500x500.jpg"
                alt="te-queiro"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>Te Queiro</MusicTitle>
              <MusicDate>16 Sep 2019</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="Te-Quiero"
              src="https://open.spotify.com/embed/track/0cTj0KQp3sEAArXRHJl87u"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://www.nutekrecords.com/nutek/guerrilla_-_te_quiero.php"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-000598323872-xmn244-t500x500.jpg"
                alt="cosmic-connection"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>Cosmic Connection</MusicTitle>
              <MusicDate>16 Sep 2019</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="Cosmic-Connection"
              src="https://open.spotify.com/embed/track/7qvXilE0A1PdiQCakfhvns"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://nutekrecords.com/nutek/guerrilla_-_desert_flow.php"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-000552802752-4xgiol-t500x500.jpg"
                alt="desert-flow"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>Desert Flow</MusicTitle>
              <MusicDate>01 July 2019</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="Desert-Flow"
              src="https://open.spotify.com/embed/track/3C4MG07Dr5ZZZPynZE0Lip"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://nutekrecords.com/nutek/guerrilla_-_desert_flow.php"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-000553126104-ia496l-t500x500.jpg"
                alt="jinni"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>Jinni</MusicTitle>
              <MusicDate>01 July 2019</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="Jinni"
              src="https://open.spotify.com/embed/track/21UP9l4mav2rRLPUYEpKeL"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://nutekrecords.com/asia/guerrilla_-_fata_morgana.php"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-000531093432-wlsbjr-t500x500.jpg"
                alt="fata-morgana"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>Fata Morgana</MusicTitle>
              <MusicDate>27 May 2019</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="Fata-Morgana"
              src="https://open.spotify.com/embed/track/5MgDmV8XC5NXESEaQTKhz7"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>

        <MusicCard>
          <Link
            href="https://distrokid.com/hyperfollow/guerrilla/f7kg"
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <CoverImage
                src="https://i1.sndcdn.com/artworks-000465873012-ls67bs-t500x500.jpg"
                alt="attactica"
              />
              <PlayOverlay>
                <PlayIcon>
                  <FaPlay color="white" size={24} />
                </PlayIcon>
              </PlayOverlay>
            </ImageContainer>
            <MusicInfo>
              <MusicTitle>Attactica</MusicTitle>
              <MusicDate>01 Jan 2019</MusicDate>
            </MusicInfo>
          </Link>
          <PlayerWrapper>
            <iframe
              title="Attactica"
              src="https://open.spotify.com/embed/track/7JDGSWrmkvCDZcopOHuZvK"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </PlayerWrapper>
        </MusicCard>
      </MusicGrid>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  padding-top: 80px; // Adjust this value based on your navbar height
  min-height: 100vh;
  width: 100%;
`;

const MusicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 280px));
  gap: 2.5rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
    gap: 2rem;
    padding: 1.5rem;
  }
`;

const MusicCard = styled.div`
  background: rgba(13, 12, 34, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  width: 280px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 250px;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-sizing: border-box;
`;

const CoverImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.3s ease-in-out;
  border-radius: 12px;

  ${ImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

const MusicInfo = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  gap: 0.5rem;
`;

const MusicTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-align: center;
`;

const MusicDate = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
`;

const PlayerWrapper = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  margin-top: auto;
  
  iframe {
    display: block;
    margin: 0;
  }
`;

const PlayOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  border-radius: 12px;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

const PlayIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  border: 2px solid rgba(255, 255, 255, 0.5);
  transform: scale(0.8);
  transition: all 0.3s ease-in-out;

  ${ImageContainer}:hover & {
    transform: scale(1);
  }

  svg {
    opacity: 0.9;
  }
`;

export default Music;