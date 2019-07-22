let categories = require('./categories');

const resolvers = {
    Query: {
        categories: () => {
            return categories;
        },
    },

    Mutation: {
        addCategory: (root, args) => {
            const newCategory = { id: categories.length + 1, name: args.name };
            (categories||[]).push(newCategory);
            return newCategory;
        },

        deleteCategory: (root, args) => {
            let name = args.name;
            categories = categories.filter(category => category.name !== name)
            return categories.filter(category => category.name !== name)[0];
        },

        addKeyWordToCategory: (root, args) => {
            const { categoryName, keyword } = args;
            categories = categories.map(category => {
                if (category.name === categoryName) {
                    let keywords = category.keywords||[];
                    keywords.push(keyword);
                    category.keywords = keywords;
                    return category;
                }
                return category
            });
            return categories;
        },

        deleteKeyWordFromCatgory: (root, args) => {
            const { categoryName, keyword } = args;
            categories = categories.map(category => {
                if (category.name === categoryName) {
                    let keywords = category.keywords||[];
                    var index = keywords.indexOf(keyword);
                    if (index > -1) {
                        keywords.splice(index, 1);
                    }
                    category.keywords = keywords;
                    return category;
                }
                return category
            });
            return categories
        }
    },
};
module.exports = resolvers;