import React from 'react';
import './Ninjas.css';

const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjalist = ninjas.map((ninja) => {
    if (ninja.age > 20) {
      return (
        <div className="ninja" key="{ninja.id}">
          <div> {ninja.name}</div>
          <div> {ninja.age}</div>
          <div> {ninja.belt}</div>
          <button
            onClick={() => {
              deleteNinja(ninja.id);
            }}
          >
            Delete Ninja
          </button>
        </div>
      );
    } else {
      return null;
    }
  });
  //console.log(this.props);
  return <div className="ninja-list">{ninjalist}</div>;
};

export default Ninjas;
