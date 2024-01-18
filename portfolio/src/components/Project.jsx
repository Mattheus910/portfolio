import "./Project.css"

const Project = () => {
  return (
    <section className="project">

        <h2>Projetos</h2>
        
        <div className="all-projects">

        <div>
          <img src="./public/academia.png" alt="site de academia" />
          <p><strong>Descrição:</strong> Landing page responsiva para uma academia, seguindo a abordagem "mobile first". A página se adapta perfeitamente a tablets, notebooks e desktops, proporcionando uma experiência de usuário otimizada. Integrei a biblioteca AOS (Animate on Scroll) para adicionar animações sutis, elevando o visual da página e proporcionando uma interação envolvente à medida que o usuário rola o conteúdo.</p>
          <button><a href="https://mattheus910.github.io/academia/" target="_blank">Ir para a pagina</a></button>
        </div>

        <div>
          <img src="./public/bitsos.png" alt="site bitsos" />
          <p><strong>Descrição:</strong> Projeto acadêmico focado em design responsivo e desenvolvimento web, criado como parte do meu curso. Desenvolvi uma experiência de usuário consistente em dispositivos móveis e desktops, aplicando os princípios do "Mobile First". Destaco a implementação do botão "hamburguer" usando JavaScript para simplificar a navegação em dispositivos móveis, proporcionando uma experiência fluida e intuitiva.</p>
          <button><a href="https://mattheus910.github.io/bitsos/#" target="_blank">Ir para a pagina</a></button>
        </div>

        <div>
          <img src="./public/print.png" alt="site de lista de compra" />
          <p><strong>Descrição:</strong> Aplicativo web para gerenciamento de lista de compras como parte do aprimoramento dos meus estudos em JavaScript. O aplicativo oferece funcionalidades simples, como adição, edição, marcação de conclusão e exclusão de itens da lista. Recursos adicionais incluem filtro por status e pesquisa para facilitar a visualização. Utilizei HTML5, CSS3 e JavaScript, aproveitando o armazenamento local para manter a lista, garantindo persistência mesmo ao fechar e reabrir a página.</p>
          <button><a href="https://mattheus910.github.io/lista-de-compra/" target="_blank">Ir para a pagina</a></button>
        </div>

        <div>
          <img src="./public/tela.png" alt="site robotica" />
          <p><strong>Descrição:</strong> Projeto acadêmico dedicado à exploração do mundo da robótica, desenvolvido como trabalho academico. Focando em design responsivo, oferece uma experiência consistente em dispositivos móveis e desktops. Destaca-se pela exploração interativa, proporcionando conteúdo envolvente sobre os avanços e aplicações fascinantes da robótica. Tecnologias utilizadas incluem HTML e CSS.</p>
          <button><a href="https://mattheus910.github.io/robotica/" target="_blank">Ir para a pagina</a></button>
        </div>

        </div>

    </section>
  )
}

export default Project