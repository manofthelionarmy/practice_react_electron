import React from 'react';

import styles from './HobbiesList.css';
import Add from '@material-ui/icons/Add';

import HobbyContainer from '../../containers/hobbies/HobbyContainer';

class HobbiesList extends React.Component {

    render() {

        const hobbies = this.props.hobbies;

        const listItems = hobbies.map((h) => {
          return <HobbyContainer
                key={h.id}
                _id={h.id}
                name={h.name}
                hobby={h.hobby}
          />
        })

        return (
            <div className={styles.list}>
                <h1>Hobbies List
                    <span>
                        <button onClick={() => this.props.addItem({name: '', hobby: ''})}>
                            <Add />
                        </button>
                    </span>
                </h1>
                <ul>
                  {listItems}
                </ul>
            </div>
        )
    }
}

export default HobbiesList;
