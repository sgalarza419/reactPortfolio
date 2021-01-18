import {useState} from "react";
import {Card} from "react-bootstrap";
const Portfolio = () => {
    const [projects, setProjects] = useState([
        {
            title: 'Horiseon',
            body: `This project helped me to understand the importance of code syntax and organization. I consolidated the
            CSS file and added classes to the HTML file to make it clearer for user to understand and easier
            to read.`,
            image: '../assets/img/Horiseon.PNG',
            link: 'https://sgalarza419.github.io/codeRefractor/',
            id: 1
        },
        {
            title: 'Random Password Generator',
            body: `A user is given a randomly generated password based on selected criteria. This
            project taught me the importance
            of else if statements when selecting between multiple user input. I also learned how to change
            and impliment arrays using multiple methods.`,
            image: '../assets/img/Random Password.PNG',
            link: 'https://sgalarza419.github.io/randomPassword/',
            id: 2
        },
        {
            title: 'Video Game Quiz',
            body: `Test your knowledge on the video game industry in this challenging quiz. I
            learned how to impliment an incremental timer and the importance of local storage.`,
            image: '../assets/img/Java Quiz.PNG',
            link: 'https://sgalarza419.github.io/JavaScriptQuiz/',
            id: 3
        },
        {
            title: 'Work Day Scheduler',
            body: `Need to organize your work day? In this website you can input work activities
            based on the hour of work. I learned how to use moment to keep track of the current time. I used
            moment to change the color of a note background based on the time and local storage to keep
            daily inputs when the page is refreshed.`,
            image: '../assets/img/Work Day Planner.PNG',
            link: 'https://sgalarza419.github.io/workCalendar/',
            id: 4
        },
        {
            title: 'Weather Dashboard',
            body: `Need to find today or the five day forecast? Use this website to get the
            weather of cities from around the world. The use of multiple APIs and local storage the website
            comes alive! Try it out and check the weather in your area today.`,
            image: '../assets/img/Weather Dashboard.PNG',
            link: 'https://sgalarza419.github.io/weatherPanel/',
            id: 5
        },
        {
            title: 'Spice It Up!',
            body: `In this app you will combat boredom by selecting an activity to randomly be
            generated. You can save your newly inspired venture for another day if the weather doesn't
            permit.`,
            image: '../assets/img/Weather Spice It Up!.PNG',
            link: 'https://dspark8916.github.io/Project1Group2/',
            id: 6
        }
    ])

    return ( 
<div className="card">
{projects.map((project) => (
<Card style={{ width: '18rem' }} key={projects.id}>
  <Card.Img variant="top" src={projects.image} />
  <Card.Body>
    <Card.Title>{projects.title}</Card.Title>
    <Card.Text>
    {projects.body}
    </Card.Text>
    <Card.Link href={projects.link}>{projects.title}</Card.Link>
  </Card.Body>
</Card>
))}
</div>
    )
}

export default Portfolio;