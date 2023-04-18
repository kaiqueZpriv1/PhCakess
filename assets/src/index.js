const bolos = document.getElementById("boxBolos");
const produto = document.createElement("div")
produto.classList = "produto"

const produtos = [
    
    {
        id: 1,
        image: "https://via.placeholder.com/150",
        name: "Chocolate com morango",
        button: "Descrição"

    },
    {
        id: 2,
        image: "https://via.placeholder.com/150",
        name: "Chocolate com morango",
        button: "Descrição"

    },
    {
        id: 3,
        image: "https://via.placeholder.com/150",
        name: "Chocolate com morango",
        button: "Descrição"

    },
    {
        id: 4,
        image: "https://via.placeholder.com/150",
        name: "Chocolate com morango",
        button: "Descrição"

    },
    {
        id: 5,
        image: "https://via.placeholder.com/150",
        name: "Chocolate com morango",
        button: "Descrição"

    },
    {
        id: 6,
        image: "https://via.placeholder.com/150",
        name: "Chocolate com morango",
        button: "Descrição"

    }
]

function exibirProdutos() {
    const secaoProdutos = document.getElementById("secaoProdutos")

    produtos.map((produto => {
        const div = document.createElement("div");
        div.classList.add("produto");

        const img = document.createElement("img")
        img.src = produto.image;

        const nome = document.createElement("h3");
        nome.textContent = produto.name;

        const button = document.createElement("button");
        button.setAttribute("id", "btnBolo")
        button.textContent = produto.button

        div.appendChild(img);
        div.appendChild(nome);
        div.appendChild(button)

    secaoProdutos.appendChild(div);
    }))

}
exibirProdutos();

bolos.appendChild(secaoProduto)
