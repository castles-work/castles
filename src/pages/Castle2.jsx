import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';
import particleOptions from '../particles/home.json';
import {particlesInit} from '../particles/particlesInit';

import Image1 from '../assets/images/castle2_1.webp';
import Image2 from '../assets/images/castle2_2.webp';
import Image3 from '../assets/images/castle2_3.webp';
import Image4 from '../assets/images/castle2_4.webp';
import Image5 from '../assets/images/castle2_5.webp';

export default class Castle extends Component {
  render() {
    return (
      <div className="app">
        <Particles init={particlesInit} options={particleOptions} />

        <div className="page">
          <div className="page-text">
            <b>Палац Потоцьких у Тульчині</b>
            <p>Палац Потоцьких  - пам'ятка архітектури у Тульчині в стилі класицизму 2-ї половини 18 століття. Почався будуватись у 1781 році за проектом французького архітектора Лакруа на замовлення представників родини Потоцьких. Завершено будівництво у 1985 році.</p>
            <div className="page-image"><img src={Image1} alt="палац" /></div>
            <p>Старий палац  - головне приміщення ансамблю, на 2 поверхи. Фасад палацу на парадний двір має відкриту лоджію в 10 колон іонійського ордеру. Великий за розмірами ансамбль за поземним планом нагадував літеру П, відкриту на місто.</p>
            <div className="page-image"><img src={Image2} alt="палац" /></div>
            <p>Ще тоді палац називали Тульчинським Версалем, адже тут постійно влаштовували прийоми та бали. Навіть польський король Станіслав-Август, який відвудував прийоми у Тульчині, був зачарований пишністю палацу. У замку були величезні колекції живопису, порцеляни, нумізматики, зберігались книги світових класиків. Подейкують, що багатство Потоцького завдяки видобутку золота, над яким ченці-алхіміки працювали у підземеллях.</p>
            <div className="page-collage">
              <img src={Image3} alt="палац" />
              <img src={Image4} alt="палац" />
            </div>
            <p>На території парку цвіли оранжереї: мандарини, лимони й апельсини. Тут також стояли клітки з чарівними птахами. Поруч з пишним замком був закладений парк на честь красуні-гречанки Софії, з якою Станіслав мешкав у будинку. У цьому парку росли італійські тополі й сосни, різні екзотичні рослини. Неповторного вигляду йому надавали численні каскади, скульптури, фонтани, мармурові сходинки й купальні. Це було улюблене місце прогулянок молодих леді, тут влаштовували свята, проводили різні розваги.  Сьогодні палац має інший вигляд, його дивовижні багатства, на жаль, не збереглися.</p>
            <div className="page-image"><img src={Image5} alt="палац" /></div>
            <p>Зовсім нещодавно на території всесвітньо відомого палацу був проведений перший міжнародний оперний фестиваль під відкритим небом. Надіємось цей захід стане щорічною традицією і “тульчинський версаль” знову стане, як і колись, - постійним місцем культури та відпочинку. Відвідати можна палац щодня з 8 до 18:00 окрім понеділка та вівторка.</p>
            <iframe title="Палац Потоцьких у Тульчині" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D0%9F%D0%B0%D0%BB%D0%B0%D1%86%20%D0%9F%D0%BE%D1%82%D0%BE%D1%86%D1%8C%D0%BA%D0%B8%D1%85%20%D1%83%20%D0%A2%D1%83%D0%BB%D1%8C%D1%87%D0%B8%D0%BD%D1%96+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
            <p>Зараз палац Потоцьких - це територія Тульчинського училища культури</p>
          </div>
          <div className="parallax-btn-wrapper">
            <Link to="/" className="parallax-btn">На головну</Link>
          </div>
        </div>
      </div>
    );
  }
}