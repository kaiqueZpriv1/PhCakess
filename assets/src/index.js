const body = document.getElementById("container-bolos");
const sectionBolos = document.createElement("section");
sectionBolos.classList.add("bolos");
// push section de bolos
body.appendChild(sectionBolos);
// bolos (conteudo)
const bolos = [
    {
        id: 0,
        id: 0,
        image: "./assets/img/bolos/abacaxi-c-coco.jpeg",
        sabor: "Abacaxi com coco",
        descricao: "Bolo de massa branca com recheio de Abacaxi com coco e cobertura feita com chantilly.",
        kg: "5kg",
        preco: "R$ 15"
    },
    {
        id: 1,
        image: "./assets/img/bolos/creme-belga.jpeg",
        sabor: "Creme belga",
        descricao: "Bolo de 1 kg, Massa branca, recheio de creme belga, cobertura feita com chantilly.",
        kg: "5kg",
        preco: "R$ 15"
    },
    {
        id: 2,
        id: 2,
        image: "./assets/img/bolos/doce-de-leite.jpeg",
        sabor: "Doce de leite",
        descricao: "Bolo de 4,5 kg, Massa mesclada, recheio de doce de leite, cobertura feita com chantilly.",
        kg: "5kg",
        preco: "R$ 15"
    },
    {
        id: 3,
        id: 3,
        image: "./assets/img/bolos/kitkat.jpeg",
        sabor: "Kitkat",
        descricao: "Bolo de 2 kg, Massa branca, recheio de kit kat, cobertura feita com chantilly.",
        kg: "5kg",
        preco: "R$ 15"
    },
    {
        id: 4,
        id: 4,
        image: "./assets/img/bolos/ninho-c-morango.jpeg",
        sabor: "Ninho com morango",
        descricao: "Bolo de 1,5 kg, massa branca no sabor abacaxi, recheio de ninho c/ morangos, cobertura feita com chantilly.",
        kg: "5kg",
        preco: "R$ 15"
    },
    {
        id: 5,
        id: 5,
        image: "./assets/img/bolos/oreo.jpeg",
        sabor: "Oreo",
        descricao: "Bolo de 2 kg, massa Preta, recheio de oreo, cobertura feita com chantilly.",
        kg: "5kg",
        preco: "R$ 15"
    }
];
function exibirBolos() {
    const containerBolos = document.createElement("div")
    containerBolos.classList.add("container-bolos")
    
    
    sectionBolos.appendChild(containerBolos)

    bolos.forEach(bolo => {
        const produto = document.createElement("div")
        produto.classList.add("produto")
        
        let img = document.createElement("img")
        img.src = bolo.image
        
        
        let sabor = document.createElement("h3")
        sabor.textContent = bolo.sabor
        
        const buttonDescricao = document.createElement("button");
        buttonDescricao.textContent = "Ver detalhe";

        buttonDescricao.addEventListener("click", function() {
            closeDescricao.style.display = "block"
            exibirDetalhes.style.height = "100%"
        })
        
        produto.appendChild(img)
        produto.appendChild(sabor)
        produto.appendChild(buttonDescricao)
        // container dos produtos
        // container dos produtos
        containerBolos.appendChild(produto)

        const exibirDetalhes = document.createElement("div");
        exibirDetalhes.setAttribute("id", "exibirDetalhe");

        const containerDetalhes = document.createElement("div")
        containerDetalhes.classList.add("container-detalhes")


        const closeDescricao = document.createElement("i");

        closeDescricao.classList.add("ri-arrow-left-line")
        closeDescricao.addEventListener("click", function() {
            exibirDetalhes.style.height = "0"
        })
        

        const image = document.createElement("img")
        image.src = bolo.image
        const saborDescricao = document.createElement("h3");
        saborDescricao.textContent = bolo.sabor
        const descricoes = document.createElement("p");
        descricoes.textContent = bolo.descricao

        const sectionSpan = document.createElement("div");
        sectionSpan.classList.add("container-spans")

        const kg = document.createElement("span");
        kg.textContent = bolo.kg

        const preco = document.createElement("span")
        preco.textContent = bolo.preco

        const btnEncomenda = document.createElement("button")
        btnEncomenda.classList.add("btn-encomenda")
        const linkEncomenda = document.createElement("a");
        linkEncomenda.textContent = 'Encomendar'
        linkEncomenda.href = "https://wa.me/5511986979128"
        linkEncomenda.target = "_blank"

        containerDetalhes.appendChild(closeDescricao)
        containerDetalhes.appendChild(image)
        containerDetalhes.appendChild(saborDescricao)
        containerDetalhes.appendChild(descricoes)
        containerDetalhes.appendChild(sectionSpan)
        sectionSpan.appendChild(kg)
        sectionSpan.appendChild(preco)

        containerDetalhes.appendChild(btnEncomenda)
        btnEncomenda.appendChild(linkEncomenda)

        exibirDetalhes.appendChild(containerDetalhes)
        produto.appendChild(exibirDetalhes)
    });
}
exibirBolos();

