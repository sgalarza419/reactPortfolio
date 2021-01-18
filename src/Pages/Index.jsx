import React from "react";
import smg from "../assets/img/SMG.png"

function Index() {
    return(
        <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="page-header">
                    <h1>About Me</h1>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <img src={smg} alt="Steven Galarza" class="img-thumbnail"/>
                    </div>
                    <div class="col-md-9">
                        <p>
                            Steven Galarza is a web-developer in training who loves connecting with his family
                            and friends; be it playing Dungeons & Dragons or baking bread for them.  He enjoys 
                            learning and sharing new information with the people closest to him.  You can catch
                            him in the mornings preparing for a day of coding by brewing up a cup of coffee.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Index;