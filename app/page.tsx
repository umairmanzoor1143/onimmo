import Image from "next/image";

export default function Home() {
  return (
    <div className="dd-main-wrapper">
      <main data-scroll-container="">
        <header
          className="dd-module dd-module-header dd-edge dd-edge-b"
          data-theme-light=""
        >
          <div>
            <div className="dd-container-fluid">
              <div className="dd-row">
                <div className="dd-content dd-col-xl-7">
                  <p className="dd-tagline dd-tagline-lg">
                    Kaufen, verkaufen oder bewerten lassen in der Zentralschweiz und
                    Zürich
                  </p>
                  <h1>Wir lieben die Welt der Immobilien.</h1>
                </div>
                <div className="dd-buttons dd-col-xl-7">
                  <a
                    className="dd-button dd-button-primary"
                    href="/immobilie-bewerten/"
                    target="_self"
                  >
                    Immobilie bewerten
                  </a>
                  <a className="dd-button" href="/immobilie-kaufen/" target="_self">
                    Immobilie kaufen
                  </a>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="dd-curve-00 dd-curve dd-curve-right"
            fill="currentColor"
            height={100}
            id="dd-curve-00"
            viewBox="0 0 100 100"
            width={100}
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Teil des Logos von Stadelmann und Partner Immobilien</title>
            <path
              className="dd-part dd-part-1"
              d="M50.001816,0C23.262636,0,1.453785,26.754816,1.453785,59.560577
                  c0,15.585266,4.927913,29.805077,12.967109,40.439423l10.911862-11.524483c-5.01614-8.031059-8.005634-18.05584-8.005634-28.91494
                  c0-26.259533,17.458725-47.67976,38.86713-47.67976c21.343948,0,38.767845,21.302254,38.864716,47.461227l3.414093,3.605167
                  c0.05085-1.12228,0.079453-2.249493,0.079453-3.386635C98.552513,26.754816,76.746094,0,50.001816,0L50.001816,0z"
            />
          </svg>
        </header>
        <section className="dd-module dd-module-video" data-theme-dark="">
          <div>
            <picture id="video-thumbnail">
              <source
                media="(min-width: 991px)"
                srcSet="/assets/videoframe_0.jpg"
                type="image/jpg"
              />
              <img src="/assets/videoframe_0.jpg" />
            </picture>
            <video
              src="/assets/luzern_compress.mp4"
              title=""
              x-webkit-airplay="deny"
              id="lazy-video"
              className="dd-d-none"
            />
          </div>
        </section>
        <section
          className="dd-module dd-module-boxes dd-edge dd-edge-t "
          data-theme-dark=""
        >
          <div>
            <div>
              <div className="dd-row dd-row-reduced">
                <div className="dd-box dd-col-md-6 dd-col-xl-4">
                  <a href="/immobilie-verkaufen/" target="_self">
                    <div>
                      <div className="dd-content dd-content-b">
                        <h3>Immobilie verkaufen</h3>
                        <p>
                          Persönliche Lebensumstände, familiäre oder berufliche
                          Veränderung, wirtschaftliche Notwendigkeit, Wohnortwechsel
                          oder Erbschaft: Anlässe für einen Immobilienverkauf gibt
                          es viele.
                        </p>
                        <p>
                          Egal, aus welchem Grund Sie Ihr Haus oder Ihre Wohnung
                          verkaufen möchten: Wir finden den passenden Käufer für Sie
                          – schnell, zuverlässig und zum vereinbarten Ergebnis.
                        </p>
                      </div>
                      <svg
                        className="dd-curve-01 dd-curve dd-curve-right"
                        fill="currentColor"
                        height={100}
                        id="dd-curve-01"
                        viewBox="0 0 100 100"
                        width={100}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>
                          Teil des Logos von Stadelmann und Partner Immobilien
                        </title>
                        <path
                          className="dd-part dd-part-1"
                          d="M95.59375,50h-3.447914c-3.4375-21.697918-18.291672-38.114578-36-38.114578
                  c-17.718754,0-32.572918,16.41666-35.989586,38.114578c-0.489584,3.09375-0.75,6.291668-0.75,9.5625
                  c0,10.864586,2.822914,20.885414,7.562502,28.916664L16.656252,100C9.062501,89.364586,4.40625,75.145836,4.40625,59.5625
                  c0-3.25,0.197919-6.447914,0.59375-9.5625C8.541668,21.718748,27.531254,0,50.291664,0C73.0625,0,92.052086,21.718748,95.59375,50"
                        />
                      </svg>
                      <svg
                        className="dd-arrow-00 dd-arrow"
                        fill="currentColor"
                        height={100}
                        id="dd-arrow-00"
                        viewBox="0 0 100 100"
                        width={100}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="dd-part dd-part-1"
                          d="M50,100c27.6,0,50-22.4,50-50S77.6,0,50,0S0,22.4,0,50S22.4,100,50,100"
                        />
                        <path
                          className="dd-part dd-part-2"
                          d="M66.7,50L54.2,62.5L51,58.3l5.7-5.7H33.3v-5.2h23.4l-6.2-6.2l3.7-3.7l9.9,9.9L66.7,50z"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="dd-box dd-col-md-6 dd-col-xl-4">
                  <a href="/immobilie-kaufen/" target="_self">
                    <div>
                      <div className="dd-content dd-content-t">
                        <h3>Immobilie kaufen</h3>
                        <p>
                          Immobilien sind einzigartig – wie Sie es auch sind. Wir
                          finden das perfekt zu Ihnen passende Objekt.
                        </p>
                        <p>
                          Denn mit unseren bewährten Scouting-Methoden stimmen wir
                          Ihre Suche nicht nur auf Ihre Wünsche und Vorstellungen
                          ab. Wir erfahren von neuen Objekten auch häufig schon
                          lange, bevor sie überhaupt auf den Markt kommen.
                        </p>
                      </div>
                      <svg
                        className="dd-curve-02 dd-curve dd-curve-right"
                        fill="currentColor"
                        height={100}
                        id="dd-curve-02"
                        viewBox="0 0 100 100"
                        width={100}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>
                          Teil des Logos von Stadelmann und Partner Immobilien
                        </title>
                        <path
                          className="dd-part dd-part-1"
                          d="M95.59375,50h-3.447914c-3.4375-21.697918-18.291672-38.114578-36-38.114578
                  c-17.718754,0-32.572918,16.41666-35.989586,38.114578c-0.489584,3.09375-0.75,6.291668-0.75,9.5625
                  c0,10.864586,2.822914,20.885414,7.562502,28.916664L16.656252,100C9.062501,89.364586,4.40625,75.145836,4.40625,59.5625
                  c0-3.25,0.197919-6.447914,0.59375-9.5625C8.541668,21.718748,27.531254,0,50.291664,0C73.0625,0,92.052086,21.718748,95.59375,50"
                        />
                      </svg>
                      <svg
                        className="dd-arrow-01 dd-arrow"
                        fill="currentColor"
                        height={100}
                        id="dd-arrow-01"
                        viewBox="0 0 100 100"
                        width={100}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="dd-part dd-part-1"
                          d="M50,100c27.6,0,50-22.4,50-50S77.6,0,50,0S0,22.4,0,50S22.4,100,50,100"
                        />
                        <path
                          className="dd-part dd-part-2"
                          d="M66.7,50L54.2,62.5L51,58.3l5.7-5.7H33.3v-5.2h23.4l-6.2-6.2l3.7-3.7l9.9,9.9L66.7,50z"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="dd-box dd-col-md-6 dd-col-xl-4">
                  <a href="/immobilie-bewerten/" target="_self">
                    <div>
                      <div className="dd-content dd-content-b">
                        <h3>Immobilie bewerten</h3>
                        <p>
                          Sie möchten wissen, wie viel Ihre Immobilie aktuell wert
                          ist?
                        </p>
                        <p>
                          Wir bewerten Ihre Immobilie – online, unkompliziert,
                          gratis. Und blitzschnell:
                        </p>
                        <p>
                          In weniger als 3 Minuten erhalten Sie auch schon das
                          Ergebnis Ihrer Immobilienschätzung sowie eine
                          Standortbeurteilung.
                        </p>
                      </div>
                      <svg
                        className="dd-curve-03 dd-curve dd-curve-right"
                        fill="currentColor"
                        height={100}
                        id="dd-curve-03"
                        viewBox="0 0 100 100"
                        width={100}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>
                          Teil des Logos von Stadelmann und Partner Immobilien
                        </title>
                        <path
                          className="dd-part dd-part-1"
                          d="M95.59375,50h-3.447914c-3.4375-21.697918-18.291672-38.114578-36-38.114578
                  c-17.718754,0-32.572918,16.41666-35.989586,38.114578c-0.489584,3.09375-0.75,6.291668-0.75,9.5625
                  c0,10.864586,2.822914,20.885414,7.562502,28.916664L16.656252,100C9.062501,89.364586,4.40625,75.145836,4.40625,59.5625
                  c0-3.25,0.197919-6.447914,0.59375-9.5625C8.541668,21.718748,27.531254,0,50.291664,0C73.0625,0,92.052086,21.718748,95.59375,50"
                        />
                      </svg>
                      <svg
                        className="dd-arrow-02 dd-arrow"
                        fill="currentColor"
                        height={100}
                        id="dd-arrow-02"
                        viewBox="0 0 100 100"
                        width={100}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="dd-part dd-part-1"
                          d="M50,100c27.6,0,50-22.4,50-50S77.6,0,50,0S0,22.4,0,50S22.4,100,50,100"
                        />
                        <path
                          className="dd-part dd-part-2"
                          d="M66.7,50L54.2,62.5L51,58.3l5.7-5.7H33.3v-5.2h23.4l-6.2-6.2l3.7-3.7l9.9,9.9L66.7,50z"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="dd-module dd-module-text dd-edge "
          data-scroll-section=""
          data-theme-light=""
        >
          <div>
            <div className="dd-container" data-scroll="">
              <div className="dd-row">
                <div className="dd-content dd-col-12">
                  <h2>
                    Immobilienmakler in der Zentralschweiz und Zürich gibt es viele.
                    Unsere Expertise gibt es nur einmal.
                  </h2>
                  <p>
                    Wir sind nicht nur langjährige Immobilienexperten,
                    Finanzexperten und diplomierte Schätzer. Wir sind vor allem
                    Immobilienberater aus Leidenschaft und im Fokus unserer Passion
                    stehen Sie. Denn unsere Herzensangelegenheit ist es, Ihnen
                    Sicherheit zu bieten – beim Kauf, Verkauf oder der Bewertung
                    Ihrer Immobilie.
                  </p>
                  <p>
                    Und dank unserer Expertise gelingt uns das immer wieder aufs
                    Neue. Weil unsere Immobilienberatung den Unterschied macht.
                  </p>
                </div>
                <div className="dd-buttons dd-col-12">
                  <a
                    className="dd-button dd-button-primary"
                    href="/ueber-uns/"
                    target="_self"
                  >
                    Mehr erfahren
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="dd-module dd-module-text dd-edge pt-6"
          data-scroll-section=""
          data-theme-dark=""
        >
          <div>
            <div className="dd-container" data-scroll="">
              <div className="dd-row">
                <div className="dd-heading dd-col-12">
                  <h2>Erfolgreiche Immobilienverkäufe: Unsere Referenzen</h2>
                </div>
                <div className="dd-content dd-col-12">
                  <p>
                    Moderne Terrassenwohnungen mit traumhaften Aussichten auf
                    atemberaubende Landschaften. Stilvolle Wohnungen mit
                    unverbaubarem Blick auf das Berg- und Seepanorama. Grosszügige
                    Häuser in sonniger Lage und naturnaher Umgebung.
                  </p>
                  <p>
                    Eines haben unsere Immobilien alle gemeinsam: Sie bieten eine
                    hohe Lebensqualität!
                  </p>
                </div>
                <div className="dd-buttons dd-col-12">
                  <a
                    className="dd-button dd-button-primary"
                    href="/referenzen/"
                    target="_self"
                  >
                    Referenzen entdecken
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="dd-module-space dd-module-space-less dd-module-space-less-025" />
        <section
          className="dd-module dd-module-text dd-edge dd-edge-t "
          data-scroll-section=""
          data-theme-gray=""
        >
          <div>
            <div className="dd-container" data-scroll="">
              <div className="dd-row">
                <div className="dd-heading dd-col-12">
                  <h2>
                    Aktuelle Immobilienjobs: Werden Sie Teil unserer Passion für
                    Immobilien
                  </h2>
                </div>
                <div className="dd-content dd-col-12">
                  <p>
                    Sie haben eine Schwäche für hochwertige Immobilien? Wir auch.
                  </p>
                  <p>
                    Verkauf, Kauf, Bewertung oder Beratung: Bei uns dreht sich alles
                    um den Immobilienmarkt. Und um Menschen.
                  </p>
                  <p>
                    Denn wir lieben es, Menschen zum Strahlen zu bringen. Weil sie
                    ihre Traumimmobilie gefunden haben. Oder weil ihre Immobilie zu
                    einem grossartigen Preis verkauft wurde.
                  </p>
                  <p>
                    Sie teilen unsere Passion für die Immobilienwelt? Dann
                    kontaktieren Sie uns – denn wir haben ein Match.
                  </p>
                </div>
                <div className="dd-buttons dd-col-12">
                  <a
                    className="dd-button dd-button-primary"
                    href="/jobs/"
                    target="_self"
                  >
                    Immobilienjobs entdecken
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="dd-module dd-module-spacer"
          data-theme-gray=""
          style={{ paddingTop: 90, paddingBottom: 140 }}
        >
          <div />
        </section>
        <div id="dd-nav-primary" className="dd-nav-primary">
          <a
            id="dd-nav-toggler"
            className="dd-icon-wrapper dd-nav-toggler dd-nav-toggler-classic"
            href="javascript:;"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width={100}
                height={100}
                fill="currentColor"
              >
                <path d="M100,23.878181H0v13.060936h100V23.878181z" />
                <path d="M100,76.121819H0V63.060883h100V76.121819z" />
              </svg>
            </div>
          </a>
        </div>
        <nav
          id="dd-nav-secondary"
          className="dd-nav-secondary dd-nav-secondary-classic"
        >
          <ul>
            <li>
              <a href="/immobilie-verkaufen/">
                <span>Verkaufen</span>
              </a>
            </li>
            <li>
              <a href="/immobilie-kaufen/">
                <span>Kaufen</span>
              </a>
            </li>
            <li>
              <a href="/referenzen/">
                <span>Referenzen</span>
              </a>
            </li>
            <li>
              <a href="/jobs/">
                <span>Jobs</span>
              </a>
            </li>
            <li>
              <a href="/ueber-uns/">
                <span>Über uns</span>
              </a>
            </li>
            <li>
              <a href="/kontakt/">
                <span>Kontakt</span>
              </a>
            </li>
            <li>
              <a href="/immobilie-bewerten/">
                <span>Immobilie bewerten</span>
              </a>
            </li>
          </ul>
          <ul className="bst__language">
            <li className="bst-is-active">de</li>
            <li>
              <a href="/en/">en</a>
            </li>
          </ul>
        </nav>
        <div id="dd-logo-nav-wrapper" className="dd-logo-nav-wrapper">
          <a href="/">
            <svg
              className="dd-logo dd-logo-00 dd-d-xl-inline-block"
              fill="currentColor"
              height="61.523079"
              id="dd-logo-00"
              viewBox="0 0 79.98127 61.523079"
              width="79.98127"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Logo von Stadelmann und Partner Immobilien</title>
              <path
                className="dd-part-1"
                d="M26.766586,0C12.024144,0,0,14.751064,0,32.838272c0,8.592819,2.716967,16.4328,7.149317,22.295967
              l6.016172-6.353935c-2.76561-4.427864-4.413846-9.954948-4.413846-15.942032c0-14.477995,9.625735-26.287874,21.429096-26.287874
              c11.767822,0,21.374355,11.744835,21.427765,26.167387l1.882336,1.987682c0.028034-0.618759,0.043804-1.240242,0.043804-1.867195
              C53.534645,14.751064,41.511841,0,26.766586,0L26.766586,0z"
              />
              <path
                className="dd-part-2"
                d="M39.990952,23.64513l18.00576,19.018002l17.85717,18.859947L61.916004,50.611263l-21.925053-17.16658
              l-21.924982,17.16658l-13.9376,10.911816L21.98526,42.663132L39.990952,23.64513L39.990952,23.64513z M28.375153,32.716385
              c0.033854-9.071955,3.844643-17.079594,9.59763-21.778496l-0.223099-0.123919l-0.884396-0.429161l-0.90416-0.376453
              l-0.921963-0.321712L34.41116,9.508685c-4.910433,5.957647-7.963131,14.220624-7.963131,23.329586
              c0,0.626251,0.016401,1.247108,0.045137,1.865864L28.375153,32.716385L28.375153,32.716385z M53.214264,0
              c-3.981529,0-7.764637,1.078755-11.167854,3.003495l0.776245,0.610554l1.123192,0.983572l1.086956,1.047915l1.043781,1.108823
              l0.14032,0.165623c1.167076-0.243633,2.364212-0.369585,3.585312-0.369585c11.803017,0,21.430779,11.809879,21.430779,26.287874
              c0,5.987713-1.649567,11.51487-4.415527,15.943363l6.014488,6.352604c4.432632-5.864567,7.149315-13.703148,7.149315-22.295967
              C79.98127,14.751064,67.95916,0,53.214264,0L53.214264,0z"
              />
            </svg>
          </a>
        </div>
        <footer
          className="dd-module dd-module-footer dd-edge dd-edge-t-tb"
          data-theme-dark=""
        >
          <div>
            <img
              id="dd-footer-img"
              className="dd-background-image dd-grayscale"
              src="/assets/luzern.webp"
              alt=""
            />
            <div className="dd-background-image-overlay" />
            <div className="dd-container-fluid">
              <div className="dd-row">
                <div className="dd-content dd-col-xl-7">
                  <h2>Sie möchten Ihren Immobilienweg mit uns gemeinsam gehen?</h2>
                  <h3>Dann lassen Sie uns kennenlernen.</h3>
                </div>
              </div>
              <div className="dd-row">
                <div className="dd-col-xl-7 dd-ml-xl-auto">
                  <ul className="dd-hero-list">
                    <li>
                      <a href="tel:+41415080707" target="_blank">
                        Rufen Sie uns an.
                        <svg
                          className="dd-arrow-03 dd-arrow"
                          fill="currentColor"
                          height={100}
                          id="dd-arrow-03"
                          viewBox="0 0 100 100"
                          width={100}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="dd-part dd-part-1"
                            d="M50,100c27.6,0,50-22.4,50-50S77.6,0,50,0S0,22.4,0,50S22.4,100,50,100"
                          />
                          <path
                            className="dd-part dd-part-2"
                            d="M66.7,50L54.2,62.5L51,58.3l5.7-5.7H33.3v-5.2h23.4l-6.2-6.2l3.7-3.7l9.9,9.9L66.7,50z"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:decryptUnicorn(vasb|fgnqryznaacnegare.pu)"
                        target="_blank"
                      >
                        Schreiben Sie uns eine E-Mail.
                        <svg
                          className="dd-arrow-04 dd-arrow"
                          fill="currentColor"
                          height={100}
                          id="dd-arrow-04"
                          viewBox="0 0 100 100"
                          width={100}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="dd-part dd-part-1"
                            d="M50,100c27.6,0,50-22.4,50-50S77.6,0,50,0S0,22.4,0,50S22.4,100,50,100"
                          />
                          <path
                            className="dd-part dd-part-2"
                            d="M66.7,50L54.2,62.5L51,58.3l5.7-5.7H33.3v-5.2h23.4l-6.2-6.2l3.7-3.7l9.9,9.9L66.7,50z"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="/kontakt/" target="_blank">
                        Oder nutzen Sie das Kontaktformular.
                        <svg
                          className="dd-arrow-05 dd-arrow"
                          fill="currentColor"
                          height={100}
                          id="dd-arrow-05"
                          viewBox="0 0 100 100"
                          width={100}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="dd-part dd-part-1"
                            d="M50,100c27.6,0,50-22.4,50-50S77.6,0,50,0S0,22.4,0,50S22.4,100,50,100"
                          />
                          <path
                            className="dd-part dd-part-2"
                            d="M66.7,50L54.2,62.5L51,58.3l5.7-5.7H33.3v-5.2h23.4l-6.2-6.2l3.7-3.7l9.9,9.9L66.7,50z"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="dd-row">
                <div className="dd-col-xl-5">
                  <div
                    id="dd-logo-footer-wrapper"
                    className="dd-logo-footer-wrapper"
                  >
                    <svg
                      className="dd-logo"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 380 153.42"
                    >
                      <path
                        d="M2.11,124.68c.16-.4.36-1.34.61-2.82h.36c1.04,2.22,2.67,3.32,4.9,3.32,1.3,0,2.36-.43,3.17-1.28.81-.86,1.22-1.92,1.22-3.18,0-.76-.21-1.47-.64-2.12-.42-.66-1.36-1.32-2.84-1.98l-2.76-1.19c-2.36-1.05-3.54-2.79-3.54-5.23,0-1.8.62-3.22,1.86-4.25,1.24-1.04,2.87-1.56,4.9-1.56,1.88,0,3.37.5,4.46,1.49-.34.49-.63,1.37-.85,2.65h-.36c-.66-1.99-1.88-2.99-3.64-2.99-1.1,0-2.03.35-2.79,1.05-.77.69-1.14,1.6-1.14,2.71,0,1.85,1.16,3.25,3.46,4.22l2.53,1.01c2.52,1.06,3.78,2.75,3.78,5.04,0,2.02-.7,3.68-2.1,4.97-1.41,1.29-3.22,1.94-5.43,1.94-1.95,0-3.67-.6-5.15-1.82h0ZM9.12,103.41h0ZM7.66,126.05h0ZM16.92,106.54c.1-.33.15-.67.15-1.04s-.05-.65-.15-.93c2.29.17,4.71.26,7.25.26h1.29c2.21,0,4.71-.09,7.48-.26-.1.38-.15.73-.15,1.04s.05.6.15.93c-1.84-.17-4.06-.26-6.66-.26-.05,1.74-.08,3.76-.08,6.07v3.31c0,4.22.09,7.74.26,10.54-.69-.1-1.21-.15-1.57-.15-.51,0-1.01.05-1.49.15.17-2.78.26-6.26.26-10.44v-3.49c0-2.31-.03-4.3-.08-5.99-2.12,0-4.34.09-6.66.26h0ZM24.94,103.41h0ZM24.94,126.05h0ZM16.25,104.39h0ZM34.15,126.2c2.9-6.19,6.15-13.46,9.76-21.81h.61c.71,1.65,2.05,4.81,4.04,9.46,1.98,4.66,3.81,8.77,5.47,12.35-.61-.1-1.14-.15-1.6-.15-.4,0-.97.05-1.72.15-.34-1.17-1.44-3.95-3.29-8.35h0c-.36-.06-.98-.09-1.88-.09h-3.76c-.95,0-1.7.03-2.26.09h0c-.23.46-.73,1.71-1.49,3.76-.86,2.28-1.38,3.81-1.57,4.59-.42-.1-.8-.15-1.16-.15-.42,0-.8.05-1.14.15h0ZM40.12,116.39h0c.14.04.64.06,1.51.06h3.74c.81,0,1.35-.04,1.6-.11h0c-.81-1.7-1.97-4.3-3.49-7.8h0c-.99,2.32-2.11,4.93-3.36,7.85h0ZM44.32,103.41h0ZM51.92,126.05h0ZM33.61,104.39h0ZM57.25,104.68c.76.1,2.29.15,4.6.15.24,0,1.1-.03,2.58-.08,1.47-.05,2.27-.07,2.41-.07,6.7,0,10.04,3.39,10.04,10.17,0,3.4-1.03,6.14-3.1,8.23-2.05,2.08-4.75,3.12-8.11,3.12-.19,0-.92-.02-2.16-.08-1.25-.05-1.96-.07-2.12-.07-1.64,0-3.02.05-4.15.15.17-3.11.26-5.6.26-7.48v-5.97c0-3.37-.09-6.05-.26-8.06h0ZM60.21,106.15c-.1,1.93-.15,4.1-.15,6.52v5.82c0,2.18.05,4.26.15,6.24,1.17.2,2.49.31,3.98.31,6.41,0,9.61-3.37,9.61-10.12,0-3.02-.68-5.3-2.03-6.81-1.34-1.52-3.6-2.27-6.78-2.27-1.47,0-3.07.1-4.79.31h0ZM65.38,103.41h0ZM54.44,104.39h0ZM81.54,126.31c.17-3.78.26-6.3.26-7.56v-6.59c0-1.7-.09-4.22-.26-7.59,1.86.17,3.78.26,5.76.26,1.58,0,3.35-.09,5.32-.26-.1.38-.15.69-.15.92,0,.26.05.57.15.92-2.5-.17-5.21-.26-8.13-.26-.1,1.71-.15,4.4-.15,8.09,2.12,0,4.65-.09,7.56-.26-.1.34-.15.65-.15.91,0,.22.05.53.15.92-2.37-.17-4.89-.26-7.56-.26,0,1.18.05,4.25.15,9.19h0c4.12,0,6.88-.09,8.29-.26-.1.39-.15.71-.15.95,0,.18.05.48.15.88-1.92-.17-3.78-.26-5.58-.26-1.59,0-3.47.09-5.67.26h0ZM87.34,103.41h0ZM90.73,126.05h0ZM78.72,104.39h0ZM97.14,126.31c.17-2.3.26-4.81.26-7.51v-5.61c0-4.02-.09-6.85-.26-8.51.75.1,1.27.15,1.57.15.45,0,.95-.05,1.49-.15-.17,3.59-.26,6.36-.26,8.3v5.16c0,2.41.05,4.61.15,6.6h1.52c2.74,0,5.07-.09,7.01-.26-.1.38-.15.69-.15.91s.05.54.15.91c-2.5-.17-4.4-.26-5.7-.26-1.99,0-3.92.09-5.79.26h0ZM99.17,103.41h0ZM103.21,126.05h0ZM94.32,104.39h0ZM111.43,126.2c1.47-9.17,2.44-16.29,2.93-21.37h.54c.54,1.23,1.91,3.89,4.13,7.99,2.22,4.09,3.84,7.01,4.87,8.75h0c2.06-3.7,5.18-9.28,9.36-16.74h.41c.63,5.95,1.44,13.08,2.44,21.37-.72-.1-1.19-.15-1.42-.15-.26,0-.75.05-1.5.15-.16-2.39-.42-5.44-.78-9.15-.35-3.7-.57-5.93-.66-6.68h0c-3.55,5.97-6.33,11.19-8.34,15.67h-.29c-1.78-3.62-4.47-8.85-8.09-15.67h0c-.96,8.16-1.44,13.43-1.44,15.82-.54-.1-.86-.15-.96-.15-.31,0-.72.05-1.22.15h0ZM138.22,126.2c2.9-6.19,6.15-13.46,9.76-21.81h.61c.71,1.65,2.05,4.81,4.04,9.46,1.98,4.66,3.81,8.77,5.47,12.35-.61-.1-1.14-.15-1.6-.15-.39,0-.97.05-1.72.15-.34-1.17-1.44-3.95-3.29-8.35h0c-.36-.06-.98-.09-1.88-.09h-3.76c-.95,0-1.7.03-2.26.09h0c-.23.46-.73,1.71-1.49,3.76-.86,2.28-1.38,3.81-1.57,4.59-.42-.1-.8-.15-1.15-.15-.42,0-.8.05-1.15.15h0ZM144.2,116.39h0c.14.04.64.06,1.51.06h3.74c.81,0,1.35-.04,1.6-.11h0c-.81-1.7-1.97-4.3-3.49-7.8h0c-.99,2.32-2.11,4.93-3.35,7.85h0ZM148.39,103.41h0ZM156,126.05h0ZM137.69,104.39h0ZM161.73,126.2c.17-4.5.26-9.18.26-14.05,0-4.05-.03-6.68-.08-7.88h.49c6.15,6.81,11.36,12.42,15.64,16.84h0v-4.94c0-4.06-.07-7.9-.21-11.49.34.1.67.15.96.15.28,0,.56-.05.85-.15-.17,4.95-.26,8.58-.26,10.91,0,4.29.03,7.92.08,10.9h-.49c-4.04-4.79-9.28-10.51-15.69-17.19h0c0,9.03.09,14.66.26,16.9-.31-.08-.59-.13-.85-.15-.28,0-.6.05-.96.15h0ZM170.95,103.41h0ZM170.61,126.05h0ZM158.51,104.39h0ZM186.01,126.2c.17-4.5.26-9.18.26-14.05,0-4.05-.03-6.68-.08-7.88h.49c6.15,6.81,11.36,12.42,15.64,16.84h0v-4.94c0-4.06-.07-7.9-.21-11.49.34.1.67.15.96.15.28,0,.56-.05.85-.15-.17,4.95-.26,8.58-.26,10.91,0,4.29.03,7.92.08,10.9h-.49c-4.04-4.79-9.28-10.51-15.69-17.19h0c0,9.03.09,14.66.26,16.9-.31-.08-.59-.13-.85-.15-.28,0-.6.05-.96.15h0ZM195.23,103.41h0ZM194.89,126.05h0ZM182.79,104.39h0ZM223.67,114.65h0c-1.36-2.04-2.05-3.69-2.05-4.95s.46-2.39,1.37-3.29c.91-.91,2.08-1.36,3.49-1.36h0c1.25,0,2.25.31,3.01.93.76.61,1.15,1.44,1.15,2.5s-.44,2.13-1.33,3.13c-.87.99-1.88,1.79-3.02,2.39h0c1.18,1.58,3,3.88,5.45,6.87h0c1.09-1.21,2.32-3.27,3.69-6.2h0c.19.37.58.79,1.18,1.25-1.2,1.99-2.59,3.91-4.18,5.77h0c1.02,1.19,2.34,2.69,3.93,4.51-1.04-.1-1.71-.15-2.03-.15h0c-.56,0-1.13.05-1.74.15-.33-.51-.99-1.38-1.97-2.62h0c-2.07,1.95-4.26,2.91-6.57,2.91-1.85,0-3.33-.47-4.44-1.41-1.11-.94-1.66-2.19-1.66-3.73,0-1.39.53-2.68,1.59-3.87,1.06-1.2,2.42-2.15,4.12-2.83h0ZM224.23,115.38h0c-1.27.75-2.21,1.55-2.82,2.41-.6.86-.9,1.84-.9,2.91,0,1.22.45,2.25,1.36,3.08.91.83,1.96,1.25,3.17,1.25,1.73,0,3.39-.75,4.97-2.26h0c-1.42-1.64-3.35-4.11-5.78-7.39h0ZM225.77,113.34h0c.93-.56,1.7-1.28,2.31-2.17.62-.88.93-1.78.93-2.69,0-.78-.23-1.4-.7-1.87-.47-.47-1.08-.7-1.83-.7-.84,0-1.5.29-1.98.87-.47.57-.7,1.24-.7,2.03,0,1.39.66,2.9,1.97,4.53h0ZM249.78,104.68c.76.1,1.77.15,3.02.15.35,0,1.08-.03,2.17-.08,1.1-.05,1.68-.07,1.74-.07,4.57,0,6.86,1.76,6.86,5.28,0,2.09-.76,3.71-2.28,4.86-1.52,1.15-3.63,1.72-6.29,1.72-1.25,0-2.05-.03-2.39-.09v2.29c0,1.6.09,4.09.26,7.46-.67-.1-1.18-.15-1.54-.15-.57,0-1.08.05-1.52.15.17-3.46.26-5.96.26-7.48v-6.52c0-2.52-.09-5.03-.26-7.51h0ZM252.58,115.12c.72.17,1.45.26,2.18.26,3.94,0,5.91-1.74,5.91-5.21,0-1.61-.41-2.73-1.22-3.37-.82-.64-2.12-.96-3.93-.96h-2.79c-.1,3.78-.15,6.87-.15,9.28h0ZM264.86,126.2c2.9-6.19,6.15-13.46,9.76-21.81h.61c.71,1.65,2.05,4.81,4.04,9.46,1.98,4.66,3.81,8.77,5.47,12.35-.61-.1-1.14-.15-1.6-.15-.39,0-.97.05-1.72.15-.34-1.17-1.44-3.95-3.29-8.35h0c-.36-.06-.98-.09-1.88-.09h-3.76c-.95,0-1.7.03-2.26.09h0c-.23.46-.73,1.71-1.49,3.76-.86,2.28-1.38,3.81-1.57,4.59-.42-.1-.8-.15-1.16-.15-.42,0-.8.05-1.14.15h0ZM270.83,116.39h0c.15.04.64.06,1.51.06h3.74c.81,0,1.35-.04,1.6-.11h0c-.81-1.7-1.97-4.3-3.49-7.8h0c-.99,2.32-2.11,4.93-3.36,7.85h0ZM275.02,103.41h0ZM282.63,126.05h0ZM264.32,104.39h0ZM287.96,126.2c.17-2.18.26-4.68.26-7.5v-7.76c0-1.99-.09-4.08-.26-6.26.77.1,1.77.15,3.02.15.16,0,.84-.03,2.04-.08,1.2-.05,1.87-.07,2.03-.07,4.3,0,6.45,1.65,6.45,4.95s-2.12,5.13-6.36,5.99c2.68,3.51,5.53,7.03,8.54,10.58-.57-.1-1.18-.15-1.82-.15-.69,0-1.32.05-1.87.15-1.21-1.65-2.55-3.48-4.03-5.47-1.47-1.99-2.83-3.6-4.07-4.84h-1.13v2.83c0,2.89.09,5.39.26,7.48-.74-.1-1.25-.15-1.54-.15-.57,0-1.08.05-1.53.15h0ZM290.77,114.51c.37.14,1.01.21,1.94.21,1.86,0,3.31-.43,4.34-1.3,1.05-.86,1.57-2.05,1.57-3.56,0-1.3-.43-2.3-1.3-2.99-.85-.69-1.99-1.04-3.4-1.04-.82,0-1.82.06-3,.17-.09,3.97-.14,6.47-.15,7.5v.99h0ZM294.14,103.41h0ZM295.22,126.05h0ZM285.14,104.39h0ZM304.88,106.54c.1-.33.15-.67.15-1.04s-.05-.65-.15-.93c2.29.17,4.71.26,7.25.26h1.28c2.21,0,4.71-.09,7.48-.26-.1.38-.15.73-.15,1.04s.05.6.15.93c-1.84-.17-4.06-.26-6.66-.26-.05,1.74-.08,3.76-.08,6.07v3.31c0,4.22.09,7.74.26,10.54-.69-.1-1.21-.15-1.57-.15-.52,0-1.02.05-1.49.15.17-2.78.26-6.26.26-10.44v-3.49c0-2.31-.03-4.3-.08-5.99-2.12,0-4.34.09-6.66.26h0ZM312.9,103.41h0ZM312.9,126.05h0ZM304.21,104.39h0ZM324.79,126.2c.17-4.5.26-9.18.26-14.05,0-4.05-.03-6.68-.08-7.88h.49c6.15,6.81,11.36,12.42,15.64,16.84h0v-4.94c0-4.06-.07-7.9-.21-11.49.34.1.66.15.96.15.28,0,.56-.05.85-.15-.17,4.95-.26,8.58-.26,10.91,0,4.29.03,7.92.08,10.9h-.49c-4.04-4.79-9.28-10.51-15.69-17.19h0c0,9.03.09,14.66.26,16.9-.31-.08-.59-.13-.85-.15-.28,0-.6.05-.96.15h0ZM334.01,103.41h0ZM333.67,126.05h0ZM321.57,104.39h0ZM348.67,126.31c.17-3.78.26-6.3.26-7.56v-6.59c0-1.7-.09-4.22-.26-7.59,1.86.17,3.78.26,5.76.26,1.58,0,3.35-.09,5.32-.26-.1.38-.15.69-.15.92,0,.26.05.57.15.92-2.5-.17-5.21-.26-8.13-.26-.1,1.71-.15,4.4-.15,8.09,2.12,0,4.65-.09,7.56-.26-.1.34-.15.65-.15.91,0,.22.05.53.15.92-2.37-.17-4.89-.26-7.56-.26,0,1.18.05,4.25.15,9.19h0c4.11,0,6.88-.09,8.29-.26-.1.39-.15.71-.15.95,0,.18.05.48.15.88-1.92-.17-3.78-.26-5.58-.26-1.59,0-3.47.09-5.67.26h0ZM354.48,103.41h0ZM357.87,126.05h0ZM345.85,104.39h0ZM364.28,126.2c.17-2.18.26-4.68.26-7.5v-7.76c0-1.99-.09-4.08-.26-6.26.76.1,1.77.15,3.02.15.16,0,.84-.03,2.04-.08,1.2-.05,1.87-.07,2.03-.07,4.3,0,6.45,1.65,6.45,4.95s-2.12,5.13-6.36,5.99c2.68,3.51,5.53,7.03,8.54,10.58-.57-.1-1.18-.15-1.82-.15-.69,0-1.32.05-1.87.15-1.21-1.65-2.55-3.48-4.03-5.47-1.47-1.99-2.83-3.6-4.07-4.84h-1.13v2.83c0,2.89.09,5.39.26,7.48-.74-.1-1.25-.15-1.54-.15-.57,0-1.08.05-1.53.15h0ZM367.08,114.51c.36.14,1.01.21,1.94.21,1.86,0,3.31-.43,4.34-1.3,1.05-.86,1.57-2.05,1.57-3.56,0-1.3-.43-2.3-1.3-2.99-.85-.69-1.99-1.04-3.4-1.04-.82,0-1.82.06-3,.17-.09,3.97-.14,6.47-.15,7.5v.99h0ZM370.46,103.41h0ZM371.54,126.05h0ZM361.46,104.39h0Z"
                        style={{
                          fill: "#fff",
                          fillRule: "evenodd",
                          strokeWidth: 0
                        }}
                      />
                      <path
                        d="M2.22,153.2c.14-2.39.2-4.35.2-5.89v-4.17c0-1.9-.07-4.19-.2-6.87.5.08.92.12,1.24.12.47,0,.86-.04,1.18-.12-.14,2.91-.21,5.16-.21,6.74v4.31c0,1.5.07,3.46.21,5.89-.51-.08-.92-.12-1.21-.12-.42,0-.81.04-1.2.12h0ZM3.51,135.27h0ZM2.87,153.08h0ZM0,136.04h0ZM34.49,153.2c1.15-7.22,1.92-12.82,2.31-16.81h.42c.42.97,1.51,3.06,3.25,6.29,1.74,3.22,3.02,5.52,3.84,6.88h0c1.62-2.91,4.08-7.3,7.36-13.17h.32c.5,4.68,1.13,10.29,1.92,16.81-.57-.08-.94-.12-1.11-.12-.2,0-.59.04-1.18.12-.13-1.88-.33-4.28-.61-7.2-.27-2.91-.45-4.66-.52-5.25h0c-2.79,4.7-4.98,8.8-6.56,12.33h-.23c-1.4-2.85-3.52-6.96-6.36-12.33h0c-.75,6.42-1.13,10.57-1.13,12.45-.43-.08-.68-.12-.76-.12-.25,0-.56.04-.96.12h0ZM82.82,153.2c1.15-7.22,1.92-12.82,2.3-16.81h.42c.42.97,1.51,3.06,3.25,6.29,1.74,3.22,3.02,5.52,3.84,6.88h0c1.62-2.91,4.08-7.3,7.36-13.17h.32c.5,4.68,1.13,10.29,1.92,16.81-.57-.08-.94-.12-1.11-.12-.2,0-.59.04-1.18.12-.13-1.88-.33-4.28-.61-7.2-.27-2.91-.45-4.66-.52-5.25h0c-2.79,4.7-4.98,8.8-6.56,12.33h-.23c-1.4-2.85-3.52-6.96-6.36-12.33h0c-.75,6.42-1.13,10.57-1.13,12.45-.43-.08-.68-.12-.76-.12-.25,0-.56.04-.96.12h0ZM130.99,144.73c0-2.69.84-4.82,2.51-6.37,1.67-1.55,3.9-2.33,6.67-2.33s4.96.77,6.64,2.31c1.69,1.54,2.53,3.67,2.53,6.38s-.81,4.71-2.42,6.31c-1.61,1.59-3.86,2.39-6.75,2.39s-5.12-.81-6.74-2.42c-1.63-1.61-2.44-3.7-2.44-6.27h0ZM133.41,144.73c0,2.48.6,4.4,1.81,5.76,1.21,1.35,2.86,2.03,4.94,2.03s3.71-.67,4.93-2c1.22-1.33,1.82-3.26,1.82-5.78s-.6-4.43-1.81-5.77c-1.21-1.34-2.86-2.01-4.94-2.01s-3.82.7-4.99,2.1c-1.18,1.4-1.76,3.29-1.76,5.68h0ZM140.24,135.27h0ZM179.14,153.2c.14-1.24.21-3.2.21-5.89v-4.82c0-2.59-.07-4.66-.21-6.22.91.08,1.79.12,2.62.12.19,0,.66-.02,1.39-.06.73-.04,1.14-.06,1.21-.06,3.49,0,5.24,1.18,5.24,3.54s-1.41,3.7-4.23,4.34c3.22.19,4.83,1.58,4.83,4.17,0,1.39-.55,2.55-1.64,3.49-1.1.93-2.64,1.39-4.62,1.39-.18,0-.61-.02-1.29-.06-.66-.04-1.04-.06-1.14-.06-.97,0-1.77.04-2.37.12h0ZM181.35,144.73c0,2.89.04,5.36.12,7.42.02.06.39.09,1.11.11.71.01,1.15.02,1.32.02,1.25,0,2.24-.4,2.96-1.19.72-.8,1.08-1.77,1.08-2.91,0-1.24-.42-2.12-1.26-2.65-.84-.54-2.3-.8-4.38-.8h-.95ZM181.35,143.82h1.31c3.19,0,4.78-1.18,4.78-3.55,0-2.06-1.37-3.09-4.11-3.09-.07,0-.36.02-.88.05-.51.03-.84.05-.98.09-.08,2.28-.12,4.45-.12,6.51h0ZM220.63,153.2c.13-2.39.21-4.35.21-5.89v-4.17c0-1.9-.07-4.19-.21-6.87.5.08.92.12,1.24.12.47,0,.86-.04,1.17-.12-.13,2.91-.2,5.16-.2,6.74v4.31c0,1.5.07,3.46.2,5.89-.51-.08-.92-.12-1.21-.12-.42,0-.81.04-1.2.12h0ZM221.93,135.27h0ZM221.28,153.08h0ZM218.41,136.04h0ZM253.95,153.28c.13-1.81.21-3.79.21-5.91v-4.41c0-3.16-.07-5.39-.21-6.69.59.08,1,.12,1.24.12.35,0,.75-.04,1.17-.12-.13,2.83-.21,5.01-.21,6.53v4.06c0,1.9.04,3.63.12,5.19h1.2c2.15,0,3.99-.07,5.52-.2-.08.3-.12.54-.12.72s.04.42.12.72c-1.96-.13-3.46-.2-4.48-.2-1.57,0-3.09.07-4.56.2h0ZM255.54,135.27h0ZM258.72,153.08h0ZM251.73,136.04h0ZM292.72,153.2c.13-2.39.2-4.35.2-5.89v-4.17c0-1.9-.07-4.19-.2-6.87.5.08.92.12,1.24.12.47,0,.86-.04,1.17-.12-.13,2.91-.21,5.16-.21,6.74v4.31c0,1.5.07,3.46.21,5.89-.51-.08-.92-.12-1.21-.12-.42,0-.81.04-1.2.12h0ZM294.01,135.27h0ZM293.36,153.08h0ZM290.5,136.04h0ZM326.03,153.28c.13-2.97.21-4.96.21-5.95v-5.18c0-1.33-.07-3.32-.21-5.97,1.46.14,2.98.2,4.53.2,1.24,0,2.64-.07,4.19-.2-.08.3-.12.54-.12.72,0,.21.04.45.12.72-1.97-.13-4.1-.2-6.39-.2-.08,1.34-.12,3.46-.12,6.37,1.67,0,3.66-.07,5.95-.21-.08.27-.12.51-.12.72,0,.18.04.42.12.72-1.86-.14-3.84-.21-5.95-.21,0,.93.04,3.34.12,7.23h0c3.24,0,5.41-.07,6.52-.2-.08.31-.12.56-.12.75,0,.14.04.38.12.69-1.51-.13-2.98-.2-4.39-.2-1.25,0-2.73.07-4.46.2h0ZM330.6,135.27h0ZM333.27,153.08h0ZM323.81,136.04h0ZM365.11,153.2c.14-3.54.21-7.22.21-11.06,0-3.19-.02-5.25-.06-6.2h.38c4.84,5.35,8.94,9.77,12.3,13.25h0v-3.89c0-3.2-.06-6.21-.17-9.04.27.08.52.12.76.12.22,0,.44-.04.67-.12-.13,3.89-.2,6.75-.2,8.58,0,3.38.02,6.23.06,8.58h-.38c-3.18-3.77-7.3-8.27-12.34-13.53h0c0,7.11.07,11.54.21,13.3-.24-.06-.46-.1-.67-.12-.22,0-.47.04-.76.12h0ZM372.37,135.27h0ZM372.11,153.08h0ZM362.58,136.04h0Z"
                        style={{
                          fill: "#fff",
                          fillRule: "evenodd",
                          strokeWidth: 0
                        }}
                      />
                      <polygon
                        points="190 33.74 215.69 60.87 241.17 87.78 221.28 72.21 190 47.72 158.72 72.21 138.83 87.78 164.31 60.87 190 33.74 190 33.74"
                        style={{
                          fill: "#fff",
                          fillRule: "evenodd",
                          strokeWidth: 0
                        }}
                      />
                      <path
                        d="M173.43,46.68c.05-12.94,5.49-24.37,13.69-31.07l-.32-.18-1.26-.61-1.29-.54-1.32-.46-.9-.25c-7.01,8.5-11.36,20.29-11.36,33.29,0,.89.02,1.78.06,2.66l2.69-2.84h0Z"
                        style={{
                          fill: "#fff",
                          fillRule: "evenodd",
                          strokeWidth: 0
                        }}
                      />
                      <path
                        d="M208.87,0c-5.68,0-11.08,1.54-15.93,4.29l1.11.87,1.6,1.4,1.55,1.5,1.49,1.58.2.24c1.67-.35,3.37-.53,5.12-.53,16.84,0,30.58,16.85,30.58,37.51,0,8.54-2.35,16.43-6.3,22.75l8.58,9.06c6.32-8.37,10.2-19.55,10.2-31.81,0-25.81-17.15-46.85-38.19-46.85h0Z"
                        style={{
                          fill: "#fff",
                          fillRule: "evenodd",
                          strokeWidth: 0
                        }}
                      />
                      <path
                        d="M171.13,0c21.04,0,38.19,21.05,38.19,46.85,0,.89-.02,1.78-.06,2.66l-2.69-2.84c-.08-20.58-13.78-37.33-30.57-37.33s-30.57,16.85-30.57,37.51c0,8.54,2.35,16.43,6.3,22.75l-8.58,9.07c-6.32-8.37-10.2-19.55-10.2-31.81,0-25.81,17.16-46.85,38.19-46.85h0Z"
                        style={{
                          fill: "#962544",
                          fillRule: "evenodd",
                          strokeWidth: 0
                        }}
                      />
                    </svg>
                    <img
                      className="img-fluid lazy"
                      src="/theme/images/SIV_Logo.png"
                      alt="Logo des Schweizerischen Immoblienschätzer-Verbandes"
                    />
                  </div>
                </div>
                <div className="dd-col-xl-7 dd-contact">
                  <div className="dd-row">
                    <div className="dd-col-xl-auto">
                      <p>
                        Rothusstrasse 23
                        <br />
                        6331 Hünenberg
                      </p>
                    </div>
                    <div className="dd-col-xl-auto">
                      <p>
                        Oberdorf 40
                        <br />
                        6403 Küssnacht am Rigi
                      </p>
                    </div>
                    <div className="dd-col-xl-auto">
                      <p>
                        <a href="javascript:decryptUnicorn(vasb|fgnqryznaacnegare.pu)">
                          info
                          <span className="unicorn">
                            <span>_at_</span>
                          </span>
                          stadelmannpartner.ch
                        </a>
                        <br />
                        <a href="tel:+41 41 508 07 07">+41 41 508 07 07</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dd-row">
                <div className="dd-col-xl-7 dd-ml-xl-auto dd-nav-tertiary">
                  <div className="dd-row" style={{ marginBottom: 0 }}>
                    <div className="dd-col-xl-auto">
                      <ul>
                        <li>
                          <a href="/datenschutz/">
                            <span>Datenschutz</span>
                          </a>
                        </li>
                        <li>
                          <a href="/impressum/">
                            <span>Impressum</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dd-socials">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/stadelmannpartner"
                          target="_blank"
                        >
                          <svg
                            viewBox="4.0006 4.1484 15.9995 15.9016"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#fff"
                              d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/stadelmannpartner/?hl=de"
                          target="_blank"
                        >
                          <svg
                            viewBox="4 4 40 40"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_iconCarrier">
                              <circle cx={24} cy={24} r={20} fill="#fff" />
                              <path
                                d="M24 14.1622C27.2041 14.1622 27.5837 14.1744 28.849 14.2321C30.019 14.2855 30.6544 14.481 31.0773 14.6453C31.6374 14.863 32.0371 15.123 32.457 15.5429C32.877 15.9629 33.137 16.3626 33.3547 16.9227C33.519 17.3456 33.7145 17.981 33.7679 19.1509C33.8256 20.4163 33.8378 20.7958 33.8378 23.9999C33.8378 27.2041 33.8256 27.5836 33.7679 28.849C33.7145 30.019 33.519 30.6543 33.3547 31.0772C33.137 31.6373 32.877 32.0371 32.4571 32.457C32.0371 32.8769 31.6374 33.1369 31.0773 33.3546C30.6544 33.519 30.019 33.7144 28.849 33.7678C27.5839 33.8255 27.2044 33.8378 24 33.8378C20.7956 33.8378 20.4162 33.8255 19.151 33.7678C17.981 33.7144 17.3456 33.519 16.9227 33.3546C16.3626 33.1369 15.9629 32.8769 15.543 32.457C15.1231 32.0371 14.863 31.6373 14.6453 31.0772C14.481 30.6543 14.2855 30.019 14.2321 28.849C14.1744 27.5836 14.1622 27.2041 14.1622 23.9999C14.1622 20.7958 14.1744 20.4163 14.2321 19.1509C14.2855 17.981 14.481 17.3456 14.6453 16.9227C14.863 16.3626 15.123 15.9629 15.543 15.543C15.9629 15.123 16.3626 14.863 16.9227 14.6453C17.3456 14.481 17.981 14.2855 19.151 14.2321C20.4163 14.1744 20.7959 14.1622 24 14.1622ZM24 12C20.741 12 20.3323 12.0138 19.0524 12.0722C17.7752 12.1305 16.9028 12.3333 16.1395 12.63C15.3504 12.9366 14.6812 13.3469 14.0141 14.0141C13.3469 14.6812 12.9366 15.3504 12.63 16.1395C12.3333 16.9028 12.1305 17.7751 12.0722 19.0524C12.0138 20.3323 12 20.741 12 23.9999C12 27.259 12.0138 27.6676 12.0722 28.9475C12.1305 30.2248 12.3333 31.0971 12.63 31.8604C12.9366 32.6495 13.3469 33.3187 14.0141 33.9859C14.6812 34.653 15.3504 35.0633 16.1395 35.3699C16.9028 35.6666 17.7752 35.8694 19.0524 35.9277C20.3323 35.9861 20.741 35.9999 24 35.9999C27.259 35.9999 27.6677 35.9861 28.9476 35.9277C30.2248 35.8694 31.0972 35.6666 31.8605 35.3699C32.6496 35.0633 33.3188 34.653 33.9859 33.9859C34.653 33.3187 35.0634 32.6495 35.37 31.8604C35.6667 31.0971 35.8695 30.2248 35.9278 28.9475C35.9862 27.6676 36 27.259 36 23.9999C36 20.741 35.9862 20.3323 35.9278 19.0524C35.8695 17.7751 35.6667 16.9028 35.37 16.1395C35.0634 15.3504 34.653 14.6812 33.9859 14.0141C33.3188 13.3469 32.6496 12.9366 31.8605 12.63C31.0972 12.3333 30.2248 12.1305 28.9476 12.0722C27.6677 12.0138 27.259 12 24 12Z"
                                fill="#000"
                              />
                              <path
                                d="M24.0059 17.8433C20.6026 17.8433 17.8438 20.6021 17.8438 24.0054C17.8438 27.4087 20.6026 30.1675 24.0059 30.1675C27.4092 30.1675 30.1681 27.4087 30.1681 24.0054C30.1681 20.6021 27.4092 17.8433 24.0059 17.8433ZM24.0059 28.0054C21.7968 28.0054 20.0059 26.2145 20.0059 24.0054C20.0059 21.7963 21.7968 20.0054 24.0059 20.0054C26.2151 20.0054 28.0059 21.7963 28.0059 24.0054C28.0059 26.2145 26.2151 28.0054 24.0059 28.0054Z"
                                fill="#000"
                              />
                              <path
                                d="M31.8507 17.5963C31.8507 18.3915 31.206 19.0363 30.4107 19.0363C29.6154 19.0363 28.9707 18.3915 28.9707 17.5963C28.9707 16.801 29.6154 16.1562 30.4107 16.1562C31.206 16.1562 31.8507 16.801 31.8507 17.5963Z"
                                fill="#000"
                              />
                            </g>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="dd-curve-04 dd-curve dd-curve-right"
            fill="currentColor"
            height={100}
            id="dd-curve-04"
            viewBox="0 0 100 100"
            width={100}
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Teil des Logos von Stadelmann und Partner Immobilien</title>
            <path
              className="dd-part dd-part-1"
              d="M50.001816,0C23.262636,0,1.453785,26.754816,1.453785,59.560577
                  c0,15.585266,4.927913,29.805077,12.967109,40.439423l10.911862-11.524483c-5.01614-8.031059-8.005634-18.05584-8.005634-28.91494
                  c0-26.259533,17.458725-47.67976,38.86713-47.67976c21.343948,0,38.767845,21.302254,38.864716,47.461227l3.414093,3.605167
                  c0.05085-1.12228,0.079453-2.249493,0.079453-3.386635C98.552513,26.754816,76.746094,0,50.001816,0L50.001816,0z"
            />
          </svg>
        </footer>
        <div className="dd-cookies dd-hidden">
          <div>
            <p>
              Auf dieser Website werden Cookies eingesetzt. Weitere Informationen
              finden Sie unter «<a href="/datenschutz/">Datenschutz</a>
              ».
            </p>
          </div>
          <div>
            <a href="javascript:;" data-confirm="">
              Akzeptieren
            </a>
          </div>
        </div>

      </main>
    </div>


  );
}
