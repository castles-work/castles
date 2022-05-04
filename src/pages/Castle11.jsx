import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';
import particleOptions from '../particles/home.json';
import {particlesInit} from '../particles/particlesInit';

import Image1 from '../assets/images/castle11_1.webp';
import Image2 from '../assets/images/castle11_2.webp';
import Image3 from '../assets/images/castle11_3.webp';
import Image4 from '../assets/images/castle11_4.webp';
import Image5 from '../assets/images/castle11_5.webp';

export default class Castle extends Component {
  render() {
    return (
      <div className="app">
        <Particles init={particlesInit} options={particleOptions} />

        <div className="page">
          <div className="page-text">
            <b>Палац подільського маршала С. Комара, Мурованокуриловецький район</b>
            <p>Палац подільського маршала С. Комара , що знаходиться у містечку Муровані Курилівці, побудований в 1805 р на основі фортечних споруд XVI ст.</p>
            <div className="page-image"><img src={Image1} alt="палац" /></div>
            <p>У архітектурну композицію садиби архітектор включив частини замкових споруд: кам'яний ескарп бастіонного замку з північної, східної і південної сторін, а з західної, напільного боку - фундаменти і руїни колишньої замкової стіни.</p>
            <p>Ця частина палацу виглядає дуже велично, тоді як із зворотного боку являє собою звичайне двоповерхова будівля в стилі класицизму. Частково зберігся пейзажний парк, будівництвом якого в 1814 р керував знаменитий ірландський паркобудівельник Д. Міклер.</p>
            <div className="page-collage">
              <img src={Image2} alt="палац" />
              <img src={Image3} alt="палац" />
            </div>
            <p>Збереглися споруди садиби: стайня, флігель в стилі неоготики, кам'яний трьохпролітний арочний міст через р. Жван.</p>
            <div className="page-collage">
              <img src={Image4} alt="палац" />
              <img src={Image5} alt="палац" />
            </div>
            <iframe title="Палац подільського маршала С. Комара, Мурованокуриловецький район" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D0%9F%D0%B0%D0%BB%D0%B0%D1%86%20%D0%BF%D0%BE%D0%B4%D1%96%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE%20%D0%BC%D0%B0%D1%80%D1%88%D0%B0%D0%BB%D0%B0%20%D0%A1.%20%D0%9A%D0%BE%D0%BC%D0%B0%D1%80%D0%B0,%20%D0%9C%D1%83%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BE%D0%BA%D1%83%D1%80%D0%B8%D0%BB%D0%BE%D0%B2%D0%B5%D1%86%D1%8C%D0%BA%D0%B8%D0%B9%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
            <p>Зараз в садибі розміщена санаторна школа-інтернат для дітей із захворюваннями серцево-судинної системи</p>
          </div>
          <div className="parallax-btn-wrapper">
            <Link to="/" className="parallax-btn">На головну</Link>
          </div>
        </div>
      </div>
    );
  }
}