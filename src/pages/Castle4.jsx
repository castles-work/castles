import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';
import particleOptions from '../particles/home.json';
import {particlesInit} from '../particles/particlesInit';

import Image1 from '../assets/images/castle4_1.webp';
import Image2 from '../assets/images/castle4_2.webp';
import Image3 from '../assets/images/castle4_3.webp';

export default class Castle extends Component {
  render() {
    return (
      <div className="app">
        <Particles init={particlesInit} options={particleOptions} />

        <div className="page">
          <div className="page-text">
            <b>Палац Грохольських, Вінницький район</b>
            <p>Палац Грохольських - комплекс споруд кінця XVIII століття, розташований у селиці Вороновиця, неподалік Вінниці. Палац виконаний в стилі раннього класицизму. </p>
            <div className="page-image"><img src={Image1} alt="палац" /></div>
            <p>Садиба заснована в 80-х роках XVIII століття польським магнатом графом Міхалом Грохольським (1705-1765), сином брацлавського судді Францішека Ксаверія Грохольського. Садиба була запланована як оборонний замок-палац. Недалеко від замку стояли дві башти, від яких тягнулися рів і вал.</p>
            <div className="page-image"><img src={Image2} alt="палац" /></div>
            <p>Згодом Палац Грохольських дещо перебудували: сама будівля зробили вище і добудували два павільйони. Одночасно зводять нові господарські приміщення, голубник, нові стайні. Частина елементів, на жаль, була зруйнована, а й сьогодні можна побачити флігелі, залишки павільйону і водонапірну вежу, стилізовану під архітектуру середньовіччя.</p>
            <div className="page-image"><img src={Image3} alt="палац" /></div>
            <p>Хоча садиба Грохольських перебудовувалася, в ній все одно простежувалися риси замку. В середині маєтку були такі зали: чорний, арабська, турецька, їдальня, помпейский, гербовий. Крім того, в садибі була величезна бібліотека, де зберігалися 10 тисяч томів французькою, англійською та польською мовами, колекція лицарських обладунків та зброї. На території маєтку стояла стайня для породистих коней.</p>
            <iframe title="Палац Грохольських, Вінницький район" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%BE%D0%B2%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9%20%D0%BF%D0%B0%D0%BB%D0%B0%D1%86%20%D0%93%D1%80%D0%BE%D1%85%D0%BE%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B8%D1%85-%D0%9C%D0%BE%D0%B6%D0%B0%D0%B9%D1%81%D1%8C%D0%BA%D0%B8%D1%85+(HW4W+4C%20%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA,%20%D0%92%D0%B8%D0%BD%D0%BD%D0%B8%D1%86%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
            <p>Зараз це музей історії авіації та космонавтики. Відвідати музей можна щодня з 9 до 17:00</p>
          </div>
          <div className="parallax-btn-wrapper">
            <Link to="/" className="parallax-btn">На головну</Link>
          </div>
        </div>
      </div>
    );
  }
}