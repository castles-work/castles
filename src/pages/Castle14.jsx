import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';
import particleOptions from '../particles/home.json';
import {particlesInit} from '../particles/particlesInit';

import Image1 from '../assets/images/castle14_1.webp';
import Image2 from '../assets/images/castle14_2.webp';
import Image3 from '../assets/images/castle14_3.webp';
import Image4 from '../assets/images/castle14_4.webp';

export default class Castle extends Component {
  render() {
    return (
      <div className="app">
        <Particles init={particlesInit} options={particleOptions} />

        <div className="page">
          <div className="page-text">
            <b>Палац-садиба фон Мекків у Браїлові, Жмеринський район</b>
            <p>Садиба фон Мекків - одна з найголовніших пам'яток невеликого містечка Браїлів. Розташований на березі річки Рів. Охайний двоповерховий будинок-палац в стриманому класичному стилі був закладений ще задовго до прибуття сім'ї Карла фон Мекка в містечко. Свою знамениту садибу він викупив у 1868 році в місцевого поміщика. Під час Другої світової війни маємток був зруйнований, але згодом відновлений.</p>
            <div className="page-collage">
              <img src={Image1} alt="палац" />
              <img src={Image2} alt="палац" />
            </div>
            <p>Частково зберігся чудовий ландшафтний парк, де зростає близько 45 видів дерев і чагарників, а величні липи та граби пам'ятають події минулих століть. </p>
            <p>Садиба увійшла в історію завдяки її дружбу з великим композитором П. Чайковським. Їхнє знайомство було заочним - багато років, за взаємною домовленістю, вони спілкувалися тільки по переписці. 5 раз з 1778 по 1780 р Чайковський бував у маєтку фон Мекк під час відсутності господині. Тут він написав оперу "Орлеанська діва" і кілька романсів. Палац був відновлений після Другої світової війни. Зараз в будівлі розміщується Браїлівський професійний ліцей.</p>
            <div className="page-collage">
              <img src={Image3} alt="палац" />
              <img src={Image4} alt="палац" />
            </div>
            <iframe title="Палац-садиба фон Мекків у Браїлові, Жмеринський район" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D0%9F%D0%B0%D0%BB%D0%B0%D1%86-%D1%81%D0%B0%D0%B4%D0%B8%D0%B1%D0%B0%20%D1%84%D0%BE%D0%BD%20%D0%9C%D0%B5%D0%BA%D0%BA%D1%96%D0%B2%20%D1%83%20%D0%91%D1%80%D0%B0%D1%97%D0%BB%D0%BE%D0%B2%D1%96,%20%D0%96%D0%BC%D0%B5%D1%80%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
            <p>Зараз це будинок-палац фон Мекків і прилегла до нього територія мають декілька функцій. Одна з частин будинку перетворена на музей відомого музиканта Петра Ілліча Чайкоського. Інша частина - це Браїлівський професійний ліцей</p>
          </div>
          <div className="parallax-btn-wrapper">
            <Link to="/" className="parallax-btn">На головну</Link>
          </div>
        </div>
      </div>
    );
  }
}