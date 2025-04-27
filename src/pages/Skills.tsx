import Card from "../components/Card";
import Technologies from "../components/Technologies";

function Skills() {
    return (
        <Card
            obj={<Technologies />}
            nav='Skills'
            skills={false}
        />
    )
}

export default Skills;