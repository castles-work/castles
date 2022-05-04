import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';
import particleOptions from '../particles/home.json';
import {particlesInit} from '../particles/particlesInit';

import Image1 from '../assets/images/castle15_1.webp';
import Image2 from '../assets/images/castle15_2.webp';
import Image3 from '../assets/images/castle15_3.webp';
import Image4 from '../assets/images/castle15_4.webp';
import Image5 from '../assets/images/castle15_5.webp';

export default class Castle extends Component {
  render() {
    return (
      <div className="app">
        <Particles init={particlesInit} options={particleOptions} />

        <div className="page">
          <div className="page-text">
            <b>Палац Собанських в с.Ободівка, Тростянецький район</b>
            <p>Перед Собанськими в Ободівці існував мурований замок. Першим резиденцію в Ободівці заклав Міхал Собанський, який наказав вмурувати мармурову стелу з позолоченим написом: 1800 цей дім збудував Міхал Собанський. Дружина Міхала  - Вікторія з Орловських -  добудувала двоповерхову вежу. Цей архітектурний шедевр створювався протягом майже 100 років.</p>
            <div className="page-image"><img src={Image1} alt="палац" /></div>
            <p>В 1900-1908 Міхал Марія Собанський розширив і перебудував палац. Перебудовою займався франц. архітектор Маєр. В палаці був червоний, жовтий, емпіровий салон. В Емпіровому залі були цінні картини родини Собанських. В палаці знаходився родинний архів з 16 ст. та бібліотека з 12 000 томів. Були в ній і книги з 16 ст. В палаці знаходилася також каплиця. Частину книг з бібліотеки були вивезені після Української революції до Києва та Вінниці.</p>
            <div className="page-collage">
              <img src={Image2} alt="палац" />
              <img src={Image3} alt="палац" />
            </div>
            <p>Парк був закладений разом з палацом відомим Діонісієм Міклером. Парк мав 18 гек. Парк поділявся на три частини. Перед палацом знаходився великий газон з клумбами та фонтаном. Газон йшов до берегу річки Бернадинки. Нижче зі сходу стояв вибудуваний Міхалом Собанським в 1822 р. костел. Сьогодні палац складається з чотирьох частин, побудованих в різні періоди часу, вони з`єднані один з одним і утворюють органічний ансамбль.</p>
            <div className="page-collage">
              <img src={Image4} alt="палац" />
              <img src={Image5} alt="палац" />
            </div>
            <p>Історія палацу в 20 столітті повторює історію багатьох інших пам`яток царської епохи: після революції в палаці розташувалася Бессарабська комуна, далі він перейшов у володіння колгоспу, в післявоєнний час в ньому розміщувався райвиконком, а в 1959 році палац і парк були передані ОБОДІВСЬКЕ школі-інтернату. В 1990-х роках повністю припинилося фінансування, і зараз палац знаходиться в аварійному стані.</p>
            <iframe title="Палац Собанських в с.Ободівка, Тростянецький район" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D0%9F%D0%B0%D0%BB%D0%B0%D1%86%20%D0%A1%D0%BE%D0%B1%D0%B0%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D1%85%20%D0%B2%20%D1%81.%D0%9E%D0%B1%D0%BE%D0%B4%D1%96%D0%B2%D0%BA%D0%B0,%20%D0%A2%D1%80%D0%BE%D1%81%D1%82%D1%8F%D0%BD%D0%B5%D1%86%D1%8C%D0%BA%D0%B8%D0%B9%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
            <p>Зараз палац знаходиться в аварійному стані. Парк занедбаний.</p>
          </div>
          <div className="parallax-btn-wrapper">
            <Link to="/" className="parallax-btn">На головну</Link>
          </div>
        </div>
      </div>
    );
  }
}