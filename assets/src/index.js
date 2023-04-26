const body = document.getElementById("container-bolos");
const sectionBolos = document.createElement("section");
sectionBolos.classList.add("bolos");
// push section de bolos
body.appendChild(sectionBolos);
// bolos (conteudo)
const bolos = [
    {
        id: 0,
        image: "./assets/img/bolos/abacaxi-c-coco.jpeg",
        sabor: "Abacaxi com coco",
        descricao: "Massa branca,  recheio de Abacaxi c/ coco, cobertura feita com chantilly.",
        kg: "5kg"
    },
    {
        id: 1,
        image: "./assets/img/bolos/creme-belga.jpeg",
        sabor: "Creme belga",
        descricao: "Bolo de 1 kg, Massa branca, recheio de creme belga, cobertura feita com chantilly.",
        kg: "5kg"
    },
    {
        id: 2,
        image: "./assets/img/bolos/doce-de-leite.jpeg",
        sabor: "Doce de leite",
        descricao: "Bolo de 4,5 kg, Massa mesclada, recheio de doce de leite, cobertura feita com chantilly.",
        kg: "5kg"
    },
    {
        id: 3,
        image: "./assets/img/bolos/kitkat.jpeg",
        sabor: "Kitkat",
        descricao: "Bolo de 2 kg, Massa branca, recheio de kit kat, cobertura feita com chantilly.",
        kg: "5kg"
    },
    {
        id: 4,
        image: "./assets/img/bolos/ninho-c-morango.jpeg",
        sabor: "Ninho com morango",
        descricao: "Bolo de 1,5 kg, massa branca no sabor abacaxi, recheio de ninho c/ morangos, cobertura feita com chantilly.",
        kg: "5kg"
    },
    {
        id: 5,
        image: "./assets/img/bolos/oreo.jpeg",
        sabor: "Oreo",
        descricao: "Bolo de 2 kg, massa Preta, recheio de oreo, cobertura feita com chantilly.",
        kg: "5kg"
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
        
        
        let closeDescricao = document.createElement("i")
        closeDescricao.classList.add("ri-close-fill")
        
        const buttonDescricao = document.createElement("button");
        buttonDescricao.textContent = "Ver detalhe";

        buttonDescricao.addEventListener("click", function() {
            exibirDetalhes.style.display = "block"
            produto.style.position = "absolute"
            closeDescricao.style.display = "block"
            buttonDescricao.style.display = "none"
        })
        closeDescricao.addEventListener("click", function() {
            exibirDetalhes.style.display = "none"
            produto.style.position = "relative"
            closeDescricao.style.display = "none"
            buttonDescricao.style.display = "block"

        })

        // push produtos
        produto.appendChild(closeDescricao)
        produto.appendChild(img)
        produto.appendChild(sabor)
        produto.appendChild(buttonDescricao)
        // container dos produtos
        containerBolos.appendChild(produto)

        // exibir detalhes
        const exibirDetalhes = document.createElement("div")
        exibirDetalhes.setAttribute("id", "exibirDetalhe")
        produto.appendChild(exibirDetalhes)

        let descricoes = document.createElement("p")
        descricoes.textContent = bolo.descricao

        let sectionSpans = document.createElement("div")
        sectionSpans.classList.add("container-spans")

        let kg = document.createElement("span")
        kg.textContent  = bolo.kg

        exibirDetalhes.appendChild(descricoes)
        exibirDetalhes.appendChild(sectionSpans)
        sectionSpans.appendChild(kg)

    });
}
exibirBolos();