import React from 'react';
import '../assets/css/main.css';

const Instruction = (props) => {
    return (
        <section className="instruction">
            <h2>Instrukcja korzystania z przewodnika</h2>
            <div className="instruction-wrapper">
                <h3>Sekcja 1. Najważniejsze elementy</h3>
                <div className="section-wrapper">
                    <img className="instruction-img" src="/img/widok.png" alt="Widok przewodnika - instrukcja obsługi" />
                    <div className="section-info-wrapper">
                        <h4>1. Nawigacja</h4>
                        <p>Po naciśnięciu w przycisk wysuwa się menu nawigacyjne przedstawione w sekcji 2.</p>
                        <h4>2. Filtrowanie</h4>
                        <p>Po naciśnięciu w przycisk wysuwa się menu filtrowania przedstawione w sekcji 3.</p>
                        <h4>3. Menu typu hamburger</h4>
                        <p>Jest to menu nawigacyjne strony. Po naciśnięciu rozwiną się elementy menu. Zostanie przedstawione w sekcji 4.</p>
                        <h4>4. Marker *</h4>
                        <p>Jest to marker przedstawiający miejsce, lub wydarzenie. Po jego naciśnięciu ukażą się krótkie informacje o danym punkcie oraz będziemy mogli wyświetlić więcej informacji przyciskiem "Pokaż więcej".</p>
                    </div>
                </div>
                <hr className="section-line" />
                <div className="section-wrapper">
                    <div>
                        <h3>* Ikony przedstawiające miejsca i wydarzenia</h3>
                        <div>
                            <img src="/img/ei_v.png" alt="Ikona miejsca" />
                            <p>Ikona przedstawiająca miejsce</p>
                        </div>
                        <div>
                            <img src="/img/ei_g.png" alt="Ikona aktywnego wydarzenia" />
                            <p>Ikona przedstawiająca aktywne wydarzenie</p>
                            <img src="/img/ei_o.png" alt="Ikona trwającego wydarzenia" />
                            <p>Ikona przedstawiająca trwające wydarzenie</p>
                            <img src="/img/ei_r.png" alt="Ikona zakończonego wydarzenia" />
                            <p>Ikona przedstawiająca zakonczone wydarzenie</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="section-line" />
            <div className="instruction-wrapper">
                <h3>Sekcja 2. Nawigacja</h3>
                <div className="section-wrapper">
                    <img className="instruction-img" src="/img/widok-nawigacja.png" alt="Obsługiwanie nawigacji" />
                    <div className="section-info-wrapper">
                        <h4>1. Początek</h4>
                        <p>Spośród dostępnych miejsc wybieramy te, z którego chcemy zacząć podróż.</p>
                        <h4>2. Punkty pośrednie</h4>
                        <p>Jeśli chcemy odwiedzić po drodze inne miejsca, wybieramy je spośród dostępnych.</p>
                        <h4>3. Koniec</h4>
                        <p>Wybieramy miejsce w którym chcemy zakończyć nawigowanie.</p>
                        <h4>4. Nawiguj</h4>
                        <p>Wciskamy przycisk "NAWIGUJ", aby rozpocząć nawigowanie.</p>
                        <h4>5. Wyjdź</h4>
                        <p>Naciskając ten przycisk opuszczamy nawigację nie zatrzymując jej.</p>
                    </div>
                </div>
            </div>
            <div className="instruction-wrapper">
                <div className="section-wrapper">
                    <img className="instruction-img" src="/img/widok-nawigacja-2.png" alt="Obsługiwanie nawigacji - ciąg dalszy" />
                    <div className="section-info-wrapper">
                        <h4>1. Zatrzymanie nawigacji</h4>
                        <p>Wciskając ten przycisk zatrzymujemy nawigowanie.</p>
                        <h4>2. Wskazówki dojazdu</h4>
                        <p>W tym miejscu znajdują się wskazówki na temat dojazdu.</p>
                    </div>
                </div>
            </div>
            <hr className="section-line" />
            <div className="instruction-wrapper">
                <h3>Sekcja 3. Filtrowanie</h3>
                <div className="section-wrapper">
                    <img className="instruction-img" src="/img/widok-filtrowanie.png" alt="Obsługiwanie panelu filtrującego" />
                    <div className="section-info-wrapper">
                        <h4>1. Typy miejsca</h4>
                        <p>Filtrowanie miejsc na mapie odbywa się poprzez wybranie określonych typów z tej listy.</p>
                        <h4>2. Ukrycie menu filtrowania</h4>
                        <p>Naciskając ten przycisk menu filtrowania się ukryje.</p>
                        <h4>3. Dojazd</h4>
                        <p>Nawigacja prowadzi według ustalonego trybu dojazdu. W tym miejscu możemy wybrać interesujący nas sposób podróży.</p>
                    </div>
                </div>
            </div>
            <hr className="section-line" />
            <div className="instruction-wrapper">
                <h3>Sekcja 4. Menu typu hamburger</h3>
                <div className="section-wrapper">
                    <img className="instruction-img" src="/img/widok-hamburger.png" alt="Hamburger menu - wygląd" />
                    <div className="section-info-wrapper">
                        <h4>1. Podstrony</h4>
                        <p>W tym miejscu wybieramy miejsce na stronie do którego chcemy się udać.</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Instruction