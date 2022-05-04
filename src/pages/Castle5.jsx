import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';
import particleOptions from '../particles/home.json';
import {particlesInit} from '../particles/particlesInit';

import Image1 from '../assets/images/castle5_1.webp';
import Image2 from '../assets/images/castle5_2.webp';
import Image3 from '../assets/images/castle5_3.webp';
import Image4 from '../assets/images/castle5_4.webp';
import Image5 from '../assets/images/castle5_5.webp';
import Image6 from '../assets/images/castle5_6.webp';

export default class Castle extends Component {
  render() {
    return (
      <div className="app">
        <Particles init={particlesInit} options={particleOptions} />

        <div className="page">
          <div className="page-text">
            <b>Палац генерала Заботіна, Оратівський район</b>
            <p>Будівля палацу, який є окрасою села Мала Ростівка, Оратівського району, що на Вінничині, була збудована у 1901 році генералом царської армії Заботіним. Палац виявився одним із найохайніших серед численних, так званих, «панських» маєтків у Вінницькій області.</p>
            <div className="page-image"><img src={Image1} alt="палац" /></div>
            <p>На жаль, не збереглось жодної інформації про самого генерала, ким він був і що робив на Вінниччині. Але подейкують, що цеглу на будівництво привозили аж з Польщі. </p>
            <div className="page-image"><img src={Image2} alt="палац" /></div>
            <p>Як не дивно, палац  дуже добре зберігся, навіть статуї не виказують свою більш як сторічну історію. Статуї на будівлі, судячи з їхнього вигляду, не старі, і, можливо, встановлені значно пізніше, бо вирізняються на фоні загальної архітектури. Хоча виглядають якось неприродно цілими, тож, ймовірно, з’явились вони тут не так давно. Хоча деякі леви, схоже, усе ж автентичні.</p>
            <div className="page-collage">
              <img src={Image3} alt="палац" />
              <img src={Image4} alt="палац" />
            </div>
            <p>Хто уже був у палаці всередині, стверджують, що у кімнатах не менш цікаво, затишно та виушкано, зокрема у самому вестибюлі ще навіть висить ікона Бердичівської Божої Матері.</p>
            <div className="page-collage">
              <img src={Image5} alt="палац" />
              <img src={Image6} alt="палац" />
            </div>
            <p>Зовнішній вигляд палацу все ж таки наштовхує на думку, що палац і досі має свого господаря. Бо будівля принамйні ціла і доглянута, а це вже рідкість. От тільки слідів перебування тут людей не видно. І тільки напис зі світлодіодних трубок «Центр реабілітації», який, щоправда, ні про що й не говорить. Що робилось у цьому центрі – загадка.</p>
            <iframe title="Палац генерала Заботіна, Оратівський район" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D0%9F%D0%B0%D0%BB%D0%B0%D1%86%20%D0%B3%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D0%BB%D0%B0%20%D0%97%D0%B0%D0%B1%D0%BE%D1%82%D1%96%D0%BD%D0%B0,%20%D0%9E%D1%80%D0%B0%D1%82%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
            <p>Зараз це пам'ятка архітектури і окраса села. Кілька років тому замок був викуплений бізнесменом і тут навіть були сторожі. Зараз про власника замку нічого не відомо.  </p>
          </div>
          <div className="parallax-btn-wrapper">
            <Link to="/" className="parallax-btn">На головну</Link>
          </div>
        </div>
      </div>
    );
  }
}