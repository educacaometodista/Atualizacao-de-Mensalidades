import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isInFullScreen: false,
      searchKeyword: ""
    };
  }


  render() {
    return (
        <nav className="d-flex footer fixed-bottom">
          <div className="d-flex pl-5 text-white align-items-left">
            Copyright &copy; 2019 
            <a href="https://github.com/educacaometodista" className="">Educação Metodista</a>
            <div className="mr-2 ml-2">
              <a href="https://github.com/educacaometodista/Atualizacao-de-Mensalidades" className="badge badge-light badge-pill">
                <i className="fab fa-github text-dark"></i>
              </a>
            </div>
          </div>

          <div className="logoFooter align-items-right">
            <img src="http://portal.metodista.br/msg/institucional/comunicados-2018/imagens/educacao-metodista.png" />
          </div>
        </nav>
    );
  }
}

export default Footer;