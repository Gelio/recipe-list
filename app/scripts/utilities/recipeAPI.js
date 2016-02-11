export default {
    getRecipesList: getRecipesList,
    saveRecipesList: saveRecipesList,
    getRecipeByID: getRecipeByID
};

var defaultRecipeList = [
    {
        name: 'Chocolate',
        ingredients: 'just chocolate'
    }
];


function getRecipesList() {
    if(this.currentRecipeList)
        return this.currentRecipeList;

    if(!localStorage.getItem('recipes'))
        this.saveRecipesList(defaultRecipeList);

    return JSON.parse(localStorage.getItem('recipes'));
}

function saveRecipesList(newList) {
    this.currentRecipeList = newList;
    localStorage.setItem('recipes', JSON.stringify(newList));
}

function getRecipeByID(id) {
    return this.getRecipesList()[id];
}