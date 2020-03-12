 import data from './data/rickandmorty/rickandmorty.js';

//  Fetch trae el objeto dinamico
// fetch('./data/rickandmorty/rickandmorty.json')
//   .then((data) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

//  Filters by gender
export const getCharactersByGender = (gend) => data.results.filter((item) => item.gender === gend);

//  Filters by status
export const getCharactersByStatus = (stat) => data.results.filter((item) => item.status === stat);

//  Filters by species
export const getCharactersBySpecies = (spec) => data.results.filter((item) => item.species === spec);

//  Filters by episode
export const getCharactersByEpisode = (epi) => {
    let chars = data.results.filter(char=>{
      if(typeof char.episode ==="string"){
        return char.episode === epi
      }else{
        return Boolean(char.episode.find(ep => ep===epi))
      }
    })
    return chars;
};
