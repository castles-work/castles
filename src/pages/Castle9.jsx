import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';
import particleOptions from '../particles/home.json';
import {particlesInit} from '../particles/particlesInit';

import Image1 from '../assets/images/castle9_1.webp';
import Image2 from '../assets/images/castle9_2.webp';
import Image3 from '../assets/images/castle9_3.webp';
import Image4 from '../assets/images/castle9_4.webp';
import Image5 from '../assets/images/castle9_5.webp';
import Image6 from '../assets/images/castle9_6.webp';
import Image7 from '../assets/images/castle9_7.webp';

export default class Castle extends Component {
  render() {
    return (
      <div className="app">
        <Particles init={particlesInit} options={particleOptions} />

        <div className="page">
          <div className="page-text">
            <b>Палац Чацького, Могилів-Подільський р-н</b>
            <p>Палац Чацького знаходиться в с.Серебринці, в минулому містечко Серебринець, Могилів-Подільского району.</p>
            <div className="page-image"><img src={Image1} alt="палац" /></div>
            <p>У 16 ст. волості серебринецькі належали магнатам Язловецьким. Після Язловецьких землі належали Чурилам. Останім власником був ксьонз Станіслав Чурило. До 1700 р. ці землі залишались без пана, а опісля перейшли по спадковості Дідушицьким.</p>
            <div className="page-collage">
              <img src={Image2} alt="палац" />
              <img src={Image3} alt="палац" />
            </div>
            <p>Звів палац Михайло Чацький. Його брат - Тадеуш Чацький був відомим просвітителем, а сам Михайло був учасником повстання Т. Костюшко. Після 1793 р. Катерина ІІ передала маєток фельдмаршалу П. Задунайському. Але через 3 роки володарем маєтку знову став Чацький. Пізніше в маєтку жив учасник оборони Севастополя під час Кримської війни генерал-лейтенант І.Г. Бережников. Палац споруджували у 1770-1780 рр.,на досить високому цоколі та побудований з цегли, а колони, капітелі, плити балкона витесані з піщанику. Розташований на схилі, фасад має цокольний поверх. Прикрасою над ним є балкон на стовпах впродовж усього одинадцятивіконного фронтону.</p>
            <div className="page-collage">
              <img src={Image4} alt="палац" />
              <img src={Image5} alt="палац" />
            </div>
            <p>Палац був збудований в стилі класицизму. Будівля була прямокутною за поземним планом, двохповерховою. Зі сторони парку будинок стояв на високому цокольному поверсі. В палаці повністю збереглася ліпнина. Планування всередині було централістичним, з залою та парадними приміщеннями на першому поверсі.</p>
            <p>Найцікавіша серед всіх кімнат – мармурова зала. Шкода, що мармуровий камін у цій залі не зберігся. Хоча інші елементи декору залишилися практично недоторканими. Унікальний візерунок з грифонів, рослинних елементів і геометричних сплетінь робить маєток гідним навіть царського палацу. </p>
            <div className="page-collage">
              <img src={Image6} alt="палац" />
              <img src={Image7} alt="палац" />
            </div>
            <iframe title="Палац Чацького, Могилів-Подільський р-н" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D0%9F%D0%B0%D0%BB%D0%B0%D1%86%20%D0%A7%D0%B0%D1%86%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE,%20%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D1%96%D0%B2-%D0%9F%D0%BE%D0%B4%D1%96%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%20%D1%80-%D0%BD+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
            <p>Зараз палац у занедбаному стані. В одній частині будівлі розташовується селищна рада, а решта кімнат пустують. </p>
          </div>
          <div className="parallax-btn-wrapper">
            <Link to="/" className="parallax-btn">На головну</Link>
          </div>
        </div>
      </div>
    );
  }
}