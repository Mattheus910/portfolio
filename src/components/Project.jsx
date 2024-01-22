import "./Project.css"
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';



const Project = () => {

  return (
    <section className="project"  id="link2">

      <h2 className="title">Projetos</h2>

      <div className="all-projects">

        <div className="body">
          <img src="/tela.png" alt="site robotica" />
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Descrição</Accordion.Header>
              <Accordion.Body>
                Projeto acadêmico dedicado à exploração do mundo da robótica, desenvolvido como trabalho academico. Focando em design responsivo, oferece uma experiência consistente em dispositivos móveis e desktops. Destaca-se pela exploração interativa, proporcionando conteúdo envolvente sobre os avanços e aplicações fascinantes da robótica. Tecnologias utilizadas incluem HTML e CSS.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <button className="button"><a href="https://mattheus910.github.io/robotica/" target="_blank">Ir para a pagina</a></button>
        </div>

        <div className="body">
          <img src="/academia.png" alt="site de academia" />
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Descrição</Accordion.Header>
              <Accordion.Body>
                Landing page responsiva para uma academia, seguindo a abordagem "mobile first". A página se adapta perfeitamente a tablets, notebooks e desktops, proporcionando uma experiência de usuário otimizada. Integrei a biblioteca AOS (Animate on Scroll) para adicionar animações sutis, elevando o visual da página e proporcionando uma interação envolvente à medida que o usuário rola o conteúdo.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <button className="button"><a href="https://mattheus910.github.io/academia/" target="_blank">Ir para a pagina</a></button>
        </div>


        <div className="body">
          <img src="/bitsos.png" alt="site bitsos" />
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Descrição</Accordion.Header>
              <Accordion.Body>
                Projeto acadêmico focado em design responsivo e desenvolvimento web, criado como parte do meu curso. Desenvolvi uma experiência de usuário consistente em dispositivos móveis e desktops, aplicando os princípios do "Mobile First". Destaco a implementação do botão "hamburguer" usando JavaScript para simplificar a navegação em dispositivos móveis, proporcionando uma experiência fluida e intuitiva.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <button className="button"><a href="https://mattheus910.github.io/bitsos/#" target="_blank">Ir para a pagina</a></button>
        </div>

        <div className="body">
          <img src="/print.png" alt="site de lista de compra" />
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Descrição</Accordion.Header>
              <Accordion.Body>
              Aplicativo web para gerenciamento de lista de compras como parte do aprimoramento dos meus estudos em JavaScript. O aplicativo oferece funcionalidades simples, como adição, edição, marcação de conclusão e exclusão de itens da lista. Recursos adicionais incluem filtro por status e pesquisa para facilitar a visualização. Utilizei HTML5, CSS3 e JavaScript, aproveitando o armazenamento local para manter a lista, garantindo persistência mesmo ao fechar e reabrir a página.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <button className="button"><a href="https://mattheus910.github.io/lista-de-compra/" target="_blank">Ir para a pagina</a></button>
        </div>

      </div>

    </section>
  )
}

export default Project