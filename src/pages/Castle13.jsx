import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';
import particleOptions from '../particles/home.json';
import {particlesInit} from '../particles/particlesInit';

import Image1 from '../assets/images/castle13_1.webp';
import Image2 from '../assets/images/castle13_2.webp';
import Image3 from '../assets/images/castle13_3.webp';
import Image4 from '../assets/images/castle13_4.webp';
import Image5 from '../assets/images/castle13_5.webp';
import Image6 from '../assets/images/castle13_6.webp';

export default class Castle extends Component {
  render() {
    return (
      <div className="app">
        <Particles init={particlesInit} options={particleOptions} />

        <div className="page">
          <div className="page-text">
            <b>Замок Мерінга, Липовецький район</b>
            <p>Палац Мерінга був побудований в 18 столітті, при володінні магнатів Вершицьких і знаходиться у селищі Стара Прилука, Липовецького району.</p>
            <div className="page-image"><img src={Image1} alt="палац" /></div>
            <p>В кінці XIX століття село Стара Прилука, що розташоване у Вінницькій області, належала Сергію Мерінгу, синові відомого київського лікаря Ф. Ф. Мерінга. У володінні Сергія Федоровича були цегляний і цукровий заводи, а також водяний млин. Сам маєток було в оренді у Казимира Бліжовского, який і вів орендне господарство. </p>
            <div className="page-image"><img src={Image2} alt="палац" /></div>
            <p>Будівля мала три поверхи, в яких розміщувалися 43 кімнати, але з часом верхній поверх був зруйнований. У палацовому приміщенні знайшли місце елементи різних періодів споруди, починаючи з кінця 18 століття і до 1906 року. Але все ж кінцевий вигляд палац придбав при владі Сергія Мерінга. Представник відомої Київської культурної династії вніс свій внесок в історичну споруду, а будівля набула необарочний вид, який і понині красується відвідувачів.</p>
            <div className="page-collage">
              <img src={Image3} alt="палац" />
              <img src={Image4} alt="палац" />
            </div>
            <p>Палац Мерінга нагадує київський Маріїнський палац. Стиль замку - необарокко. Деякі внутрішні приміщення, в тому числі і вестибюль, виконані в мавританському стилі і досить схожі з іспанським палацом Альгамбра. З внутрішнього оздоблення збереглася майолікова обробка стін і стель у вестибюлі, а в деяких кімнатах і стелі з червоного дерева.</p>
            <div className="page-collage">
              <img src={Image5} alt="палац" />
              <img src={Image6} alt="палац" />
            </div>
            <p>Більшість приміщень знаходяться в перефарбовані стані, і від різнобарвною гами він став ще менш схожий з початковим пишним палацом. Замкова будівля розташована посеред старовинного парку.</p>
            <iframe title="Замок Мерінга, Липовецький район" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D0%97%D0%B0%D0%BC%D0%BE%D0%BA%20%D0%9C%D0%B5%D1%80%D1%96%D0%BD%D0%B3%D0%B0,%20%D0%9B%D0%B8%D0%BF%D0%BE%D0%B2%D0%B5%D1%86%D1%8C%D0%BA%D0%B8%D0%B9%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
            <p>Зараз на території замку Мерінга знаходиться школа-інтернат</p>
          </div>
          <div className="parallax-btn-wrapper">
            <Link to="/" className="parallax-btn">На головну</Link>
          </div>
        </div>
      </div>
    );
  }
}