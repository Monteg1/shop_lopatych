import React from "react";

import "./footer.sass"

function Footer() {


  return(
    <footer className="footer-bs">
<div className="row">
  
<div className="col-md-3 footer-brand animated fadeInLeft">
<h2>Lopatych.ru</h2>
<p>Лучший магазин лопат ever - это конечно же ЛопатычЪ. У нас безупречная репутация и сотни тысяч довольных клиентов. Вы не пожалеете, решив обратиться к нам.</p>
<p>© 2014-2024 «Lopatych.ru».</p>
</div>
  
<div className="col-md-4 footer-nav animated fadeInUp">
<div className="col-md-6">
<ul className="list">
<li><a href="#">Контакты</a></li>
<li><a href="#">Карта сайта</a></li>
<li><a href="#">Реклама на сайта</a></li>
</ul>
</div>
</div>
  
<div className="col-md-2 footer-social animated fadeInDown">
<h4>Соц.сети</h4>
<ul>
<li><a href="#">ВКонтакте</a></li>
<li><a href="#">Fa [Экстремистская соц. сеть]</a></li>
<li><a href="#">In [Экстремистская соц. сеть]</a></li>
</ul>
</div>
  
<div className="col-md-3 footer-ns animated fadeInRight">
<h4>Новостная рассылка</h4>
<p>Подпишитесь на нашу новостную рассылку, чтоб не пропустить ничего важного!</p>
<p>
<div className="input-group">
<input type="text" className="form-control" placeholder="Введите email..."/>
<span className="input-group-btn">
<button className="btn btn-default" type="button"><span className="glyphicon glyphicon-envelope"></span></button>
</span>
</div>
</p>
</div>

</div>
</footer>
  );
}

export default Footer;