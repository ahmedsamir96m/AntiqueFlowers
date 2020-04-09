import bouquets from "./bouquetsData";
import {getSiblings} from '../index';

// Shuffle Packages Based on the clicked tag
export default function packgesShuffle(packagesTagsArray, bouquetsArray) {
  // return the list of tags classes 
  let tagNames = ['all-results', 'mothers-day', 'valentines-day', 'weddings-bouquets']; 
  // Looping through tags array & check if the tag node contains class equals to a tag of the array tags 
  // then display the packages that are tagged with the same tag to block & all other packages to none 
  packagesTagsArray.forEach(tag => {
    tag.classList.remove('active');

    tag.addEventListener('click', e => {
      for(let i = 0; i < tagNames.length; i++) {
        if(tag.classList.item('') === tagNames[i]) {
          const tagSiblings = getSiblings(tag);
          tagSiblings.forEach(sibling => {
            sibling.classList.remove('active')
          })
          tag.classList.add('active');
          bouquetsArray.forEach(bouquet => {
            if(bouquet.classList.contains(tagNames[i])) {
              bouquet.style.display = 'block';
            } else {
              bouquet.style.display = 'none';
            }
          })
        }
      }
    })
  });
  
};
