import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';
import particleOptions from '../particles/home.json';
import {particlesInit} from '../particles/particlesInit';

import Image1 from '../assets/images/castle8_1.webp';
import Image2 from '../assets/images/castle8_2.webp';
import Image3 from '../assets/images/castle8_3.webp';
import Image4 from '../assets/images/castle8_4.webp';

export default class Castle extends Component {
  render() {
    return (
      <div className="app">
        <Particles init={particlesInit} options={particleOptions} />

        <div className="page">
          <div className="page-text">
            <b>Палац Ігнатія Вітославського, Жмеринський район</b>
            <p>Палац Вітославських був побудований ще у XVII ст. В реєстрі архітектурних пам'яток України записано, що палац та господарський флігель поруч з'явились тут у 1830-му році, в епоху романтизму Розташований у пейзажному парку створеному Діонісієм Маклером, села Чернятин, Жмеринського району. </p>
            <div className="page-image"><img src={Image1} alt="палац" /></div>
            <p>На жаль, від парку залишилось небагато. Були знищені всі паркові павільйони і альтанки, не стало багатої панської бібліотеки палацу. Головним архітектором маєтку родини Вітославських був польський архітектор Генріх Іттар. Декор замку, як внутрішній так і зовнішній, виконані в неоготичному стилі з елементами ренесансу і класицизму.</p>
            <div className="page-image"><img src={Image2} alt="палац" /></div>
            <p>Саме будівництво палацу проходило в декілька етапів. З самого початку було зведене південне крило з декоративною романтичною баштою, прикрашеною ренесансною короною з зубцями. Над іі верхівкою підіймали, за старою лицарською традицією, вимпел-прапор з гербом власника. Інший корпус «приєднаний» до цієї частини за допомогою аркадної галереї.</p>
            <div className="page-collage">
              <img src={Image3} alt="палац" />
              <img src={Image4} alt="палац" />
            </div>
            <iframe title="Палац Ігнатія Вітославського, Жмеринський район" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D0%9F%D0%B0%D0%BB%D0%B0%D1%86%20%D0%86%D0%B3%D0%BD%D0%B0%D1%82%D1%96%D1%8F%20%D0%92%D1%96%D1%82%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE,%20%D0%96%D0%BC%D0%B5%D1%80%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
            <p>Зараз у приміщенні палацу зараз розміщено один з корпусів Чернятинського аграрного технікуму.</p>
          </div>
          <div className="parallax-btn-wrapper">
            <Link to="/" className="parallax-btn">На головну</Link>
          </div>
        </div>
      </div>
    );
  }
}