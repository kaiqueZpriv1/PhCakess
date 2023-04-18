const buttonBolo = document.getElementById("btnBolo");
buttonBolo.addEventListener("click", function() {
    document.getElementById("secaoDescricao").style.width = "100%";
});


const descricoes = [
    {
        id: 1,
        image: "https://via.placeholder.com/150",
        name: "Chocolate com morango",
        descricao: "Bolo de massa de chocolate, recheio de brigadeiro e mousse de leite em pó com morangos, cobertura de mousse de chocolate, raspas de chocolate ao leite, leite em pó e morangos.",
        kg: 1,
        preco: 25,
        button: "Encomendar",
        link: "https://wa.me/5511986979128"
    }
]

function exibirDescricoes() {
    const secaoDescricao = document.getElementById("secaoDescricao");

    descricoes.map((descricao => {
        
        const dc = document.createElement("div")
        dc.classList.add("descricao");

        const img = document.createElement("img");
        img.src = descricao.image;

        const textDescricao = document.createElement("div")
        textDescricao.classList.add("text-Descricao")

        const nome = document.createElement("h3");
        nome.textContent = descricao.name

        const paragrafo = document.createElement("p")
        paragrafo.textContent = descricao.descricao

        const infoDescricao = document.createElement("div")
        infoDescricao.classList.add("info-Descricao")

        const Kg = document.createElement("span")
        Kg.textContent = descricao.kg;

        const span = document.createElement("span")
        span.textContent = descricao.preco

        const linkDescricao = document.createElement("div")
        linkDescricao.classList.add("button-Descricao")

        const button = document.createElement("button")
        button.classList.add("btn-descricao")
        
        const a = document.createElement("a");
        a.href = descricao.link;
        a.textContent = descricao.button;


        dc.appendChild(img);

        // secao chama div de textos
        dc.appendChild(textDescricao);
        textDescricao.appendChild(nome);
        textDescricao.appendChild(paragrafo);
        // secao chama div de informacoes
        dc.appendChild(infoDescricao);
        infoDescricao.appendChild(Kg);
        infoDescricao.appendChild(span);
        // secao chama div de botao que vai para WhatsApp
        dc.appendChild(linkDescricao);
        // button chama (a) (link do wpp)
        linkDescricao.appendChild(button);
        button.appendChild(a);

    secaoDescricao.appendChild(dc);
    }))
}
exibirDescricoes();