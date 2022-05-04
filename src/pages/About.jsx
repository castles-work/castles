import {Component} from 'react';
import Particles from 'react-tsparticles';
import particleOptions from '../particles/home.json';
import {particlesInit} from '../particles/particlesInit';

import '../assets/css/About.scss';

export default class About extends Component {
  render() {
    return (
      <>
        <Particles init={particlesInit} options={particleOptions} />

        <div className="about-text">
          <strong>Ласкаво просимо!</strong>
          <div className="about-cols">
            <div className="about-col">
              <strong>Castles</strong> - це вебсайт про Вінницькі історичні пам'ятки. Інформацію взято з ресурсу: <a href="https://moemisto.ua/vn/blog/zamki-vinnichini-199.html">https://moemisto.ua/vn/blog/zamki-vinnichini-199.html</a>.
            </div>
            <div className="about-col">
              <p>Сайт розроблений на <b>JavaScript</b>, з використанням фреймворку <b>ReactJS (v17)</b>, а також допоміжних бібліотек <b>react-tsparticles</b>, <b>sass</b> та <b>webpack</b> для компонування проекту.</p>
            </div>
            <div className="about-col">
              <p>
                Сайт розроблено студентом <a href="http://www.vcnuft.vn.ua/index.php">Вінницького коледжу Національного університету харчових технологій</a>
              </p>
              <p><strong>Телефон:</strong> </p>
              <p><strong>E-mail:</strong> </p>
              
            </div>
          </div>
        </div>
      </>
    );
  }
}