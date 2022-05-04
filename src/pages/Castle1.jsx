import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';
import particleOptions from '../particles/home.json';
import {particlesInit} from '../particles/particlesInit';

import Image1 from '../assets/images/castle1_1.webp';
import Image2 from '../assets/images/castle1_2.webp';
import Image3 from '../assets/images/castle1_3.webp';
import Image4 from '../assets/images/castle1_4.webp';
import Image5 from '../assets/images/castle1_5.webp';
import Image6 from '../assets/images/castle1_6.webp';

export default class Castle extends Component {
  render() {
    return (
      <div className="app">
        <Particles init={particlesInit} options={particleOptions} />

        <div className="page">
          <div className="page-text">
            <b>Палац княгині Марії Щербатової у Немирові</b>
            <p>Палац був закладений в 1885 році княгинею Марією Щербатової. Будівництво було довірено чеському архітекторові з Праги Іржі Стібралу. Будівля зведена у стилі неокласицизм і окрасою невеличкого містечка на Вінничині - Немирова.</p>
            <div className="page-image"><img src={Image1} alt="палац" /></div>
            <p>З будівництвом палацу пов’язані цікаві події. Його розпочинали і припиняли кілька раз, і все це через ворожку, яка напророкувала княгині смерть по закінченню будівництва замку. Так і сталось, коли головні роботи були уже завершені і тривало внутрішнє оздоблення, княгиню Марію Щербатову разом з сином Дмитром і донькою Олександрою та невісткою Оленою у січні 1920 року розстріляв п'яний червоноармієць.</p>
            <div className="page-image"><img src={Image2} alt="палац" /></div>
            <p>Палац Щербатової збудовано з вапняку у стилі неокласицизму двоповерховим прямокутним в плані. Збереглося первісне планування і більшість деталей декору. Окраса палацу – парковий фасад, прикрашений чотириколонним іонічним портиком з балюстрадою. Фасади опоясують широкі обгороджені парапетом видові тераси. Парадні сходи прикрашають скульптури левів.</p>
            <div className="page-collage">
              <img src={Image3} alt="палац" />
              <img src={Image4} alt="палац" />
            </div>
            <p>Поруч з палацом є величезний дендропарк, який займає площу 85 гектарів. Парк трішки схожий на софіївський дендропарк в Умані. Тут налічується понад 150 видів дерев і чагарників.</p>
            <div className="page-collage">
              <img src={Image5} alt="палац" />
              <img src={Image6} alt="палац" />
            </div>
            <p>Постановою від 18 грудня 2007 року «Про підсумки обласного конкурсу «Сім чудес Вінниччини» Немирівській парк і палац княгині Щербатової визнано «Перлиною Вінниччини».</p>
            <iframe title="Палац княгині Марії Щербатової у Немирові" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D0%9F%D0%B0%D0%BB%D0%B0%D1%86%20%D0%BA%D0%BD%D1%8F%D0%B3%D0%B8%D0%BD%D1%96%20%D0%9C%D0%B0%D1%80%D1%96%D1%97%20%D0%A9%D0%B5%D1%80%D0%B1%D0%B0%D1%82%D0%BE%D0%B2%D0%BE%D1%97%20%D1%83%20%D0%9D%D0%B5%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D1%96+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
            <p>Зараз на території музею знаходиться багатопрофільний санаторій “Авангард”</p>
          </div>
          <div className="parallax-btn-wrapper">
            <Link to="/" className="parallax-btn">На головну</Link>
          </div>
        </div>
      </div>
    );
  }
}