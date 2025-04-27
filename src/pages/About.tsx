import Card from '../components/Card';

function About() {

    const bioContent = `Olá, sou Otávio Lima, um jovem de 14 anos com grande interesse por programação.<br/>
                        Há 2 anos, venho me dedicando a aprender mais sobre desenvolvimento de software, e continuo me aprimorando com cursos de inglês na InFlux e cursos na Alura.<br/>
                        Minha missão é transformar ideias em soluções tecnológicas e, com cada projeto, me tornar um desenvolvedor cada vez mais capacitado.`;

    return (
            <Card 
                obj={<span dangerouslySetInnerHTML={{ __html: bioContent }} />}
                nav='Biografia'
                skills={true}
            />
    )
}

export default About;