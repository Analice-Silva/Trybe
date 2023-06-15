const student34 = {
    studentsInfo: [
        {
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kr7bbJihSM_xy6wW_QjChw-mzxIOa6KhDV9ubblFzQ&s",
            trybe: "CH34",
            student_name: "Analice Silva",
            project_lessons_learned: 10,
            project_sup_pirilampo: 30,
            project_pixels_art: 32
        },
        {
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kr7bbJihSM_xy6wW_QjChw-mzxIOa6KhDV9ubblFzQ&s",
            trybe: "CH34",
            student_name: "Enza Rafaela",
            project_lessons_learned: 3,
            project_sup_pirilampo: 100,
            project_pixels_art: 40
        },
        {
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kr7bbJihSM_xy6wW_QjChw-mzxIOa6KhDV9ubblFzQ&s",
            trybe: "CH34",
            student_name: "Karol Melo",
            project_lessons_learned: 500,
            project_sup_pirilampo: 700,
            project_pixels_art: 1000
        },
        {
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kr7bbJihSM_xy6wW_QjChw-mzxIOa6KhDV9ubblFzQ&s",
            trybe: "CH34",
            student_name: "Vânia Lima",
            project_lessons_learned: 10,
            project_sup_pirilampo: 100,
            project_pixels_art: 800
        }
    ]
}

const estudanteSorteado = Math.floor(Math.random() * student34.studentsInfo.length);

const estudante = student34.studentsInfo[estudanteSorteado];

const nome = document.getElementById('name');
nome.innerText = estudante.student_name;

//nome.innerHTML = `<b>${estudante.student_name}`

const notaProjetos = document.getElementsByClassName('gradeProject');
notaProjetos[0].innerText = estudante.project_lessons_learned;
notaProjetos[1].innerText = estudante.project_sup_pirilampo;
notaProjetos[2].innerText = estudante.project_pixels_art;

const foto = document.getElementsByTagName('img');
foto[0].src = estudante.picture;

const resultado = document.querySelector('#results');
const verificarNotas = (estudante) => {
    //console.log(resultado)
    const somaNotas = estudante.project_lessons_learned + 
                      estudante.project_sup_pirilampo +
                      estudante.project_pixels_art;

    if (somaNotas >= 85) {
       return resultado.innerText = 'APROVADO'
    } else {
       return resultado.innerText = 'REPROVADO'
    }
};

resultado.innerText = verificarNotas(estudante);
//resultado.className = verificarNotas(estudante).toLocaleLowerCase();
//console.log(resultado);
resultado.classList.add(verificarNotas(estudante).toLowerCase())

/*
const resultado = document.querySelector('#results');
//console.log(resultado)

const somaNotas = estudante.project_lessons_learned + 
                  estudante.project_sup_pirilampo +
                  estudante.project_pixels_art;

if (somaNotas >= 85) {
    resultado.innerText = 'APROVADO!'
} else {
    resultado.innerText = 'REPROVADO!'
}
*/