export const colours = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };

export function getBackgroundByColour(primaryTypeName) {
    return colours[primaryTypeName];
  }

export function getColourGradient(primaryTypeName,secondaryTypeName){
    const primaryColor = colours[primaryTypeName];
    const secondaryColor = colours[secondaryTypeName];

    const colorRGB1 = hexToRgb(primaryColor);
    const colorRGB2 = hexToRgb(secondaryColor);
    
    return `linear-gradient(30deg, rgba(${colorRGB1.r},${colorRGB1.g},${colorRGB1.b},1) 25%, rgba(${colorRGB2.r},${colorRGB2.g},${colorRGB2.b},1) 75%)`;
  }

  function hexToRgb(hex){
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }


