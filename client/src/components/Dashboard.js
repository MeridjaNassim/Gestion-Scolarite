import React  from "react"; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import EnsDash from "./EnsDash";
import ThesDash from "./ThesDash";
import esiLOGO from '../assets/esi.png';

function Dashboard(){

    return (
        <Router>
        <div className="DashBoard">
                <section className="LeftDr">
                <img src={esiLOGO} alt="Scolarité" />
                <h2>Outils <br />Scolarité</h2>
                <section className="LinksContainer">
                        
                        <Link to={'/Dash/Ens'} > Modifier Enseignant </Link>
                        <Link to={'/Dash/These'} > Ajouter un mémoire</Link>
                        <Link>Fonctionalité 3</Link>
                        <Link>Fonctionalité 4</Link>
                        <Link>Fonctionalité 5</Link>
                </section>
            </section>
            <section className="TopDraw">
                <div className="infoLogin">
                    <h3 id="Username">Nom d'utilisateur</h3>
                    <button>se deconnecter</button>
                </div>
                <h2>Dashboard</h2>
            </section>
            <div className="mainContainer">
                <Switch>
                        <Route exact path='/Dash/Ens' component={EnsDash} />
                        <Route path='/Dash/These' component={ThesDash} />
                </Switch>
            </div>
            </div>
        </Router>
    );
}

export default Dashboard ;