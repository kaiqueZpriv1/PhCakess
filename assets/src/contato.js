const bodyElement = document.querySelector("body")
const footer = document.createElement("footer")
bodyElement.appendChild(footer)
footer.classList.add("footer")

const navegacao = [
    {
        id: 0,
        name: 'Home',
        href: '#main'
    },
    {
        id: 1,
        name: 'Bolos',
        href: '#bolos'
    },
    {
        id: 2,
        name: 'Páscoa',
        href: '#pascoa'
    },
    {
        id: 3,
        name: 'Contato',
        href: '#footer'
    },
];
const contatos = [
    {
        id: 0,
        rede: 'WhatsApp',
        link: 'https://wa.me/5511986979128'
    },
    {
        id: 1,
        rede: 'Instagram',
        link: 'https://www.instagram.com/confeiteiroooo/'
    },
    {
        id: 2,
        rede: 'E-mail',
        link: 'Ph871748@gmail.com'
    }
];


const containerFooter = document.createElement("div");
containerFooter.classList.add("container-footer")
footer.appendChild(containerFooter)

function exibirFooter() {
    navegacao.forEach(nav => {
        // create div nav da pagina
        const menu = document.createElement("div")
        menu.classList.add("nav-site")
        // create link de navegacao na pagina
        let name = document.createElement("a")
        name.textContent = nav.name
        name.href = nav.href
        // push
        menu.appendChild(name)
        // push
        containerFooter.appendChild(menu)
    });
    let contatoContainer = document.createElement("h3")
    contatoContainer.textContent = "contatos"
    containerFooter.appendChild(contatoContainer)
    
    let estiloContato = {
        margin: "50px 0 0 0",
        color: "rgba(0, 0, 0, 0.7)",
        fontSize: "10vw"
    }
    Object.assign(contatoContainer.style, estiloContato)
    contatos.forEach(ctt => {
        
        // create div nav de redes sociais
        const navRedes = document.createElement("div")
        navRedes.classList.add("nav-redes")
        // create link navegacao em redes sociais
        let rede = document.createElement("a")
        rede.textContent = ctt.rede
        rede.href = ctt.link
        rede.target = "_blank"
        // push
        navRedes.appendChild(rede)
        // push
        containerFooter.appendChild(navRedes)
    });
}
exibirFooter();
