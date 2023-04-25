const body = document.getElementById("container-bolos");
const sectionBolos = document.createElement("section");
sectionBolos.classList.add("bolos");
// push section de bolos
body.appendChild(sectionBolos);
// bolos (conteudo)
const bolos = [
    {
        id: 1,
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
        id: 1,
        image: "./assets/img/bolos/doce-de-leite.jpeg",
        sabor: "Doce de leite",
        descricao: "Bolo de 4,5 kg, Massa mesclada, recheio de doce de leite, cobertura feita com chantilly.",
        kg: "5kg"
    },
    {
        id: 1,
        image: "./assets/img/bolos/kitkat.jpeg",
        sabor: "Kitkat",
        descricao: "Bolo de 2 kg, Massa branca, recheio de kit kat, cobertura feita com chantilly.",
        kg: "5kg"
    },
    {
        id: 1,
        image: "./assets/img/bolos/ninho-c-morango.jpeg",
        sabor: "Ninho com morango",
        descricao: "Bolo de 1,5 kg, massa branca no sabor abacaxi, recheio de ninho c/ morangos, cobertura feita com chantilly.",
        kg: "5kg"
    },
    {
        id: 1,
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

        let buttonDescricao = document.createElement("button")
        buttonDescricao.textContent = "Ver detalhe"

        produto.appendChild(img)
        produto.appendChild(sabor)
        produto.appendChild(buttonDescricao)

        containerBolos.appendChild(produto)
    })
}
exibirBolos();

function exibirDetalhe() {
    const containerDetalhe = document.createElement("section")
    containerDetalhe.classList.add("detalhe")

    sectionBolos.appendChild(containerDetalhe)

    bolos.forEach(bolo => {
        const exibirDetalhes = document.createElement("div")
        exibirDetalhes.setAttribute("id", "exibirDetalhe")

        let img = document.createElement("img")
        img.src = bolo.image
        let sabor = document.createElement("h3")
        sabor.textContent = bolo.sabor
        let descricoes = document.createElement("p")
        descricoes.textContent = bolo.descricao
        let sectionSpans = document.createElement("div")
        sectionSpans.classList.add("container-spans")
        let kg = document.createElement("span")
        kg.textContent  = bolo.kg

        exibirDetalhe.appendChild(img)
        exibirDetalhe.appendChild(sabor)
        exibirDetalhe.appendChild(descricoes)
        exibirDetalhe.appendChild(sectionSpans)
        sectionSpans.appendChild(kg)

        containerDetalhe.appendChild(exibirDetalhe)
    })
}
exibirDetalhe();