export default {
    getRecipesList: getRecipesList,
    saveRecipesList: saveRecipesList,
    saveRecipeByID: saveRecipeByID,
    getRecipeByID: getRecipeByID,
    deleteRecipeByID: deleteRecipeByID
};

var defaultRecipeList = [
    {
        name: 'Chocolate',
        ingredients: ['just chocolate']
    }
];


function getRecipesList() {
    if(this.currentRecipeList)
        return this.currentRecipeList;

    if(!localStorage.getItem('recipes'))
        this.saveRecipesList(defaultRecipeList);

    this.currentRecipeList = JSON.parse(localStorage.getItem('recipes'));
    return this.currentRecipeList;
}

function saveRecipesList(newList) {
    this.currentRecipeList = newList;
    localStorage.setItem('recipes', JSON.stringify(newList));
}

function getRecipeByID(id) {
    var recipe = this.getRecipesList()[id];

    return {
        name: recipe.name,
        ingredients: recipe.ingredients.slice(0)
    };
}

function saveRecipeByID(id, recipe) {
    if(this.getRecipeByID(id)) {
        this.currentRecipeList[id] = recipe;
        this.saveRecipesList(this.getRecipesList());
        return true;
    }
    else
        return false;
}

function deleteRecipeByID(id) {
    if(this.getRecipeByID(id)) {
        this.currentRecipeList.splice(id, 1);
        this.saveRecipesList(this.getRecipesList());
        return true;
    }
    else
        return false;
}