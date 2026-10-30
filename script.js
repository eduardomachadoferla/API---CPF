const btnConsultar = document.getElementById("btn-consultar");

btnConsultar.addEventListener("click", async () => {
    const cep = document.getElementById("cep").value;
    const dados = await buscarCep(cep);
    
    mostrarDados(dados);
});

async function buscarCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    let res = await fetch(url);
    if (!res.ok) {
        throw new Error("Falha ao buscar o CEP");
    }

    return res.json();
}

function mostrarDados(dados) {
    const resultado = document.getElementById("resultado");
    resultado.style.display = "flex";
    resultado.innerHTML = `<span><b>CEP:</b> ${dados.cep}</span>`;
}

btnConsultar.addEventListener("click", async () => {
});

async function buscarCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    let res = await fetch(url);
    if (!res.ok) {
        throw new Error("Falha ao buscar o CEP");
    }

    return res.json();
}

function mostrarDados(dados) {
    const resultado = document.getElementById("resultado");
    resultado.style.display = "flex";
    resultado.innerHTML = 
        `<span><b>CEP:</b> ${dados.cep}</span>
         <span><b>Logradouro:</b> ${dados.logradouro}</span>
         <span><b>Bairro:</b> ${dados.bairro}</span>
         <span><b>Cidade:</b> ${dados.localidade}</span>
         <span><b>Estado:</b> ${dados.uf}</span>
        `;
}