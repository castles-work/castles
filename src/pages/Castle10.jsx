import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';
import particleOptions from '../particles/home.json';
import {particlesInit} from '../particles/particlesInit';

import Image1 from '../assets/images/castle10_1.webp';
import Image2 from '../assets/images/castle10_2.webp';
import Image3 from '../assets/images/castle10_3.webp';

export default class Castle extends Component {
  render() {
    return (
      <div className="app">
        <Particles init={particlesInit} options={particleOptions} />

        <div className="page">
          <div className="page-text">
            <b>Палац Орловських, Жмеринський район</b>
            <p>Палац Орловських в Северинівці побудований на поч. XIX ст. і зберігся до наших днів майже без змін.</p>
            <div className="page-image"><img src={Image1} alt="палац" /></div>
            <p>Северин Орловський був людиною скупою і не хотів вкладати великі гроші в будівництво пишного палацу за проектом іменитого архітектора. Зовні будівля була досить скромною, зате зсередини вражала розкішшю і пишністю.</p>
            <p>У палаці були зібрані багатющі колекції картин, срібла, старовинних монет, марок і ін. На жаль, інтер'єри не збереглися. Деякі картини з Северинівського палацу зараз експонуються в музеях Варшави і Києва.</p>
            <div className="page-collage">
              <img src={Image2} alt="палац" />
              <img src={Image3} alt="палац" />
            </div>
            <p>Навколо палацу був розбитий парк, архітектором якого був Д. Міклер. В кінці парку височіє камінь-скеля з піщанику, з якого відкривається чудовий краєвид. Поруч з палацом збереглося масштабне будова колишнього манежу з воротами. За радянських часів будівля палацу облицювали кахельною плиткою. </p>
            <iframe title="Палац Орловських, Жмеринський район" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D0%9F%D0%B0%D0%BB%D0%B0%D1%86%20%D0%9E%D1%80%D0%BB%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D1%85,%20%D0%96%D0%BC%D0%B5%D1%80%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
            <p>В даний час тут знаходиться санаторій для людей з проблемами опорно-рухового апарату.</p>
          </div>
          <div className="parallax-btn-wrapper">
            <Link to="/" className="parallax-btn">На головну</Link>
          </div>
        </div>
      </div>
    );
  }
}