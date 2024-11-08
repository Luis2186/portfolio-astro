        
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as regularIcons from '@fortawesome/free-regular-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';

const allIcons = {
  ...solidIcons,
  ...regularIcons,
  ...brandIcons,
};

export const getAllIcons = (filterIcons=[]) => {

    // Si filterIcons está vacío, retorna todos los iconos
    if (filterIcons.length === 0) {
        return allIcons;
    }

    // Filtra los iconos basándote en filterIcons
    const filteredIcons = Object.keys(allIcons).filter((iconName) => 
        filterIcons.includes(iconName.toLowerCase())
    );

    // Retorna los iconos filtrados
    return filteredIcons.map(iconName => allIcons[iconName]);
}