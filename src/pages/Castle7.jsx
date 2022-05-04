import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';
import particleOptions from '../particles/home.json';
import {particlesInit} from '../particles/particlesInit';

import Image1 from '../assets/images/castle7_1.webp';
import Image2 from '../assets/images/castle7_2.webp';
import Image3 from '../assets/images/castle7_3.webp';
import Image4 from '../assets/images/castle7_4.webp';

export default class Castle extends Component {
  render() {
    return (
      <div className="app">
        <Particles init={particlesInit} options={particleOptions} />

        <div className="page">
          <div className="page-text">
            <b>Палац Чарномського, Піщанський район</b>
            <p>Чорноминський палац - палац графів Чорномських у селі Чорномин Піщанського району Вінницької області. Ззовні дуже схожий на Білий дім у Вашингтоні. Пам'ятка архітектури, включена до Державного реєстру національного культурного надбання.</p>
            <div className="page-image"><img src={Image1} alt="палац" /></div>
            <p>Палац був збудований у 1810-1820 роках архітектром Франческо Боффо, який будував відомий палац графа Воронцова в Одесі. Одеський архітектор з італійським корінням був дійсно фахівцем своєї справи. За 10 років збудував для амбіційного графа палац – який за дивним збігом обставин дуже нагадує резиденцію президента США – Білий Дім, і подейкують навіть є його зменшеною копією.... </p>
            <div className="page-image"><img src={Image2} alt="палац" /></div>
            <p>Будівля у стилі пізнього класицизму, цегляний, прямокутний в плані. На північному фасаді - напівциркулярний ризаліт з восьмиколонним портиком іонічного ордену на високому цоколі. На парковому фасаді - шестиколонний портик іонічного ордену.</p>
            <div className="page-image"><img src={Image3} alt="палац" /></div>
            <p>На початку 1800 року пані Софія Гречанка, на чию честь пан Потоцький збудував уславлений Софіївський парк в Умані, посварилася зі своїм скарбником і коханцем Миколою Чорноминським. Вона дізналась, що скарбник її обкрадає. Одразу звільнила його з посади, але без конфіскації. Тому Микола Чорноминський мав гроші на придбання земель навколо поселення Розбійницьке. Задумав окультурити місцевість, збудувавши собі резиденцію, яка б стала восьмим дивом світу, але в народі чорноминські палаци нарекли «вінцем розбитого кохання».</p>
            <div className="page-image"><img src={Image4} alt="палац" /></div>
            <p>Український Білий Дім сьогодні – уже не той що колись…замість фресок – біла фарба, замість скульптур – приватні гаражі, замість покоїв – шкільні класи.... Про американський Білий Дім, який знаходиться аж на іншому континенті знають практично усі, а про наш український – одиниці. Ми мріємо потрапити закордон і не бачимо, того що в нас буквально «під носом»…... </p>
            <iframe title="Палац Чарномського, Піщанський район" src="https://www.youtube.com/embed/ggWuE4HcExU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe title="Палац Чарномського, Піщанський район" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D0%9F%D0%B0%D0%BB%D0%B0%D1%86%20%D0%A7%D0%B0%D1%80%D0%BD%D0%BE%D0%BC%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE,%20%D0%9F%D1%96%D1%89%D0%B0%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
            <p>Зараз палац використовують як сільську школу, службовий флігель — як місцеву лікарню.</p>
          </div>
          <div className="parallax-btn-wrapper">
            <Link to="/" className="parallax-btn">На головну</Link>
          </div>
        </div>
      </div>
    );
  }
}