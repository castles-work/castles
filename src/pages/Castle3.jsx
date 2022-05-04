import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';
import particleOptions from '../particles/home.json';
import {particlesInit} from '../particles/particlesInit';

import Image1 from '../assets/images/castle3_1.webp';
import Image2 from '../assets/images/castle3_2.webp';
import Image3 from '../assets/images/castle3_3.webp';
import Image4 from '../assets/images/castle3_4.webp';
import Image5 from '../assets/images/castle3_5.webp';

export default class Castle extends Component {
  render() {
    return (
      <div className="app">
        <Particles init={particlesInit} options={particleOptions} />

        <div className="page">
          <div className="page-text">
            <b>Палац графа Ксідо у Хмільнику</b>
            <p>Палац графа Ксідо -  це одна з найяскравіших пам'яток міста Хмільника Вінницької області. Будівля знаходиться на Замковій горі, на місці старовинної фортеці XVI століття.</p>
            <div className="page-image"><img src={Image1} alt="палац" /></div>
            <p>Господар замку граф Ксідо був ад'ютантом генерала А. Стеселя. Грек за походженням, він іммігрував до Росії під час служби в Казанському піхотному полку.</p>
            <p>Головним архітектором замку став І. Фомін. Стиль будівлі досить нестандартний, адже передній фасад, виконаний в стилі ренесансу з масивної колонадою, різко контрастує з іншими спорудами. Якщо подивитися з боку, то відразу навіть не віриться, що це один будинок.</p>
            <div className="page-collage">
              <img src={Image2} alt="палац" />
              <img src={Image3} alt="палац" />
            </div>
            <p>З південного боку до замку примикає старовинна вежа 1534 року. Загалом архітектурний стиль маєтку - неоклассицизм с елементами ренесансу.</p>
            <div className="page-collage">
              <img src={Image4} alt="палац" />
              <img src={Image5} alt="палац" />
            </div>
            <p>За легендою, граф Костянтин Ксідо користувався великим успіхом у жінок і фактично був альфонсом. Одного разу, з метою поповнити своє важке фінансове становище він спокусив графиню Левашову. У щирість почуттів, глухонімий літньої жінки і світського лева Ксідо, природно ніхто не вірив, але легенда все таки дала своє і сьогодні замок користується особливою популярністю серед закоханих пар, оскільки вважається, що хто зізнається в коханні на арковому мосту, тому забезпечена вічна щира любов.</p>
            <iframe title="Палац графа Ксідо у Хмільнику" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D0%9F%D0%B0%D0%BB%D0%B0%D1%86%20%D0%B3%D1%80%D0%B0%D1%84%D0%B0%20%D0%9A%D1%81%D1%96%D0%B4%D0%BE%20%D1%83%20%D0%A5%D0%BC%D1%96%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D1%83+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
            <p>На жаль, на сьогоднішній день замок знаходиться в аварійному стані і просто пустує. Але на території замку є чудові локації для фото.</p>
          </div>
          <div className="parallax-btn-wrapper">
            <Link to="/" className="parallax-btn">На головну</Link>
          </div>
        </div>
      </div>
    );
  }
}